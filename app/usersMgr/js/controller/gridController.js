/**
 * 用户列表Grid视图控制器
 * @module UsersController
 * @author wangwk
 * @version 2012112301
 * @requires model/userStore
 */
define(function (require, exports, module) {
    var UserStore = require('model/userStore');

    return Em.ResourceController.extend({
        selectedRows: [],

        /**
         * 根据状态过滤
         * @function
         */
        filterBy: "",
        entries: function(){
            var filter = this.get( "filterBy" );
            switch (filter) {
                case "正常":
                case "失效":
                    return this.get("content").filterProperty("status", filter);
                default:
                    return this.get( "content" );
            }
        }.property( 'filterBy' ),
        /**
         * 删除指定的用户,不会清空已选中行
         * @function
         * @param {Array} users 选中的行视图实例的数组
         */
        deleteUsers: function(users){
            var ctlr = this;
            users.forEach(function(user, i, users){
                var userResource = user.get( 'content' );
                ctlr.removeObject( userResource );
                userResource.destroyResource()
                    .done(function(){
                    })
                    .fail(function(){
                        alert("删除失败");
                    });
            });
        },
        /**
         * 删除选中的用户,会清空已选中行
         * @function
         */
        deleteSelectedUsers: function(){
            this.deleteUsers(this.selectedRows);
            this.selectedRows.length = 0;
        },
        resourceType: UserStore,
        init: function(){
            this._super();
            this.findAll();
        }
    });
});