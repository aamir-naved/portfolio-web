"use client";

import { useEffect, useState } from "react";

const QUERY = "(max-width: 640px)";

/** SSR-safe; updates after mount. Used to scale paper tilt on small screens. */
export function useNarrowScreen() {
  const [narrow, setNarrow] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const update = () => setNarrow(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return narrow;
}
