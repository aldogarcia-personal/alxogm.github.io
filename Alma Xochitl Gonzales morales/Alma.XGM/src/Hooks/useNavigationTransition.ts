import { useEffect, useState } from "react";
const useNavigationTransition = () => {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleStart = () => {
      setIsTransitioning(true);
    };

    const handleEnd = () => {
      setIsTransitioning(false);
    };

    window.addEventListener("beforeunload", handleStart);
    window.addEventListener("unload", handleEnd);

    return () => {
      window.removeEventListener("beforeunload", handleStart);
      window.removeEventListener("unload", handleEnd);
    };
  }, []);

  return isTransitioning;
};
export default useNavigationTransition;
