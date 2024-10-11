import useSection from '../hooks/useSection'

import { Col } from 'react-bootstrap'

import Home from './sections/Home'
import About from './sections/About'
import SoftSkills from './sections/SoftSkills'
import HardSkills from './sections/HardSkills'
import Projects from './sections/projects'
import Education from './sections/Education'
import Services from './sections/Services'
import Contact from './sections/Contact'

const Content = () => {
    const { section } = useSection()

    return (
        <Col className='mt-5 mt-md-0'>
            {section === 'home' && <Home />}
            {section === 'about' && <About />}
            {section === 'soft-skills' && <SoftSkills />}
            {section === 'hard-skills' && <HardSkills />}
            {section === 'projects' && <Projects />}
            {section === 'education' && <Education />}
            {section === 'services' && <Services />}
            {section === 'contact' && <Contact />}
        </Col>
    )
}

export default Content