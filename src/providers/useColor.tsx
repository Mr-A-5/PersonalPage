import { useContext } from "react";
import { colorContext } from "./colorProvider";

export const useColorContext = () => useContext(colorContext);
