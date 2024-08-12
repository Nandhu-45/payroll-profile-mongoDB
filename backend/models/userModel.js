const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  personalNumber: String,
  personalEmail: String,
  bloodGroup: String,
  maritalStatus: String,
  nationality: String,
  permanentAddress: String,
  currentAddress: String,
  fullName: String,
  employeeId: String,
  workEmail: String,
  workNumber: String,
  previousJobTitle: String,
  previousCompany: String,
  totalExperience: String,
  highestQualification: String,
  linkedIn: String,
  certifications: String,
  skills: String
});

const User = mongoose.model('User', userSchema);

module.exports = User;
