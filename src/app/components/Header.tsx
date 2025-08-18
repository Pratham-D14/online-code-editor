import React, { useEffect, useRef } from "react";
import { Monitor, Palette, Menu } from "lucide-react";
import { codeTemplates } from "../data/CodeTemplates";
import { useState } from "react";

interface HeaderProps {
  setLanguage: (value: string) => void;
  onChange: (value: string | undefined) => void;
}

const Header: React.FC<HeaderProps> = ({ setLanguage, onChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  let language;

  const options = [
    { value: "java", label: "Java" },
    { value: "python", label: "Python" },
  ];
  const onLanguageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    language = event.target.value;
    setLanguage(language);
    onChange(codeTemplates[language]);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-between p-4 text-white bg-gray-900 border-b border-gray-700">
      {/* Logo + Title */}
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
          <Monitor size={16} />
        </div>
        <h1 className="text-lg md:text-xl font-bold">Online Code Editor</h1>
        <div className="hidden md:flex items-center space-x-2 text-sm text-gray-400">
          <Palette size={14} />
          <span>Multi-Language IDE</span>
        </div>
      </div>

      {/* Desktop Language Selector */}
      <div className="hidden md:block">
        <label className="mr-3 text-[16px]">Language:</label>
        <select
          value={language}
          onChange={onLanguageChange}
          className="bg-blue-600 cursor-pointer px-2 py-1 rounded-lg"
        >
          <option value="javascript">JavaScript</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden relative" ref={menuRef}>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          <Menu size={20} />
        </button>

        {menuOpen && (
          <div className="absolute right-0 top-12 bg-gray-800 p-3 rounded-lg shadow-lg z-50 w-40">
            <label className="block mb-2 text-sm">Language:</label>
            <select
              value={language}
              onChange={onLanguageChange}
              className="bg-blue-600 cursor-pointer px-2 py-1 rounded-lg w-full"
            >
              <option value="javascript">JavaScript</option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
