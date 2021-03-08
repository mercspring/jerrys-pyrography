import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function About() {
    return (
        <main>
            <Container>
                <Row>
                    <Col sm={10} md={8}>
                        <h1 >About</h1>
                        <hr/>
                        <img style={{float:"left"}} className="mr-3"src="https://via.placeholder.com/150" alt="headshot"></img>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet felis eget est tempus, et cursus velit condimentum. Duis porta fringilla odio nec hendrerit. Donec pulvinar, risus sed finibus ullamcorper, dolor nulla iaculis ante, a commodo lectus risus et tellus. Sed quis auctor dolor. Nunc maximus lectus sapien, sed bibendum ex facilisis sit amet. Ut mattis nunc vel mauris tempor tincidunt. Duis vestibulum neque nec dui laoreet, ac mattis quam consectetur. Nullam ac ipsum id justo mollis sagittis nec in libero. Phasellus dolor tellus, aliquet vel orci eget, posuere interdum ante. Curabitur id rutrum neque. Nulla magna lacus, egestas non sem vitae, vestibulum accumsan elit. Integer sit amet elementum diam, sed luctus ligula. </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet felis eget est tempus, et cursus velit condimentum. Duis porta fringilla odio nec hendrerit. Donec pulvinar, risus sed finibus ullamcorper, dolor nulla iaculis ante, a commodo lectus risus et tellus. Sed quis auctor dolor. Nunc maximus lectus sapien, sed bibendum ex facilisis sit amet. Ut mattis nunc vel mauris tempor tincidunt. Duis vestibulum neque nec dui laoreet, ac mattis quam consectetur. Nullam ac ipsum id justo mollis sagittis nec in libero. Phasellus dolor tellus, aliquet vel orci eget, posuere interdum ante. Curabitur id rutrum neque. Nulla magna lacus, egestas non sem vitae, vestibulum accumsan elit. Integer sit amet elementum diam, sed luctus ligula. </p>
                    </Col>
                </Row>
            </Container>
            
            
            
        </main>
    )
}
