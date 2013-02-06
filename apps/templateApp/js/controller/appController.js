/**
 * 主视图控制器控制器
 * @module AppController
 * @author wangwk
 * @version 2012112301
 * @requires jslib/ember
 */
define(function (require, exports, module) {
    return Em.Controller.extend({
		title: "点击我",
		clickme: function(e){
			this.set("title", "这是一个样板应用");
		}
    });
});