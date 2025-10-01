# Fundamentals of Node.js

This repository serves as a comprehensive repository of knowledge on programming fundamentals, developed through a combination of instructor-led classroom activities, independent homework assignments, and self-directed study. It serves as a structured resource for understanding core concepts and practical applications, which are essential for foundational programming proficiency.

---

## Contents

- [Covered Topics](#covered-topics)  
- [Repository Structure](#repository-structure)  
- [Study Context](#study-context)  
- [Objectives](#objectives)  
- [Technologies Used](#technologies-used)  
- [How to Run Examples](#how-to-run-examples)  
- [Code Style Guide](#code-style-guide)  
- [Repository Guidelines](#repository-guidelines)  
- [Contact](#contact) 

---

## Covered Topics

### 1. Streams and Buffers

- Stream fundamentals
- Buffer operations 
- Fake upload to HTTP stream
- Stream HTTPS server
- Reading and processing data in chunks

### 2. HTTP Server and Routing

- Creating HTTP servers  
- Route handling with regular expressions  
- Dynamic route paths  
- Query parameter extraction  
- Request and response management

### 3. Middlewares

- JSON body parsing with streams
- Custom middleware creation
- Request processing pipeline

### 3. Database Operations
- In-memory database management
- JSON file-based persistence
- CRUD operations (Create, Read, Update, Delete)
- Data storage and retrieval

---

## Repository Structure

```
fundamentals-of-nodejs/
├── database/
│   └── database.json
├── src/
│   ├── database/
│   │   └── database.js
│   ├── middlewares/
│   │   └── json.js
│   ├── utilities/
│   │   ├── build-route-path.js
│   │   └── extract-query-params.js
│   ├── route.js
│   └── server.js
├── streams/
│   ├── buffer.js
│   ├── fake-upload-to-http-stream.js
│   ├── fundamentals.js
│   └── stream-https-server.js
├── .gitignore
└── package.json
```

---

## Study Context

- **Classroom Activities:** Exercises and projects completed with instructor support  
- **Homework Assignments:** Independent tasks to reinforce key concepts 
- **Independent Study:** Personal projects and coding challenges for deeper understanding
- This repository represents the consolidation of knowledge gained across these varied learning experiences

---

## Objectives

- Master essential Node.js fundamentals and core concepts
- Strengthen logical reasoning and problem-solving abilities in backend development 
- Develop proficiency in building scalable RESTful APIs  
- Understand streams, buffers, and asynchronous programming patterns
- Establish a solid foundation for advanced studies and real-world software development

---

## Technologies Used

- **Primary Language:** Node.js (v18+ recommended)
- **Module System:** ES Modules `(import/export)`
- **Recommended IDEs:** Visual Studio Code, WebStorm 
- **Version Control:** Git (hosted on GitHub)
- **Package Manager:** NPM or YARN

---

## How to Run Examples

Most code examples are written in JavaScript using Node.js runtime and are structured with ES Modules.

From the terminal:  

1. Navigate to the folder containing the `.js` file  
2. Ensure you have Node.js installed (`verify with node --version`)
3. Compile the file using:

```bash
node filename.js
```

3. Run the compiled programme:  

```bash
node --watch filename.js
```

> Replace `filename.js` with the actual file name.

## For projects with `package.json`:
```
npm install

npm run dev

npm start
```

Alternatively, you can utilise the built-in run/debug tools in your preferred IDE.

---

## Code Style Guide

- **Files & Folders:** `kebab-case` (e.g., `build-route-path.js`, `extract-query-params.js`)  
- **Variables & Functions:** `camelCase` (e.g., `userName`, `extractQueryParams`, `fetchData`)
- **Classes:** `PascalCase` (e.g., `DatabaseManager`, `ServerManager`)
- **Constants:** `UPPER_CASE_SNAKE_CASE` (e.g., `API_PORT`,`MAX_RETRIES`)  

## Formatting
- Indentation: 2 spaces
- Use ES6+ features (arrow functions, async/await, destructuring)
- Use ES Modules: import/export
- Prefer `const` over `let`, avoid `var`

---

## Repository Guidelines

- Include only Node.js-related content relevant to the topics
- Maintain clean, efficient, and well-documented code
- Use consistent naming conventions for files and directories
- Write clear and descriptive commit messages
- Do not commit sensitive information (e.g., passwords, API keys, `.env` files)
- Add usage instructions or test cases where necessary
- Include `.gitignore` file to exclude `node_modules/` and other build artifacts
- Use `package.json` to document dependencies and scripts

---

## Contact

For questions, suggestions, or feedback, please open an issue on the repository or contact me directly via GitHub.
