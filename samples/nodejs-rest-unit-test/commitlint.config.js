module.exports = {
    rules: {
      'references-empty': [2, 'never'],
      'subject-max-length': [2, 'always', 85],
      'subject-case': [2, 'never', ['kebab-case']],
      'type-empty': [2, 'never'],
      'type-enum': [2, 'always', ['ci', 'docs', 'feat', 'fix', 'refactor', 'test']],
    },
    parserPreset: {
      parserOpts: {
        issuePrefixes: ['ST-','FT-'],
      },
    },
  };