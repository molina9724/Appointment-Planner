const SideMenuComponent = require("../components/common/sidemenu.component");
const BasePage = require("./base.page");

class DashboardPage extends BasePage {
  constructor(url) {
    super("showcase/angular/appointmentplanner/#/dashboard");
    this.sideMenu = new SideMenuComponent();
  }
}

module.exports = DashboardPage;
