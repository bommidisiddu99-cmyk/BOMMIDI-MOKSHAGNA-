"# BOMMIDI-MOKSHAGNA-" 
"# BOMMIDI-MOKSHAGNA-" 
Here is an alternative version of the report adapted to a different core topic: **Task & Note Management API Service (Lab 02 – RESTful API Foundations & In-Memory Data Store)**, keeping the same academic format, structure, and depth.

---

# BDF Lab 01 – RESTful API Foundations & In-Memory Data Store

**Student Name:** BOMMIDI MOKSHAGNA TEJA

**Registration Number:** 252U1R1042

**Section:** CSE - CORE

**Course:** Backend Development Fundamentals

**Lab:** Lab 01 – In-Memory Task & Notes API

**Deployment URL:** Deployment Note: Not available — Public deployment has not been attempted yet. The application was tested locally using Postman, and verification responses for all routes are documented below.

---

## 1. Introduction

This project is developed as part of the Backend Development Fundamentals course. It demonstrates how to transition from basic server responses to building a stateful, structured REST API using Express.js and Node.js.

The project implements a core task management backend that maintains an in-memory data collection, exposes modular endpoints for retrieval and state verification, validates route inputs, and returns standardized JSON response envelopes alongside robust 404/500 error handling.

---

## 2. Objectives

* Initialize a structured Node.js backend workspace using `npm`.
* Configure middleware for JSON body parsing and request logging.
* Design clean RESTful route structures (`/api/v1/...`).
* Implement an in-memory data repository to simulate database operations.
* Handle URL query parameters and dynamic route parameters.
* Enforce standard HTTP response structures and proper HTTP status codes (`200`, `400`, `404`).

---

## 3. Technologies Used

* **Node.js** (Runtime environment)
* **Express.js** (Server framework and routing)
* **JavaScript (ES6+)** (Application logic)
* **npm** (Package management)
* **Postman** (Endpoint validation and testing)
* **Visual Studio Code** (Code editor)

---

## 4. Project Structure

```text
task-api-service/
├── .gitignore
└── lab-02/
    ├── app.js
    ├── server.js
    ├── package.json
    ├── package-lock.json
    ├── README.md
    └── screenshots/
        ├── health-check.png
        ├── get-tasks.png
        ├── get-task-by-id.png
        ├── filter-priority.png
        └── route-404.png

```

> **Note:** The `node_modules` folder and local debug logs are excluded from version control via `.gitignore`.

---

## 5. Installation & Setup

**Step 1: Clone the repository**

```bash
git clone https://github.com/your-username/task-api-service.git

```

**Step 2: Navigate to the project directory**

```bash
cd task-api-service/lab-02

```

**Step 3: Install dependencies**

```bash
npm install

```

---

## 6. Execution

Run the service via Node:

```bash
node server.js

```

The server initializes and listens on `http://localhost:5000`.

To stop the server:

```text
Ctrl + C

```

---

## 7. API Endpoints

| Method | Endpoint | Description | Status Code |
| --- | --- | --- | --- |
| **GET** | `/api/v1/health` | System health check and uptime monitor | `200 OK` |
| **GET** | `/api/v1/tasks` | Returns all active tasks in memory | `200 OK` |
| **GET** | `/api/v1/tasks/:id` | Returns a single task matching the specified ID | `200 OK` / `404 Not Found` |
| **GET** | `/api/v1/tasks/filter?priority=high` | Returns tasks filtered by priority level | `200 OK` |
| **ALL** | `/*` | Global catch-all handler for invalid endpoints | `404 Not Found` |

---

## 8. Sample Responses

### 1. Health Check (`GET /api/v1/health`)

```json
{
  "status": "healthy",
  "service": "Task Management API",
  "timestamp": "2026-11-01T11:14:00.000Z"
}

```

### 2. Fetch All Tasks (`GET /api/v1/tasks`)

```json
{
  "success": true,
  "count": 2,
  "data": [
    {
      "id": 1,
      "title": "Complete Lab Report",
      "priority": "high",
      "completed": false
    },
    {
      "id": 2,
      "title": "Configure Express Middleware",
      "priority": "medium",
      "completed": true
    }
  ]
}

```

### 3. Route Not Found (`GET /api/v1/unknown`)

```json
{
  "success": false,
  "error": "The requested resource was not found on this server."
}

```

---

## 9. Testing & Validation

* **Local Browser Verification:** Checked the `/api/v1/health` endpoint to confirm the server runs without crashing.
* **Postman Testing:**
* Sent queries with valid integer IDs (returned `200 OK` with targeted payload).
* Sent queries with non-existent IDs (properly caught and returned `404 Not Found`).
* Verified that query string filtering correctly returns subsets of data.
* Tested invalid endpoints to verify standard JSON 404 responses instead of default HTML error pages.



---

## 10. Problems Faced and Solutions

* **Problem 1: Parsing Numeric Route Parameters**
*Issue:* Route parameters extracted via `req.params.id` are returned as strings, causing strict equality checks (`===`) against integer IDs in the in-memory array to fail.
*Solution:* Sanitized and cast the parameter using `parseInt(req.params.id, 10)` before searching the collection.
* **Problem 2: Catch-All Route Precedence**
*Issue:* Placing the 404 middleware above defined routes intercepted legitimate requests before they could match.
*Solution:* Registered the 404 handler as the final middleware function after all valid route definitions.

---

## 11. Notes

* The application executes locally on port `5000` to prevent collisions with default web services.
* Data is stored in memory for the duration of the server runtime and resets upon server restart.
* No third-party database or environment configuration files are needed for basic evaluation.

---

## 12. Conclusion

This lab provided hands-on experience in building a structured REST API using Express.js. It highlighted the mechanics of route parameters, query string filtering, in-memory state handling, and constructing clear, predictable JSON responses for client applications.
