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
        deleteUser: function(e){
            //todo: 删除功能
            console.log("deleteUser")
            console.dir(this)
        }
    });
});