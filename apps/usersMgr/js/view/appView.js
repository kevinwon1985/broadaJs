/**
 * 应用主视图
 * @module applicationView
 * @author wangwk
 * @version 2012112001
 */
define(function (require, exports, module) {
    var tpl = require('jslib/3rdPart/text!../template/app.html');

    return Em.View.extend({
        template: Em.Handlebars.compile(tpl)
    });
});