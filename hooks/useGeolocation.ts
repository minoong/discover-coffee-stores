import { useCallback, useContext, useState } from 'react'
import { useSampleDispatch } from '~/pages/_app'

function useGeolocation() {
  // const [latLong, setLatLong] = useState<string>()
  const dispatch = useSampleDispatch()
  const [errorMessage, setErrorMessage] = useState<string>('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const success = useCallback(
    (position: GeolocationPosition) => {
      const { latitude, longitude } = position.coords

      setErrorMessage('')
      // setLatLong(`${latitude},${longitude}`)
      dispatch({ type: 'SET_LAT_LONG', payload: `${latitude},${longitude}` })
      setIsLoading(false)
    },
    [dispatch]
  )

  const error = useCallback((positionError: GeolocationPositionError) => {
    setErrorMessage(positionError.message)
    setIsLoading(false)
  }, [])

  const handleGeolocation = useCallback(() => {
    setIsLoading(true)

    if (!navigator.geolocation) {
      setErrorMessage('브라우저가 위치정보를 지원하지 않습니다.')
      setIsLoading(false)
    } else {
      navigator.geolocation.getCurrentPosition(success, error)
    }
  }, [error, success])

  return { errorMessage, isLoading, handleGeolocation }
}

export default useGeolocation
