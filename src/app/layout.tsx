import "./globals.css";

export const metadata = {
  title: "Zara",
  description: "Zara created using Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
