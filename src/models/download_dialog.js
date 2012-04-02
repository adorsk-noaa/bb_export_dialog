define([
	"use!backbone",
	"use!underscore",
	"Dialogs"
], 
function(Backbone, _, Dialogs){

var DownloadDialogModel = Dialogs.models.DialogModel.extend({


	defaults: _.extend({}, Dialogs.models.DialogModel.prototype.defaults,{
		title: 'Download Data',
		restrictions: {},
		restricted: true,
		download_options: {}
	}),

	initialize: function(){
	}

});

return DownloadDialogModel;

});

