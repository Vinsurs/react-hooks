import { useEffect, useRef } from "react";
/**
 * setInterval hook
 * @param callback callback function to be excuted every interval
 * @param interval excution interval(ms)
 */
export function useInterval(callback: Function, interval: number) {
    const savedCallback = useRef<Function>()
    useEffect(() => {
        savedCallback.current = callback
    }, [callback])
    useEffect(() => {
        if (interval && interval > 0) {
            const handler = (...args: any[]) => savedCallback.current?.(...args)
            const id = setInterval(handler, interval)
            return () => clearInterval(id)
        } 
    }, [interval])
}