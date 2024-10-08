import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Mykyta Krumalenko - Full-Stack Developer",
  description: "Mykyta Krumalenko - Full-Stack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
