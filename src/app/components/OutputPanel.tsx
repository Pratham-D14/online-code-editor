import React, { useState } from "react";
import { Terminal, Trash2, Download } from "lucide-react";

interface OutputPanelProps {
  output: string;
  isRunning: boolean;
  onClear: () => void;
}

const OutputPanel: React.FC<OutputPanelProps> = ({
  output,
  isRunning,
  onClear,
}) => {
  return (
    <div className="flex flex-col h-full bg-gray-900">
      {/* Header */}
      <div className="flex items-center justify-between p-2 md:p-3 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center space-x-2">
          <Terminal size={16} className="text-gray-400" />
          <h2 className="text-xs md:text-sm font-medium text-gray-300">
            Output
          </h2>
          {isRunning && (
            <div className="flex items-center space-x-1 text-xs text-blue-400">
              <div className="animate-pulse w-2 h-2 bg-blue-400 rounded-full"></div>
              <span>Running...</span>
            </div>
          )}
        </div>

        <button
          onClick={onClear}
          className="p-1.5 bg-gray-700 hover:bg-gray-600 text-gray-300 rounded-md transition-colors duration-200"
          title="Clear Output"
        >
          <Trash2 size={14} />
        </button>
      </div>

      {/* Output Area */}
      <div className="flex-1 p-2 md:p-4 overflow-auto">
        {output ? (
          <pre className="text-xs md:text-sm text-gray-300 font-mono whitespace-pre-wrap break-words">
            {output}
          </pre>
        ) : (
          <div className="text-gray-500 text-xs md:text-sm italic">
            Click "Run" to execute your code and see the output here...
          </div>
        )}
      </div>
    </div>
  );
};

export default OutputPanel;
