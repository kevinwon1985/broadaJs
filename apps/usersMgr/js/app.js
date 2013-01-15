/**
 * 应用userMgr的入口
 * @author wangwk
 * @version 2012112001
 */
define(function (require, exports, module) {
    "use strict";
    require('jslib/handlebars');
    require('jslib/ember');
    require('jslib/ember.rest');
    require('jslib/bootstrap');
    require('jslib/jqueryui');

    var Router = require('router'),
        AppController = require('controller/appController');

    var App = Em.Application.create({
        VERSION: '1.0',
        Router: Router,
        ApplicationController: AppController,
        ApplicationView: Em.View.extend({
            didInsertElement: function(){
                $( "button.btn, a.btn" )
                    .button()
                    .click(function( event ) {
                        event.preventDefault();
                    });
                $(".ui-buttonset").buttonset();
                $('#sidenav').affix({
                    offset:{
                        top:0
                    }
                });
                $('body').on('click.collapse.data-api', '[data-toggle=collapse]', function (e) {
                    var $this = $(this), href
                        , target = $this.attr('data-target')
                            || e.preventDefault()
                            || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
                        , option = $(target).data('collapse') ? 'toggle' : $this.data()
                    $this[$(target).hasClass('ui-helper-hidden') ? 'addClass' : 'removeClass']('ui-helper-hidden')
                    $(target).toggle("blind")
                });
            }
        })
    });
    return window.UserMgr = App;
});
