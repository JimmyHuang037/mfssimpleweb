// Fetch student data from the API and populate the table
fetch('http://localhost:5000/')
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
    // 创建上传按钮
    var uploadButton = document.createElement('button');
    uploadButton.innerHTML = 'Upload';
    
    // 绑定点击事件处理函数
    uploadButton.onclick = function() {
        window.location.href = 'upload.html';
    };
    
    // 将按钮添加到页面顶部
    document.body.insertBefore(uploadButton, document.body.firstChild);
};
