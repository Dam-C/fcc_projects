import { useEffect } from "react";

function P3Keydown() {
  const handleKeyDown = (event) => {
    if (event.key) {
      console.log(event);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return <div onKeyDown={handleKeyDown}></div>;
}

export default P3Keydown;
