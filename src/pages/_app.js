import { ThemeProvider } from "@/hook/context_theme";
import "@/styles/globals.css";
import "@/styles/output.css";
import "@/styles/app.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
