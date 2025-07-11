document.addEventListener('DOMContentLoaded', function () {
  const loginForm = document.getElementById('login-form');
  const errorMsg = document.getElementById('error-msg');

  // 从 URL 中提取参数
  const params = new URLSearchParams(window.location.search);
  const urlUsername = params.get('student_id');
  const urlPassword = params.get('password');

  // 如果 URL 带参数，自动尝试登录
  if (urlUsername && urlPassword) {
    login(urlUsername, urlPassword);
  }

  // 表单提交
  loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const username = document.getElementById('student_id').value.trim();
    const password = document.getElementById('password').value.trim();
    login(username, password);
  });

  // 登录函数封装
  async function login(student_id, password) {
    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ student_id, password })
      });

      if (!response.ok) throw new Error('网络错误');

      const data = await response.json();
      console.log('登录响应:', data);  // 添加调试日志
      if (data.success) {
        window.location.href = 'html/index.html';
      } else {
        errorMsg.textContent = '用户名或密码错误';
        errorMsg.style.display = 'block';
        console.error('登录响应:', data);  // 添加详细的错误信息
      }
    } catch (err) {
      errorMsg.textContent = '登录失败，请检查网络或服务器。';
      errorMsg.style.display = 'block';
      console.error('登录错误:', err);  // 添加网络错误日志
    }
  }
});
