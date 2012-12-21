/**
 * 应用 xxx 的入口模块
 * @author wangwk
 * @version 2012112001
 */
define(function (require, exports, module) {
    "use strict";
    require('jslib/handlebars');
    require('jslib/ember');
    require('jslib/bootstrap');
    require('jslib/ember.rest');

    var Router = require('router'),
        AppController = require('controller/appController');

    var App = Em.Application.create({
        VERSION: '1.0',
        Router: Router,
        ApplicationController: AppController,
        ApplicationView: Em.View.extend({
            //todo: 你的应用app的一些配置
        })
    });
    return window.YourAppNamespace = App;
});
