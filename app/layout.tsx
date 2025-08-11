import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ELYSE",
  description: "ELYSE",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[#121618] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
