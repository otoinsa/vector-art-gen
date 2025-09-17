#!/usr/bin/env python3
"""
Vector Art Generator - Local Web Server
A simple HTTP server to host the vector art generator application
"""

import http.server
import socketserver
import os
import sys
import webbrowser
from pathlib import Path

class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
	"""Custom handler to serve files with proper MIME types"""
	
	def end_headers(self):
		# Add CORS headers for local development
		self.send_header('Access-Control-Allow-Origin', '*')
		self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
		self.send_header('Access-Control-Allow-Headers', 'Content-Type')
		super().end_headers()
	
	def guess_type(self, path):
		"""Override to set correct MIME types"""
		mimetype = super().guess_type(path)
		
		# Ensure JavaScript files are served with correct MIME type
		if path.endswith('.js'):
			return 'application/javascript'
		elif path.endswith('.css'):
			return 'text/css'
		elif path.endswith('.html'):
			return 'text/html'
		elif path.endswith('.svg'):
			return 'image/svg+xml'
		
		return mimetype

def check_port_available(port=4545):
	"""Check if the specified port is available"""
	try:
		with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as test_server:
			return True
	except OSError:
		return False

def main():
	"""Main server function"""
	# Get the directory where this script is located
	script_dir = Path(__file__).parent.absolute()
	
	# Change to the dist directory
	dist_dir = script_dir / 'dist'
	if dist_dir.exists():
		os.chdir(dist_dir)
	else:
		os.chdir(script_dir)
	
	# Check if required files exist
	required_files = ['index.html', 'styles.css', 'app.js', 'sketch.js']
	missing_files = [f for f in required_files if not Path(f).exists()]
	
	if missing_files:
		print(f"❌ Error: Missing required files: {', '.join(missing_files)}")
		print("Please ensure all files are in the same directory as this script.")
		sys.exit(1)
	
	# Use port 4545
	port = 4545
	
	# Check if port is available
	if not check_port_available(port):
		print(f"❌ Error: Port {port} is already in use")
		print(f"Please stop the service using port {port} or modify the port in server.py")
		sys.exit(1)
	
	# Create the server
	with socketserver.TCPServer(("", port), CustomHTTPRequestHandler) as httpd:
		server_url = f"http://localhost:{port}"
		
		print("🌌 Vector Art Generator Server")
		print("=" * 40)
		print(f"📁 Serving from: {os.getcwd()}")
		print(f"🌐 Server URL: {server_url}")
		print(f"🔌 Port: {port}")
		print("=" * 40)
		print("📋 Available patterns:")
		print("   • Cosmic Structures (Galaxy, Constellation, Nebula)")
		print("   • Natural Forms (Tree, Flower, Snowflake)")
		print("   • Geometric Structures (Grid, Crystal, Mandala)")
		print("   • Scientific Patterns (DNA, Molecule, Voronoi)")
		print("=" * 40)
		print("💡 Features:")
		print("   • Real-time pattern generation")
		print("   • PDF export for printing")
		print("   • SVG export for plotters")
		print("   • Adjustable complexity and line weight")
		print("=" * 40)
		print("🚀 Starting server...")
		print(f"🔗 Opening browser to: {server_url}")
		print("⏹️  Press Ctrl+C to stop the server")
		print("=" * 40)
		
		# Open browser automatically
		try:
			webbrowser.open(server_url)
		except Exception as e:
			print(f"⚠️  Could not open browser automatically: {e}")
			print(f"   Please manually open: {server_url}")
		
		try:
			# Start serving
			httpd.serve_forever()
		except KeyboardInterrupt:
			print("\n🛑 Server stopped by user")
			print("👋 Thanks for using Vector Art Generator!")

if __name__ == "__main__":
	main()
