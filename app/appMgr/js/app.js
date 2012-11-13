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
                    //Todo: ApplicationView视图DOM插入到文档后执行
                    $('#affix').affix({
                        offset:{
                            top:108
                        }
                    });
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
