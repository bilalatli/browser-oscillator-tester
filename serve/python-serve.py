import http.server
import socketserver

PORT = 8010

Handler = http.server.SimpleHTTPRequestHandler
Handler.extensions_map.update({
	".js": "application/javascript",
	})

print('Server listening on localhost:' + str(PORT))

httpd = socketserver.TCPServer(("", PORT), Handler)
httpd.serve_forever()
