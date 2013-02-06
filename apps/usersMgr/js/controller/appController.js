/**
 * 主视图控制器控制器
 * @module AppController
 * @author wangwk
 * @version 2012112301
 * @requires jslib/ember
 */
define(function (require, exports, module) {
    return Em.Controller.extend({
        queryOpt: {
            mix: null,
            username: null,
            account: null,
            telephoneNum: null,
            mobilePhoneNum: null,
            email: null,
            ywdw: null,
            department: null,
            position: null,
            status: null
        },
        /**
         * 初始化查询参数
         * @private
         */
        _initQueryOpt: function(){
            var opt = this.queryOpt,
                EmSet = Em.set;
            for (var prop in opt) {
                EmSet(opt,prop,null);
            }
        },
        /**
         * 处理快速查询的查询按钮点击事件
         * @event
         */
        simpleQuery: function(){
            this.namespace.router.transitionTo('root.queryUsers',{queryType:"simpleQuery",queryOpt: this.queryOpt});
        },
        /**
         * 处理更多查询选项面板中查询按钮点击事件
         * @event
         */
        queryUsers: function(){
            this.namespace.router.transitionTo('root.queryUsers',{queryType:"queryUsers",queryOpt: this.queryOpt});
        },
        /**
         * 处理更多查询选项面板中取消按钮点击事件
         * @event
         */
        cancelQuery: function(){
            this._initQueryOpt();
        },
        reconfirmDelete: function(){
            var gridCtrl = this.namespace.gridController;
            if(gridCtrl && gridCtrl.get("selectedRows").length != 0){
                $('#myModal').modal('show');
            }
        },
        /**
         * 处理删除按钮点击事件
         * @event
         */
        deleteUser: function(e){
            var gridCtrl = this.namespace.gridController;
            if(gridCtrl){
                gridCtrl.deleteSelectedRows();
                $('#myModal').modal('hide');
            }
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
            var gridCtrl = this.namespace.gridController;
            if(!gridCtrl){
                return;
            }
            var selectedRows = gridCtrl.get("selectedRows");
            if(selectedRows.length > 0){
                var userResource = selectedRows[0];
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
            if(!this.namespace.gridController){
                return;
            }
            this.namespace.gridController.set("filterBy", e.target.innerHTML);
        }
    });
});