define(
	[
		'router',
		'jslib/jquery',
		'jslib/handlebars',
		'jslib/ember',
        'jslib/bootstrap',
        'jslib/broada/bsview/bsview'
	],
	function(Router) {
		var App = Em.Application.create({
            ApplicationView: Em.View.extend({
                templateName : 'application',
                didInsertElement: function(){

                    $('#sidenav').affix({
                        offset:{
                            top:0
                        }
                    });
                    //parent.appMgr.adjustContentFrameHeight( $(document).height() );
                    //todo:affix失效。affix的原理是监听window.scroll事件。
                    // 上面的设置高度，导致iframe中的window不会有scroll事件。
                }
            })
        });
        App.ready = function(){
            /*Em.bsview.botton.create({
                text:"button",
                type:"btn-warning",
                size: "btn-small",
                disabled: true
            }).appendTo('body');*/

            //Em.bsview.grid.create().appendTo('body');
        };
		return App;
	}
);
