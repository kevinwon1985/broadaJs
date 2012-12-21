/**
 * 应用 xxx 的路由配置
 * @author wangwk
 * @version 2012112001
 */
define(function (require, exports, module) {
    "use strict";
    require('jslib/ember');

    return Ember.Router.extend({
        enableLogging: true,
        root: Ember.Route.extend({
            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function( router ) {
					//todo: 该路由下的视图生成
                }
            })
        })
        //todo: 其他路由配置
    });
});
