"use client";
import Header from "./components/Header";
import { useCallback, useEffect, useState } from "react";
import { codeTemplates } from "./data/CodeTemplates";
import CodeEditor from "./components/CodeEditor";
import { useCompileCode } from "./hooks/useCompileCode";
import OutputPanel from "./components/OutputPanel";

export default function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(codeTemplates.javascript);
  const [isRunning, setIsRunning] = useState(false);
  const [output, setOutput] = useState("");
  const [theme, setTheme] = useState<"vs-dark" | "light">("vs-dark");

  // Hooks for different API Query
  const javaQuery = useCompileCode(code, "/api/javaExecuter", "POST");
  const pythonQuery = useCompileCode(code, "/api/pythonExecuter", "POST");

  // Function to set the code state updated
  const handleCodeChange = useCallback((value: string | undefined) => {
    setCode(value || "");
  }, []);

  // Clearing the Output from Output Panel
  const clearOutput = useCallback(() => {
    setOutput("");
  }, []);

  // on Click of Run Executing the Respective Language Code
  const executeCode = async () => {
    setIsRunning(true);
    setOutput("Executing...");

    switch (selectedLanguage) {
      case "java":
        const javaOuptut = await javaQuery.refetch();
        // console.log(javaOuptut.data.output);
        setIsRunning(false);
        setOutput(javaOuptut.data.output);
        break;

      case "python":
        const pythonOutput = await pythonQuery.refetch();
        setIsRunning(false);
        console.log(pythonOutput.data.output);
        if (pythonOutput.data.success == false) {
          setOutput(pythonOutput.data.error);
        } else {
          setOutput(pythonOutput.data.output);
        }
        break;

      case "javascript":
        try {
          let logs: string[] = [];

          // backup original console.log
          const originalLog = console.log;

          console.log = (...args) => {
            logs.push(args.join(" "));
            originalLog(...args);
          };

          const result = eval(code);

          // restore console.log
          console.log = originalLog;

          // if result exists, show it, otherwise show logs
          if (result !== undefined) {
            setOutput(String(result));
          } else if (logs.length > 0) {
            setOutput(logs.join("\n"));
          } else {
            setOutput("No output");
          }
        } catch (error: any) {
          setOutput("Error: " + error.message);
        } finally {
          setIsRunning(false);
        }
        break;
    }
  };

  // Adding useEffect to activate Backend Services on server on load of the page
  useEffect(() => {
    (async () => {
      const javaOuptut = await javaQuery.refetch();
    })();
  }, []);

  return (
    <div className="h-screen flex flex-col bg-gray-900 text-white">
      {/* Header */}
      <Header setLanguage={setSelectedLanguage} onChange={handleCodeChange} />

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 border-r border-gray-700">
          <CodeEditor
            language={selectedLanguage}
            onChange={handleCodeChange}
            value={code}
            onRun={executeCode}
            theme={theme}
          />
        </div>

        {/* Output Panel */}
        <div className="w-1/3 min-w-[300px]">
          <OutputPanel
            output={output}
            isRunning={isRunning}
            onClear={clearOutput}
          />
        </div>
      </div>
    </div>
  );
}
