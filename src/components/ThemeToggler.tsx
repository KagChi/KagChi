import { Button } from "@nextui-org/button";
import { useTheme } from "next-themes";
import { HiSun, HiMoon } from "react-icons/hi";

const Toggler = ({ theme }) => {
  if (theme === "light") {
    return <HiMoon className="text-2xl" />;
  }

  if (theme === "dark") {
    return <HiSun className="text-2xl" />;
  }
  
  return Toggler({ theme });
}

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
      <Toggler theme={theme} />
    </Button>
  );
};
