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
        selectedRows: [],
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
        /**
         * 根据状态过滤
         * @function
         */
        filterByStatus: function(status){
            switch (status) {
                case "正常":
                    break;
                case "失败":
                    break;
                default:
                    break;
            }
        },
        resourceType: UserStore,
        init: function(){
            this._super();
            this.findAll();
        }
    });
});