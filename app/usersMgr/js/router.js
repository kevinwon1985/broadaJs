/**
 * 应用userMgr的入口
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
                connectOutlets: function( router, params ) {
                    console.dir(arguments)
                    var appController = router.get('applicationController');

                    require([ 'controller/gridController', 'view/userGrid' ],
                        function (GridController, UserGrid ) {
                            var gctrl = appController.namespace.gridController = GridController.create();
                            appController.connectOutlet({
                                outletName: "masterView",
                                viewClass:UserGrid,
                                controller:gctrl
                            });
                        }
                    );
                }
            }),

            users: Ember.Route.extend({
                route: '/users/:userid',
                connectOutlets: function( router, params ) {
                    var appController = router.get('applicationController');

                    require([ 'controller/userController', 'view/userForm' ],
                        function (UserController, UserForm) {
                            var userController = UserController.create();
                            userController.set("namespace", appController.namespace);
                            userController.set("isEditing", params.userid != "new");

                            if(!params.userResource && params.userid != "new"){
                                userController.loadFromRemote(params.userid);
                            }
                            appController.connectOutlet({
                                outletName: "masterView",
                                viewClass: UserForm,
                                controller: userController,
                                context: params.userResource
                            });
                        }
                    );
                }
            })
        })
    });
});
