import { Container, Row, Col } from 'react-bootstrap'

import email from '../../assets/contact/email.png'
import github from '../../assets/contact/github.png'
import linkedin from '../../assets/contact/linkedin.png'
import phoneNumber from '../../assets/contact/phone number.png'

import StyledContactIcon from '../../styles/StyledContactIcon'

const Contact = () => {
    return (
        <Container>
            <Row className='my-3'>
                <h3>Find me on...</h3>
            </Row>

            <Row className='my-2'>
                <Col className='col-auto mb-2'>
                    <a href='mailto:cauberms@gmail.com?subject=subject text'>
                        <StyledContactIcon
                            src={email}
                            alt='My email'
                        />
                    </a>
                </Col>

                <Col className='col-12 col-md-5'>
                    <h3>Email</h3>
                    <p>My email is <strong>cauberms@gmail.com</strong>. But an alternative email is <strong>cbrcauber@gmail.com</strong>.</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col className='col-auto mb-2'>
                    <a href='https://github.com/CBRms1'>
                        <StyledContactIcon
                            src={github}
                            alt='My github profile'
                        />
                    </a>
                </Col>

                <Col className='col-12 col-md-5'>
                    <h3>Github</h3>
                    <p>I have some projects that I did not add to this site on my github. Feel free to check them out there.</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col className='col-auto mb-2'>
                    <a href='https://www.linkedin.com/in/cauber-streck-a908992b5/'>
                        <StyledContactIcon
                            src={linkedin}
                            alt='My linkedin profile'
                        />
                    </a>
                </Col>

                <Col className='col-12 col-md-5'>
                    <h3>Linkedin</h3>
                    <p>Send me a message on LinkedIn to chat, I will reply ASAP.</p>
                </Col>
            </Row>

            <Row className='my-2'>
                <Col className='col-auto mb-2'>
                    <a href='tel:+55991087624'>
                        <StyledContactIcon
                            src={phoneNumber}
                            alt='My phone number'
                        />
                    </a>
                </Col>

                <Col className='col-12 col-md-5'>
                    <h3>Phone number</h3>
                    <p>My phone number is <strong>+55 99108-7624</strong>, call me on whatsapp if you wanna talk to me.</p>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact