const AppointmentTableComponent = require("../components/schedule/appointment-table.component");
const BasePage = require("./base.page");

class SchedulePage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/calendar");
    this.appointmentTableComponent = new AppointmentTableComponent();
  }
}

module.exports = SchedulePage;
