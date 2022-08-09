import { useEffect, useState } from "react";
import { Page } from "../data";

const useSectionAnimate = (section: Page) => {
  const [hide, setHide] = useState(false);
  const [toBottom , setToBottom] = useState(section !== Page.HEADER);


  useEffect(() => {

    window.emitter.on('page', (data) => {
      if (data!.prevPage === section && data!.newPage !== section) {
        setHide(true);
        setTimeout(()=> {
          setToBottom(true);
        }, 300);
      }
      if (data!.newPage === section && data!.prevPage !== section) {
        setTimeout(()=> {
          setHide(false);
          setToBottom(false);
        }, 300);
      }
    })

  },[]);

  return [hide, toBottom];
}

export default useSectionAnimate;