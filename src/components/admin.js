import React, { useState } from 'react';
import './admin.css';
import NavBar from './Navbar';
import SideBar from './sidebar';
import AddEmployee from './addEmployee'; 
import SalaryReport from './SalaryReport.js'; 
import LeaveRequests from './LeaveRequests.js'; 
import ImageSlider from './ImageSlider.js';
import AdminProfile from './AdminProfile/Adminprofile.js'; // Import MyProfile component
import AdminResignation from './AdminProfile/AdminResignation.js';
import AdminSettings from './AdminProfile/AdminSettings.js';
import Adminhelp from './AdminProfile/Adminhelp.js';
import Adminlogout from './AdminProfile/Adminlogout.js';
import InterviewScheduling from './Recruitment/InterviewScheduling.js';
import ApplicantTracking from './Recruitment/ApplicantTracking.js';

const Admin = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  return (
    <main>
      <NavBar onButtonClick={handleButtonClick} /> {/* Pass handleButtonClick to NavBar */}
      <ImageSlider/>
      <div className="home-page">
        <SideBar onButtonClick={handleButtonClick} />
        <div className="content">
          <div className={`component ${selectedComponent === 'addEmployee' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'addEmployee' && <AddEmployee />}
          </div>
          <div className={`component ${selectedComponent === 'viewLeaveRequest' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'viewLeaveRequest' && <LeaveRequests/>}
          </div>
          <div className={`component ${selectedComponent === 'salaryReports' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'salaryReports' && <SalaryReport/>}
          </div>
          <div className={`component ${selectedComponent === 'adminprofile' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminprofile' && <AdminProfile />} {/* Render MyProfile component */}
          </div>
          <div className={`component ${selectedComponent === 'adminresignation' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminresignation' && <AdminResignation />} {/* Render MyProfile component */}
          </div>
          <div className={`component ${selectedComponent === 'adminsettings' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminsettings' && <AdminSettings />} {/* Render MyProfile component */}
          </div>
          <div className={`component ${selectedComponent === 'adminhelp' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminhelp' && <Adminhelp />} {/* Render MyProfile component */}
          </div>
          <div className={`component ${selectedComponent === 'adminlogout' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'adminlogout' && <Adminlogout />} {/* Render MyProfile component */}
          </div>
          <div className={`component ${selectedComponent === 'interviewscheduling' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'interviewscheduling' && <InterviewScheduling />} {/* Render MyProfile component */}
          </div>
          <div className={`component ${selectedComponent === 'applicanttracking' ? 'slide slide-in' : 'slide'}`}>
            {selectedComponent === 'applicanttracking' && <ApplicantTracking />} {/* Render MyProfile component */}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Admin;
