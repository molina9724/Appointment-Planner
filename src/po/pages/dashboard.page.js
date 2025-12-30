const BasePage = require("./base.page");

class DashboardPage extends BasePage {
  constructor(url) {
    super("/showcase/angular/appointmentplanner/#/dashboard");
  }
}

module.exports = DashboardPage;
