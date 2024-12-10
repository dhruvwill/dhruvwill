import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@/styles/globals.css";
import { AppStoreProvider } from "@/providers/StoreProvider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/sections/Navbar";
import Sidebar from "@/components/sections/Sidebar";
import "cal-sans";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dhruvil S Shah",
  description:
    "Dhruvil S Shah's personal website. Explore my projects, skills, and journey as a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("bg-starry", inter.className)}>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-44DSK7NYXL"
        />
        <Script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-44DSK7NYXL');
            `,
          }}
        />
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
