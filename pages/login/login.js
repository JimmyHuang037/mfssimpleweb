import ApiService from "../../services/api-service.js";

// 保持原有代码不变，但确保文件以模块方式加载
const LoginModule = {
  async init() {
    this.cacheElements();
    this.setupEventListeners();
  },

  cacheElements() {
    this.elements = {
      form: document.getElementById("login-form"),
      username: document.getElementById("username"),
      password: document.getElementById("password"),
      errorMsg: document.getElementById("error-msg"),
    };
  },

  setupEventListeners() {
    this.elements.form.addEventListener("submit", this.handleSubmit.bind(this));
  },

  async handleSubmit(e) {
    e.preventDefault();
    if (this.isAdminLogin()) return;
    await this.processStudentLogin();
  },

  isAdminLogin() {
    const { username, password } = this.elements;
    if (username.value === "admin" && password.value === "admin") {
      window.location.href = "/pages/admin/admin.html";
      return true;
    }
    return false;
  },

  async processStudentLogin() {
    try {
      const data = await ApiService.login(this.getCredentials());
      this.handleLoginSuccess(data);
    } catch (err) {
      this.showError(err.message);
    }
  },

  getCredentials() {
    return {
      student_id: this.elements.username.value.trim(),
      password: this.elements.password.value.trim(),
    };
  },

  handleLoginSuccess(data) {
    sessionStorage.setItem("authToken", data.token);
    const studentId =
      data.student?.student_id || data.student_id || data.userId;
    window.location.href = `/pages/student/student.html?student_id=${studentId}`;
  },

  showError(message) {
    this.elements.errorMsg.textContent = message;
    this.elements.errorMsg.style.display = "block";
  },
};

document.addEventListener("DOMContentLoaded", () => LoginModule.init());
