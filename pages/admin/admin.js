import ApiService from "../../services/api-service.js";

const AdminModule = {
  async init() {
    this.cacheElements();
    this.setupUI();
    this.setupEventListeners();
    await this.loadStudents();
  },

  cacheElements() {
    this.elements = {
      studentTable: document.getElementById("studentTable"),
      searchInput: document.getElementById("search-input"),
    };
  },

  setupUI() {
    document.body.insertAdjacentHTML("afterbegin", this.createHeaderButtons());
  },

  createHeaderButtons() {
    return `
      <div class="admin-header">
        <button id="upload-btn">上传</button>
        <button id="logout-btn">退出</button>
      </div>
    `;
  },

  setupEventListeners() {
    document
      .getElementById("upload-btn")
      .addEventListener(
        "click",
        () => (window.location.href = "/pages/upload/upload.html")
      );

    document
      .getElementById("logout-btn")
      .addEventListener("click", this.handleLogout.bind(this));

    this.elements.searchInput.addEventListener(
      "input",
      this.handleSearch.bind(this)
    );
  },

  async loadStudents() {
    try {
      this.students = await ApiService.getStudents();
      this.renderStudents(this.students);
    } catch (error) {
      console.error("加载学生数据失败:", error);
    }
  },

  renderStudents(students) {
    this.elements.studentTable.querySelector("tbody").innerHTML = students
      .map((student) => this.createStudentRow(student))
      .join("");
  },

  createStudentRow(student) {
    return `
      <tr>
        <td>${student.id}</td>
        <td>${student.name}</td>
        <td>${student.class}</td>
        <td>
          <button class="edit-btn" data-id="${student.id}">编辑</button>
          <button class="delete-btn" data-id="${student.id}">删除</button>
        </td>
      </tr>
    `;
  },

  handleSearch(e) {
    const term = e.target.value.toLowerCase();
    const filtered = this.students.filter(
      (student) =>
        student.name.toLowerCase().includes(term) ||
        student.id.toString().includes(term)
    );
    this.renderStudents(filtered);
  },

  handleLogout() {
    sessionStorage.removeItem("authToken");
    window.location.href = "/pages/login/login.html";
  },
};

document.addEventListener("DOMContentLoaded", () => AdminModule.init());
