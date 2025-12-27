const SideMenuComponent = require("../components/common/sidemenu.component");

class DashboardPage {
  constructor() {
    this.sideMenu = new SideMenuComponent();
  }
  async open() {
    await browser.url("showcase/angular/appointmentplanner/#/dashboard");
  }
}

module.exports = DashboardPage;
