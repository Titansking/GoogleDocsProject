import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "./globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ 
  subsets: ["latin"] 
});

export const metadata: Metadata = {
  title: "Docs - Collaborative Document Editor",
  description: "Create, edit and collaborate on documents in real time.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
          <NuqsAdapter>
            <ConvexClientProvider>
              <Toaster />
        {children}
        </ConvexClientProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
