define([
    "jquery",
    "message",
    'mage/template',
    "Magento_Ui/js/modal/modal",
    'mage/translate'
], function ($) {
    return function showPopup (options) {
        var self = this;
        var divId = options.id;

        this.modal = jQuery('<div/>').attr({id: divId}).html(options.content()).modal({
            modalClass: 'magento',
            title: options.title,
            type: 'slide',
            closed: function (e, modal) {
                modal.modal.remove();
            },
            opened: function () {
                if (options.opened) {
                    options.opened.call(self);
                }
            },
            buttons: [{
                text: jQuery.mage.__('Cancel'),
                'class': 'action cancel',
                click: function () {
                    this.closeModal();
                }
            }, {
                text: jQuery.mage.__('Upload'),
                'class': 'action primary upload-button',
                click: function () {
                    options.actionOk.call(self);
                }
            }]
        });
        this.modal.modal('openModal');
    }
});