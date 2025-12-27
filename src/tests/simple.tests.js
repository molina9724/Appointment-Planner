describe("Doctors page", () => {
  beforeEach(async () => {
    await browser.url("showcase/angular/appointmentplanner/#/dashboard");
    await $("div[routerlink='/doctors']").click();
  });

  it("should get page title", async () => {
    await expect(browser).toHaveTitle(
      "Appointment Planner - Syncfusion Angular Components Showcase App"
    );
  });

  it("should display Add New Doctor Button", async () => {
    await $(".specialization-types button.e-control").click();
    await expect($("ejs-dialog[cssclass='new-doctor-dialog']")).toBeDisplayed();
  });

  it("should fill in all New Doctor modal required fields", async () => {
    await $(".specialization-types button.e-control").click();
    await expect($(".new-doctor-dialog")).toBeDisplayed();

    const name = await $("[name='Name']");
    await name.setValue("Gregory House");

    const mobileNumber = await $("#DoctorMobile");
    await mobileNumber.setValue("808-592-9022");

    const email = await $("[name='Email']");
    email.setValue("info@gregoryhouse.org");

    const education = await $("[name='Education']");
    education.setValue("MD");

    const designation = await $("[name='Designation']");
    designation.setValue("Senior");

    await $(".e-footer-content button.e-primary").click();
    await expect($(".new-doctor-dialog")).not.toBeDisplayed();

    await expect($("#Specialist_8")).toBeDisplayed();
    expect($("#Specialist_8").$(".name")).toHaveText("Dr. Gregory House");
    expect($("#Specialist_8").$(".education")).toHaveText("MD", {
      ignoreCase: true,
    });
    expect($("#Specialist_8").$(".designation")).toHaveText("Senior");
  });

  it("should close New Doctor modal", async () => {
    await $(".specialization-types button.e-control").click();
    await expect($(".new-doctor-dialog")).toBeDisplayed();
    await $(".e-dlg-closeicon-btn").click();
    await expect($(".new-doctor-dialog")).not.toBeDisplayed();
  });
});
