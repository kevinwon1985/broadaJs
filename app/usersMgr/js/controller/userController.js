/**
 * 用户详细视图控制器
 * @module UserController
 * @author wangwk
 * @version 2012120301
 * @requires model/userStore
 */
define(function (require, exports, module) {
    var UserStore = require('model/userStore');

    return Ember.ObjectController.extend({
        loadFromRemote: function(id){
            var user = UserStore.create({id: id});
            return user.findResource();
        },
        backToList: function(e){
            this.namespace.router.transitionTo('root.index');
        }
    });
});