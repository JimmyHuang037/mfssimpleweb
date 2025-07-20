import ApiService from "../../services/api-service.js";

const UploadModule = {
  async init() {
    this.cacheElements();
    this.setupEventListeners();
  },

  cacheElements() {
    this.elements = {
      form: document.getElementById("uploadForm"),
      fileInput: document.getElementById("fileInput"),
      message: document.getElementById("message"),
    };
  },

  setupEventListeners() {
    this.elements.form.addEventListener("submit", this.handleSubmit.bind(this));
  },

  async handleSubmit(e) {
    e.preventDefault();
    if (!this.validateFile()) return;

    try {
      this.showMessage("上传中...", "loading");
      const data = await ApiService.uploadFile(
        this.elements.fileInput.files[0],
      );
      this.handleUploadSuccess(data);
    } catch (err) {
      this.showMessage(`上传失败: ${err.message}`, "error");
    }
  },

  validateFile() {
    const file = this.elements.fileInput.files[0];
    if (!file) {
      this.showMessage("请选择文件", "error");
      return false;
    }
    return true;
  },

  handleUploadSuccess(data) {
    this.showMessage(`${data.message}，即将跳转...`, "success");
    setTimeout(() => {
      window.location.href = "/pages/admin/admin.html";
    }, 1500);
  },

  showMessage(message, type) {
    this.elements.message.textContent = message;
    this.elements.message.style.color =
      type === "error"
        ? "var(--spidey-red)"
        : type === "success"
          ? "var(--spidey-cyan)"
          : "var(--spidey-yellow)";
  },
};

document.addEventListener("DOMContentLoaded", () => UploadModule.init());
