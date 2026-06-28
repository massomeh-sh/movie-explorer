import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import "./index.css";
import MovieContextProvider from "./context/MovieContext.tsx";
import {Toaster} from "react-hot-toast"

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <MovieContextProvider>
            <App/>
            <Toaster position="bottom-right" toastOptions={{
                className:"text-3xl bg-stale-900 border border-stale-700 rounded-xl shadow-2xl",
                success: {className: "bg-stale-900 border border-green-500/30 rounded-xl"},
                error: {className: "bg-stale-900 border border-red-500/30 rounded-xl"}
            }}/>
        </MovieContextProvider>
    </StrictMode>
)
