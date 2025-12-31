const BaseComponent = require("../common/base.component");

class AddPatientComponent extends BaseComponent {
  constructor() {
    super("ejs-dialog[cssclass='new-patient-dialog']");
  }

  get closeBtn() {
    return this.rootEl.$(".e-dlg-closeicon-btn");
  }

  get saveBtn() {
    return this.rootEl.$(".e-primary");
  }

  input(param) {
    const selectors = {
      name: "[name='Name']",
      male: "label[for='doctorCheckMale']",
      female: "label[for='doctorCheckFemale']",
      dateOfBirth: "[name='DOB']",
      bloodGroup: "",
      mobileNumber: "#PatientMobile",
      email: "[name='Email']",
      symptoms: "[name='Symptoms']",
    };
    return this.rootEl.$(selectors[param]);
  }
}

module.exports = AddPatientComponent;
