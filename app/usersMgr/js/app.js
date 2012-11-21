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

        var Router = require('router'),
            Grid = require('jslib/broada/bsview/grid');

		var App = Em.Application.create({
            VERSION: '1.0',
            ApplicationView: Em.View.extend({
                didInsertElement: function(){

                    $('#sidenav').affix({
                        offset:{
                            top:0
                        }
                    });
                }
            }),
            Grid: Grid.extend({
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
                ],
                content: [
                    {
                        "id": "1",
                        "username": "顶级管理员",
                        "account": "admin",
                        "telephoneNum": "",
                        "mobilePhoneNum": "",
                        "email": "",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "2",
                        "username": "顶级审计员",
                        "account": "auditor",
                        "telephoneNum": "",
                        "mobilePhoneNum": "",
                        "email": "",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "3",
                        "username": "顶级安全员",
                        "account": "secman",
                        "telephoneNum": "",
                        "mobilePhoneNum": "",
                        "email": "",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "4",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "5",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "6",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "7",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "8",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "9",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "10",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "11",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "12",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "13",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "14",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "15",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "16",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "17",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "失效"
                    },
                    {
                        "id": "18",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "失效"
                    },
                    {
                        "id": "19",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    },
                    {
                        "id": "20",
                        "username": "demo",
                        "account": "demo",
                        "telephoneNum": "057112345678",
                        "mobilePhoneNum": "15912345678",
                        "email": "15912345678@qq.com",
                        "ywdw": "顶级业务单位",
                        "department": "默认机构",
                        "position": "",
                        "status": "正常"
                    }
                ]
            })
            //todo: 封装grid模板
        });
		return window.UserMgr = App;
	}
);
