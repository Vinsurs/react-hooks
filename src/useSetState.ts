import { useRef, useState, useCallback } from "react"
import type { MutableRefObject } from "react"
/** 
 * @description just like class component's `setState`
 * @param {Object|()=>Object} initialState initial state for component
 * @param {Boolean} [syncRef] whether sync state with ref or not, can be used to handle `useEffect` closure
 * @example
 * ```tsx
 * const [state, setState] = useSetState({
 *    username: 'Tom',
 *    age: 18
 * })
 * function handleTap() {
 *    setState({
 *      age: 19
 *    })
 *    // or 
 *    // setState(prevState => ({ age: prevState.age + 1 }))
 * }
 * ```
 *  */
export function useSetState<S extends Record<keyof any, any>>(initialState: S | (() => S), syncRef = false ): [S, (patch: Partial<S> | ((prevState: S) => Partial<S>)) => void, MutableRefObject<S|undefined>] {
    const stateRef = useRef<S>()
    const [state, setState] = useState(initialState)
    if (syncRef) stateRef.current = state
    const patchState = useCallback((patch: Partial<S> | ((prevState: S) => Partial<S>)) => {
      setState(prevState => {
        const newState = {
          ...prevState,
          ...typeof patch === "function" ? patch(prevState) : patch
        }
        if (syncRef) {
          stateRef.current = newState
        }
        return newState
      })
    }, [])
    return [state, patchState, stateRef]
  }