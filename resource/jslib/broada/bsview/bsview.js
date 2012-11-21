/**
 * 将bootstrap以ember视图的方式封装成组件
 * @module Ember.bsview
 * @class Ember.bsview
 * @author wangwk
 * @version 2012111301
 * @namespace Ember
 * @requires jslib/ember
 * @requires jslib/bootstrap
 */
define(function (require, exports, module) {
        "use strict";
        require('jslib/ember');
        require('jslib/bootstrap');

        exports = Em.bsview = Em.bsview || {};
        /**
         * button组件
         * @class Botton
         * @namespace Ember.bsview
         * @param {object} opt 配置对象
         */
        exports.Botton = Em.View.extend({
            tagName: "button",
            classNames: ["btn"],
            classNameBindings: ["type","size","disabled"],
            text: "",
            type: "",
            size:"",
            disabled:false,
            template: Em.Handlebars.compile(
                '{{view.text}}'
            )
        });

        return exports;
    }
);