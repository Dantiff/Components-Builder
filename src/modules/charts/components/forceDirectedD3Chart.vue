
<script>
import Vue from 'vue';
import { mapGetters } from 'vuex';
import * as d3 from 'd3';

const defaultNodes = [
	{ id: 'mammal', group: 0, label: 'Mammals', level: 1 },
	{ id: 'dog', group: 0, label: 'Dogs', level: 2 },
	{ id: 'cat', group: 0, label: 'Cats', level: 2 },
	{ id: 'fox', group: 0, label: 'Foxes', level: 2 },
	{ id: 'elk', group: 0, label: 'Elk', level: 2 },
	{ id: 'insect', group: 1, label: 'Insects', level: 1 },
	{ id: 'ant', group: 1, label: 'Ants', level: 2 },
	{ id: 'bee', group: 1, label: 'Bees', level: 2 },
	{ id: 'fish', group: 2, label: 'Fish', level: 1 },
	{ id: 'carp', group: 2, label: 'Carp', level: 2 },
	{ id: 'pike', group: 2, label: 'Pikes', level: 2 },
];
const defaultLinks = [
	{ target: 'mammal', source: 'dog', strength: 0.7 },
	{ target: 'mammal', source: 'cat', strength: 0.7 },
	{ target: 'mammal', source: 'fox', strength: 0.7 },
	{ target: 'mammal', source: 'elk', strength: 0.7 },
	{ target: 'insect', source: 'ant', strength: 0.7 },
	{ target: 'insect', source: 'bee', strength: 0.7 },
	{ target: 'fish', source: 'carp', strength: 0.7 },
	{ target: 'fish', source: 'pike', strength: 0.7 },
	{ target: 'cat', source: 'elk', strength: 0.1 },
	{ target: 'carp', source: 'ant', strength: 0.1 },
	{ target: 'elk', source: 'bee', strength: 0.1 },
	{ target: 'dog', source: 'cat', strength: 0.1 },
	{ target: 'fox', source: 'ant', strength: 0.1 },
	{ target: 'pike', source: 'cat', strength: 0.1 },
];

let width = window.innerWidth;
let height = window.innerHeight;

// simulation setup with all forces
const linkForce = d3
	.forceLink()
	.id(link => link.id)
	.strength(link => link.strength);
const simulation = d3
	.forceSimulation()
	.force('link', linkForce)
	.force('charge', d3.forceManyBody().strength(-120))
	.force('center', d3.forceCenter(width / 2, height / 2));
const dragDrop = d3
	.drag()
	.on('start', node => {
		node.fx = node.x;
		node.fy = node.y;
	})
	.on('drag', node => {
		simulation.alphaTarget(0.7).restart();
		node.fx = d3.event.x;
		node.fy = d3.event.y;
	})
	.on('end', node => {
		if (!d3.event.active) {
			simulation.alphaTarget(0);
		}
		node.fx = null;
		node.fy = null;
	});
export default {
	data() {
		return {
			baseNodes: [...defaultNodes],
			baseLinks: [...defaultLinks],
			nodes: [...defaultNodes],
			links: [...defaultLinks],
			svg: null,
			width: 400,
			height: 400,
			linkGroup: null,
			nodeGroup: null,
			textGroup: null,
			linkElements: null,
			nodeElements: null,
			textElements: null,
			// we use this reference to select/deselect
			// after clicking the same element twice
			selectedId: null,
		};
	},
	watch: {},
	methods: {
		getNeighbors(node) {
			const { baseLinks } = this;
			return baseLinks.reduce(
				(neighbors, link) => {
					if (link.target.id === node.id) {
						neighbors.push(link.source.id);
					} else if (link.source.id === node.id) {
						neighbors.push(link.target.id);
					}
					return neighbors;
				},
				[node.id]
			);
		},
		isNeighborLink(node, link) {
			return link.target.id === node.id || link.source.id === node.id;
		},
		getNodeColor(node, neighbors) {
			if (Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1) {
				return node.level === 1 ? 'blue' : 'green';
			}
			return node.level === 1 ? 'red' : 'gray';
		},
		getLinkColor(node, link) {
			return this.isNeighborLink(node, link) ? 'green' : '#E5E5E5';
		},
		getTextColor(node, neighbors) {
			return Array.isArray(neighbors) && neighbors.indexOf(node.id) > -1 ? 'green' : 'black';
		},
		// select node is called on every click
		// we either update the data according to the selection
		// or reset the data if the same node is clicked twice
		selectNode(selectedNode) {
			const { selectedId } = this;
			if (selectedId === selectedNode.id) {
				this.selectedId = undefined;
				this.resetData();
				this.updateSimulation();
			} else {
				this.selectedId = selectedNode.id;
				this.updateData(selectedNode);
				this.updateSimulation();
			}
			const neighbors = this.getNeighbors(selectedNode);
			// we modify the styles to highlight selected nodes
			this.nodeElements.attr('fill', node => this.getNodeColor(node, neighbors));
			this.textElements.attr('fill', node => this.getTextColor(node, neighbors));
			this.linkElements.attr('stroke', link => this.getLinkColor(selectedNode, link));
		},
		updateGraph() {
			const { linkGroup, nodeGroup, textGroup } = this;

			// links
			this.linkElements = linkGroup
				.selectAll('line')
				.data(this.links, link => link.target.id + link.source.id);
			this.linkElements.exit().remove();
			const linkEnter = this.linkElements
				.enter()
				.append('line')
				.attr('stroke-width', 1)
				.attr('stroke', 'rgba(50, 50, 50, 0.2)');
			this.linkElements = linkEnter.merge(this.linkElements);
			// nodes
			this.nodeElements = nodeGroup.selectAll('circle').data(this.nodes, node => node.id);
			this.nodeElements.exit().remove();
			const nodeEnter = this.nodeElements
				.enter()
				.append('circle')
				.attr('r', 10)
				.attr('fill', node => (node.level === 1 ? 'red' : 'gray'))
				.call(dragDrop)
				// we link the selectNode method here
				// to update the graph on every click
				.on('click', this.selectNode);
			this.nodeElements = nodeEnter.merge(this.nodeElements);
			// texts
			this.textElements = textGroup.selectAll('text').data(this.nodes, node => node.id);
			this.textElements.exit().remove();
			const textEnter = this.textElements
				.enter()
				.append('text')
				.text(node => node.label)
				.attr('font-size', 15)
				.attr('dx', 15)
				.attr('dy', 4);
			this.textElements = textEnter.merge(this.textElements);
		},
		// diffing and mutating the data
		updateData(selectedNode) {
			const neighbors = this.getNeighbors(selectedNode);
			const newNodes = this.baseNodes.filter(
				node => neighbors.indexOf(node.id) > -1 || node.level === 1
			);
			const diff = {
				removed: this.nodes.filter(node => newNodes.indexOf(node) === -1),
				added: newNodes.filter(node => this.nodes.indexOf(node) === -1),
			};
			diff.removed.forEach(node => {
				this.nodes.splice(this.nodes.indexOf(node), 1);
			});
			diff.added.forEach(node => {
				this.nodes.push(node);
			});
			this.links = this.baseLinks.filter(
				link => link.target.id === selectedNode.id || link.source.id === selectedNode.id
			);
		},
		updateSimulation() {
			this.updateGraph();
			simulation.nodes(this.nodes).on('tick', () => {
				this.nodeElements.attr('cx', node => node.x).attr('cy', node => node.y);
				this.textElements.attr('x', node => node.x).attr('y', node => node.y);
				this.linkElements
					.attr('x1', link => link.source.x)
					.attr('y1', link => link.source.y)
					.attr('x2', link => link.target.x)
					.attr('y2', link => link.target.y);
			});
			console.log('Lets view the linkls', this.links, this.nodes);
			simulation.force('link').links(this.links);
			simulation.alphaTarget(0.7).restart();
		},
		// this helper simple adds all nodes and links
		// that are missing, to recreate the initial state
		resetData() {
			const nodeIds = this.nodes.map(node => node.id);
			this.baseNodes.forEach(node => {
				if (nodeIds.indexOf(node.id) === -1) {
					this.nodes.push(node);
				}
			});
			this.links = [...this.baseLinks];
		},
	},
	mounted() {
		// Adjust svg height width to fit to container
		width = this.$refs.visualContainer.clientWidth;
		height = this.$refs.visualContainer.clientHeight;

		this.svg = d3.select('svg');
		this.svg.attr('width', width).attr('height', height);

		// we use svg groups to logically group the elements together
		this.linkGroup = this.svg.append('g').attr('class', 'links');
		this.nodeGroup = this.svg.append('g').attr('class', 'nodes');
		this.textGroup = this.svg.append('g').attr('class', 'texts');

		// last but not least, we call updateSimulation
		// to trigger the initial render
		Vue.nextTick(() => {
			this.updateSimulation();
		});
	},
};
</script>
<template>
	<v-max-layout>
		<v-container fluid grid-list-md class="chart-index-container">
			<v-layout row wrap>
				<v-flex
					xs12
					pa-0
				>
					<v-card
						class="pa-3 chart-card elevation-1"
					>
						<v-card-text class="pa-0 visual-container" ref="visualContainer">
							<svg></svg>
						</v-card-text>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</v-max-layout>
</template>

<style lang="stylus">
.chart-index-container
	padding 12px 20px
	background-color #ebebe6
	.chart-card
		background-color #ffffff
		margin 15px
		.visual-container
			height 100%
			min-height 78vh

</style>
