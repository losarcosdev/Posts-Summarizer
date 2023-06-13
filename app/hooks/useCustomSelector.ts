import { useSelector, TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/app/state";

export const useCustomSelector: TypedUseSelectorHook<RootState> = useSelector;
