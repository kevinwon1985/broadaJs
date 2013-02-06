/**
 * 应用userMgr的路由配置
 * @author wangwk
 * @version 2012112001
 */
define(function (require, exports, module) {
    "use strict";

    return Ember.Router.extend({
        enableLogging: true,
        root: Ember.Route.extend({
            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function( router ) {
                    //todo: 路径为 / 的时候执行.
                }
            })
        })
    });
});
