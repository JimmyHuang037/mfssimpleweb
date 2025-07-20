const API_BASE = "http://localhost:5000/api";

class ApiService {
  // 用户认证
  static async login(credentials) {
    const response = await fetch(`${API_BASE}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    });
    return this._handleResponse(response);
  }

  // 学生数据
  static async getStudents() {
    const response = await fetch(`${API_BASE}/students/`);
    return this._handleResponse(response);
  }

  static async getStudent(id) {
    const response = await fetch(`${API_BASE}/students/${id}`);
    return this._handleResponse(response);
  }

  // 文件上传
  static async uploadFile(file) {
    const formData = new FormData();
    formData.append("file", file);
    const response = await fetch(`${API_BASE}/upload/import`, {
      method: "POST",
      body: formData,
    });
    return this._handleResponse(response);
  }

  // 私有方法：统一响应处理
  static async _handleResponse(response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `请求失败: ${response.status}`);
    }
    return response.json();
  }
}

export default ApiService;
