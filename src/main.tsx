import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import { ConfigProvider } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { router } from "./router";
import App from "./App.tsx";
import "./index.css";

const client = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
      <ConfigProvider
        theme={{
          token: {
            colorPrimary: "#00b96b",
            borderRadius: 2,
            colorBgContainer: "#f6ffed"
          }
        }}
      >
        <QueryClientProvider client={client}>
          <RouterProvider router={router} />
          <App />
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
        <App />
      </ConfigProvider>
    </ChakraProvider>
  </StrictMode>
);
