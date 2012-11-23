/**
 * grid组件。以bootstrap的table为基础样式
 * @module Ember.bsview.grid
 * @author wangwk
 * @version 2012112001
 * @namespace Ember
 * @requires jslib/ember
 * @requires jslib/bootstrap
 */
define(function (require, exports, module) {
    "use strict";
    require('jslib/ember');
    require('jslib/bootstrap');
    require('jslib/broada/EmHbHelpers/getValueInNestEach');

    var tpl = require('jslib/text!./templates/grid.html');

    /**
     * grid组件
     * @class Ember.bsview.grid
     * @param {object} opt 配置对象
     */
    return Em.View.extend({
        template: Ember.Handlebars.compile(tpl),
        isMultiMode: false
    });
});