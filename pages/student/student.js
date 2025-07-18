const params = new URLSearchParams(window.location.search);
const studentId = params.get('student_id');

async function loadStudentData() {
  try {
    
    // 获取成绩
    const scoresRes = await fetch(`http://localhost:5000/api/students/${studentId}`);
    const student = await scoresRes.json();  // student 是对象
    const scores = student.scores || [];     // scores 是数组

    const gradesTable = document.getElementById('grades-table').querySelector('tbody');
    gradesTable.innerHTML = '';
    scores.forEach(score => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${score.subject}</td> 
        <td>${score.score}</td>
      `;
      gradesTable.appendChild(row);
    });

  } catch (error) {
    console.error('Error loading student data:', error);
  }
}

    // 退出登录
    document.getElementById('logout').addEventListener('click', function() {
      fetch('http://localhost:5000/logout', {
        method: 'POST'
      }).then(() => {
        window.location.href = '/pages/login/login.html';
      });
    });

    // 页面加载时获取数据
    document.addEventListener('DOMContentLoaded', loadStudentData);