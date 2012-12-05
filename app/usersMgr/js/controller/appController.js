/**
 * 主视图控制器控制器
 * @module AppController
 * @author wangwk
 * @version 2012112301
 * @requires jslib/ember
 */
define(function (require, exports, module) {
    require('jslib/ember');

    return Em.Controller.extend({
        /**
         * 处理删除按钮点击事件
         * @event
         */
        deleteUser: function(e){
            this.namespace.gridController.deleteSelectedUsers();
        },
        /**
         * 处理新建按钮点击事件
         * @event
         */
        gotoAddUser: function(e){
            this.namespace.router.transitionTo('root.users',{userid:"new"});
        },
        /**
         * 处理编辑按钮点击事件
         * @event
         */
        gotoEditUser: function(e){
            var selectedRows = this.namespace.gridController.selectedRows;
            if(selectedRows.length > 0){
                var userResource = selectedRows[0].get( 'content' );
                this.namespace.router.transitionTo(
                    'root.users',
                    {
                        userid: userResource.id,
                        userResource: userResource
                    }
                );
            }
        },
        filterByStatus: function(e){
            console.dir(arguments)
            this.namespace.gridController.set("filterBy", e.target.innerHTML);
            console.log(this.namespace.gridController.get("filterBy"));
            console.dir(this.namespace.gridController.get("entries"));
        }
    });
});