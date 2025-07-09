// Fetch student data from the API and populate the table
fetch('http://localhost:5000/students')
    .then(response => response.json())
    .then(data => {
        const tbody = document.querySelector('#studentTable tbody');
        tbody.innerHTML = '';
        data.forEach(student => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.password}</td>
                <td>${student.student_id}</td>
            `;
            tbody.appendChild(row);
        });
    })
    .catch(error => {
        console.error('Error fetching student data:', error);
        const tbody = document.querySelector('#studentTable tbody');
        tbody.innerHTML = '<tr><td colspan="4">Failed to load student data.</td></tr>';
    });
