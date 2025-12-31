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

    const newPatient = await $$("tr[aria-rowindex='8'] .e-rowcell");
    await expect(newPatient[0]).toHaveText("8");
    await expect(newPatient[1]).toHaveText("Carl Jhonson");
    await expect(newPatient[2]).toHaveText("Male");
    await expect(newPatient[3]).toHaveText("AB+");
    await expect(newPatient[4]).toHaveText("Fever");
    await expect(newPatient[5]).toHaveText("(111) 111-1111");
    await expect(newPatient[6]).toHaveText("CJ@gta.com");
  });
});
