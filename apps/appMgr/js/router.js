/**
 * 路由器
 * @module Router
 * @author wangwk
 * @version 2013010501
 */

define(function(require, exports, module) {
    "use strict";

    return Em.Router.extend({
        root: Em.Route.extend({
            index: Em.Route.extend({
                route: '/',
                connectOutlets: function(router) {
                    var appController = router.get('applicationController');
                    console.dir(appController)
                }
            }),

            app: Em.Route.extend({
                route: '/app/:appname',
                connectOutlets: function(router, params) {
                    var appController = router.get('applicationController');
                    appController.startApp(params.appname);
                }
            })
        })
    });
});