# 🎯 WebDriverIO Practice Exercise 2: Schedule/Calendar Page

**Goal**: Build the Page Object Model and tests for the **Schedule/Calendar** page.

**Focus Areas**:

- Finding unique selectors in complex DOM structures
- Attribute selectors and dynamic selectors
- **NEW**: Sibling selectors (`+`, `~`)
- **NEW**: `:nth-child()`, `:first-child`, `:last-child`
- **NEW**: XPath basics for when CSS isn't enough
- **NEW**: Keyboard actions (`keys()`)

---

## 🔍 Selector Reference

### CSS Selectors

| Selector Type           | Syntax                 | Example                        |
| ----------------------- | ---------------------- | ------------------------------ |
| ID                      | `#id`                  | `$('#calendar')`               |
| Class                   | `.class`               | `$('.e-schedule')`             |
| Attribute (exact)       | `[attr='value']`       | `$("[role='button']")`         |
| Attribute (contains)    | `[attr*='value']`      | `$("[class*='appointment']")`  |
| Attribute (starts with) | `[attr^='value']`      | `$("[id^='Appointment_']")`    |
| Attribute (ends with)   | `[attr$='value']`      | `$("[id$='_dialog']")`         |
| Combined                | `.class[attr='value']` | `$(".e-btn[title='Today']")`   |
| Descendant              | `ancestor descendant`  | `$('.e-schedule .e-toolbar')`  |
| Direct Child            | `parent > child`       | `$('.e-schedule > .e-header')` |
| **Adjacent Sibling**    | `element + sibling`    | `$('.label + input')`          |
| **General Sibling**     | `element ~ sibling`    | `$('.header ~ .content')`      |
| **First Child**         | `:first-child`         | `$('.row td:first-child')`     |
| **Last Child**          | `:last-child`          | `$('.row td:last-child')`      |
| **Nth Child**           | `:nth-child(n)`        | `$('.row td:nth-child(3)')`    |
| **Nth of Type**         | `:nth-of-type(n)`      | `$('div:nth-of-type(2)')`      |

### XPath Selectors (NEW!)

Use when CSS can't do the job (e.g., selecting parent, or text content matching):

| XPath                           | Description       | Example                                   |
| ------------------------------- | ----------------- | ----------------------------------------- |
| `//tag`                         | Any tag           | `$('//button')`                           |
| `//tag[@attr='val']`            | Attribute match   | `$("//button[@title='Save']")`            |
| `//tag[contains(@attr,'val')]`  | Partial match     | `$("//div[contains(@class,'schedule')]")` |
| `//tag[text()='val']`           | Exact text        | `$("//span[text()='January']")`           |
| `//tag[contains(text(),'val')]` | Partial text      | `$("//span[contains(text(),'Jan')]")`     |
| `//tag/..`                      | Parent element    | `$("//input[@id='name']/..")`             |
| `//tag/following-sibling::tag`  | Following sibling | `$("//label/following-sibling::input")`   |

---

## 📋 Exercise Checklist

### Part 1: Explore & Identify Selectors

Navigate to the **Schedule** page (sidebar → "Schedule").

Open DevTools (F12) and find selectors for:

#### Calendar Header

- [ ] The "Today" button
- [ ] The forward/backward navigation arrows
- [ ] The current date display (e.g., "January 2026")
- [ ] The view switcher buttons (Day/Week/Month)

#### Calendar Grid

- [ ] The calendar/schedule container
- [ ] A specific day cell by date
- [ ] An existing appointment on the calendar
- [ ] Time slots in Day/Week view

#### Appointment Dialog

- [ ] Click any time slot to open dialog
- [ ] The dialog container
- [ ] Subject/title input
- [ ] Start date/time inputs
- [ ] End date/time inputs
- [ ] Save and Cancel buttons

---

### Part 2: Create the Page Object

- [ ] Create `schedule.page.js` in `src/po/pages/`
- [ ] Set URL path: `/showcase/angular/appointmentplanner/#/calendar`
- [ ] Register in `src/po/pages/index.js`

---

### Part 3: Create Components

Create folder `src/po/components/schedule/`

#### 3a. Calendar Toolbar Component

Create `calendar-toolbar.component.js` with:

- `todayBtn` getter
- `prevBtn` getter
- `nextBtn` getter
- `dateTitle` getter
- `viewBtn(type)` method - accepts "day", "week", or "month"

#### 3b. Calendar Cell Component

Create `calendar-cell.component.js` with:

- Constructor accepting a date parameter
- `appointments` getter - returns all appointments in this cell
- `firstAppointment` getter

#### 3c. Appointment Dialog Component

Create `appointment-dialog.component.js` with:

- Getters for: `subjectInput`, `startDate`, `startTime`, `endDate`, `endTime`
- `saveBtn` and `cancelBtn` getters

---

### Part 4: Register & Connect

- [ ] Export components in `src/po/components/index.js`
- [ ] Use components in `schedule.page.js`
- [ ] Update `pages/index.js`

---

### Part 5: Write Tests

Create `schedule.tests.js`:

#### Basic Tests

- [ ] **Test 1**: Should display the Schedule page
- [ ] **Test 2**: Should display the Today button in toolbar
- [ ] **Test 3**: Should navigate forward when clicking next arrow
- [ ] **Test 4**: Should navigate backward when clicking prev arrow
- [ ] **Test 5**: Should return to today when clicking Today button

#### View Switching

- [ ] **Test 6**: Should switch to Day view
- [ ] **Test 7**: Should switch to Week view
- [ ] **Test 8**: Should switch to Month view

#### Appointments

- [ ] **Test 9**: Should open appointment dialog when clicking a time slot
- [ ] **Test 10**: Should close dialog when clicking cancel
- [ ] **Test 11**: Should create a new appointment with all required fields

---

## 🌟 NEW CHALLENGES

### Challenge A: Sibling Selector Test

Create a test that:

1. Finds a label element by its text
2. Uses a sibling selector to find the input next to it
3. Types a value into that input

**Scenario**: In the appointment dialog, find the "Subject" label, then use adjacent sibling (`+`) or general sibling (`~`) to get its input field.

---

### Challenge B: Nth-Child Navigation Test

Create a test that:

1. Switches to Week view
2. Clicks on the **3rd day** of the week using `:nth-child(3)`
3. Verifies the appointment dialog opens

---

### Challenge C: XPath Text Matching

Create a test that:

1. Uses XPath to find an element by its **text content**
2. Example: Find the "Month" view button by looking for an element containing the text "Month"

```javascript
// You'll need syntax like:
$("//selector[contains(text(),'value')]");
```

---

### Challenge D: Keyboard Actions (NEW!)

Create a test that uses keyboard actions:

```javascript
// WebDriverIO keyboard method:
await browser.keys(["Control", "a"]); // Select all
await element.keys("Tab"); // Press Tab
await browser.keys(["Shift", "Tab"]); // Shift+Tab
await browser.keys("Escape"); // Press Escape
```

**Test**:

1. Open the appointment dialog
2. Fill the subject field
3. Use `Tab` key to navigate to the next field
4. Use `Escape` key to close the dialog
5. Verify dialog closed

---

### Challenge E: Parent Selection with XPath

CSS cannot select parent elements, but XPath can!

Create a test where:

1. You find a specific child element (like an appointment title)
2. Use XPath `..` to get its parent container
3. Interact with a sibling element within that parent

---

## 🎯 Selector Practice

### Exercise A: Match the Selector

Write the selector for each scenario:

1. Third `<td>` in a row: ********\_********
2. Input immediately after a label: ********\_********
3. Element with class containing "active": ********\_********
4. Button whose title starts with "Add": ********\_********
5. Last item in a list: ********\_********
6. Parent div of an input with id "email": ********\_********

---

### Exercise B: Fix the Bugs

```javascript
// 1. What's wrong?
get cell() {
  return $(".calendar-cell");
}

// 2. What's wrong?
getCell(date) {
  return $("[data-date=date]");
}

// 3. What's wrong?
get title() {
  return this.rootEl.find(".title");
}

// 4. What's wrong?
it("should display", async () => {
  expect(component).toBeDisplayed();
});
```

---

### Exercise C: Chain Tracing

What does each step return?

```javascript
pages("schedule").calendarToolbar.viewBtn("month").click();
```

| Step | Code                | Returns |
| ---- | ------------------- | ------- |
| 1    | `pages("schedule")` | ???     |
| 2    | `.calendarToolbar`  | ???     |
| 3    | `.viewBtn("month")` | ???     |
| 4    | `.click()`          | ???     |

---

## ✅ Success Criteria

1. All 11+ tests pass
2. Used at least one sibling selector (`+` or `~`)
3. Used at least one `:nth-child()` selector
4. Used at least one XPath selector
5. Used keyboard actions in at least one test
6. Can trace any chain call and explain what each part returns

---

## 🚫 Common Mistakes

| Mistake                             | Correct                                    |
| ----------------------------------- | ------------------------------------------ |
| `$(".btn")` in component            | `this.rootEl.$(".btn")`                    |
| `"[id=myId]"`                       | `"[id='myId']"`                            |
| `$("[data-id=${id}]")`              | `$("[data-id='${id}']")`                   |
| `expect(component).toBeDisplayed()` | `expect(component.rootEl).toBeDisplayed()` |
| `pages("Schedule")`                 | `pages("schedule")`                        |
| Using `.find()`                     | Using `.$()`                               |

---

**Good luck! Challenge yourself to figure things out before asking for help! 💪**
