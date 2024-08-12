
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import './Employee.css';
import EmployeeNavBar from '../Employee/EmployeeNavbar';
import Employeesidebar from './Employeesidebar';
import LeaveApplication from './LeaveApplication';
import SalaryReport from '../SalaryReport';
import ImageSlider from '../ImageSlider';
import MyProfile from './Myprofile';
import EmployeeResignation from './EmployeeResignation'; 
import EmployeeSetting from './EmployeeSetting';
import Employeehelp from './Employeehelp';
import Employeelogout from './Employeelogout';
import RaiseTicket from './Employee Tickets/Raiseticket';
import Myticket from './Employee Tickets/Myticket';

const Employee = () => {
  const [userData, setUserData] = useState(null);
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [tickets, setTickets] = useState([]);

  /*
  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = JSON.parse(localStorage.getItem('user'));
    if (storedUserData) {
      setUserData(storedUserData);
    }
  }, []);
  */
  
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      axios.get(`http://localhost:5008/api/users/profile/${storedUser.email}`)
        .then(response => setUserData(response.data))
        .catch(error => console.error('Error fetching profile data:', error));
    }
  }, []);

  const handleButtonClick = (componentName) => {
    setSelectedComponent(componentName);
  };

  const addTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <main>
      <EmployeeNavBar onButtonClick={handleButtonClick} />
      <ImageSlider />
      <div className="employee-page">
        <Employeesidebar onButtonClick={handleButtonClick} />
        <div className="content">
          <Routes>
            <Route path="/leave-application" element={<LeaveApplication />} />
            <Route path="/salary-reports" element={<SalaryReport />} />
            <Route path="/myprofile" element={<MyProfile userData={userData} />} />
            <Route path="/employeeresignation" element={<EmployeeResignation />} />
            <Route path="/employeesetting" element={<EmployeeSetting />} />
            <Route path="/employeehelp" element={<Employeehelp />} />
            <Route path="/employeelogout" element={<Employeelogout />} />
            <Route path="/raiseticket" element={<RaiseTicket addTicket={addTicket} />} />
            <Route path="/myticket" element={<Myticket tickets={tickets} />} />
            <Route path="/" element={
              <div>
                <div className={`component ${selectedComponent === 'leave' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'leave' && <LeaveApplication />}
                </div>
                <div className={`component ${selectedComponent === 'salaryReports' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'salaryReports' && <SalaryReport />}
                </div>
                <div className={`component ${selectedComponent === 'myProfile' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'myProfile' && <MyProfile userData={userData} />}
                </div>
                <div className={`component ${selectedComponent === 'employeeresignation' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeeresignation' && <EmployeeResignation />}
                </div>
                <div className={`component ${selectedComponent === 'employeesetting' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeesetting' && <EmployeeSetting />}
                </div>
                <div className={`component ${selectedComponent === 'employeehelp' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeehelp' && <Employeehelp />}
                </div>
                <div className={`component ${selectedComponent === 'employeelogout' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'employeelogout' && <Employeelogout />}
                </div>
                <div className={`component ${selectedComponent === 'raiseticket' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'raiseticket' && <RaiseTicket addTicket={addTicket} />}
                </div>
                <div className={`component ${selectedComponent === 'myticket' ? 'employee-slide employee-slide-in' : 'employee-slide'}`}>
                  {selectedComponent === 'myticket' && <Myticket tickets={tickets} />}
                </div>
              </div>
            } />
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default Employee;
