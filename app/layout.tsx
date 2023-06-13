import "./globals.css";
import { Inter } from "next/font/google";
import { Provider } from "./state/provider";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { ThemeProvider } from "./theme-prodiver";

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
    <html lang="en">
      <body
        className={`${inter.className} bg-white dark:bg-[#0d1117] duration-300 fadeIn`}
      >
        <Provider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <ThemeSwitcher />
            <header className="flex p-5 items-center justify-center md:justify-between h-[15vh]">
              <div className="text-white text-2xl md:text-3xl gradient-text-1 font-extrabold">
                Summarizer
              </div>
            </header>
            <main>{children}</main>
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
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
