import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { createContext, useContext, useReducer } from 'react'
import { Result } from '~/types/api/places'

// if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
//   require('../mocks/')
// }

type InitialType = { latLong: string; coffeeStores: Result[] }

const initialState: InitialType = {
  latLong: '',
  coffeeStores: [],
}
const StoreStateContext = createContext<InitialType | null>(null)
const StoreDispatchContext =
  createContext<React.Dispatch<ReducerAction> | null>(null)

export function useSampleState() {
  const state = useContext(StoreStateContext)
  if (!state) throw new Error('Cannot find SampleProvider') // 유효하지 않을땐 에러를 발생
  return state
}

export function useSampleDispatch() {
  const dispatch = useContext(StoreDispatchContext)
  if (!dispatch) throw new Error('Cannot find SampleProvider') // 유효하지 않을땐 에러를 발생
  return dispatch
}

type ReducerAction =
  | { type: 'SET_LAT_LONG'; payload: string }
  | { type: 'SET_COFFEE_STORES'; payload: Result[] }

const ACTION_TYPES = {
  SET_LAT_LONG: 'SET_LAT_LONG',
  SET_COFFEE_STORES: 'SET_COFFEE_STORES',
} as const

const storeReducer: (
  state: InitialType,
  action: ReducerAction
) => InitialType = (state: InitialType, action: ReducerAction) => {
  switch (action.type) {
    case 'SET_LAT_LONG':
      return {
        ...state,
        latLong: action.payload,
      }
    case 'SET_COFFEE_STORES':
      return {
        ...state,
        coffeeStores: action.payload,
      }
    default:
      throw new Error(`Unhandled action type: ${action}`)
  }
}

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const initialState: InitialType = {
    latLong: '',
    coffeeStores: [],
  }

  const [state, dispatch] = useReducer(storeReducer, initialState)
  return (
    <StoreStateContext.Provider value={state}>
      <StoreDispatchContext.Provider value={dispatch}>
        {children}
      </StoreDispatchContext.Provider>
    </StoreStateContext.Provider>
  )
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  )
}

export default MyApp
