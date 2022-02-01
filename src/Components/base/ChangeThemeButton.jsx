import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import {Button} from "../../styledComponents/Button";
import {BsFillLightbulbFill} from "react-icons/bs"
function ChangeThemeButton() {
  const { setThemeName, themeName } = useContext(ThemeContext);

  return (
    <Button
      onClick={() => {
        setThemeName((prev) => (prev === "light" ? "dark" : "light"));
  
      }}
    >
  
     < BsFillLightbulbFill/>
    </Button>
  );
}
export default ChangeThemeButton;
