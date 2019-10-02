const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

var salt = bcrypt.genSaltSync(10);

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    passwordResetToken: {
        type: String,
        select: false,
    },
    passwordResetExpires: {
        type: Date,
        select: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

UserSchema.pre('save', async function(next){
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;

    next();
});

const User = mongoose.model('User', UserSchema);

module.exports = User;