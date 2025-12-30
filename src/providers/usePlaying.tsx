import { useContext } from "react";
import { PlayingContext } from "./playProvider";

export const usePlayingContext = () => useContext(PlayingContext);
