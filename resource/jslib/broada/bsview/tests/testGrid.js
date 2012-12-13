/**
 * 测试
 * @module Ember.bsview
 * @class Ember.bsview
 * @author wangwk
 * @version 2012111301
 * @namespace Ember
 * @requires jslib/ember
 * @requires jslib/bootstrap
 */
define(function (require, exports, module) {
        "use strict";
        var Grid = require('jslib/broada/bsview/grid');

        var grid = Grid.create({
            contentBinding: "controller.entries",
            classNames: ["bj-app-table"],
            isMultiMode: true,
            needsPagination: true,
            maxPageLen: 10,
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
        test('grid', function () {
            ok(grid.isMultiMode, '多行模式');
        });

        return exports;
    }
);


