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
        }
    });
});