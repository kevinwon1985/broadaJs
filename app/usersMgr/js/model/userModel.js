/**
 * 用户模型
 * @module UserModel
 * @author wangwk
 * @version 2012112101
 * @requires jslib/ember
 */
define(function (require, exports, module) {
    require('jslib/ember');

    return Ember.Object.extend({
        id: "new",
        username: "",
        account: "",
        telephoneNum: "",
        mobilePhoneNum: "",
        email: "",
        ywdw: "",
        department: "",
        position: "",
        status: ""
    });
});