const Engineer = require('../lib/Engineer');
const engineer = new Engineer('hanna', 'h@gmail.com', '777', 'hlee92');

test('test to see if we can get the contructor values for engineer object', () => {
    expect(engineer.name).toBe('hanna');
    expect(engineer.email).toBe('h@gmail.com');
    expect(engineer.id).toBe('777');
    expect(engineer.github).toBe('hlee92')
});

test('test to see if we can get the name from the getName() method', () => {
    expect(engineer.getName()).toBe('hanna');
});

test('test to see if we can get the email from the getEmail() method', () => {
    expect(engineer.getEmail()).toBe('h@gmail.com');
});

test('test to see if we can get the id from the getId() method', () => {
    expect(engineer.getid()).toBe('777');
});

test('test to see if we can get the github from the getGithub() method', () => {
    expect(engineer.getGithub()).toBe('hlee92');
});

test('test to see if we can get the role from the getRole() method', () => {
    expect(engineer.getRole()).toBe('Engineer');
});




