import dom from '../../lib/dom';

export default class Application {
    constructor() {
        console.log('Hello world!');

        var form = dom.$('form');
        var emailField = form.email;
        var passwordField = form.password;
        var output = dom.$('#output');
        var submitButton = dom.$('input[name=submit]');

        form.addEventListener('submit', function(e) {
            var password = passwordField.value;
            var email = emailField.value;

            var errorOutput = '';
            if (/\d{2}/.test(password) == false)
                errorOutput = 'The password should contain exactly two digits';

            output.innerText = errorOutput;

            e.preventDefault();
        });
    }
}
