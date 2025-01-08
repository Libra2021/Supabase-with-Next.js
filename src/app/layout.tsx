import type { Metadata } from "next";

import "./globals.css";

export const metadata: Metadata = {
  title: "Ticket System",
  description: "Ticket system with supabase",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
