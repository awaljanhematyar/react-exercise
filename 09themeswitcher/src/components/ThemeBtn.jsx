import useTheme from "../context/Theme";

function ThemeBtn() {
  const { themeMode, darkTheme, lightTheme } = useTheme();

  const handleChange = (e) => {
    if (e.currentTarget.checked) {
      darkTheme();
    } else {
      lightTheme();
    }
  };

  return (
    <div className="flex items-center gap-3">
      <input
        type="checkbox"
        checked={themeMode === "dark"}
        onChange={handleChange}
        className="
        w-12
        h-6
        cursor-pointer
        accent-blue-600
        "
      />

      <span
        className="
        text-black
        dark:text-white
        ">
        Toggle Theme
      </span>
    </div>
  );
}

export default ThemeBtn;
