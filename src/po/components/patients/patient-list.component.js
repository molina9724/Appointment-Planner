const BaseComponent = require("../common/base.component");

class PatientListComponent extends BaseComponent {
  constructor(id) {
    super(`tr[aria-rowindex="${id}"]`);
  }

  get id() {
    return this.rootEl.$("td:nth-child(1)");
  }

  get name() {
    return this.rootEl.$("td:nth-child(2)");
  }

  get gender() {
    return this.rootEl.$("td:nth-child(3)");
  }

  get gender() {
    return this.rootEl.$("td:nth-child(3)");
  }

  get bloodGroup() {
    return this.rootEl.$("td:nth-child(4)");
  }

  get symptoms() {
    return this.rootEl.$("td:nth-child(5)");
  }

  get mobileNumber() {
    return this.rootEl.$("td:nth-child(6)");
  }

  get email() {
    return this.rootEl.$("td:nth-child(7)");
  }
}

module.exports = PatientListComponent;
