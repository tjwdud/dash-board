import { useState, useRef, useEffect } from "react";

function useOutSideRef() {
  const [selected, setSelected] = useState(false);
  const clickRef = useRef<HTMLDivElement>(null);

  function handleClickAway(e: MouseEvent): void {
    const target = e.target as HTMLElement;

    if (!!clickRef.current && !clickRef.current?.contains(target)) {
      setSelected(false);
    }
  }

  function onToggle() {
    setSelected(!selected);
  }

  useEffect(() => {
    document.addEventListener("click", handleClickAway, { capture: true });
    return () => {
      document.removeEventListener("click", handleClickAway, { capture: true });
    };
  }, [selected]);
  return { selected, clickRef, onToggle };
}

export default useOutSideRef;
