import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title} - Green Focus`;
  }, [title]);
};

export default useTitle;
