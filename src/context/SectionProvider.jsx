import PropTypes from 'prop-types'
import { useState, createContext } from 'react'

const SectionContext = createContext()

const SectionProvider = ({ children }) => {
    const [section, setSection] = useState('home')

    const changeSection = sec => {
        setSection(sec)
    }

    return (
        <SectionContext.Provider value={{ section, changeSection }}>
            {children}
        </SectionContext.Provider>
    )
}

SectionProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export { SectionContext, SectionProvider }