const { pages } = require("./../po");

describe("Doctors page", () => {
  beforeEach(async () => {
    await pages("dashboard").open();
    await pages("dashboard").sideMenu.item("doctors").click();
  });

  it("should get page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
  });

  it("should display Add New Doctor Button", async () => {
    await pages("doctors").doctorLisHeader.addNewDoctorBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
  });

  it.only("should fill in all New Doctor modal required fields", async () => {
    await pages("doctors").doctorLisHeader.addNewDoctorBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();

    await pages("doctors")
      .addDoctorModal.input("name")
      .setValue("Gregory House");

    await pages("doctors")
      .addDoctorModal.input("number")
      .setValue("808-592-9022");

    await pages("doctors")
      .addDoctorModal.input("email")
      .setValue("info@gregoryhouse.org");

    await pages("doctors").addDoctorModal.input("education").setValue("MD");

    await pages("doctors")
      .addDoctorModal.input("designation")
      .setValue("Senior");

    await pages("doctors").addDoctorModal.saveBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();

    await expect(pages("doctors").specialistCard("8").rootEl).toBeDisplayed();

    await expect(pages("doctors").specialistCard("8").name).toHaveText(
      "Dr. Gregory House"
    );

    await expect(pages("doctors").specialistCard("8").education).toHaveText(
      "MD",
      { ignoreCase: true }
    );

    await expect(pages("doctors").specialistCard("8").designation).toHaveText(
      "Senior"
    );
  });

  it("should close New Doctor modal", async () => {
    await pages("doctors").doctorLisHeader.addNewDoctorBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
    await pages("doctors").addDoctorModal.closeBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
