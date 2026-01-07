const { pages } = require("../po");

describe("Schedule Test Suit", () => {
  beforeEach(async () => {
    pages("schedule").open();
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
    await expect(
      pages("schedule").appointmentTableComponent.dayBtn
    ).toBeDisplayed();
  });

  it("Should navigate forward when clicking next arrow", async () => {
    const currentDate = await pages(
      "schedule"
    ).appointmentTableComponent.weekCurrentDate.getText();
    await pages("schedule").appointmentTableComponent.nextBtn.click();
    const currentDateAfterClick = await pages(
      "schedule"
    ).appointmentTableComponent.weekCurrentDate.getText();
    expect(currentDate).not.toEqual(currentDateAfterClick);
  });

  it("Should navigate backward when clicking prev arrow", async () => {
    const currentDate = await pages(
      "schedule"
    ).appointmentTableComponent.weekCurrentDate.getText();
    await pages("schedule").appointmentTableComponent.previousBtn.click();
    const currentDateAfterClick = await pages(
      "schedule"
    ).appointmentTableComponent.weekCurrentDate.getText();
    expect(currentDate).not.toEqual(currentDateAfterClick);
  });

  it("Should return to today when clicking Today button", async () => {
    await pages("schedule").appointmentTableComponent.todayBtn.click();
    await pages("schedule").appointmentTableComponent.dayBtn.click();

    const currentDateAfterClick = await pages(
      "schedule"
    ).appointmentTableComponent.weekCurrentDate.getText();

    const date = new Date().toLocaleString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });

    expect(currentDateAfterClick).toEqual(date);
  });

  it("Should switch to Day view", async () => {
    await pages("schedule").appointmentTableComponent.dayBtn.click();

    await expect(
      pages("schedule").appointmentTableComponent.weekCurrentDate
    ).toHaveText(expect.stringMatching(/^[A-Z][a-z]+ \d{1,2}, \d{4}$/));
    await expect(
      (
        await pages("schedule").appointmentTableComponent.dateText
      )[0]
    ).toHaveText(expect.stringMatching(/^[A-Z]{3}, [A-Z]{3} \d{1,2}$/));
    expect(
      (await pages("schedule").appointmentTableComponent.dateText).length
    ).toEqual(1);
  });

  it("Should switch to Week view", async () => {
    await pages("schedule").appointmentTableComponent.weekBtn.click();
    await expect(
      pages("schedule").appointmentTableComponent.weekBtn
    ).toHaveElementClass("e-active-view");

    await expect($(".e-date-range")).toHaveText(
      expect.stringMatching(/^[A-Za-z]+ \d{2} - ([A-Za-z]+ )?\d{2}, \d{4}$/)
    );

    const dates = await $$(".e-header-cells").map(async (el) => el.getText());
    for (let index = 1; index < dates.length; index++) {
      expect(dates[index]).toMatch(/^[A-Z]{3}, [A-Z]{3} \d{1,2}$/);
    }
  });

  it("Should switch to Month view", async () => {
    await $(".e-month").click();
    await expect($(".e-month")).toHaveElementClass("e-active-view");

    await expect($(".e-date-range")).toHaveText(
      expect.stringMatching(/^[A-Z][a-z]+ \d{4}$/)
    );

    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const dates = await $$(".e-header-cells").map(async (el) => el.getText());
    dates.forEach((el) => expect(days).toContain(el));

    const tableDays = await $$(".e-navigate").map(async (el) => el.getText());
    tableDays.pop();
    expect(tableDays.length).toEqual(42);
    expect(await $$(".e-content-wrap tbody tr").length).toEqual(6);

    for (let index = 0; index < tableDays.length; index++) {
      expect(tableDays[index]).toMatch(/^([A-Z][a-z]{2} )?\d{1,2}$/);
    }
  });

  it("Should open appointment dialog when clicking a time slot", async () => {
    await pages("schedule").appointmentTableComponent.weekBtn.click();
    await expect(
      pages("schedule").appointmentTableComponent.weekBtn
    ).toHaveElementClass("e-active-view");

    let cellHours;
    const workHours = await $$(".e-work-hours");
    for (let index = 0; index < workHours.length; index++) {
      await workHours[index].click();
      if (!(await $(".e-quick-popup-wrapper").isDisplayed())) {
        cellHours = workHours[index];
        break;
      }
    }
    if (!cellHours) {
      throw new Error("No available time slot found");
    }
    await cellHours.doubleClick();
    await expect($(".e-popup-open")).toBeDisplayed();
  });

  it("Should close dialog when clicking cancel", async () => {
    await pages("schedule").appointmentTableComponent.weekBtn.click();
    await expect(
      pages("schedule").appointmentTableComponent.weekBtn
    ).toHaveElementClass("e-active-view");

    let cellHours;
    const workHours = await $$(".e-work-hours");
    for (let index = 0; index < workHours.length; index++) {
      await workHours[index].click();
      if (!(await $(".e-quick-popup-wrapper").isDisplayed())) {
        cellHours = workHours[index];
        break;
      }
    }
    if (!cellHours) {
      throw new Error("No available time slot found");
    }
    await cellHours.doubleClick();
    await expect($(".e-popup-open")).toBeDisplayed();
    await $(".e-footer-content .e-event-cancel").waitForClickable();
    await browser.execute(() => {
      document.querySelector(".e-footer-content .e-event-cancel").click();
    });
    await $(".e-popup-open").waitForDisplayed({ reverse: true });
    await expect($(".e-popup-open")).not.toBeDisplayed();
  });

  it("Should create a new appointment with all required fields", async () => {});
});
