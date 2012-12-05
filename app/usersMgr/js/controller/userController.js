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
        //todo: 完成表单保存功能
        isEditing: false,
        formTitle: function(){
            if(this.isEditing){
                return "编辑用户";
            }else{
                return "新建用户";
            }
        }.property("isEditing"),
        loadFromRemote: function(id){
            var user = UserStore.create({id: id});
            this.set("content", user);
            return user.findResource().fail(function(){
                alert("没找到该用户")
            });
        },
        backToList: function(e){
            this.namespace.router.transitionTo('root.index');
        }
    });
});