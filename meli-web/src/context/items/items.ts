import { createContext } from "react";
import { ItemsContextType } from "./types";

export const ItemsContext = createContext<ItemsContextType | null>(null);
