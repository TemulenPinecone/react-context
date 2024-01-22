import { QuestionProvider } from "@/context/QuestionContext";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <QuestionProvider>
      <Component {...pageProps} />
    </QuestionProvider>
  );
}
