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

  get weekBtn() {
    return this.rootEl.$(".e-week");
  }

  get monthBtn() {
    return this.rootEl.$(".e-month");
  }

  get dateText() {
    return this.rootEl.$$(".date-text");
  }

  get cells() {
    return this.rootEl.$$(".e-header-cells");
  }
}

module.exports = AppointmentTableComponent;
