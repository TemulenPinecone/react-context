import { QuestionProvider } from "@/context/QuestionContext";
import ThemeProvider from "@/context/ThemeContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <QuestionProvider>
        <Component {...pageProps} />
      </QuestionProvider>
    </ThemeProvider>
  );
}
