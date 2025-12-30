const ListHeaderComponent = require("../components/patients/list-header.component");
const AddPatientComponent = require("../components/patients/add-patient.component");

const BasePage = require("./base.page");

class PatientsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/patients");
    this.listHeaderComponent = new ListHeaderComponent();
    this.addPatientComponent = new AddPatientComponent();
  }
}

module.exports = PatientsPage;
