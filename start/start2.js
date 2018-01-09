function greeter(person) {
    return 'hello,' + person.firstName + " " + person.lastName;
}
var user = { firstName: 'vi', lastName: 'wm' };
document.body.innerHTML = greeter(user);
