import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

const Index = () => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark", !darkMode);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl mb-4">Track Your Package</h1>
      <div className="flex items-center space-x-2 mb-4">
        <Input placeholder="Enter your tracking number" className="w-64" />
        <Button>Submit</Button>
      </div>
      <div className="flex items-center space-x-2">
        <span>Light Mode</span>
        <Switch checked={darkMode} onCheckedChange={handleToggle} />
        <span>Dark Mode</span>
      </div>
    </div>
  );
};

export default Index;