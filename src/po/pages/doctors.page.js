const ListHeaderComponent = require("../components/doctors/listheader.component");
class DoctorsPage {
  constructor() {
    this.doctorLisHeader = new ListHeaderComponent();
  }

  async open() {
    await browser.url("showcase/angular/appointmentplanner/#/doctors");
  }
}

module.exports = DoctorsPage;
