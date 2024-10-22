import { Carousel, Card, Button } from 'react-bootstrap'

import lookingForFocusIcon from '../../assets/projects/looking for focus.png'
import mostSpokenWordsInEnglishIcon from '../../assets/projects/most spoken words in english.png'
import immersionAIProject from '../../assets/projects/immersion ai project.png'
import COMQIcon from '../../assets/projects/comq.png'

const Projects = () => {
    return (
        <Carousel data-bs-theme='dark' style={{ marginTop: '7rem' }}>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>Looking for focus</h3></Card.Title>

                        <Card.Img
                            variant='top'
                            src={lookingForFocusIcon}
                            alt='A cup of coffee icon'
                            style={{ marginTop: '-10%', width: '40%' }}
                            className='mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-50'>
                            <p>July 2024</p>
                        </Card.Text>

                        <Card.Text className='text-start'>
                            <p>Bringing peace of mind to those who want to study. Website created using React, Node.js and MongoDB.</p>
                        </Card.Text>

                        <Button variant='dark' as='a' href='https://looking-for-focus.onrender.com/'>See website</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>Most spoken words in English</h3></Card.Title>

                        <Card.Img
                            variant='top'
                            src={mostSpokenWordsInEnglishIcon}
                            alt='An open book'
                            className='w-25 mt-2 mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-50'>
                            <p>May 2024</p>
                        </Card.Text>

                        <Card.Text className='text-start'>
                            <p>Making people learn the 100 most spoken words in English. Website created using React.</p>
                        </Card.Text>

                        <Button variant='dark' as='a' href='https://cbrms1.github.io/Most_spoken_words_in_English/'>See website</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>Immersion AI project</h3></Card.Title>

                        <Card.Img
                            variant='top'
                            src={immersionAIProject}
                            alt='A representation of AI'
                            className='w-25 mt-2 mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-50'>
                            <p>May 2024</p>
                        </Card.Text>

                        <Card.Text className='text-start'>
                            <p>A code that develops an AI that generates stories based on the prompt. Created in Colab with Python language.</p>
                        </Card.Text>

                        <Button variant='dark' as='a' href='https://github.com/CBRms1/Immersion_AI_project/blob/main/ProetoImersao.ipynb'>See code</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
            <Carousel.Item>
                <Card className='mx-auto px-3 text-bg-info mb-5 text-center' style={{ width: 'calc(30vw + 150px)' }}>
                    <Card.Body>
                        <Card.Title><h3>COMQ</h3></Card.Title>

                        <Card.Img
                            variant='top'
                            src={COMQIcon}
                            alt='A representation of AI'
                            className='w-25 mt-2 mx-auto'
                        />

                        <Card.Text className='mt-2 text-start opacity-50'>
                            <p>August 2024</p>
                        </Card.Text>

                        <Card.Text className='text-start'>
                            <p>Increase the income and employment rates of the Mário Quintana community. Group project using HTML, CSS and JavaScript vanilla.</p>
                        </Card.Text>

                        <Button variant='dark' as='a' href='https://henrike-pb.github.io/comq-project/'>See website</Button>
                    </Card.Body>
                </Card>
            </Carousel.Item>
        </Carousel>
    )
}

export default Projects