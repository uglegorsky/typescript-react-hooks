import React, { useEffect } from 'react'
import { useAppContext } from '../AppContext'

export const Timer: React.FC = () => {

  const appContext = useAppContext();

  useEffect(() => {
    let timer: ReturnType<typeof setInterval> = setInterval(appContext.tickTime, 1000)

    return () => clearInterval(timer);
  }, [appContext])

  return null
}