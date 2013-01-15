/**
 * 用户详细视图
 * @module UserForm
 * @author wangwk
 * @version 2012120301
 */
define(function (require, exports, module) {
    var tpl = require('jslib/text!template/userForm.html');

    return Em.View.extend({
        needsPagination: true,
        isEditingBinding: "controller.isEditing",
        classNames: ["container-fluid","bj-form-border"],
        template: Em.Handlebars.compile(tpl),
        didInsertElement: function(){
            this.$( "button.btn, a.btn" )
                .button()
                .click(function( event ) {
                    event.preventDefault();
                });
        }
    });
});