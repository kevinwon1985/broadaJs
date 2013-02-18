/**
 * 主视图控制器控制器
 * @module AppController
 * @author wangwk
 * @version 2013010501
 */
define(function (require, exports, module) {
	var Profiles = require("model/profiles");

    return Em.ObjectController.extend({
        curAppid: null,

    	appUrl: Ember.computed(function(){
    		var curAppid = this.get("curAppid");
    		return curAppid ? "../"+curAppid : null;
    	}).property( "curAppid" ),

    	init: function(){
    		this._super();
    		var profiles = Profiles.create();
    		profiles.findResource();
    		this.set("content", profiles);
    	},
    	
    	startApp: function(appid){
            this._setActiveSubmenu( this.get("curAppid"), appid );
    		this.set("curAppid", appid);
    	},

        _setActiveSubmenu: function(oldAppid, curAppid){
            if(arguments.length == 0){
                oldAppid = null;
                curAppid = this.get("curAppid");
            }
            if(oldAppid != null){
                $("#submenu_"+oldAppid).removeClass("current");
            }
            if(curAppid != null){
                $("#submenu_"+curAppid).addClass("current");
            }
        }
    });
});