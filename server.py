import http.server
import socketserver
import json

PORT = 8080

class MyHttpRequestHandler(http.server.SimpleHTTPRequestHandler):
    def do_POST(self):
        content_length = int(self.headers['Content-Length'])
        post_data = self.rfile.read(content_length)
        
        if self.path == '/upload':
            # 处理文件上传逻辑
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b'File uploaded successfully')
        elif self.path == '/login':
            # 解析登录请求
            try:
                data = json.loads(post_data)
                student_id = data.get('student_id')
                password = data.get('password')

                # 模拟数据库验证
                if student_id == "1050" and password == "q":
                    response = json.dumps({"success": True}).encode()
                    self.send_response(200)
                else:
                    response = json.dumps({"success": False, "message": "用户名或密码错误"}).encode()
                    self.send_response(401)
                
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(response)
            except json.JSONDecodeError:
                self.send_error(400, "Invalid JSON")
        else:
            self.send_error(404, "File Not Found")

# 创建处理器
handler = MyHttpRequestHandler

# 启动服务器
with socketserver.TCPServer(("", PORT), handler) as httpd:
    print("Serving at port", PORT)
    httpd.serve_forever()
