const ListHeaderComponent = require("../components/doctors/list-header.component");
const AddDoctorComponent = require("../components/doctors/add-doctor.component");
const BasePage = require("./base.page");

class DoctorsPage extends BasePage {
  constructor(url) {
    super("showcase/angular/appointmentplanner/#/doctors");
    this.doctorLisHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }
}

module.exports = DoctorsPage;
