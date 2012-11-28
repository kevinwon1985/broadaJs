/**
 * 用户Grid视图
 * @module UserGrid
 * @author wangwk
 * @version 2012112001
 * @namespace Ember
 * @requires jslib/broada/bsview/grid
 * @requires controller/usersController
 */
define(function (require, exports, module) {
    var Grid = require('jslib/broada/bsview/grid'),
        UsersController = require('controller/usersController');

    return Grid.extend({
        controller: UsersController.create(),
        classNames: ["bj-app-table"],
        isMultiMode: true,
        heads:[
            {
                title:"用户名",
                mapping: "username"
            },
            {
                title:"登录帐号",
                mapping: "account"
            },
            {
                title:"联系电话",
                mapping: "telephoneNum"
            },
            {
                title:"移动电话",
                mapping: "mobilePhoneNum"
            },
            {
                title:"电子邮件",
                mapping: "email"
            },
            {
                title:"业务单位",
                mapping: "ywdw"
            },
            {
                title:"部门",
                mapping: "department"
            },
            {
                title:"职位",
                mapping: "position"
            },
            {
                title:"状态",
                mapping: "status"
            }
        ]
    });
});