/**
 * 用户详细视图控制器
 * @module UserController
 * @author wangwk
 * @version 2012120301
 * @requires model/userStore
 */
define(function (require, exports, module) {
    var UserStore = require('model/userResource');

    return Ember.ObjectController.extend({
        isEditing: false,
        isSending: false,
        formTitle: function(){
            if(this.isEditing){
                return "编辑用户";
            }else{
                return "新建用户";
            }
        }.property("isEditing"),

        /**
         * 从服务端获取制定用户信息
         * @event
         */
        loadFromRemote: function(id){
            var me = this;

            var user = UserStore.create({id: id});
            this.set("content", user);
            return user.findResource()
                .fail(function(){
                    alert("没找到该用户")
                });
        },
        /**
         * 保存用户信息
         * @private
         */
        _save: function(){
            var self = this;
            this.set("isSending", true);
            var userResource = this.get("content");

            return userResource.saveResource()
                .fail(function(msg){
                    self.set("isSending", false);
                })
                .done(function(){
                    self.set("isSending", false);
                });
        },
        /**
         * 处理保存按钮点击事件,保存用户信息,然后返回用户列表界面
         * @event
         */
        save: function(e){
            e.preventDefault();

            var self = this;
            this._save().done(function() {
                if(self.namespace.gridController){
                    self.namespace.gridController.pushObject(userResource);
                }
                self.backToList();
            });
        },
        /**
         * 处理保存并新建按钮点击事件,保存用户信息,并且继续新建
         * @event
         */
        saveAndAdd: function(e){
            var self = this;
            this._save().done(function() {
                var user = UserStore.create();
                self.set("content", user);
            });
        },
        /**
         * 处理取消按钮点击事件,返回用户列表
         * @event
         */
        backToList: function(){
            this.namespace.router.transitionTo('root.index');
        },

        init: function(){
            this._super();
            var user = UserStore.create();
            this.set("content", user);
        }
    });
});