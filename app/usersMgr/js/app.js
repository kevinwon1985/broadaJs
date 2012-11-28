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
            UserGrid = require('view/UserGrid'),
            AppController = require('controller/appController');

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
            UserGridView: UserGrid
        });
		return window.UserMgr = App;
	}
);
