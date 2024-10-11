import { useContext } from 'react'
import { SectionContext } from '../context/SectionProvider'

const useSection = () => useContext(SectionContext)

export default useSection