define([
	"use!backbone",
], 
function(Backbone){

var DownloadDialogModel = Backbone.Model.extend({

	defaults: {
		parameters: {},
		download_options: {}
	},

	initialize: function(){
	}

});
return DownloadDialogModel;

});

