define(
	[
		'router',
		'jslib/jquery',
		'jslib/handlebars',
		'jslib/ember',
        'jslib/bootstrap'
	],
	function(Router) {
		var App = Em.Application.create({
            ApplicationView: Em.View.extend({
                templateName : 'application',
                didInsertElement: function(){
                    var $window = $(window),
                        $myTab = $('#myTab'),
                        $myTab_a = $myTab.find('a');

                    $myTab_a.on('show', function (e) {
                        //e.target; // activated tab
                        //e.relatedTarget; // previous tab
                        //console.log('show')
                    });
                    $myTab_a.on('shown', function (e) {
                        //e.target; // activated tab
                        //e.relatedTarget; // previous tab
                        //console.log('shown')
                    });
                    $('#affix').affix({
                        offset:{
                            top:108
                        }
                    });
                }
            })
        });
		return App;
	}
);
