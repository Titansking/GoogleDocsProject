"use client";

import {
  ConvexReactClient,
  Authenticated,
  Unauthenticated,
  AuthLoading,
} from "convex/react";
import { ReactNode } from "react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { LoaderIcon } from "lucide-react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return (
    <ClerkProvider
      publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}
    >
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>
          {/* Middleware redirects unauthenticated users — this is a fallback */}
          <div className="flex flex-col items-center justify-center min-h-screen">
            <span className="text-sm text-muted-foreground">Redirecting to sign in...</span>
          </div>
        </Unauthenticated>
        <AuthLoading>
          <div className="flex flex-col items-center justify-center min-h-screen">
            <LoaderIcon className="animate-spin text-muted-foreground size-5" />
          </div>
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
}
