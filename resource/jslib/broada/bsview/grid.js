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
    var tpl = require('jslib/text!./templates/grid.html');

    /**
     * grid header类，私有的，用于辅助生成grid
     * @class gridHeader
     * @private
     * @param {object} opt 配置对象
     */
    var gridHeader = Em.CollectionView.extend({
        tagName: "thead",
        itemViewClass: gridHeaderTh
    });

    /**
     * grid header的列，私有，用于辅助生成gridheader
     * @class gridHeaderTh
     * @private
     * @param {object} opt 配置对象
     */
    var gridHeaderTh = Em.CollectionView.extend({
        template: Ember.Handlebars.compile(
            '{{#if view.isCheckbox}}'+
                '<input type="checkbox">'+
            '{{else}}'+
                '<th>{{view.title}}</th>'+
            '{{/if}}'
        )
    });
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