import { useEffect } from "react"
/**
 * set Document title
 * @param title the document title you want to set
 */
export function useTitle(title: string) {
    useEffect(() => {
        // support non-browser environment
        if (window && window.document) {
            document.title = title
        }
    }, [title])
}