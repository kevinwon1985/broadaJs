/**
 * 模块说明
 * @module UserStore
 * @author wangwk
 * @version 2012112001
 * @requires jslib/ember.rest
 */
define(function (require, exports, module) {
    require('jslib/ember.rest');

    return Ember.Resource.extend({
        resourceUrl:        '../data/grid.json',
        resourceName:       'users',
        resourceProperties: ['first_name', 'last_name']
    });
});