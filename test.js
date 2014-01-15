/*global describe, it, beforeEach */

'use strict';
var assert = require('chai').assert;

describe('google-cdn-data', function () {
  beforeEach(function () {
    this.data = require('./index');
  });

  it('should include jquery 2.0.3', function () {
    assert.include(this.data.jquery.versions, '2.0.3');
  });

  it('should build jquery 2.0.3 url', function () {
    assert.equal(this.data.jquery.url('2.0.3'), '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js');
  });

  it('should include angular-resource 1.2.7', function () {
    assert.include(this.data['angular-resource'].versions, '1.2.7');
  });

  it('should build angular-resource 1.2.7 url', function () {
    assert.equal(this.data['angular-resource'].url('1.2.7'), '//ajax.googleapis.com/ajax/libs/angularjs/1.2.7/angular-resource.min.js');
  });
});
