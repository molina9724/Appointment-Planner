describe("Schedule Test Suit", () => {
  beforeEach(async () => {
    await browser.url("/showcase/angular/appointmentplanner/#/calendar");
    await browser.refresh();
  });

  it("Should display the Schedule page", async () => {
    /**expect(await browser.getUrl()).toEqual(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar"
    );
    **/

    await expect(browser).toHaveUrl(
      "https://ej2.syncfusion.com/showcase/angular/appointmentplanner/#/calendar"
    );
  });

  it("Should display the Today button in toolbar", async () => {
    await expect($("[id='e-tbr-btn_53']")).toBeDisplayed();
  });

  it("Should navigate forward when clicking next arrow", async () => {
    const currentDate = await $(".e-date-range").getText();
    await $("[title='Next']").click();
    const currentDateAfterClick = await $(".e-date-range").getText();
    expect(currentDate).not.toEqual(currentDateAfterClick);
  });

  it("Should navigate backward when clicking prev arrow", async () => {
    const currentDate = await $(".e-date-range").getText();
    await $("[title='Previous']").click();
    const currentDateAfterClick = await $(".e-date-range").getText();
    expect(currentDate).not.toEqual(currentDateAfterClick);
  });

  it("Should return to today when clicking Today button", async () => {
    await $(".e-today").click();
    await $(".e-day").click();

    const currentDateAfterClick = await $(".e-date-range").getText();

    const date = new Date().toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    expect(currentDateAfterClick).toEqual(date);
  });

  it("Should switch to Day view", async () => {
    await $(".e-today").click();
    await $(".e-day").click();

    const date = new Date()
      .toLocaleString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
      })
      .toUpperCase();

    expect(await $(".date-text").getText()).toEqual(date);
    expect(await $$(".date-text").length).toEqual(1);
  });
});
