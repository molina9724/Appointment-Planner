const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");

function pages(name) {
  const items = {
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage(),
  };
  return items[name.toLowerCase()];
}

module.exports = { DashboardPage, DoctorsPage, pages };
