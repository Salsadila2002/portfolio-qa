import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Salsadila Puspitasari | Manual QA",
  description:
    "Portfolio of Salsadila Puspitasari, a Manual QA learning to build quality software.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-slate-50">{children}</body>
    </html>
  );
}
