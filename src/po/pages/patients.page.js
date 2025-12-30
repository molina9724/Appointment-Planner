const BasePage = require("./base.page");

class PatientsPage extends BasePage {
  constructor() {
    super("/showcase/angular/appointmentplanner/#/patients");
  }
}

module.exports = PatientsPage;
