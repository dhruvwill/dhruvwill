import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppStoreProvider } from "@/providers/StoreProvider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Sidebar from "@/components/sections/Sidebar";
import "cal-sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhruvil S Shah",
  description: "Dhruvil S Shah's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-starry", inter.className)}>
        <AppStoreProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <Sidebar />
            {children}
          </ThemeProvider>
        </AppStoreProvider>
      </body>
    </html>
  );
}
