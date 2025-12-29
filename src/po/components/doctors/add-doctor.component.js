const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {
  constructor(rootSelector) {
    super(".new-doctor-dialog");
  }

  get closeBtn() {
    return this.rootEl.$(".e-dlg-closeicon-btn");
  }

  get saveBtn() {
    return this.rootEl.$(".button-container button.e-primary");
  }

  input(param) {
    const selectors = {
      name: "[name='Name']",
      number: "#DoctorMobile",
      email: "[name='Email']",
      education: "[name='Education']",
      designation: "[name='Designation']",
    };
    return this.rootEl.$(selectors[param]);
  }
}

module.exports = AddDoctorComponent;
