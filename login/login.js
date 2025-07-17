document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const errorMsg = document.getElementById('error-msg');

  // 表单提交
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const student_id = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    
    // 检查是否是admin登录
    if (student_id === 'admin' && password === 'admin') {
      window.location.href = '/admin/admin.html';
    } else {
      login(student_id, password);
    }
  });

  // 学生登录函数
  async function login(student_id, password) {
    try {
      const response = await fetch('http://localhost:5000/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_id, password })
      });

      if (!response.ok) throw new Error('网络错误');

      const data = await response.json();
      if (data.success) {
        window.location.href = `/student/student.html?student_id=${student_id}`;
      } else {
        errorMsg.textContent = data.message || '用户名或密码错误';
        errorMsg.style.display = 'block';
      }
    } catch (err) {
      errorMsg.textContent = '登录失败，请检查网络或服务器。';
      errorMsg.style.display = 'block';
      console.error('登录错误:', err);
    }
  }
});


