import { Carousel, Card, Button } from 'react-bootstrap'

import SEG from '../../assets/education/seg.png'
import cilonRosa from '../../assets/education/cilon rosa.png'
import fundacaoEstudar from '../../assets/education/fundacao estudar.png'
import FSO from '../../assets/education/fso.png'

const Education = () => {
    return (
        <Carousel data-bs-theme='dark' style={{ marginTop: '7rem' }}>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center card-background-color' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>Computer technician (in progress)</h3></Card.Title>

                        <Card.Text className='text-secondary-color'>
                            Sistema de Ensino Gaúcho (SEG)
                        </Card.Text>

                        <Card.Img
                            variant='top'
                            src={SEG}
                            alt='Sistema de Ensino Gaúcho company icon'
                            className='w-25 mt-2 mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-75'>
                            September 2025
                        </Card.Text>

                        <Card.Text className='text-start'>
                            Computer assembly, web development, computer networks, cybersecurity, database development, programming logic and object-oriented programming (OOP).
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center card-background-color' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>High school (in progress)</h3></Card.Title>

                        <Card.Text className='text-secondary-color'>
                            Cilon Rosa
                        </Card.Text>

                        <Card.Img
                            variant='top'
                            src={cilonRosa}
                            alt='A default icon'
                            className='w-25 mt-2 mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-75'>
                            December 2025
                        </Card.Text>

                        <Card.Text className='text-start'>
                            Math, Portuguese, English, biology, sociology, philosophy, history, literature, physics education, essay, Spanish, geographic, chemistry and physics
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center card-background-color' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>CC50: Introduction to Computer Science</h3></Card.Title>

                        <Card.Text className='text-secondary-color'>
                            Fundação Estudar
                        </Card.Text>

                        <Card.Img
                            variant='top'
                            src={fundacaoEstudar}
                            alt='fundação estudar company icon'
                            className='w-25 mt-2 mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-75'>
                            February 2024
                        </Card.Text>

                        <Card.Text className='text-start'>
                            Programming logic, web development, algorithm, database development, practical English and programming languages.
                        </Card.Text>

                        <Button variant='dark' as='a' href='https://drive.google.com/file/d/19TA3pRbu4Tj_S-j_oWVNhDnVdDDoZbxO/view'>See certificate</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center card-background-color' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>Full Stack Development - Modern websites with React and Node.js</h3></Card.Title>

                        <Card.Text className='text-secondary-color'>
                            Full Stack Open
                        </Card.Text>

                        <Card.Img
                            variant='top'
                            src={FSO}
                            alt='full stack open company icon'
                            className='w-25 mt-2 mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-75'>
                            April 2024
                        </Card.Text>

                        <Card.Text className='text-start'>
                            Web development, database development, application tests, programming logic and organized programming.
                        </Card.Text>

                        <Button variant='dark' as='a' href='https://drive.google.com/file/d/1ih6PXsUPDWoWemcyc2B7j8fhxT92EqUq/view'>See certificate</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center card-background-color hy-5' style={{ width: 'calc(30vw + 150px)', minHeight: '200px' }}>
                    <p style={{ margin: 'auto' }}>More educations soon...</p>
                </Card>
            </Carousel.Item>
        </Carousel>
    )
}

export default Education