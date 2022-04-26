const Intern = require('../lib/Intern');
const intern = new Intern('hanna', 'h@gmail.com', '777', 'UMD');

test('test to see if we can get the contructor values for intern object', () => {
    expect(intern.name).toBe('hanna');
    expect(intern.email).toBe('h@gmail.com');
    expect(intern.id).toBe('777');
    expect(intern.school).toBe('UMD');
});

test('test to see if we can get the name from the getName() method', () => {
    expect(intern.getName()).toBe('hanna');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(intern.getEmail()).toBe('h@gmail.com');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(intern.getid()).toBe('777');
});

test('test to see if we can get the office number from the getSchool() method', () => {
    expect(intern.getSchool()).toBe('UMD');
});

test('test to see if we can get the role from the getRole() method', () => {
    expect(intern.getRole()).toBe('Intern');
});




