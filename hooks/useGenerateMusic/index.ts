// hooks
import { useContext } from "react";

// contexts
import GenerateMusicContext from "@/contexts/GenerateMusicContext";

const useGenerateMusic = () => useContext(GenerateMusicContext);

export default useGenerateMusic;