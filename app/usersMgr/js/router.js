/**
 * 应用userMgr的入口
 * @author wangwk
 * @version 2012112001
 */
define(function (require, exports, module) {
    "use strict";
    require('jslib/ember');

    return Ember.Router.extend({
        //enableLogging: true,
        root: Ember.Route.extend({

            index: Ember.Route.extend({
                route: '/',
                connectOutlets: function( router ) {
                    var appController = router.get('applicationController'),
                        gridController = appController.namespace.gridController;

                    require([ 'view/userGrid' ],
                        function ( UserGrid ) {
                            appController.connectOutlet({
                                outletName: "masterView",
                                viewClass:UserGrid,
                                controller:gridController
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
