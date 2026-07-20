import type { Metadata } from "next";
import Nav from "@/components/ui/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vikash V | Applied Research Scientist — ML Infra & Systems",
  description:
    "Vikash V — Applied Research Scientist specializing in ML Infrastructure and Systems optimization, with a background in full-stack development and security.",
  keywords: [
    "Vikash V",
    "Applied Research Scientist",
    "ML Infra",
    "Systems Optimization",
    "Full Stack",
    "Security",
  ],
  openGraph: {
    title: "Vikash V | Applied Research Scientist — ML Infra & Systems",
    description:
      "ML Infrastructure and Systems optimization, full-stack, and security.",
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
