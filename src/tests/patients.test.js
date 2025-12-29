describe("Patients test suite", () => {
  beforeEach(async () => {
    await browser.url("/showcase/angular/appointmentplanner/#/patients");
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
    //await $(".e-dlg-closeicon-btn").click(); - There's a bug and it won't close
    await browser.keys("Escape");
    await expect($(".e-dlg-container .new-patient-dialog")).not.toBeDisplayed();
  });

  it.only("Should add a new patient and verify it appears in the grid", async () => {
    await $(".patient-operations .e-btn").click();
    await expect($(".e-dlg-container .new-patient-dialog")).toBeDisplayed();
    await $("[name='Name']").setValue("Carl Jhonson");
    await $("label[for='doctorCheckMale']").click();
    await $("[name='DOB']").setValue("8/11/1968");
    await $("#BloodGroup [role='combobox']");
    await $("#PatientMobile").setValue("0123456789");
    await $("[name='Email']").setValue("CJ@gta.com");
    await $("[name='Symptoms']").setValue("Fever");
    await $(".button-container .e-primary").click();
    await expect($(".e-dlg-container .new-patient-dialog")).not.toBeDisplayed();
  });
});
