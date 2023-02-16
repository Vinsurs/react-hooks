import { useEffect } from "react"
/**
 * set Document title
 * @param title the document title you want to set
 */
export function useTitle(title: string) {
    useEffect(() => {
        document.title = title
    }, [title])
}