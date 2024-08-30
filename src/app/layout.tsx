import type { Metadata } from "next";
import Script from "next/script";
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
      <head>
        <Script
          src="https://app.10xlaunch.ai/widget"
          data-app-id="c69d1354-98cf-4763-a3aa-daf45c0ba6d0"
          async
          defer
        />
      </head>
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
