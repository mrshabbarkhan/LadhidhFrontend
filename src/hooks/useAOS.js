import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function useAOS(onRefresh) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // useEffect(() => {
  //   AOS.refresh();
  // }, []);
}
