/**
 * 用户列表Grid视图控制器
 * @module UsersController
 * @author wangwk
 * @version 2012112301
 * @requires jslib/ember.rest
 */
define(function (require, exports, module) {
    require('jslib/ember.rest');
    var UserStore = require('model/userStore');

    return Em.ResourceController.extend({
        resourceType: UserStore,
        init: function(){
            this._super();
            this.findAll();
        }
    });
});