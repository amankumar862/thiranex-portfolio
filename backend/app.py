from flask import Flask, jsonify
from flask_cors import CORS
import mysql.connector
import os
from dotenv import load_dotenv

load_dotenv()

app = Flask(__name__)
CORS(app)


def get_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",
        password=os.getenv("MYSQL_PASSWORD"),
        database="portfolio_db"
    )


@app.route("/")
def home():
    return jsonify({"message": "Portfolio API is running"})


@app.route("/api/projects")
def get_projects():
    db = get_db()
    cursor = db.cursor(dictionary=True)

    cursor.execute("SELECT * FROM projects")
    projects = cursor.fetchall()

    cursor.close()
    db.close()

    return jsonify(projects)


if __name__ == "__main__":
    app.run(debug=True, port=5000)