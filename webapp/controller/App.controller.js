sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/UIComponent"
], function (Controller, UIComponent) {
	"use strict";

	return Controller.extend("converted.fiscaldataview.controller.App", {
		onInit: function () {
			// Get the router instance
			const oRouter = UIComponent.getRouterFor(this);

			//Error Handling for routing
			if (oRouter) {
				oRouter.attachBypassed(function(oEvent) {
					const sHash = oEvent.getParameter("hash");
					console.warn(`Route bypassed: ${sHash}`); // Use console.warn for warnings
				});

				// Navigate to main view if no hash is set
				if (!window.location.hash || window.location.hash === "#") {
					setTimeout(() => {
						oRouter.navTo("RouteMain");
					}, 100);
				}
			} else {
				console.error("Router not found in App controller");
			}
		}
	});
});
