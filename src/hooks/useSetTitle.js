import { useEffect } from "react"

const useSetTitle = title => {
    useEffect(() => {
        document.title = `PlayNexus | ${title}`;
    }, [title])
}

export default useSetTitle;