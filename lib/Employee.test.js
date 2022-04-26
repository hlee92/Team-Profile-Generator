const Employee = require('../lib/Employee');
const employee = new Employee('hanna', 'h@gmail.com', '777');

test('test to see if we can get the contructor values for employee object', () => {
    expect(employee.name).toBe('hanna');
    expect(employee.email).toBe('h@gmail.com');
    expect(employee.id).toBe('777');
});

test('test to see if we can get the name from the getName() method', () => {
    expect(employee.getName()).toBe('hanna');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(employee.getEmail()).toBe('h@gmail.com');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(employee.getid()).toBe('777');
});

test('test to see if we can get the role from the getRole() method', () => {
    expect(employee.getRole()).toBe('Employee');
});




