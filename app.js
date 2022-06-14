const validator = require('validator');

console.log(process.argv);

const Emails = [
    'fetraadlùz@gmail.com',
    'xjklczdldszxcklm',
    'jkzcnklqsdnl@gmail.com'
]

Emails.forEach((email) => {
    console.log(
        '%s : %s',
        email,
        validator.isEmail(email) ? 'OK' : 'KO'
    );
});