// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  extends: 'airbnb-base',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // check if imports actually resolve
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'build/webpack.base.conf.js'
      }
    }
  },
  // add your custom rules here
  'rules': {
    'global-require': 0,

    'import/first': 0,

    'no-param-reassign': 0,
    'no-multi-assign': 0,

    // don't require .vue extension when importing
    'import/extensions': ['error', 'always', {
      'js': 'never',
      'vue': 'never'
    }],
    // allow nameless functions 
    'func-names': ["error", "never"],
    // allow console messages
    'no-console': ["error", { allow: ["log", "warn", "error"] }],
    // allow variable shadows for specified variables
    "no-shadow": ["error", { "allow": ["state", "getters", "rootState"] }],
    // allow unary operators in the afterthough
    "allowForLoopAfterthoughts": 0,
    // Arrow body style
    "arrow-body-style": ["error", "as-needed"],
    // allow + operator concatenation
    "prefer-template": 0,
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      'optionalDependencies': ['test/unit/index.js']
    }],
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
