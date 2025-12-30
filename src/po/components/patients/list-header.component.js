const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {
  constructor() {
    super(".patient-operations");
  }

  get addNewPatientBtn() {
    return this.rootEl.$(".e-btn");
  }
}

module.exports = ListHeaderComponent;
