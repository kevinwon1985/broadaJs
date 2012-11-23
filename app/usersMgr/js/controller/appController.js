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
        clearCompleted: function(){
            console.log("clearCompleted 3")
        }
    });
});