import { useEffect } from "react";

const TawkMessenger = () => {
  useEffect(() => {
    // Prevent duplicate script injection
    if (document.getElementById("tawk-script")) return;

    const script = document.createElement("script");
    script.id = "tawk-script";
    script.async = true;
    script.src = "https://embed.tawk.to/67b479756574c6190ba580fe/1ikcfkt3l";
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    document.body.appendChild(script);

    return () => {
      // Cleanup: Remove script when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI needed, just loading the script
};

export default TawkMessenger;
