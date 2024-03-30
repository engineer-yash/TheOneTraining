// Test validateUsername function
test('validateUsername should return true when username is valid', () => {
  const $username = { val: jest.fn().mockReturnValue('validUsername123') };
  expect(validateUsername($username)).toBe(true);
});

test('validateUsername should return false when username is empty', () => {
  const $username = { val: jest.fn().mockReturnValue('') };
  expect(validateUsername($username)).toBe(false);
});

test('validateUsername should return false when username is less than 10 characters', () => {
  const $username = { val: jest.fn().mockReturnValue('short') };
  expect(validateUsername($username)).toBe(false);
});

test('validateUsername should return false when username is more than 20 characters', () => {
  const $username = { val: jest.fn().mockReturnValue('thisIsAVeryLongUsername') };
  expect(validateUsername($username)).toBe(false);
});

test('validateUsername should return false when username contains invalid characters', () => {
  const $username = { val: jest.fn().mockReturnValue('invalid username') };
  expect(validateUsername($username)).toBe(false);
});

// Test validateEmail function
test('validateEmail should set error message and red border when email is empty', () => {
  const $email = { val: jest.fn().mockReturnValue('') };
  const $emailError = { text: jest.fn() };
  const $emailElement = { css: jest.fn() };
  validateEmail($email, $emailError, $emailElement);
  expect($emailError.text).toHaveBeenCalledWith('Email is required *');
  expect($emailElement.css).toHaveBeenCalled();
});

test('validateEmail should set error message and red border when email is invalid', () => {
  const $email = { val: jest.fn().mockReturnValue('invalidEmail') };
  const $emailError = { text: jest.fn() };
  const $emailElement = { css: jest.fn() };
  validateEmail($email, $emailError, $emailElement);
  expect($emailError.text).toHaveBeenCalledWith('Invalid email format *');
  expect($emailElement.css).toHaveBeenCalled();
});

test('validateEmail should clear error message and set green border when email is valid', () => {
  const $email = { val: jest.fn().mockReturnValue('valid@example.com') };
  const $emailError = { text: jest.fn() };
  const $emailElement = { css: jest.fn() };
  validateEmail($email, $emailError, $emailElement);
  expect($emailError.text).toHaveBeenCalledWith('');
  expect($emailElement.css).toHaveBeenCalled();
});

// Add more test cases for other functions...