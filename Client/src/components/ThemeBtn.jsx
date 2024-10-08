import { useTheme } from "../context/theme";
import { Moon, Sun } from "lucide-react";
function ThemeBtn() {
  const { darkTheme, lightTheme, theme } = useTheme();
  console.log(theme);
  const onChangeBtn = (e) => {
    const darkModeStatus = e.currentTarget.checked;
    if (darkModeStatus) {
      console.log(darkModeStatus);
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={theme === "dark"}
      />
      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-amber-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-amber-600"></div>
      <span className="ml-3 text-sm font-medium text-gray-900">
        {theme === "dark" ? <Moon color="white" /> : <Sun />}
      </span>
    </label>
  );
}

export default ThemeBtn;
