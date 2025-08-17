import React from "react";
import { Monitor, Palette } from "lucide-react";
import { codeTemplates } from "../data/CodeTemplates";

interface HeaderProps {
  setLanguage: (value: string) => void;
  onChange: (value: string | undefined) => void;
}

const Header: React.FC<HeaderProps> = ({ setLanguage, onChange }) => {
  const options = [
    { value: "java", lable: "Java" },
    { value: "python", lable: "Python" },
  ];
  const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    let language = event.target.value;
    setLanguage(language);
    onChange(codeTemplates[language]);
  };
  return (
    <div className="flex items-center justify-between p-4 text-white">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Monitor size={16} />
        </div>
        <h1 className="text-xl font-bold">Online Code Editor</h1>
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
          <Palette size={14} />
          <span>Multi-Language IDE</span>
        </div>
      </div>
      <div>
        <label className="mr-3 text-[18px]">Select Editor Language:</label>
        <select
          id="selected-Language"
          onChange={onLanguageChange}
          className="bg-blue-600 cursor-pointer px-2 py-1 rounded-lg"
        >
          <option value="javascript">JavaScript</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.lable}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Header;
