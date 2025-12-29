class AddDoctorComponent {
  constructor(parameters) {}

  get rootEl() {
    return $(".new-doctor-dialog");
  }

  get closeBtn() {
    return this.rootEl.$(".e-dlg-closeicon-btn");
  }

  get saveBtn() {
    return this.rootEl.$(".button-container button.e-primary");
  }
}

module.exports = AddDoctorComponent;
