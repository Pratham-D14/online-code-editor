# 🖥️ [Online Code Editor](https://online-code-editor-production-2060.up.railway.app/)

An **Online Code Editor** built as a personal learning project to practice and showcase software development skills. This project provides a simple, interactive environment where users can write, edit, and run code directly in their browser.

**Live Demo** | **GitHub Repository**

---

## 🚀 Features

- **Instant Code Execution**: Write and run code directly in the browser with real-time output.
- **Syntax Highlighting**: Enhanced code readability with syntax highlighting.
- **Multi-Language Support**: Currently supports JavaScript, Python, and Java (expandable to more languages).
- **Responsive Design**: User-friendly interface that works across devices.
- **Real-Time Output**: Displays code execution results instantly.

---

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, TypeScript, Next.js (App Router)
- **Editor Engine**: Monaco Editor for a robust coding experience
- **Backend**: Node.js for handling code execution
- **Deployment**: Hosted on Railway
- **Other Tools**: Docker for containerization

---

## 📂 Project Structure

```plaintext
├── app/                          # Next.js App Router (frontend + backend routes)
│   ├── api/                      # API routes for code execution
│   │   ├── javaExecuter/         # Java execution endpoint
│   │   ├── pythonExecuter/       # Python execution endpoint
│   │   └── ...                   # Expandable for additional languages
│   ├── page.tsx                  # Main editor UI
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # App layout
│   ├── data/                     # Dummy code for supported languages
│   ├── components/               # Reusable UI components
│   │   ├── CodeEditor.tsx        # Monaco Editor integration
│   │   ├── Header.tsx            # Header/Navigation component
│   │   └── OutputPanel.tsx       # Output display panel
│   ├── Hooks/                    # Reusable React Hooks
│   │   └── useCompileCode.tsx    # Custom hook for API calls
├── public/                       # Static assets (icons, images, etc.)
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
├── Dockerfile                    # Docker configuration for deployment
└── README.md                     # Project documentation
```

---

## 🏁 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Docker (optional, for containerized deployment)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/online-code-editor.git
   cd online-code-editor
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:3000 in your browser.

### Deployment

To deploy the project using Docker:

```bash
docker build -t online-code-editor .
docker run -p 3000:3000 online-code-editor
```

---

## 🤝 Contributing

Contributions are welcome! Want to add support for a new programming language or enhance the editor? Follow these steps:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/new-language`).
3. Make your changes and commit (`git commit -m "Add support for <language>"`).
4. Push to the branch (`git push origin feature/new-language`).
5. Open a Pull Request.

Check the project structure for guidance on where to add new language support.

---

## 🙌 Acknowledgments

- Monaco Editor for the powerful code editor.
- Next.js for the robust full-stack framework.
- Railway for seamless deployment.

---

**Happy Coding!** 🚀\
For questions or feedback, feel free to open an issue on GitHub or reach out via LinkedIn.
