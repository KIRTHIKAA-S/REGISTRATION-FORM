document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    let isValid = true;
    const fields = ['firstname', 'lastname', 'email', 'contact', 'address', 'city'];

    fields.forEach(function(field) {
        const input = document.getElementById(field);
        if (input.value.trim() === '') {
            isValid = false;
            alert(`Please fill out the ${field} field.`);
            input.focus();
            return;
        }
    });

    if (isValid) {
        // Replace the form with a "Registration Complete" message
        document.body.innerHTML = '<div style="display: flex; justify-content: center; align-items: center; height: 100vh;"><h1>Registration Complete</h1></div>';
    }
});
