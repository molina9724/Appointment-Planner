describe("Schedule Test Suit", () => {
  beforeEach(async () => {
    await browser.url("/showcase/angular/appointmentplanner/#/calendar");
    //await browser.refresh();
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
    await $("#e-tbr-btn_50").click();
    const currentDateAfterClick = await $(".e-date-range").getText();
    expect(currentDate).toEqual(currentDateAfterClick);
  });
});
