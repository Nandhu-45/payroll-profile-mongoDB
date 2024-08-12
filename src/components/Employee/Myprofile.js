

//working fine
// import React from 'react';
// import './Myprofile.css'; 

// const MyProfile = ({ userData }) => {
//   return (
//     <div className="profile-container">
//       <h2>My Profile</h2>
//       {userData ? (
//         <div>
//           <p><strong>Full Name:</strong> {userData.fullName}</p>
//           <p><strong>Email:</strong> {userData.email}</p>
//           <p><strong>Employee ID:</strong> {userData.employeeId}</p>
//           <p><strong>Work Email:</strong> {userData.workEmail}</p>
//           <p><strong>Personal Number:</strong> {userData.personalNumber}</p>
//           <p><strong>Skills:</strong> {userData.skills}</p>
//           <p><strong>Blood Group:</strong> {userData.bloodGroup}</p>
//           <p><strong>Marital Status:</strong> {userData.maritalStatus}</p>
//           <p><strong>Nationality:</strong> {userData.nationality}</p>
//           <p><strong>Permanent Address:</strong> {userData.permanentAddress}</p>
//           <p><strong>Current Address:</strong> {userData.currentAddress}</p>
//           <p><strong>Previous Job Title:</strong> {userData.previousJobTitle}</p>
//           <p><strong>Previous Company:</strong> {userData.previousCompany}</p>
//           <p><strong>Total Experience:</strong> {userData.totalExperience}</p>
//           <p><strong>Highest Qualification:</strong> {userData.highestQualification}</p>
//           <p><strong>LinkedIn:</strong> <a href={userData.linkedIn} target="_blank" rel="noopener noreferrer">{userData.linkedIn}</a></p>
//           <p><strong>Certifications:</strong> {userData.certifications}</p>
//           {/* Add other profile fields here as needed */}
//         </div>
//       ) : (
//         <p>Loading profile...</p>
//       )}
//     </div>
//   );
// };

import React from 'react';
import './Myprofile.css'; 

const MyProfile = ({ userData }) => {
  
  return (
    
    <div className="profile-container">
    <h1>My Profile</h1>
    <h2>Personal Information</h2>
    {userData ? (
     
          <div>
            <p><strong>Personal Number:</strong> {userData.personalNumber}</p>
            <p><strong>Personal Email:</strong> {userData.personalEmail}</p>
            <p><strong>Blood Group:</strong> {userData.bloodGroup}</p>
            <p><strong>Marital Status:</strong> {userData.maritalStatus}</p>
            <p><strong>Nationality:</strong> {userData.nationality}</p>
            <p><strong>Permanent Address:</strong> {userData.permanentAddress}</p>
            <p><strong>Current Address:</strong> {userData.currentAddress}</p>
      
      
        <h2>Employee Information</h2>
        
          
          
            <p><strong>Full Name:</strong> {userData.fullName}</p>
            <p><strong>Employee ID:</strong> {userData.employeeId}</p>
            <p><strong>Work Email:</strong> {userData.workEmail}</p>
            <p><strong>Work Number:</strong> {userData.workNumber}</p>
            
        
         <h2>Personal and Academic Background</h2>
          
            <p><strong>Previous Job Title:</strong> {userData.previousJobTitle}</p>
            <p><strong>Previous Company:</strong> {userData.previousCompany}</p>
            <p><strong>Total Experience:</strong> {userData.totalExperience} years</p>
            <p><strong>Highest Qualification:</strong> {userData.highestQualification}</p>
            <p><strong>LinkedIn Profile:</strong> <a href={userData.linkedIn} target="_blank" rel="noopener noreferrer">{userData.linkedIn}</a></p>
            <p><strong>Certifications:</strong> {userData.certifications}</p>
            <p><strong>Skills:</strong> {userData.skills}</p>
            
          </div>
       ) : (
          <p>Loading profile...</p>
        )}
      </div>
    );
  };

export default MyProfile;