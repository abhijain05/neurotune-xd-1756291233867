sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"sap/m/MessageToast"
], function(Controller, JSONModel, MessageToast) {
	"use strict";

	return Controller.extend("converted.fiscaldataview.controller.FiscalDataView", {
		onInit: function() {
			// Load mock data
			const oData = new JSONModel();
			oData.loadData("model/mockData/fiscalData.json");
			this.getView().setModel(oData, "fiscalData");
		},

		onGo: function() {
			MessageToast.show("Go button pressed"); // Placeholder - needs actual logic
		},

		onHideFilterBar: function() {
			MessageToast.show("Hide Filter Bar button pressed"); // Placeholder - needs actual logic
		},

		onFilters: function() {
			MessageToast.show("Filters button pressed"); // Placeholder - needs actual logic
		},

		onPinToggle: function() {
			MessageToast.show("Pin button pressed"); // Placeholder - needs actual logic
		},
		onValueHelpRequestFiscalYear: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalYear"));
		},
		onValueHelpRequestFiscalPeriod: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalPeriod"));
		},
		onValueHelpRequestFiscalYearPeriod: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalYearPeriod"));
		},
		onValueHelpRequestFiscalQuarter: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalQuarter"));
		},
		onValueHelpRequestFiscalYearQuarter: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalYearQuarter"));
		},
		onValueHelpRequestFiscalWeek: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalWeek"));
		},
		onValueHelpRequestFiscalYearWeek: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalYearWeek"));
		},
		onValueHelpRequestFiscalDayOfYear: function() {
			this.handleValueHelp(this.getView().byId("inputFiscalDayOfYear"));
		},

		handleValueHelp: function(oInput) {
			// Implement actual value help logic here (e.g., using a SelectDialog)
			MessageToast.show(`Value help requested for ${oInput.getId()}`);
		},


		onTableCopy: function() {
			MessageToast.show("Copy button pressed"); // Placeholder - needs actual logic
		},

		onTableSettings: function() {
			MessageToast.show("Settings button pressed"); // Placeholder - needs actual logic
		},

		onTableLayout: function() {
			MessageToast.show("Layout button pressed"); // Placeholder - needs actual logic
		},

		onTableDropdown: function() {
			MessageToast.show("Dropdown button pressed"); // Placeholder - needs actual logic
		}
	});
});
