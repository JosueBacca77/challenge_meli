import { useEffect, useRef, useState } from "react";

export const useFirstRender = () => {
  let first = useRef(true);

  const [isFirst, setIsFirst] = useState(true);

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    setIsFirst(false);
  });

  return {
    isFirst,
  };
};
