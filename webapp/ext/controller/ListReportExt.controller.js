sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        upload: async function (oEvent) {
			this.getView().setBusyIndicatorDelay(0);
			this.getView().setBusy(true);

			this.spreadsheetUpload = await this.getView()
				.getController()
				.getOwnerComponent()
				.createComponent({
					usage: "spreadsheetImporter",
					async: true,
					componentData: {
						context: this,
						activateDraft: true,
						showBackendErrorMessages: false
					}
				});
		},
    };
});