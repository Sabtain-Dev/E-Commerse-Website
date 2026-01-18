document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Add your form submission logic here
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
});

function redirectToSignup() {
    window.location.href = "signup.html"; // Replace with the actual URL of the signup page
}
