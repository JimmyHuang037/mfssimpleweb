document.getElementById('uploadForm').addEventListener('submit', function(e) {
  e.preventDefault(); // 防止表单刷新页面

  const fileInput = document.getElementById('fileInput');
  const file = fileInput.files[0];

  if (!file) {
    alert("❌ 选一个文件！");
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  fetch('http://localhost:5000/import', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('HTTP 错误，状态码：' + response.status);
    }
    return response.json();
  })
  .then(data => {
    console.log('✅ 服务器返回：', data);
    if (data.status === 'success') {
      document.getElementById('message').innerText = data.message + '，即将跳转...';
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 1500);
    } else {
      document.getElementById('message').innerText = '❌ 上传失败: ' + (data.error || '未知错误');
    }
  })
  .catch(err => {
    console.error('上传失败:', err);
    document.getElementById('message').innerText = '❌ 上传时出错: ' + err.message;
  });
});
