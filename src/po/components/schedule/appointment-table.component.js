const BaseComponent = require("../common/base.component");

class AppointmentTableComponent extends BaseComponent {
  constructor() {
    super(".schedule-container");
  }

  get dayBtn() {
    return this.rootEl.$(".e-day");
  }

  get weekCurrentDate() {
    return this.rootEl.$(".e-date-range");
  }

  get nextBtn() {
    return this.rootEl.$("[title='Next']");
  }

  get previousBtn() {
    return this.rootEl.$("[title='Previous']");
  }

  get todayBtn() {
    return this.rootEl.$(".e-today");
  }

  get dayBtn() {
    return this.rootEl.$(".e-day");
  }

  get dateText() {
    return this.rootEl.$$(".date-text");
  }
}

module.exports = AppointmentTableComponent;
