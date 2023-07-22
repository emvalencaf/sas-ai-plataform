// hooks
import { useContext } from "react";

// contexts
import GenerateImageContext from "@/contexts/GenerateImageContext";

const useGenerateImage = () => useContext(GenerateImageContext);

export default useGenerateImage;