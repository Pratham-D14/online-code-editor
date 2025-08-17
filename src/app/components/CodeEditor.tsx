import React, { useState } from "react";
import { RotateCcw, Play, Copy } from "lucide-react";
import { Editor } from "@monaco-editor/react";
import { codeTemplates } from "../data/CodeTemplates";

interface CodeEditorProps {
  language: string;
  value: string;
  theme: "vs-dark" | "light";
  onRun: () => void;
  onChange: (value: string | undefined) => void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({
  language,
  value,
  theme,
  onRun,
  onChange,
}) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
    navigator.clipboard.writeText(value);
  };

  const handleReset = () => {
    onChange("// Start writing your code from here... \n");
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-3 bg-gray-800 border-b border-gray-700">
        <h2>Code Editor</h2>
        <div
          className={` 
              py-2 px-4 rounded-lg text-white 
              bg-green-600 shadow-md
              transform transition-all duration-500 ease-in-out
              ${
                copied
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-5"
              }`}
        >
          Code Copied to Clipboard
        </div>
        <div className="flex space-x-2">
          <button
            onClick={onRun}
            className="flex items-center space-x-2 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white text-sm rounded-md transition-colors duration-200 cursor-pointer"
          >
            <Play size={14} />
            <span>Run</span>
          </button>
          <button
            onClick={handleCopy}
            className="p-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors duration-200 cursor-pointer"
            title="Copy Code"
          >
            <Copy size={14} />
          </button>
          {/* <button
            onClick={handleDownload}
            className="p-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors duration-200"
            title="Download Code"
          >
            <Download size={14} />
          </button> */}
          <button
            onClick={handleReset}
            className="p-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors duration-200 cursor-pointer"
            title="Reset Code"
          >
            <RotateCcw size={14} />
          </button>
        </div>
      </div>

      <Editor
        height="100%"
        language={language}
        value={value}
        onChange={onChange}
        theme={theme}
        options={{
          fontSize: 14,
          lineHeight: 1.6,
          minimap: { enabled: true },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: "on",
          lineNumbers: "on",
          folding: true,
          renderWhitespace: "selection",
          cursorBlinking: "blink",
          smoothScrolling: true,
          contextmenu: true,
          mouseWheelZoom: true,
        }}
      />
    </div>
  );
};

export default CodeEditor;
