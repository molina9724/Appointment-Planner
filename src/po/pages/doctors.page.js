const ListHeaderComponent = require("../components/doctors/listheader.component");
const AddDoctorComponent = require("../components/doctors/adddoctor.component");
const BasePage = require("./base.page");

class DoctorsPage extends BasePage {
  constructor(url) {
    super("showcase/angular/appointmentplanner/#/doctors");
    this.doctorLisHeader = new ListHeaderComponent();
    this.addDoctorModal = new AddDoctorComponent();
  }
}

module.exports = DoctorsPage;
