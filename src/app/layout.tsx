import type { Metadata } from "next";
// import { Inter } from "next/font/google";
import "./globals.css";
import LoadingManager from "@/components/LoadingManager/LoadingManager";
import { Suspense } from "react";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "YTH's PortFolio!",
  description: "양태현 포트폴리오입니다!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      {/* <body className={inter.className}>{children}</body> */}

      <body>
        <Suspense fallback={<div>Loading...</div>}>
          <LoadingManager>
            {children}
          </LoadingManager>
        </Suspense>

      </body>


    </html>
  );
}
