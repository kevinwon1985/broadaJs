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
        AppController = require('controller/appController');

    var App = Em.Application.create({
        VERSION: '1.0',
        Router: Router,
        ApplicationController: AppController,
        ApplicationView: Em.View.extend({
            person: Ember.Object.create({
                firstName: "Joy",
                lastName: "Clojure"
            }),
            didInsertElement: function(){
                $('#sidenav').affix({
                    offset:{
                        top:0
                    }
                });
            }
        })
    });
    return window.UserMgr = App;
});
