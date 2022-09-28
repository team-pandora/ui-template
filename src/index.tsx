import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider as ReduxProvider } from "react-redux";
import "./i18n";
import { Router } from "./router";
import store from "./store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
    <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
            <StrictMode>
                <Router />
            </StrictMode>
        </QueryClientProvider>
    </ReduxProvider>
);
