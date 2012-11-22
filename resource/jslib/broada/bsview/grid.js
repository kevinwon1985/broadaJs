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
     * 用于在模板的嵌套each中，把一个each中的属性值当另外一个each的属性名来获取值。
     * 例如：
     * {{#each record in view.content}}
     *      {{#each col in view.heads}}
     *          {{getValueInNestEach record col.mapping}}
     *      {{/each}}
     * {{/each}}
     * 跟下面js语句原理类似
     * for( a in obj1 ){
     *     for( b in obj2 ){
     *         var v = obj1[b]
     *     }
     * }
     * 将返回v的值
     * @method getValueInNestEach
     * @for Ember.Handlebars.helpers
     * @param rootpath {String}
     * @param path {String}
     */
    var normalizePath = Ember.Handlebars.normalizePath,
        HandlebarsGet = Ember.Handlebars.get;
    Ember.Handlebars.registerHelper('getValueInNestEach', function(rootpath, path, options) {
        Ember.assert("参数错误，调用格式：{{getValueInNestEach targetObject col.mapping}}",
            arguments.length == 3);

        var path = HandlebarsGet(path, path, options),
            root = HandlebarsGet(rootpath, rootpath, options);

        return root[path];
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