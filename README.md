# SimpleWeb 项目说明 william

这是一个简单的网页应用，包含两个页面：

- `index.html`: 显示学生列表。
- `upload.html`: 上传 Excel 文件以导入学生信息。

## 功能描述

### 学生列表 (`index.html`)
- 从 `/students` API 接口获取学生数据。
- 将学生数据以表格形式展示。

### 导入学生信息 (`upload.html`)
- 支持上传 `.xlsx` 或 `.xls` 格式的 Excel 文件。
- 数据通过 `/import` API 接口提交到服务器。
- 成功导入后会跳转到学生列表页。

## 使用说明

1. 启动服务器，确保 `/students` 和 `/import` 接口可用。
2. 打开 `index.html` 查看学生列表。
3. 打开 `upload.html` 上传 Excel 文件以导入学生信息。

## 注意事项
- 确保服务器接口路径与前端请求路径一致。
- 上传文件格式必须为 Excel 文件（`.xlsx` 或 `.xls`）。
