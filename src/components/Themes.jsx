import React, { useEffect, useState } from 'react';

const Themes = () => {
  const [selectedTheme, setSelectedTheme] = useState('light'); // State to track the selected theme
  const themes = ["light", "dark"]; // Available themes

  // Set default theme when component mounts
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", selectedTheme); // Set the default theme
  }, [selectedTheme]); // Depend on the selected theme to update

  // Handle theme change
  const handleThemeChange = (e) => {
    const newTheme = e.target.value;
    setSelectedTheme(newTheme); // Update the state to change the theme
    document.documentElement.setAttribute("data-theme", newTheme); // Update the theme on the root element
  };

  return (
    <select
      className="select select-bordered"
      value={selectedTheme} // Use the state to keep the dropdown in sync
      onChange={handleThemeChange}
    >
      {themes.map((theme) => (
        <option key={theme} value={theme}>
          {theme.charAt(0).toUpperCase() + theme.slice(1)}
        </option>
      ))}
    </select>
  );
};

export default Themes;
