import { useEffect, useState } from 'react'
const useNavigationTransition = (): boolean => {
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const handleStart = (): void => {
      setIsTransitioning(true)
    }

    const handleEnd = (): void => {
      setIsTransitioning(false)
    }

    window.addEventListener('beforeunload', handleStart)
    window.addEventListener('unload', handleEnd)

    return () => {
      window.removeEventListener('beforeunload', handleStart)
      window.removeEventListener('unload', handleEnd)
    }
  }, [])

  return isTransitioning
}
export default useNavigationTransition
