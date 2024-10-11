import { Container, Row, Col, Stack } from 'react-bootstrap'
import notebook from '../../assets/about/notebook.png'
import react from '../../assets/about/react.png'
import nodejs from '../../assets/about/nodejs.png'
import mongodb from '../../assets/about/mongodb.png'

const About = () => {
    return (
        <Container className='mt-3'>
            <Row className='align-items-center'>
                <Col xs={12} md={4} lg={6} className='text-center'>
                    - Hi, I am Cauber Markendorf Streck, a sixteen years old programming student. My goal in the world of programming is to shine the eyes of everyone who uses my websites, both visually and in the system.
                </Col>
                <Col xs={12} md={8} lg={6} className='text-center mt-3 mt-md-0'>
                    <img
                        src={notebook}
                        alt='A notebook with a cup of coffee and a plant pot around him'
                        style={{ width: '20rem' }}
                    />
                </Col>
            </Row>
            <Stack className='mt-5'>
                <Row>
                    <p><strong>Technologies</strong></p>
                </Row>

                <Stack>
                    <Row>
                        <p>Mern-stack technologies</p>
                    </Row>
                    <Row>
                        <img src={react} alt='React technology icon' style={{ width: '90px' }} />
                        <img src={nodejs} alt='Node.js technology icon' style={{ width: '90px' }} />
                        <img src={mongodb} alt='MongoDB technology icon' style={{ width: '90px' }} />
                    </Row>
                </Stack>
            </Stack>
        </Container>
    )
}

export default About