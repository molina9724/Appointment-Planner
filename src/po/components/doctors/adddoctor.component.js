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

  item(param) {
    const selectors = {};
  }
}

module.exports = AddDoctorComponent;
