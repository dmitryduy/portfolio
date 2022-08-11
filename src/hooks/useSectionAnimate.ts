import { useEffect, useState } from "react";
import { Page } from "../data";
import { useAppSelector } from "./useAppSelector";

const useSectionAnimate = (section: Page) => {
  const pageInfo = useAppSelector(state => state.settings.pageInfo);
  const [hide, setHide] = useState(section !== pageInfo.activePage);
  const [toBottom, setToBottom] = useState(section !== pageInfo.activePage);


  useEffect(() => {
    if (pageInfo.previousPage === section && pageInfo.activePage !== section) {
      setHide(true);
      setTimeout(() => {
        setToBottom(true);
      }, 300);
    }

    if (pageInfo.previousPage !== section && pageInfo.activePage === section) {
      setTimeout(() => {
        setHide(false);
        setToBottom(false);
      }, 300);
    }


  }, [pageInfo]);

  return [hide, toBottom];
}

export default useSectionAnimate;