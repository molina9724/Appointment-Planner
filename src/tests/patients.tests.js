const { pages } = require("../po");

describe("Patients test suite", () => {
  beforeEach(async () => {
    pages("patients").open();
    await browser.refresh();
  });

  it("Should display the Patients page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
  });

  it("Should display the Add New Patient button", async () => {
    await expect(
      pages("patients").listHeaderComponent.addNewPatientBtn
    ).toBeDisplayed();
  });

  it("Should open Add Patient modal when clicking the button", async () => {
    await pages("patients").listHeaderComponent.addNewPatientBtn.click();
    expect(pages("patients").addPatientComponent.rootEl).toBeDisplayed();
  });

  it("Should close the modal when clicking cancel/close", async () => {
    await pages("patients").listHeaderComponent.addNewPatientBtn.click();
    expect(pages("patients").addPatientComponent.rootEl).toBeDisplayed();
    await pages("patients").addPatientComponent.closeBtn.click();
    expect(pages("patients").addPatientComponent.rootEl).not.toBeDisplayed();
  });

  it.only("Should add a new patient and verify it appears in the grid", async () => {
    await pages("patients").listHeaderComponent.addNewPatientBtn.click();
    expect(pages("patients").addPatientComponent.rootEl).toBeDisplayed();

    await pages("patients")
      .addPatientComponent.input("name")
      .setValue("Carl Jhonson");

    await pages("patients").addPatientComponent.input("male").click();

    await pages("patients")
      .addPatientComponent.input("dateOfBirth")
      .setValue("8/11/1968");

    //await $("#BloodGroup [role='combobox']");

    await pages("patients")
      .addPatientComponent.input("mobileNumber")
      .setValue("1111111111");

    await pages("patients")
      .addPatientComponent.input("email")
      .setValue("CJ@gta.com");

    await pages("patients")
      .addPatientComponent.input("symptoms")
      .setValue("Fever");
    await pages("patients").addPatientComponent.saveBtn.click();

    expect(pages("patients").addPatientComponent.rootEl).not.toBeDisplayed();

    await expect(pages("patients").patientListComponent("8").id).toHaveText(
      "8"
    );

    await expect(pages("patients").patientListComponent("8").name).toHaveText(
      "Carl Jhonson"
    );

    await expect(pages("patients").patientListComponent("8").gender).toHaveText(
      "Male"
    );

    await expect(
      pages("patients").patientListComponent("8").bloodGroup
    ).toHaveText("AB+");

    await expect(
      pages("patients").patientListComponent("8").symptoms
    ).toHaveText("Fever");

    await expect(
      pages("patients").patientListComponent("8").mobileNumber
    ).toHaveText("(111) 111-1111");

    await expect(pages("patients").patientListComponent("8").email).toHaveText(
      "CJ@gta.com"
    );
  });
});
