const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");
const PatientsPage = require("./patients.page");
const SchedulePage = require("./schedule.page");

function pages(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
    patients: new PatientsPage(),
    schedule: new SchedulePage(),
  };
  return items[name.toLowerCase()];
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  PatientsPage,
  SchedulePage,
  pages,
};
