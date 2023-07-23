// hooks
import { useContext } from "react";

// contexts
import GenerateVideoContext from "@/contexts/GenerateVideoContext";

const useGenerateVideo = () => useContext(GenerateVideoContext);

export default useGenerateVideo;