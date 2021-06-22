import { useEffect } from 'react';

const useMenuAnimation = (menuExpanded, setMenuExpanded, time = 1000) => {
  useEffect(() => {
    let timeoutId

    if (menuExpanded === "mounting") {
      timeoutId = setTimeout(() => {
        setMenuExpanded("mounted");
      }, time);
    } else if (menuExpanded === "unmounting") {
      timeoutId = setTimeout(() => {
        setMenuExpanded("unmounted");
      }, time);
    }

    return () => {
      clearTimeout(timeoutId)
    }
  }, [menuExpanded, setMenuExpanded, time]);
}

export default useMenuAnimation