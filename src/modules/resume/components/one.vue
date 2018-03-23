
<script>
import jsPDF from 'jspdf';
// import * as rasterizeHTML from 'rasterizehtml';

// eslint-disable-next-line
const one = require('html-loader!./one.html');

export default {
  data() {
    return {
      one,
    };
  },
  description: 'The very 1st sample of a resume',
  methods: {
    printResume() {
      // eslint-disable-next-line
      // const doc = new jsPDF();
      // const canvas = document.getElementById('creatorContainer');
      // rasterizeHTML.drawHTML(this.$refs.creatorContent, canvas);
      // doc.addHTML(canvas, 10, 10);
      // doc.save('SampleResume.pdf');
      const margins = {
        top: 15,
        bottom: 10,
        left: 10,
        width: 550,
      };

      const headerFooterFormatting = (doc) => {
        const totalPages = doc.internal.getNumberOfPages();

        // eslint-disable-next-line
        for(let i = totalPages; i >= 1; i--) {
          doc.setPage(i);
          // header(doc);
          // footer(doc, i, totalPages);
        }
      };

      // eslint-disable-next-line
      const pdf = new jsPDF('p', 'pt', 'a4');
      pdf.setFontSize(10);
      pdf.fromHTML(this.$refs.creatorContent,
        margins.left,
        margins.top,
        {
          // width: margins.width,
        }, () => {
          headerFooterFormatting(pdf);
        },
        margins);
      pdf.save('SampleResume.pdf');
    },
  },
};
</script>

<template>
  <v-max-layout>
    <v-container>
      <v-layout row wrap>
        <v-flex xs12 lg12>
          <v-card-text>
            <v-btn primary @click="printResume"> Print Resume </v-btn>

            <div v-html="one"></div>




            <div id="previewAndCustomize" class="section-content" style="" data-section="preview">
    <div class="section-content__wrapp">

        <div class="c-document" id="creatorContainer" style="width: 600px; height: 1190px;">
            <div class="c-document__content" id="creatorContent" ref="creatorContent" style="transform: scale(0.85); height: 1190px;">      <div class="page fFamilyTxtRobotoCondensed fStyleH1Bold fStyleH1LastBold fStyleH3Bold fStyleH5Bold fStylePersonalTitleBold pagePaddingTop30 pagePaddingRight30 pagePaddingBottom30 pagePaddingLeft30 secSpace20 colSpace20 lineHeight-2 fSizeH1-2 fSizeH2-2 fSizeH3-2 fSizeH4-2 fSizeH5-2 fSizeH6-2 fSizeText-2 fSizeDate-2 fSizeSkillDesc-2 fSizePersonalTitle-2 fSizePersonalText-2 fSizeHeader-2 fSizeFooter-2 hasFooterTrue pageSplitted" data-template="6" data-id="b13020be-e282-430c-b9a2-7fc4ffcb0144" data-user-id="1716780" data-colorset="248" data-language="en_EN" data-type="cv" data-name="My resume" data-first-name="Daniel" data-last-name="Mburu"><div class="dRow firstRow lastRow" style="height: 1400px;"><div class="dCol secTitMarginBottom10 secAccIcoCircle colSpecialLineOn colSpecialBorderPrimoOn dateLinesDouble dateSeparatorDash dateStickSeparatorFrom colorTxtMediumBlack3 colorNameDarkSilver2 colorLastNameDarkSilver2 colorPositionDarkSilver2 colorImgBrdDarkSilver2 colorImgBgDarkSilver2 colorSecTitDarkSilver2 colorSecTitBgWhite3 colorSecTitBrdLightSilver3 colorSecLineLightSilver3 colorSecPointDarkSilver2 colorSecPointShadowDarkSilver1 colorEntTitMediumBlack3 colorEntSubMediumBlack3 colorEntBoldMediumBlack3 colorEntIcoWhite3 colorEntIcoBgDarkSilver3 colorIcoWhite3 colorIcoBgDarkSilver3 colorRatOnDarkSilver3 colorRatOffLightSilver3 colorRatAddDarkSilver3 colorBgWhite3 colorBgHfWhite3 colorDateMediumBlack3 colorDateBgDarkSilver2 firstCol" style="width: 69%; height: 1400px;"><div class="section sectionType1 sectionBasic secType1AccCircle secSpecialLineOff fStyleH1Bold fStyleH1LastBold existingSection">
    <div class="entry existingEntry">
      <div class="secType1Acc">
        <div class="secType1AccInitials">dm</div>
      </div>
      <div class="secType1Container">
        <h1>
          <span class="firstname">Daniel</span>
          <span class="lastname">Mburu</span>
        </h1>
        <h2>Software Engineer</h2>
      </div>
    </div>
  </div><div class="section sectionType4 sectionSummary icoEducation secSpecialLineFirst existingSection">
    <h3 class="title"><span class="ico"></span><span class="txt">Professional Profile</span></h3>
    <div class="entryContainer content"><div class="entry existingEntry">
        <div class="pointer" style="top: 0.5rem; left: -38px;"></div>
        <div class="text desc"><p>I am a highly-motivated and results orientated Application Programmer, practiced in the design and&nbsp;<span>implementation of socioeconomic development, capacity building and technical assistance programs in both&nbsp;</span><span>mobile and web-based applications.&nbsp;</span></p>

<p></p></div>
      </div></div>
  </div><div class="section sectionType6 sectionExperience existingSection">
    <h3 class="title"><span class="ico"></span><span class="txt">Experience</span></h3>
    <div class="entryContainer"><div class="entry existingEntry" data-date-from-year="" data-date-from-month="" data-date-to-year="" data-date-to-month="" style="min-height: 38px;">
        <div class="pointer" style="top: 0.8rem; left: -38px;"></div>
        <div class="dates" style="margin-top: 2px;">          <span class="dateFrom">Jun 2017</span>
          <span class="dateSeparator"></span>
          <span class="dateTo">present</span>
        </div>
        <div class="content">
          <h5 class="title"><p>Tech Lead: Frontend</p>

<p></p></h5>
          <h6 class="subtitle"><p>Touch Inspiration</p></h6>
          <div class="text desc"><ul><li>Lead the frond-end development team to ensure that all software products match up with the state of the art in implementation of visual and interactive elements and as well meet the client specifications and expectations.<br></li><li>Support, maintenance and enhancement of the Continuous Integration / Continuous Delivery (CI/CD) of the aforementioned products.<br></li><li>Products managed leverage some of the most competitive mobile (Android &amp; iOS) and Web-based technologies. Among the technologies used include: Pure JavaScript, Native Script (Android &amp; iOS), VueJS, ReactJS, ReactNative, Digital Ocean, Amazon AWS, and Docker among others.<br></li></ul>

<p></p></div>
        </div>
      </div><div class="entry existingEntry" data-date-from-year="" data-date-from-month="" data-date-to-year="" data-date-to-month="" style="min-height: 38px;">
        <div class="pointer" style="top: 0.8rem; left: -38px;"></div>
        <div class="dates" style="margin-top: 2px;">          <span class="dateFrom">Apr 2017</span>
          <span class="dateSeparator"></span>
          <span class="dateTo">Jun 2017</span>
        </div>
        <div class="content">
          <h5 class="title"><p>Full Stack Web Developer</p>

<p></p></h5>
          <h6 class="subtitle"><p>Freelance&nbsp;</p>

<p></p></h6>
          <div class="text desc"><ul><li>Development and deployment of web-based applications for proprietary clients.<br></li><li>Used PHP(Laravel) and Python(Django) as the primary development languages.&nbsp;<br></li></ul>

<p></p></div>
        </div>
      </div><div class="entry existingEntry" data-date-from-year="" data-date-from-month="" data-date-to-year="" data-date-to-month="" style="min-height: 38px;">
        <div class="pointer" style="top: 0.8rem; left: -38px;"></div>
        <div class="dates" style="margin-top: 2px;">          <span class="dateFrom">May 2016</span>
          <span class="dateSeparator"></span>
          <span class="dateTo">Apr 2017</span>
        </div>
        <div class="content">
          <h5 class="title"><p>Software Engineer</p>

<p></p></h5>
          <h6 class="subtitle"><p>Cytonn Investments</p>

<p></p></h6>
          <div class="text desc"><ul><li>Tasked with design implementation and development of in-house systems such as Client Relationship and Investment Management System, Recruitment Portal, and Company website among others.<br></li><li>Technologies used include OOP PHP, Laravel, Pure JavaScript, AngularJS, VueJS, Vagrant, Nginx, Homestead, Forge, Fort Rabbit, PgSQL, and MySQL among others.<br></li><li>Included as part of the management team where I managed a&nbsp;Software Engineers internship class of 7 persons.<br></li></ul>

<p></p></div>
        </div>
      </div><div class="entry existingEntry" data-date-from-year="" data-date-from-month="" data-date-to-year="" data-date-to-month="" style="min-height: 38px;">
        <div class="pointer" style="top: 0.8rem; left: -38px;"></div>
        <div class="dates" style="margin-top: 2px;">          <span class="dateFrom">May 2015</span>
          <span class="dateSeparator"></span>
          <span class="dateTo">Aug 2015</span>
        </div>
        <div class="content">
          <h5 class="title"><p>Telecommunication and Support Services Intern</p>

<p></p></h5>
          <h6 class="subtitle"><p>Kenya Civil Aviation Authority (KCAA)</p>

<p></p></h6>
          <div class="text desc"><ul><li>Assembly, configure, and maintenance of IT equipment including PCs, printers, wireless and LAN network equipment, and PABX phone services among others.</li><li>Provisioning of IT support services to fellow corporate employees</li></ul>

<p></p></div>
        </div>
      </div><div class="entry existingEntry" data-date-from-year="" data-date-from-month="" data-date-to-year="" data-date-to-month="" style="min-height: 38px;">
        <div class="pointer" style="top: 0.8rem; left: -38px;"></div>
        <div class="dates" style="margin-top: 2px;">          <span class="dateFrom">May 2013</span>
          <span class="dateSeparator"></span>
          <span class="dateTo">Aug 2013</span>
        </div>
        <div class="content">
          <h5 class="title"><p>Computer Packages Tutor</p>

<p></p></h5>
          <h6 class="subtitle"><p>High Vision Computer Training College</p>

<p></p></h6>
          <div class="text desc"><p></p>

<ul><li>I taught the Eight Basic Computer Packages where I was able to improve my skills both on sociability and&nbsp;<span>computer literacy.</span><br></li></ul>

<p></p></div>
        </div>
      </div><div class="entry existingEntry" data-date-from-year="" data-date-from-month="" data-date-to-year="" data-date-to-month="" style="min-height: 38px;">
        <div class="pointer" style="top: 0.8rem; left: -38px;"></div>
        <div class="dates" style="margin-top: 2px;">          <span class="dateFrom">Jan 2012</span>
          <span class="dateSeparator"></span>
          <span class="dateTo">Aug 2012</span>
        </div>
        <div class="content">
          <h5 class="title"><p>Peer teacher</p>

<p></p></h5>
          <h6 class="subtitle"><p>Kikapu secondary school&nbsp;</p>

<p></p></h6>
          <div class="text desc"><p></p>

<ul><li>Received first hand mentor-ship on professional training and peer-to-peer mentorship<span>.</span><br></li><li>Taught secondary school curriculum subjects including Mathematics, sciences, and History.<br></li></ul>

<p></p>

<p></p></div>
        </div>
      </div></div>
  </div><div class="section sectionType5 sectionEducation existingSection">
    <h3 class="title"><span class="ico"></span><span class="txt">Education</span></h3>
    <div class="entryContainer"><div class="entry existingEntry" data-date-from-year="" data-date-from-month="" data-date-to-year="" data-date-to-month="" style="min-height: 38px;">
        <div class="pointer" style="top: 0.8rem; left: -38px;"></div>
        <div class="dates" style="margin-top: 2px;">          <span class="dateFrom">Sep 2012</span>
          <span class="dateSeparator"></span>
          <span class="dateTo">May 2016</span>
        </div>
        <div class="content">
          <h5 class="title"><p>Laikipia University</p>

<p></p></h5>
          <div class="text desc"><ul><li>Bachelor's Degree in Computer Science - 2016<br></li><li>Second Class Honors - Upper divission</li></ul>

<p></p></div>
        </div>
      </div></div>
  </div><div class="section sectionType8 sectionCertificates existingSection">
    <h3 class="title"><span class="ico"></span><span class="txt">Certificates</span></h3>
    <div class="entryContainer"><div class="entry existingEntry" data-date-from-year="" data-date-from-month="">
        <div class="pointer" style="top: 0.5rem; left: -38px;"></div>
        <div class="dates dateHideSeparator" style="margin-top: -1px;">         <span class="dateSingle">May 2016</span>
        </div>
        <div class="content">
          <h4 class="descShort"><p>Cisco Certification: Cyber Security</p>

<p></p></h4>
        </div>
      </div><div class="entry existingEntry" data-date-from-year="" data-date-from-month="">
        <div class="pointer" style="top: 0.5rem; left: -38px;"></div>
        <div class="dates dateHideSeparator" style="margin-top: -1px;">         <span class="dateSingle">May 2016</span>
        </div>
        <div class="content">
          <h4 class="descShort"><p>Cisco Certification: IOE</p>

<p></p></h4>
        </div>
      </div><div class="entry existingEntry" data-date-from-year="" data-date-from-month="">
        <div class="pointer" style="top: 0.5rem; left: -38px;"></div>
        <div class="dates dateHideSeparator" style="margin-top: -1px;">         <span class="dateSingle">May 2016</span>
        </div>
        <div class="content">
          <h4 class="descShort"><p>Cisco Certification: A+</p>

<p></p></h4>
        </div>
      </div></div>
  </div></div><div class="dCol secTitMarginBottom10 secAccIcoCircle dateLayoutLine dateSeparatorDash dateStickSeparatorFrom colorTxtMediumBlack3 colorNameDarkSilver2 colorLastNameDarkSilver2 colorPositionDarkSilver2 colorImgBrdDarkSilver2 colorImgBgDarkSilver2 colorSecTitDarkSilver2 colorSecTitBgWhite3 colorSecTitBrdLightSilver3 colorSecLineLightSilver3 colorSecPointDarkSilver2 colorSecPointShadowDarkSilver1 colorEntTitMediumBlack3 colorEntSubMediumBlack3 colorEntBoldMediumBlack3 colorEntIcoWhite3 colorEntIcoBgDarkSilver3 colorIcoWhite3 colorIcoBgDarkSilver3 colorRatOnDarkSilver3 colorRatOffLightSilver3 colorRatAddDarkSilver3 colorBgWhite3 colorBgHfWhite3 colorDateMediumBlack3 colorDateBgDarkSilver2 lastCol" style="width: 31%; height: 1400px;"><div class="section sectionType2 sectionPersonal existingSection">
    <h3 class="title"><span class="ico"></span><span class="txt">Personal Info</span></h3>
    <div class="entryContainer content"><div class="entry personalAddress existingEntry" data-order="1">
  <div class="pointer"></div>
  <div class="ico"></div>
  <h4 class="personalTitle">Address</h4>
  <div class="personalText"><p>P.O. BOX 175,</p>

<p></p>

<p>Njoro,&nbsp;<span>Kenya.</span></p></div>
</div><div class="entry personalPhone existingEntry" data-order="2">
  <div class="pointer"></div>
  <div class="ico"></div>
  <h4 class="personalTitle">Phone</h4>
  <div class="personalText">+254 799 862 659</div>
</div><div class="entry personalEmail entryExample existingEntry" data-order="3">
  <div class="pointer"></div>
  <div class="ico"></div>
  <h4 class="personalTitle">E-mail</h4>
  <div class="personalText"><a href="mailto:danielmburu674@gmail.com" rel="nofollow" target="_blank">danielmburu674@gmail.com</a></div>
</div><div class="entry personalWebsite existingEntry" data-order="194">
  <div class="pointer"></div>
  <div class="ico"></div>
  <h4 class="personalTitle">WWW</h4>
  <div class="personalText"><a href="http://bivestinc.pythonanywhere.com/" target="_blank" rel="nofollow">http://bivestinc.pythonanywhere.com/</a></div>
</div><div class="entry personalCustom icoGithub existingEntry" data-order="199">
  <div class="pointer"></div>
  <div class="ico"></div>
  <h4 class="personalTitle">GitHub</h4>
  <div class="personalText"><a href="https://github.com/Dantiff" target="_blank" rel="nofollow">https://github.com/Dantiff</a></div>
</div><div class="entry personalLinkedin entryExample existingEntry" data-order="202">
  <div class="pointer"></div>
  <div class="ico"></div>
  <h4 class="personalTitle">LinkedIn</h4>
  <div class="personalText"><a href="https://www.linkedin.com/in/carldantif/" target="_blank" rel="nofollow">https://www.linkedin.com/in/carldantif/</a></div>
</div></div>
  </div><div class="section sectionType7 sectionSkills ratingCircle ratingTwoLines existingSection">
    <h3 class="title"><span class="ico"></span><span class="txt">Skills</span></h3>
    <div class="entryContainer content"><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="descShort"><p>Front-End Development</p>

<p></p></h4>
        <div class="rating rating4">          <div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="text descRating">advanced</div>
      </div><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="descShort"><p>Back-End Development</p>

<p></p></h4>
        <div class="rating rating4">          <div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="text descRating"><p>advanced</p>

<p></p></div>
      </div><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="descShort"><p>Database Management</p>

<p></p></h4>
        <div class="rating rating4">          <div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="text descRating"><p>advanced</p>

<p></p></div>
      </div><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="descShort"><p>Dev Ops</p>

<p></p></h4>
        <div class="rating rating3">          <div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="text descRating"><p>Intermediate</p>

<p></p></div>
      </div><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="descShort"><p>Hardware and Network Management</p>

<p></p></h4>
        <div class="rating rating3">          <div></div><div></div><div></div><div></div><div></div>
        </div>
        <div class="text descRating"><p>Intermediate</p>

<p></p></div>
      </div></div>
  </div><div class="section sectionType10 sectionReferences existingSection">
    <h3 class="title"><span class="ico"></span><span class="txt">References</span></h3>
    <div class="entryContainer content"><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="title"><span class="normalText"><p><b>Mr. Mwaruwa Chaka</b></p>

<p></p></span></h4>
        <div class="text desc"><p></p>

<ul><li>mchaka@cytonn.com<br></li><li>+254 738 210 720<br></li><li>Senior Software Engineer/Supervisor<br></li><li>Cytonn Investments.<br></li></ul>

<p></p></div>
      </div><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="title"><span class="normalText"><p><b>Mr. Musonye Felix</b></p>

<p></p></span></h4>
        <div class="text desc"><ul><li>fmusonye@kcaa.co.ke<br></li><li>+254 722 799 423<br></li><li>Senior Telecommunications Officer/Supervisor<br></li><li>Kenya Civil Aviation Authority<br></li></ul>

<p></p></div>
      </div><div class="entry existingEntry">
        <div class="pointer"></div>
        <h4 class="title"><span class="normalText"><p><b>Pastor Njuguna</b></p>

<p></p></span></h4>
        <div class="text desc"><p></p>

<p></p>

<ul><li>+254 722 399200<br></li><li>Pastor and Spiritual Leader<br></li><li>Full Gospel Churches of Kenya,<br></li><li>Njoro.<br></li></ul>

<p></p>

<p></p></div>
      </div></div>
  </div></div></div></div>
    </div>
        </div>
    </div>

    <div class="previewBottomMenu" style="display: block;">
        <div class="l-row">
                        <div class="previewZoom l-row">
                <div class="l-col-xs-2">
                    <div class="circle-icon" id="zoomOutIcon">
                        <div class="circle-icon-content">
                            -
                        </div>
                    </div>
                </div>
                <div class="l-col-xs-8">
                    <div class="tooltip" id="previewZoom" title="Zoom in or zoom out resume preview.">
                        <input type="range" class="o-range o-range--zoom" min="10" max="100" step="5" value="100">
                    </div>
                </div>
                <div class="l-col-xs-2">
                    <div class="circle-icon" id="zoomInIcon">
                        <div class="circle-icon-content">
                            +
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>



          </v-card-text>
        </v-flex>
      </v-layout>
    </v-container>
  </v-max-layout>
</template>
