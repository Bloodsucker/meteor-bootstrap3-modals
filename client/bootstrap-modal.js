BModals = {};

var defaultConfig = {
	attached: null,
	classes: 'fade',
	size: null,
	modalOptions: null
};

BModals.showNew = function(contentTemplateName, data, options) {
	var config = _.extend({}, defaultConfig, options);

	var newModalTemplate = Blaze.renderWithData(Template._bootstrapmodal, {
		contentTemplateName: contentTemplateName,
		config: config,
		data: data
	}, document.body);

	var newBModal = new BModal(newModalTemplate, config.modalOptions);

	if (config.attached) {
		newBModal.attached = true;
		config.attached.view.onViewDestroyed(function () {
			newBModal.attached = false;
			newBModal.destroy();
		});
	}

	return newBModal;
}

function BModal(modalView, modalOptions) {
	var self = this;

	self._v = modalView;
	self._visible = false;
	self.attached = false;

	self
		.on('hidden', function() {
			self._visible = false;
			Blaze.remove(self._v);
		})
		.on('show', function () {
			self._visible = true;
		});

	self._v._domrange.$('.modal').modal(modalOptions);
}

BModal.prototype.on = function(eventName, cb) {
	var self = this;

	var bsEventName = eventName + '.bs.modal';

	self._v._domrange.$('.modal').on(bsEventName, cb);

	return self;
}

BModal.prototype.destroy = function() {
	var self = this;

	if(!self._visible) return;

	self._v._domrange.$('.modal').modal('hide');
}