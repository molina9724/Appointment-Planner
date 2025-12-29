# 🎯 WebDriverIO Practice Exercise: Patients Page

**Goal**: Build the Page Object Model and tests for the **Patients** page independently.

**Rules**:

- Try on your own first!
- Use the hints only if stuck for more than 5-10 minutes
- Come back to your AI assistant only if completely lost

---

## 📋 Exercise Checklist

### Part 1: Explore the Page

- [ ] Navigate to the Patients page in the browser
- [ ] Open DevTools and inspect the elements
- [ ] Identify and note down selectors for:
  - [ ] The "Add New Patient" button
  - [ ] The patient grid/table
  - [ ] A single row in the grid
  - [ ] The search bar
  - [ ] Column headers

---

### Part 2: Create the Page Object

- [ ] Create `patients.page.js` in `src/po/pages/`
- [ ] Import necessary base class and components
- [ ] Define the class extending `BasePage`
- [ ] Register the page in `src/po/pages/index.js`

<details>
<summary>💡 Hint: File structure</summary>

Look at how `doctors.page.js` is structured:

1. Imports at the top
2. Class extends BasePage
3. Constructor calls `super()` with the URL path
4. Properties/methods for components
5. Export at the bottom

</details>

---

### Part 3: Create Components

#### 3a. Patient List Header Component

- [ ] Create `src/po/components/patients/` folder
- [ ] Create `list-header.component.js` for the header with "Add New Patient" button
- [ ] Add getters for: `addNewPatientBtn`, `searchInput`

<details>
<summary>💡 Hint: Component pattern</summary>

```javascript
// Every component needs:
// 1. Extend BaseComponent
// 2. Constructor with selector
// 3. Getters that return elements (using this.rootEl.$(...))
```

</details>

#### 3b. Patient Grid Component (Challenge!)

- [ ] Create `patient-grid.component.js`
- [ ] Add a method to get a row by patient name or ID
- [ ] Add getters for grid cells (name, gender, blood type, etc.)

<details>
<summary>💡 Hint: Dynamic row selection</summary>

Think about how `specialistCard(id)` works in doctors.page.js.
You might need a method like `patientRow(name)` that returns a new component.

</details>

#### 3c. Add Patient Modal Component

- [ ] Create `add-patient.component.js`
- [ ] Add getters for form inputs (name, gender, DOB, blood type, etc.)
- [ ] Add getters for save/cancel buttons

<details>
<summary>💡 Hint: Modal pattern</summary>

Look at `add-doctor.component.js` - it's the same pattern!
The modal has a rootEl, input fields, and action buttons.

</details>

---

### Part 4: Register Components

- [ ] Export new components in `src/po/components/index.js`
- [ ] Import and use components in `patients.page.js`

---

### Part 5: Write Tests

Create `patients.tests.js` with these test cases:

- [ ] **Test 1**: Should display the Patients page title
- [ ] **Test 2**: Should display the Add New Patient button
- [ ] **Test 3**: Should open Add Patient modal when clicking the button
- [ ] **Test 4**: Should close the modal when clicking cancel/close
- [ ] **Test 5** (Challenge): Should add a new patient and verify it appears in the grid
- [ ] **Test 6** (Challenge): Should search for a patient by name

<details>
<summary>💡 Hint: Test structure</summary>

```javascript
describe("Patients page", () => {
  beforeEach(async () => {
    // Navigate to the page
  });

  it("should...", async () => {
    // Arrange - setup
    // Act - do something
    // Assert - verify with expect()
  });
});
```

</details>

---

## 🧠 Key Concepts to Remember

### When to use `$()`

| Use `$()`                            | Don't use `$()`                           |
| ------------------------------------ | ----------------------------------------- |
| `$(".selector")` - finding by string | `component.rootEl` - already an element   |
| `$("#id")` - finding by string       | `component.name` - getter returns element |

### The Chain Pattern

```
pages("patients")        → Page object
  .patientGrid           → Component (property) OR
  .patientRow("John")    → Component (method with param)
    .rootEl              → Element (for toBeDisplayed)
    .name                → Element (for toHaveText)
```

### Methods vs Properties

```javascript
// Property - same component every time (no parameter needed)
this.patientGrid = new PatientGrid();

// Method - different component each time (needs parameter)
patientRow(name) {
  return new PatientRow(name);
}
```

### Always use `.rootEl` for:

- `toBeDisplayed()`
- `toExist()`
- `toBeClickable()`
- Any assertion on the component itself (not its children)

---

## ✅ Success Criteria

You've mastered this exercise when:

1. All tests pass with `npm run wdio`
2. You didn't need to look at the hints more than 2-3 times
3. You can explain WHY each piece of code works
4. The code follows the same patterns as the Doctors page

---

## 🆘 Stuck? Here's What to Do

1. **Re-read the error message** - What is it telling you?
2. **Check your selectors** - Use DevTools to verify they exist
3. **Trace the chain** - What does each step return?
4. **Compare with Doctors** - Is your pattern the same?
5. **Still stuck after 15+ minutes?** - Ask your AI assistant!

---

**Good luck! You've got this! 🚀**
