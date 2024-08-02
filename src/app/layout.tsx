import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";

import AuthProvider from "@/providers/AuthProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToastProvider from "@/providers/ToastProvider";
import { TRPCReactProvider } from "@/trpc/react";

export const metadata: Metadata = {
  title: "Rapimozo",
  description: "Conectate aquí, rápido y simple.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <AuthProvider>
          <TRPCReactProvider>
            <ThemeProvider>
              <ToastProvider />
              <ModalProvider />
              {children}
            </ThemeProvider>
          </TRPCReactProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
