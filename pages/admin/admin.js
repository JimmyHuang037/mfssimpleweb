// Fetch student data from the API and populate the table
fetch('http://localhost:5000/api/students/')
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

// 页面加载完成后执行
window.onload = function() {
    // 创建 Upload 按钮
    var uploadButton = document.createElement('button');
    uploadButton.innerHTML = 'Upload';
    uploadButton.onclick = function() {
        window.location.href = '/upload/upload.html';
    };

    // 创建 Logout 按钮
    var logoutButton = document.createElement('button');
    logoutButton.innerHTML = 'Logout';
    logoutButton.onclick = function() {
        // 清除登录状态逻辑，比如清除 localStorage/token
        // 这里简单跳转回登录页
        window.location.href = '/login/login.html';
    };

    // 将按钮添加到页面顶部，先添加 Logout，再添加 Upload，使得 Upload 在左，Logout 在右（也可以调整）
    var headerDiv = document.createElement('div');
    headerDiv.style.display = 'flex';
    headerDiv.style.justifyContent = 'flex-start';
    headerDiv.style.gap = '10px';
    headerDiv.style.margin = '10px';

    headerDiv.appendChild(uploadButton);
    headerDiv.appendChild(logoutButton);

    document.body.insertBefore(headerDiv, document.body.firstChild);
};
