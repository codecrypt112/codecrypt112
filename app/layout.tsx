import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikash V | Full Stack & Security Engineer",
  description:
    "Vikash V — Full Stack Developer & Cybersecurity Engineer. Architecting scalable SaaS and securing digital infrastructures.",
  keywords: [
    "Vikash V",
    "Full Stack Engineer",
    "Cybersecurity",
    "React",
    "Next.js",
    "Security Engineer",
  ],
  openGraph: {
    title: "Vikash V | Full Stack & Security Engineer",
    description:
      "Architecting scalable SaaS & securing digital infrastructures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"
        />
        <script
          defer
          src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"
        />
      </head>
      <body className="bg-bg text-text-primary antialiased">
        <div
          aria-hidden="true"
          className="grain-overlay pointer-events-none fixed inset-0 z-50 opacity-[0.02]"
        />
        <Nav />
        {children}
      </body>
    </html>
  );
}
