import React, {useState, useEffect} from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0);

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currentProgress = window.scrollY;
            const pageHeight = document.body.scrollHeight - window.innerHeight;
            if(pageHeight) {
                setCompletion(Number(currentProgress/pageHeight).toFixed(2) * 100);
            }
        }

        window.addEventListener("scroll", updateScrollCompletion);

        return () => window.removeEventListener("scroll", updateScrollCompletion);
    }, [])
  return completion;
};

export default useScrollProgress