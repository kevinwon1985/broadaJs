/**
 * 模块说明
 * @module UserStore
 * @author wangwk
 * @version 2012112001
 * @requires jslib/ember.rest
 */
define(function (require, exports, module) {
    require('jslib/ember.rest');

    return Ember.Resource.extend({
        resourceUrl:        'data/users',
        resourceName:       'users',
        resourceProperties:[
            'id',
            'username',
            'account',
            'telephoneNum',
            'mobilePhoneNum',
            'email',
            'ywdw',
            'department',
            'position',
            'status'
        ],
        validate: function() {
            if ( !this.get('username')  ||
                 !this.get('account') ) {
                return '用户名和帐号是必填的';
            }
        },
        isNew: function(){
            return Ember.empty(this._resourceId());
        }
    });
});