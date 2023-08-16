import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      color="primary"
      variant="flat"
      radius="full"
      isIconOnly
    >
      {theme === "dark" ? (
        <HiSun className="text-2xl" />
      ) : (
        <HiMoon className="text-2xl" />
      )}
    </Button>
  );
};
