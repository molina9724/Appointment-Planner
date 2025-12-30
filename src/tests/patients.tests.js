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
    await expect($(".patient-operations .e-btn")).toBeDisplayed();
  });

  it("Should open Add Patient modal when clicking the button", async () => {
    await $(".patient-operations .e-btn").click();
    await expect($(".e-dlg-container .new-patient-dialog")).toBeDisplayed();
  });

  it("Should close the modal when clicking cancel/close", async () => {
    await $(".patient-operations .e-btn").click();
    await expect($(".e-dlg-container .new-patient-dialog")).toBeDisplayed();
    await $(".e-dlg-closeicon-btn").click();
    await expect($(".e-dlg-container .new-patient-dialog")).not.toBeDisplayed();
  });

  it("Should add a new patient and verify it appears in the grid", async () => {
    await $(".patient-operations .e-btn").click();
    await expect($(".e-dlg-container .new-patient-dialog")).toBeDisplayed();

    await $("[name='Name']").setValue("Carl Jhonson");
    await $("label[for='doctorCheckMale']").click();
    await $("[name='DOB']").setValue("8/11/1968");
    //await $("#BloodGroup [role='combobox']");
    await $("#PatientMobile").setValue("1111111111");
    await $("[name='Email']").setValue("CJ@gta.com");
    await $("[name='Symptoms']").setValue("Fever");

    await $(".button-container .e-primary").click();
    await expect($(".e-dlg-container .new-patient-dialog")).not.toBeDisplayed();

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
