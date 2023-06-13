"use client";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "./store";

export const Provider = ({
  children,
  theme,
}: {
  children: React.ReactNode;
  theme?: string;
}) => {
  return (
    <ReduxProvider store={store}>
      {theme}
      {children}
    </ReduxProvider>
  );
};
