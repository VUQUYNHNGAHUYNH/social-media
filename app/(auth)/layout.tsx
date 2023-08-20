import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Social media",
  description: "Nextjs 13 Social media",
};

const inter = Inter({
  subsets: ["latin"],
});
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={` ${inter.className} bg-gray-800 `}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
