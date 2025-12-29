const ListHeaderComponent = require("../components/doctors/listheader.component");
const AddDoctorComponent = require("../components/doctors/adddoctor.component");
class DoctorsPage {
  constructor() {
    this.doctorLisHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }

  async open() {
    await browser.url("showcase/angular/appointmentplanner/#/doctors");
  }
}

module.exports = DoctorsPage;
