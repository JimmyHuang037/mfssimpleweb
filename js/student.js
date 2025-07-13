const params = new URLSearchParams(window.location.search);
const studentId = params.get('student_id');

async function loadStudentData() {
  try {
    // 获取学生信息
    const studentRes = await fetch(`http://localhost:5000/api/students/${studentId}`);
    const studentData = await studentRes.json();

    document.getElementById('info-container').innerHTML = `
      <p><strong>ID:</strong> ${studentData.student_id}</p>
      <p><strong>Name:</strong> ${studentData.name}</p>
    `;

    // 获取成绩
    const scoresRes = await fetch(`http://localhost:5000/api/scores/${studentId}`);
    const scores = await scoresRes.json();

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
        window.location.href = '../login.html';
      });
    });

    // 页面加载时获取数据
    document.addEventListener('DOMContentLoaded', loadStudentData);
