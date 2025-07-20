import ApiService from "../../services/api-service.js";

const StudentModule = {
  async init() {
    this.studentId = this.getStudentId();
    this.cacheElements();
    this.setupEventListeners();
    await this.loadData();
  },

  getStudentId() {
    return new URLSearchParams(window.location.search).get("student_id");
  },

  cacheElements() {
    this.elements = {
      gradesTable: document.getElementById("grades-table"),
      logoutBtn: document.getElementById("logout"),
    };
  },

  setupEventListeners() {
    this.elements.logoutBtn.addEventListener(
      "click",
      this.handleLogout.bind(this),
    );
  },

  async loadData() {
    try {
      const student = await ApiService.getStudent(this.studentId);
      this.renderGrades(student.scores);
    } catch (error) {
      this.showError("加载成绩失败");
    }
  },

  renderGrades(scores = []) {
    this.elements.gradesTable.querySelector("tbody").innerHTML = scores
      .map((score) => this.createGradeRow(score))
      .join("");
  },

  createGradeRow(score) {
    return `
      <tr>
        <td>${score.subject}</td>
        <td>${score.score}</td>
      </tr>
    `;
  },

  handleLogout() {
    sessionStorage.removeItem("authToken");
    window.location.href = "/pages/login/login.html";
  },
};

document.addEventListener("DOMContentLoaded", () => StudentModule.init());
