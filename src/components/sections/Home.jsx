import { Container, Row, Col } from 'react-bootstrap'
import Cauber from '../../assets/home/Cauber.png'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = () => {
    const [text] = useTypewriter({
        words: ['I am a Brazilian programming student', 'Modern websites with React and Node.js', 'Many mistakes, many lessons learned'],
        loop: true
    })

    return (
        <Container fluid style={{ height: '21rem' }}>
            <Row className='align-items-center my-auto'>
                <Col xs={12} md={4} lg={6} className='text-center'>
                    <h2>
                        {text}
                        <Cursor
                            cursorColor='black'
                        />
                    </h2>

                </Col>

                <Col xs={12} md={8} lg={6} className='text-center text-md-left'>
                    <img
                        src={Cauber}
                        className='img-fluid'
                        alt='A person wearing a jacket with hands in pockets in a black and white theme'
                        style={{ width: '21rem' }}
                    />
                </Col>
            </Row>
        </Container>
    )
}

export default Home