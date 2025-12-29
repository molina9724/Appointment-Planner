const BaseComponent = require("./base.component");

class HeaderComponent extends BaseComponent {
  constructor(rootElement) {
    super(".planner-header");
  }

  get logoutBtn() {
    return this.rootEl.$(".logout-name");
  }
}

module.exports = HeaderComponent;
