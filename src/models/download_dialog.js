define([
	"use!backbone",
	"use!underscore",
	"dialogs/models/main"
], 
function(Backbone, _, dialogs_models){

var DownloadDialogModel = dialogs_models.DialogModel.extend({


	defaults: _.extend({}, dialogs_models.DialogModel.prototype.defaults,{
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

