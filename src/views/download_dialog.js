define([
	"jquery",
	"use!backbone",
	"use!underscore",
	"_s",
	"dialogs/views/main",
	"text!./templates/download_dialog_body.html",
		],
function($, Backbone, _, _s, dialogs_views, body_template){

	var DownloadDialogView = dialogs_views.ModalDialogView.extend({

		events: {
			'click .dialog-footer .close-button': 'hide'
		},

		initialize: function(){
			console.log(this.model);
			dialogs_views.ModalDialogView.prototype.initialize.call(this, arguments);
			$('.dialog-container', this.el).addClass('download-dialog');
			this.updateDownloadOptionLinks();
			this.model.on('change:restricted change:restrictions', this.updateDownloadOptionLinks, this);
		},

		renderDialogBody: function(){
			var body_html = _.template(body_template, {model: this.model.toJSON()});
			$('.dialog-body', this.el).html(body_html);
			return this;
		},

		renderDialogFooter: function(){
			var footer_html = '<button class="close-button button">Cancel</button>';
			$('.dialog-footer', this.el).html(footer_html);
			return this;
		},

		updateDownloadOptionLinks: function(){
			_.each(this.model.get('download_options'), function(download_option){
				var link_selector = _s.sprintf(".download-option-id-%s > .link > a", download_option['id']);
				link_el = $(link_selector, this.el)[0];
				$(link_el).attr('href', download_option.url.call(this.model));
			}, this);
		},

		onRestrictionChange: function(){
			var restricted =  $('input[name="restrict-data"]:checked', this.el).val();
			this.model.set({restricted: (restricted == 'restricted')});
		}

	});

	return DownloadDialogView;
});
		
