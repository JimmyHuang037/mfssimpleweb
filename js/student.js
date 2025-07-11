// Fetch student data from an API
async function fetchStudents() {
    try {
        const response = await fetch('/api/students'); // Replace with your actual API endpoint
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const students = await response.json();
        console.log('Fetched students:', students);
        // You can process and display the student data here
    } catch (error) {
        console.error('Error fetching students:', error);
    }
}

// Call fetchStudents on window load or as needed
document.addEventListener('DOMContentLoaded', fetchStudents);