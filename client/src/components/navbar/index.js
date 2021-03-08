import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




export default function NavBar() {
    return (
            <Navbar bg="light">
                <Navbar.Brand href="/about" className="mr-auto">
                    <img
                        src="/jerrys_icon.jpg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                        alt="logo"
                        style={{marginRight:"30px"}}
                    />

                    Jerry's Pyrography
                </Navbar.Brand>
                <Nav>
                    <Nav.Link href="/about">Home</Nav.Link>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                    <Nav.Link className="insta-icon" href="https://www.instagram.com/jerryspyrography/">|     <img src="/insta_icon.svg" alt="Instagram" ></img></Nav.Link>
                </Nav>
            </Navbar>

                )
                }
