import { WindowDimensionsProvider } from "@/contexts/WindowDimensionContext";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useEffect, useState } from "react";

type Props = React.PropsWithChildren<{}>;

const SafeHydrate: React.FC<Props> = ({ children }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div suppressHydrationWarning>
      {typeof window === "undefined" ? null : children}
    </div>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  return (
    // <WindowDimensionsProvider>
    <Component {...pageProps} />
    // </WindowDimensionsProvider>
  );
}
