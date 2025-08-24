import { Container, Row, Col, Stack } from 'react-bootstrap'
import react from '../../assets/about/react.png'
import nodejs from '../../assets/about/nodejs.png'
import mongodb from '../../assets/about/mongodb.png'
import { useState } from 'react'

const About = () => {
    const [activateReactDesc, setActivateReactDesc] = useState()
    const [activateNodeDesc, setActivateNodeDesc] = useState()
    const [activateMongoDesc, setActivateMongoDesc] = useState()

    return (
        <Container className='mt-3'>
            <Row className='align-items-center'>
                <Col className='text-center m-5'>
                    <p>Hi, I am Cauber, a 17-year-old programming student passionate about technology and web development.</p>

                    <p>I began my programming journey at the age of 14 using C# in Visual Studio. A year later, I transitioned into web development, where I found my main focus and motivation.</p>

                    <p><strong>I am currently focusing on building practical projects and improving my skills to pursue a career in software development.</strong></p>
                </Col>
            </Row>
            <Stack>
                <Row className='text-center mb-2'>
                    <h4>Mern-stack technologies</h4>
                </Row>
                <Row className="justify-content-center text-center">
                    <Col xs={8} md={4} className="d-flex flex-column align-items-center mb-4">
                        <img
                            src={react}
                            alt="React technology icon"
                            style={{ width: '60%', cursor: 'pointer' }}
                            onClick={() => setActivateReactDesc(!activateReactDesc)}
                        />
                        {activateReactDesc && (
                            <p>
                                React is a JavaScript library for building fast and interactive user interfaces using reusable components.
                            </p>
                        )}
                    </Col>

                    <Col xs={8} md={4} className="d-flex flex-column align-items-center mb-4">
                        <img
                            src={nodejs}
                            alt="Node.js technology icon"
                            style={{ width: '60%', cursor: 'pointer' }}
                            onClick={() => setActivateNodeDesc(!activateNodeDesc)}
                        />
                        {activateNodeDesc && (
                            <p>
                                Node.js is a JavaScript runtime that allows building fast, scalable backend applications using an event-driven, non-blocking model.
                            </p>
                        )}
                    </Col>

                    <Col xs={8} md={4} className="d-flex flex-column align-items-center mb-4">
                        <img
                            src={mongodb}
                            alt="MongoDB technology icon"
                            style={{ width: '60%', cursor: 'pointer' }}
                            onClick={() => setActivateMongoDesc(!activateMongoDesc)}
                        />
                        {activateMongoDesc && (
                            <p>
                                MongoDB is a NoSQL database that stores data in flexible, JSON-like documents.
                            </p>
                        )}
                    </Col>
                </Row>

            </Stack>
        </Container>
    )
}

export default About