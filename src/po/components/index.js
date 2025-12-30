const Header = require("../components/common/header.component");
const SideMenu = require("../components/common/sidemenu.component");

const AddDoctorModal = require("../components/doctors/add-doctor.component");
const DoctorListHeader = require("../components/doctors/list-header.component");

const SpecialistCard = require("./doctors/specialist-card.component");

const PatientListHeader = require("./patients/list-header.component");
const AddPatientComponent = require("./patients/add-patient.component");

module.exports = {
  Header,
  SideMenu,
  AddDoctorModal,
  DoctorListHeader,
  SpecialistCard,
  PatientListHeader,
  AddPatientComponent,
};
