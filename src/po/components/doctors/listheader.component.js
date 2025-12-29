const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {
  constructor(rootSelector) {
    super(".specialization-types");
  }

  get addNewDoctorBtn() {
    return this.rootEl.$("button.e-control");
  }
}

module.exports = ListHeaderComponent;
