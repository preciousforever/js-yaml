'use strict';

/*eslint-disable no-console*/

var assert = require('assert');
var yaml = require('../../');
var TEST_SCHEMA = require('../support/schema.js').TEST_SCHEMA;

test('dumper should output shorthand tags for local types', function () {
  var input = 'number: !tag2 \'10\'\n';
  var result = yaml.load(input, { schema: TEST_SCHEMA });
  var dump = yaml.dump(result, {
    schema: TEST_SCHEMA,
    shorthandTags: true
  });

  assert.equal(dump, input);
});

