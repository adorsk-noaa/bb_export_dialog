define([
	"jquery",
	"use!backbone",
	"use!underscore",
	"_s",
	"Dialogs",
	"text!./templates/export_dialog_body.html",
		],
function($, Backbone, _, _s, Dialogs, body_template){

	var ExportDialogView = Dialogs.views.ModalDialogView.extend({

		events: {
			'click .dialog-footer .close-button': 'hide'
		},

		initialize: function(){
			Dialogs.views.ModalDialogView.prototype.initialize.call(this, arguments);
			$(this.el).addClass('export-dialog');

			this.updateExportOptionLinks();
			this.model.on('change:restricted change:restrictions', this.updateExportOptionLinks, this);
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

		updateExportOptionLinks: function(){
			_.each(this.model.get('export_options'), function(export_option){
				var link_selector = _s.sprintf(".export-option-id-%s a.linkrow", export_option['id']);
				link_el = $(link_selector, this.el);
				$(link_el).attr('href', export_option.url.call(this.model));
			}, this);
		},

		onRestrictionChange: function(){
			var restricted =  $('input[name="restrict-data"]:checked', this.el).val();
			this.model.set({restricted: (restricted == 'restricted')});
		}

	});

	return ExportDialogView;
});
		
