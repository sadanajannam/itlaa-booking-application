const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const driverSchema = new mongoose.Schema({
  name: { type: String, required: true },
  vehicleNumber: { type: String, required: true, unique: true },
  licenseNumber: { type: String, required: true },
  password: { type: String, required: true },
  available: { type: Boolean, default: true },
  role: { type: String, default: 'driver' },
});

driverSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

module.exports = mongoose.model('Driver', driverSchema);
