import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider
} from '@clerk/nextjs'
import { Toaster } from "sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import ReactQueryProvider from '@/providers/react-query-provider';
import ReduxProvider from "@/providers/redux-provider";

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Slide",
  description: "Automate your Insta DM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
    <body suppressHydrationWarning className={jakarta.className}>
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      disableTransitionOnChange>
          <ReduxProvider>
            <ReactQueryProvider>{children}
            </ReactQueryProvider>
          </ReduxProvider>
            <Toaster/>
          
    </ThemeProvider>
    </body>
    </html>
    </ClerkProvider>
  );
}
