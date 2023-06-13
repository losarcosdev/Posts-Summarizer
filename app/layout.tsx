import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "./state/provider";
import { NextThemeProvider } from "./theme-prodiver";
import ThemeSwitcher from "./components/ThemeSwitcher";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Posts Summarizer",
  description: "A tool created with GPT-4 that summarizes and storage posts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="fadeIn">
      <body
        className={`${inter.className} bg-white dark:bg-[#0d1117] duration-300`}
      >
        <Provider>
          <NextThemeProvider>
            <ThemeSwitcher />
            {children}
            <footer className="w-full flex items-center justify-center mt-[100px] p-1">
              <p className="flex gap-3 text-slate-800 dark:text-white text-center duration-300">
                Created by
                <a
                  href="http://losarcos.dev/"
                  target="_blank"
                  className="gradient-text-1 duration-300 hover:opacity-80"
                >
                  Lucas Los Arcos
                </a>
                |
                <a
                  href="https://github.com/losarcosdev"
                  target="_blank"
                  className="gradient-text-1 duration-300 hover:opacity-80"
                >
                  Github
                </a>
                |
                <a
                  href="https://www.linkedin.com/in/lucaslosarcos/?locale=en_US"
                  target="_blank"
                  className="gradient-text-1 duration-300 hover:opacity-80"
                >
                  Linkedln
                </a>
              </p>
            </footer>
          </NextThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
