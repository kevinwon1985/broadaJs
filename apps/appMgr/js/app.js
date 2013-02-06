/**
 * 应用入口
 * @module AppMgr
 * @author wangwk
 * @version 2013010501
 */
define(function (require, exports, module) {
    "use strict";

	var Router = require('router'),
        AppView = require('view/appView'),
        AppController = require('controller/appController');
	

    var App = Em.Application.create({
        VERSION: '1.0',
        Router: Router,
        ApplicationController: AppController,
        ApplicationView: AppView
    });
	/**
	 * 调整主内容iframe的高度
	 * @method
	 * @param {int} h 高度
	 */
	App.adjustContentFrameHeight = function(h) {
		var $contentFrame = $('#_contentFrame_');
		if ($contentFrame.length>0){
			$contentFrame.height(h);
		}
	};

    return window.AppMgr = App;
});