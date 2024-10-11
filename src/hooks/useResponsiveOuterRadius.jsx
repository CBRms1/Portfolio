import { useState, useEffect } from 'react'

const useResponsiveOuterRadius = (largeSize, smallSize, breakpoint = 768) => {
    const [outerRadius, setOuterRadius] = useState(largeSize)

    const handleResize = () => {
        if (window.innerWidth >= breakpoint) {
            setOuterRadius(largeSize)
        } else {
            setOuterRadius(smallSize)
        }
    }

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', handleResize)

        return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return outerRadius
}

export default useResponsiveOuterRadius