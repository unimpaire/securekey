const crypto = require('crypto');
const Chance = require('chance');
const validator = require('validator');

const chance = new Chance();

function generatePassword({ length = 8, numbers = true, symbols = true, uppercase = true } = {}) {
  let charset = 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) charset += '0123456789';
  if (symbols) charset += '!@#$%^&*()_+-=[]{}|;:\'",.<>/?';
  if (uppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

  let password = '';
  for (let i = 0; i < length; i++) {
    const randomByte = crypto.randomBytes(1);
    const index = randomByte[0] % charset.length;
    password += charset[index];
  }

  return password;
}

module.exports = generatePassword;
