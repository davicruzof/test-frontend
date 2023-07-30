import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import App from "@/app";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heroes",
  description: "Page Heroes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <App>{children}</App>
      </body>
    </html>
  );
}
