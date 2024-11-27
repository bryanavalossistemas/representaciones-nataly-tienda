import "@/index.css";
import Router from "@/router";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchInterval: 10000,
    },
  },
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="673950667836-buf9i3qlfoke3npebq1hf2dimmu0vqmb.apps.googleusercontent.com">
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </StrictMode>
);
