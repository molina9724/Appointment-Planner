const BaseComponent = require("../common/base.component");

class AppointmentTableComponent extends BaseComponent {
  constructor() {
    super(".schedule-container");
  }

  get dayBtn() {
    return this.rootEl.$(".e-day");
  }
}

module.exports = AppointmentTableComponent;
