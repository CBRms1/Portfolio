import { Card, Col, Container, Row } from 'react-bootstrap'

import webDevelopment from '../../assets/services/web development.png'
import helpDesk from '../../assets/services/help desk.jpg'
import informationSecurity from '../../assets/services/information security.jpg'
import databaseManagement from '../../assets/services/database management.jpg'

const Services = () => {
    return (
        <Container className='text-center'>
            <Row className='my-3'>
                <h3>SERVICE AREAS</h3>
            </Row>
            <Row className='justify-content-md-center'>
                <Col className='col-12 col-md-5'>
                    <Card className='m-3 py-3 px-5 border-secondary' style={{ minHeight: '15.5rem' }}>
                        <Card.Img
                            src={webDevelopment}
                            alt='A computer with an HTML code icon and a gear icon in front of it'
                            className='mx-auto'
                            style={{ width: '60px' }}
                        />

                        <Card.Title className='mt-2'>
                            <h5>WEB DEVELOPMENT</h5>
                        </Card.Title>

                        <Card.Text>
                            <p style={{ fontSize: '10px' }}>I could be one of the developers on a company`s website or even a helper in troubleshooting source code errors.</p>
                        </Card.Text>
                    </Card>
                </Col>
                <Col className='col-12 col-md-5'>
                    <Card className='m-3 py-3 px-5 border-secondary' style={{ minHeight: '15.5rem' }}>
                        <Card.Img
                            src={helpDesk}
                            alt='A computer with an HTML code icon and a gear icon in front of it'
                            className='mx-auto'
                            style={{ width: '60px' }}
                        />

                        <Card.Title className='mt-2'>
                            <h5>HELP DESK</h5>
                        </Card.Title>

                        <Card.Text>
                            <p style={{ fontSize: '10px' }}>I could serve as technical support for a company because I am studying computer technology and have daily contact with technology.</p>
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col className='col-12 col-md-5'>
                    <Card className='m-3 py-3 px-5 border-secondary' style={{ minHeight: '15.5rem' }}>
                        <Card.Img
                            src={databaseManagement}
                            alt='A computer with an HTML code icon and a gear icon in front of it'
                            className='mx-auto'
                            style={{ width: '60px' }}
                        />

                        <Card.Title className='mt-2'>
                            <h5>DATABASE MANAGEMENT</h5>
                        </Card.Title>

                        <Card.Text>
                            <p style={{ fontSize: '10px' }}>I could use my database knowledge to ensure that customer data is secure and organized.</p>
                        </Card.Text>
                    </Card>
                </Col>
                <Col className='col-12 col-md-5'>
                    <Card className='m-3 py-3 px-5 border-secondary' style={{ minHeight: '15.5rem' }}>
                        <Card.Img
                            src={informationSecurity}
                            alt='A computer with an HTML code icon and a gear icon in front of it'
                            className='mx-auto'
                            style={{ width: '60px' }}
                        />

                        <Card.Title className='mt-2'>
                            <h5>INFORMATION SECURITY</h5>
                        </Card.Title>

                        <Card.Text>
                            <p style={{ fontSize: '10px' }}>Over time I gained a knowledge of software security, especially website security with an emphasis on encryption and backups. So I could create solid security in a company.</p>
                        </Card.Text>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default Services