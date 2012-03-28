define([
	"jquery",
	"use!backbone",
	"use!underscore",
	"_s",
	"text!./templates/download_dialog.html",
		],
function($, Backbone, _, _s, dd_template){

	var DownloadDialogView = Backbone.View.extend({

		events: {
			"click .download-dialog-launcher .launcher-button": 'onLauncherButtonClick',
			"click .download-dialog-body .close-button": 'onCloseButtonClick',
			'change input[name="restrict-data"]': 'onRestrictionChange',
		},

		initialize: function(){
			this.render();
			this.updateDownloadOptionLinks();
			this.model.on('change:restricted change:restrictions', this.updateDownloadOptionLinks, this);
		},

		render: function(){
			var view_html = _.template(dd_template, {model: this.model.toJSON()});
			$(this.el).html(view_html);
			return this;
		},

		updateDownloadOptionLinks: function(){
			_.each(this.model.get('download_options'), function(download_option){
				var link_selector = _s.sprintf(".download-option-id-%s > .link > a", download_option['id']);
				link_el = $(link_selector, this.el)[0];
				$(link_el).attr('href', download_option.url.call(this.model));
			}, this);
		},
	
		onLauncherButtonClick: function(){
			console.log('launcher click');
			$('.download-dialog-body', this.el).slideDown(200);
		},

		onCloseButtonClick: function(){
			console.log('close button click');
			$('.download-dialog-body', this.el).slideUp(200);
		},

		onRestrictionChange: function(){
			var restricted =  $('input[name="restrict-data"]:checked', this.el).val();
			this.model.set({restricted: (restricted == 'restricted')});
		}

	});

	return DownloadDialogView;
});
		
