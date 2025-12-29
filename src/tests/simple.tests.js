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

  it("should fill in all New Doctor modal required fields", async () => {
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

    await expect($("#Specialist_8")).toBeDisplayed();
    expect($("#Specialist_8").$(".name")).toHaveText("Dr. Gregory House");
    expect($("#Specialist_8").$(".education")).toHaveText("MD", {
      ignoreCase: true,
    });
    expect($("#Specialist_8").$(".designation")).toHaveText("Senior");
  });

  it("should close New Doctor modal", async () => {
    await pages("doctors").doctorLisHeader.addNewDoctorBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).toBeDisplayed();
    await pages("doctors").addDoctorModal.closeBtn.click();
    await expect(pages("doctors").addDoctorModal.rootEl).not.toBeDisplayed();
  });
});
