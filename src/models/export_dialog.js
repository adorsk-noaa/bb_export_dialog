define([
	"backbone",
	"underscore",
	"Dialogs"
], 
function(Backbone, _, Dialogs){

var ExportDialogModel = Dialogs.models.DialogModel.extend({


	defaults: _.extend({}, Dialogs.models.DialogModel.prototype.defaults,{
		title: 'Export Data',
		restrictions: {},
		restricted: true,
		export_options: {}
	}),

	initialize: function(){
	}

});

return ExportDialogModel;

});

