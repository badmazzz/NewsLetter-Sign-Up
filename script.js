function isValidEmail(email) {
    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function subscribe() {
    const emailInput = document.getElementById('email');
    const resultMessage = document.getElementById('result');
    
    // Get the entered email
    const email = emailInput.value.trim();
    
    // Check if the email is valid
    if (isValidEmail(email)) {
        // You can perform additional actions here, e.g., submitting the form
        let container = document.querySelector('.container');
        let container2 = document.querySelector('.container2');
        container.classList.add('hide');
        container2.classList.remove('hide')
        let result = document.getElementById('success')
        result.innerHTML = email

    } else {
        resultMessage.textContent = 'Valid email required.';
        emailInput.style.backgroundColor = 'rgba(255, 88, 88, 0.173)';
        emailInput.style.border = '2px solid rgba(255, 88, 88, 0.473)';
        emailInput.style.color = 'rgba(255, 88, 88, 0.873)';
    }
}
    function dis() {
        let container = document.querySelector('.container');
        let container2 = document.querySelector('.container2');
        container.classList.remove('hide');
        container2.classList.add('hide')
        emailInput.value = '';
    }