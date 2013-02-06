/**
 * 模块说明
 * @module Profiles
 * @author wangwk
 * @version 2013010501
 */
define(function (require, exports, module) {
    return Ember.Resource.extend({
        resourceUrl:        'data/profiles.json',
        resourceName:       'profiles',
        resourceProperties:[
            'username',
            'appgroup'
        ]
    });
});