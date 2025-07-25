# SimpleWeb 学生信息管理系统

## 项目概述
SimpleWeb 是一个极简风格的学生信息管理前端项目，提供登录、学生信息管理、成绩管理等功能。用户可通过登录页面，使用管理员账号或学生学号及密码登录，进入不同的操作界面。

## 项目结构

```
.
├── assets/                 # 静态资源
│   ├── fonts/              # 字体文件
│   ├── icons/              # 图标资源
│   └── images/             # 图片资源
├── pages/
│   ├── admin/              # 管理员模块
│   │   ├── admin.html      # 管理界面
│   │   └── admin.js        # 学生管理逻辑
│   ├── login/              # 登录模块
│   │   ├── login.html      # 登录页
│   │   ├── login.css       # 登录样式
│   │   └── login.js        # 认证逻辑
│   ├── student/            # 学生模块
│   │   ├── student.html    # 学生主页
│   │   └── student.js      # 成绩查询
│   └── upload/             # 文件上传
│       ├── upload.html     # 上传页
│       └── upload.js       # 导入逻辑
├── style.css               # 全局样式
└── index.html              # 入口页```

## 功能描述

### 管理员功能
- 学生信息管理：查看所有学生信息
- 成绩管理：查看和管理学生成绩
- 文件上传：导入学生信息Excel文件
- 页面顶部包含上传和退出按钮

### 学生功能
- 查看个人成绩：显示学生的各科成绩
- 退出登录：安全退出系统

### 登录功能
- 支持管理员登录（用户名和密码均为admin）
- 支持学生登录（使用学号和密码）

## 技术特点
- 响应式设计：支持不同设备访问
- 现代CSS样式：采用CSS变量和渐变背景，具有独特的视觉风格
- 模块化结构：各功能模块分离，易于维护和扩展
- 使用Fetch API进行前后端通信
- 表单验证和错误处理
- 动态页面跳转和内容加载

GET /api/students/          // 获取所有学生
GET /api/students/{id}      // 获取单个学生
POST /api/students/         // 添加学生
POST /api/login/ 
请求体: {student_id, password}