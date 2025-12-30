const ListHeaderComponent = require("../components/patients/list-header.component");
const BasePage = require("./base.page");

class PatientsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/patients");
    this.listHeaderComponent = new ListHeaderComponent();
  }
}

module.exports = PatientsPage;
