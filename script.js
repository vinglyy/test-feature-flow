<<<<<<< int-feature
            <h1>Flow Test Application with new feature</h1>
=======
            <h1>Flow Test Application INT</h1>
>>>>>>> int

// Navigation - Switch between sections
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const sectionId = link.getAttribute('data-section');
        switchSection(sectionId);
    });
});
//sneaky change
function switchSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show the selected section
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }

    // Update active link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.style.borderBottom = '';
    });
    document.querySelector(`[data-section="${sectionId}"]`).style.borderBottom = '3px solid white';
}

// Form submission handler
document.getElementById('testForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    const resultDiv = document.getElementById('formResult');

    // Simulate form validation
    if (formData.name && formData.email && formData.message) {
        resultDiv.className = 'form-result success';
        resultDiv.innerHTML = `
            <strong>Success!</strong> Form submitted with:
            <ul style="margin-top: 0.5rem; margin-left: 1.5rem;">
                <li>Name: ${formData.name}</li>
                <li>Email: ${formData.email}</li>
                <li>Message: ${formData.message}</li>
            </ul>
        `;
        document.getElementById('testForm').reset();
    } else {
        resultDiv.className = 'form-result error';
        resultDiv.innerHTML = '<strong>Error!</strong> Please fill in all required fields.';
    }
});

// Helper function for alerts
function showAlert(message) {
    alert(message);
}

// Initialize - show home section by default
window.addEventListener('DOMContentLoaded', () => {
    switchSection('home');
});
