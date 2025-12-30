const {
  DoctorListHeader,
  AddDoctorModal,
  SpecialistCard,
} = require("../components/");
const BasePage = require("./base.page");

class DoctorsPage extends BasePage {
  constructor(url) {
    super("/showcase/angular/appointmentplanner/#/doctors");
    this.doctorLisHeader = new DoctorListHeader();
    this.addDoctorModal = new AddDoctorModal();
  }
  specialistCard(id) {
    return new SpecialistCard(id);
  }
}

module.exports = DoctorsPage;
