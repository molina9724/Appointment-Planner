const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");
const PatientsPage = require("./patients.page");

function pages(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = { DashboardPage, DoctorsPage, PatientsPage, pages };
