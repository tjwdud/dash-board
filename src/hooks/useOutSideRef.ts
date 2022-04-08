import React, { useState, useRef, useEffect } from "react";

function useOutSideRef() {
  const [selected, setSelected] = useState(false);
  const clickRef = useRef<any>(null);

  function handleClickAway(e: MouseEvent): void {
    const target = e.target as HTMLElement;
    console.log(clickRef.current);
    console.log("타겟", target);
    if (!clickRef.current?.contains(target)) setSelected(false);
  }

  function onToggle() {
    setSelected(!selected);
  }

  useEffect(() => {
    if (selected) {
      document.addEventListener("click", handleClickAway);
    } else {
      document.removeEventListener("click", handleClickAway);
    }
    return () => {
      document.removeEventListener("click", handleClickAway);
    };
  }, []);
  return { selected, clickRef, onToggle };
}

export default useOutSideRef;
