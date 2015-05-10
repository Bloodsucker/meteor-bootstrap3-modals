BModals = {};

var defaultConfig = {
	attached: null
};

BModals.showNew = function(contentTemplateName, data, options) {
	var config = _.extend({}, defaultConfig, options);

	var newModalTemplate = Blaze.renderWithData(Template._bootstrapmodal, {
		contentTemplateName: contentTemplateName,
		data: data
	}, document.body);

	var newBModal = new BModalInstance(newModalTemplate);

	if (config.attached) {
		config.attached.view.onViewDestroyed(function () {
			newBModal.destroy();
		});
	}

	return newBModal;
}

function BModalInstance(modalView) {
	var self = this;

	self._v = modalView;
	self._visible = false;

	self
		.on('hidden', function() {
			self._visible = false;
			Blaze.remove(self._v);
		})
		.on('show', function () {
			self._visible = true;
		});

	self._v._domrange.$('.modal').modal();
}

BModalInstance.prototype.on = function(eventName, cb) {
	var self = this;

	var bsEventName = eventName + '.bs.modal';

	self._v._domrange.$('.modal').on(bsEventName, cb);

	return self;
}

BModalInstance.prototype.destroy = function() {
	var self = this;

	if(!self._visible) return;

	self._v._domrange.$('.modal').modal('hide');
}