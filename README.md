# SimpleWeb 学生信息管理系统

## 项目简介
SimpleWeb 是一个极简风格的学生信息管理前端项目，主页面为学生列表，支持 Excel 文件导入，整体 UI 采用蜘蛛侠：纵横宇宙风格。
所有页面文件均位于 html/ 目录下，根目录无 .html 文件。

## 目录结构
```
├── assets/         # 静态资源（如图片、logo等）
├── css/            # 样式文件（style.css）
├── js/             # 脚本文件（index.js, upload.js）
├── html/           # 所有页面（index.html, upload.html）
├── README.md       # 项目说明
```

## 功能说明
- 主页面（html/index.html）：自动从后端 /students 接口获取数据并以表格展示。
- 导入页面（html/upload.html）：上传 Excel 文件（.xlsx/.xls），通过 /import 接口导入学生信息。

## 快速开始
1. 启动后端服务（需有 /students 和 /import 接口，端口5000）。
2. 启动本地静态服务器（如 Python）：
   ```sh
   python3 -m http.server 8080
   ```
   然后访问：http://localhost:8080/html/index.html
3. 访问主页面（html/index.html）查看学生列表。
4. 访问 html/upload.html 上传 Excel 文件导入数据。

## 文件分离说明
- 所有样式在 `css/style.css`
- 所有 JS 逻辑在 `js/index.js` 和 `js/upload.js`
- 静态资源可放在 `assets/`

## 依赖环境
- 现代浏览器
- 后端 API 支持（如 Flask、FastAPI 等）

## 特色亮点
- 蜘蛛侠纵横宇宙风格 UI，酷炫配色
- 响应式设计，适配手机和桌面
- 结构清晰，易于维护和扩展

## 注意事项
- 确保服务器接口路径与前端请求路径一致
- 上传文件格式必须为 Excel 文件（.xlsx 或 .xls）

---
如需自定义风格或功能，请修改 css/js/assets/html 目录下的文件。
