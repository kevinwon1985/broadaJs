/**
 * 用户详细视图
 * @module UserForm
 * @author wangwk
 * @version 2012120301
 */
define(function (require, exports, module) {
    var tpl = require('jslib/3rdPart/text!template/userForm.html');

    return Em.View.extend({
        needsPagination: true,
        isEditingBinding: "controller.isEditing",
        classNames: ["container-fluid","bj-form-border"],
        template: Em.Handlebars.compile(tpl)
    });
});