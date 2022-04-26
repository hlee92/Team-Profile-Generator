const Manager = require('../lib/Manager');
const manager = new Manager('hanna', 'h@gmail.com', '777', '1234567890');

test('test to see if we can get the contructor values for manager object', () => {
    expect(manager.name).toBe('hanna');
    expect(manager.email).toBe('h@gmail.com');
    expect(manager.id).toBe('777');
    expect(manager.officeNumber).toBe('1234567890');
});

test('test to see if we can get the name from the getName() method', () => {
    expect(manager.getName()).toBe('hanna');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(manager.getEmail()).toBe('h@gmail.com');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(manager.getid()).toBe('777');
});

test('test to see if we can get the office number from the getOfficeNumeber() method', () => {
    expect(manager.getOfficeNumber()).toBe('1234567890');
});

test('test to see if we can get the role from the getRole() method', () => {
    expect(manager.getRole()).toBe('Manager');
});




