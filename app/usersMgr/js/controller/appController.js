/**
 * 主视图控制器控制器
 * @module AppController
 * @author wangwk
 * @version 2012112101
 * @requires jslib/ember
 */
define(function () {
    require('jslib/ember');
    return Ember.ArrayProxy.extend({
        store: null,
        content: [],
        init: function() {
            this._super();
            //todo:初始化的时候获取数据
        }
    });
});