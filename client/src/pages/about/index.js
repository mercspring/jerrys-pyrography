import {React, useState, useEffect} from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import imageUtils from '../../utils/images'

export default function About() {
    const [about,setAbout] = useState([]);
    useEffect(function() {
        imageUtils.getAbout().then((result) =>{
            console.log(result.data[0].about.split("\n"));
            setAbout(result.data[0].about.split("\n"));

        })
    }, [])
    return (
        <main>
            <Container>
                <Row>
                    <Col>
                        <div className='about'>
                            <h2>About Jerry and his Pyrography</h2>
                            {/* <img src="https://via.placeholder.com/150" alt="headshot"></img> */}
                            <img src="/images/croped_headshot_scaled.jpg" alt="headshot" width="250"></img>
                           {about.map((line,index) => <p key={index}>{line}</p>)}
                        </div>
                    </Col>
                    
                </Row>
            </Container>



        </main>
    )
}
