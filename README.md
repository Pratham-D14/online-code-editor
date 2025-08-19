## 🖥️ [Online Code Editor](https://online-code-editor-production-2060.up.railway.app/)

An **Online Code Editor** built as a personal learning project to practice and showcase my skills as a software developer.  
This project provides a simple, interactive environment where users can write, edit, and run code directly in the browser.

---

## 🚀 Features

- Write and run code instantly in the browser.
- Syntax highlighting for better readability.
- Supports multiple programming languages (expandable).
- Responsive and user-friendly interface.
- Real-time output display.

---

## 🛠️ Tech Stack

- **Frontend:** HTML, CSS, TypeScript, NEXT.js (with optional frameworks/libraries)
- **Editor Engine:** [MonacoEditor]
- **Backend:** Node.js
<!-- - **Other Tools:** -->

---

## 📂 Project Structure


├── app/ # Next.js App Router (frontend + backend routes) \n
│ ├── api/ # API routes for code execution \n
│ │ ├── javaExecuter/ # Java execution endpoint \n
│ │ ├── pythonExecuter/ # Python execution endpoint \n 
│ │ └── ... # (Expandable for more languages) \n
│ ├── page.tsx/ # Main editor UI \n
│ ├── globals.css # Global styles \n
│ └── layout.tsx # App layout \n
| \n
│ └──data/ # Dummy Code for Lanaguages
|
│
│ └──components/ # Reusable UI components
│ | ├── CodeEditor.tsx # Monaco Editor integration
│ | ├── Header.tsx # Header / Navigation
│ | └── OutputPanel.tsx # Output display panel
│
|
│ └──Hooks/ # Reusable React Hooks
│ | ├── useCompileCode.tsx # custom hook for API Calling
|
├── public/ # Static assets (icons, images, etc.)
├── package.json # Dependencies & scripts
├── tsconfig.json # TypeScript configuration
├── Dockerfile
└── README.md # Project documentation
