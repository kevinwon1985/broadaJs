/**
 * 应用userMgr的入口
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
        AppController = require('controller/appController'),
        GridController = require('controller/gridController');

    var gridController = GridController.create();

    var App = Em.Application.create({
        VERSION: '1.0',
        Router: Router,
        ApplicationController: AppController,
        ApplicationView: Em.View.extend({
            didInsertElement: function(){
                $('#sidenav').affix({
                    offset:{
                        top:0
                    }
                });
            }
        }),
        gridController: gridController
    });
    return window.UserMgr = App;
});
