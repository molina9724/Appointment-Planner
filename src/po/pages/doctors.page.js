const { DoctorListHeader, AddDoctorModal } = require("../components/");
const BasePage = require("./base.page");

class DoctorsPage extends BasePage {
  constructor(url) {
    super("showcase/angular/appointmentplanner/#/doctors");
    this.doctorLisHeader = new DoctorListHeader();
    this.addDoctorModal = new AddDoctorModal();
  }
}

module.exports = DoctorsPage;
