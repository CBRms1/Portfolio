import { Col, Nav, Stack } from 'react-bootstrap'
import profile from '../assets/navegation/profile.png'
import useSection from '../hooks/useSection'

const Navegation = () => {
    const { changeSection } = useSection()

    return (
        <Col md={3} style={{ backgroundColor: '#dddddd', height: '40rem' }}  className='text-center'>
            <Stack>
                <img style={{width: '130px'}} className='mx-auto my-3' src={profile} alt='White man with curly blonde hair in a circle' />
                <h2 style={{ fontSize: '24px' }}>Cauber Streck</h2>
                <p className='text-secondary-color' style={{ fontSize: '12px' }}>Web Development from Brazil</p>
            </Stack>
            <Nav variant='pills' className='flex-column' style={{ fontSize: '12px' }}>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('home')}>
                        home
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('about')}>
                        about
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('soft-skills')}>
                        soft skills
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('hard-skills')}>
                        hard skills
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('projects')}>
                        projects
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('education')}>
                        education
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('services')}>
                        services
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className='text-secondary-color text-secondary-hover' onClick={() => changeSection('contact')}>
                        contact
                    </Nav.Link>
                </Nav.Item>
            </Nav>
            <Stack>
                <p className='text-primary-color mt-4' style={{ fontSize: '12px', fontFamily: 'Assistant' }}>
                    © Cauber Streck 2024
                    All rights reserved
                </p>
            </Stack>
        </Col>
    )
}

export default Navegation