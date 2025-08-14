const newsletterForm = document.querySelector('.newsletter__form');
const newsletterSection = document.querySelector('.newsletter');
const successWrapper = document.querySelector('.success__wrapper');
const successMessage = document.querySelector('.success__message');
const dismissButton = document.querySelector('.success__dismiss--button');
const emailInput = document.querySelector('#email');

// Store the element that had focus before showing success message
let previouslyFocusedElement = null;

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

// Add keyboard event handling for the success message
successWrapper.addEventListener('keydown', function(e) {
    // Handle Escape key to dismiss the message
    if (e.key === 'Escape') {
        hideSuccessMessage();
        resetForm();
    }
    
    // Trap focus within the success message modal
    trapFocus(e);
});

// Function to trap focus within the success message
function trapFocus(e) {
    if (e.key !== 'Tab') return;
    
    const focusableElements = successWrapper.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
        }
    } else {
        // Tab
        if (document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }
}

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
    // Store the currently focused element
    previouslyFocusedElement = document.activeElement;
    
    newsletterSection.style.display = 'none';
    successWrapper.style.display = 'flex';
    
    // Move focus to the dismiss button after a brief delay to ensure the element is visible
    setTimeout(() => {
        dismissButton.focus();
    }, 100);
}

function hideSuccessMessage() {
    successWrapper.style.display = 'none';
    newsletterSection.style.display = '';
    
    // Return focus to the previously focused element, or default to email input
    if (previouslyFocusedElement && previouslyFocusedElement.offsetParent !== null) {
        previouslyFocusedElement.focus();
    } else {
        emailInput.focus();
    }
    
    // Clear the stored reference
    previouslyFocusedElement = null;
}

function resetForm() {
    emailInput.value = '';
    hideEmailError();
}
