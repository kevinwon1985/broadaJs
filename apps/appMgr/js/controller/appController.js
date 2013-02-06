/**
 * 主视图控制器控制器
 * @module AppController
 * @author wangwk
 * @version 2013010501
 */
define(function (require, exports, module) {
	var Profiles = require("model/profiles");

    return Em.ObjectController.extend({
    	appUrl: Ember.computed(function(){
    		var curAppid = this.get("curAppid");
    		return "../"+curAppid;
    	}).property( "curAppid" ),

    	curAppid: "",

    	init: function(){
    		this._super();
    		var profiles = Profiles.create();
    		profiles.findResource();
    		this.set("content", profiles);
    	},
    	
    	startApp: function(appid){
    		this.set("curAppid", appid);
    	}
    });
});