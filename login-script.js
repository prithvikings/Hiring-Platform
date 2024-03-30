const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});
document.addEventListener('DOMContentLoaded', function () {
    const signUpForm = document.querySelector('.sign-up form');

    signUpForm.addEventListener('submit', function (event) {
        event.preventDefault(); 

        
        alert('Account created successfully!');

        
    });

    const toggleButton = document.querySelector('.toggle');

    toggleButton.addEventListener('click', function () {
        const container = document.getElementById('container');
        container.classList.toggle('sign-up-mode');
    });
});
