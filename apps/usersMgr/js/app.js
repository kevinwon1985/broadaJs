/**
 * 应用userMgr的入口
 * @author wangwk
 * @version 2012112001
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
    return window.UserMgr = App;
});