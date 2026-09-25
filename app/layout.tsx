import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FacelessAI",
  description: "AI Video Generation Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
