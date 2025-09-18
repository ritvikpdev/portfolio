import type { Metadata } from "next";
import "./globals.css";
import ClientOnLoad from "./on-load";

export const metadata: Metadata = {
  title: "Portfolio | Ritvik Kumar - Full-Stack Developer",
  description: "Full-stack developer and enjoy solving real-world problems through code. View my projects, skills, and experience.",
  keywords: ["portfolio", "developer", "full-stack", "solutions", "freelancer", "backend", "frontend", "AI"],
  authors: [{ name: "Ritvik Kumar Panchbhaiya" }],
  creator: "Ritvik Kumar Panchbhaiya",
  openGraph: {
    title: "Portfolio | Ritvik - Full-Stack Developer",
    description: "Full-stack developer",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className="antialiased">
        <ClientOnLoad />
        {children}
      </body>
    </html>
  );
}
