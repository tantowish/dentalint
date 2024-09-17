import type { Metadata } from "next";
import {Nunito_Sans} from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: "Dentalint",
  description: "Monitor and Maintain Your Family's Dental Health",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunitoSans.className} antialiased overflow-x-auto`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
