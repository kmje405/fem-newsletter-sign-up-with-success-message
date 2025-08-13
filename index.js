const newsletterForm = document.querySelector('.newsletter__form');
const newsletterSection = document.querySelector('.newsletter');
const successWrapper = document.querySelector('.success__wrapper');
const successMessage = document.querySelector('.success__message');
const dismissButton = document.querySelector('.success__dismiss--button');
const emailInput = document.querySelector('#email');


newsletterForm.addEventListener('submit', function(e) {
    e.preventDefault(); 
    
    const email = emailInput.value.trim();
    
    
    if (!email || !isValidEmail(email)) {
        showEmailError();
        isValidEmail(email)
        return;
    }
    
    hideEmailError();
    updateSuccessMessage(email);
    showSuccessMessage();
});

dismissButton.addEventListener('click', function() {
    hideSuccessMessage();
    resetForm();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showEmailError() {
    const errorElement = document.querySelector('#email-error');
    const emailField = document.querySelector('#email');
    
    errorElement.hidden = false;
    emailField.style.borderColor = 'var(--c-red)';
    emailField.style.backgroundColor = 'hsl(4 100% 67% / 0.1)';
}

function hideEmailError() {
    const errorElement = document.querySelector('#email-error');
    const emailField = document.querySelector('#email');
    
    errorElement.hidden = true;
    emailField.style.borderColor = '';
    emailField.style.backgroundColor = '';
}

function updateSuccessMessage(email) {
    successMessage.textContent = `A confirmation email has been sent to ${email}. Please open it and click the button inside to confirm your subscription.`;
}

function showSuccessMessage() {
    newsletterSection.style.display = 'none';
    successWrapper.style.display = 'flex';
}

function hideSuccessMessage() {
    successWrapper.style.display = 'none';
    newsletterSection.style.display = '';
}

function resetForm() {
    emailInput.value = '';
    hideEmailError();
}
