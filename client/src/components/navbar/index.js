import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';




export default function NavBar() {
    return (

            <Nav className="justify-content-center navigation">
                <Nav.Item>
                    <Nav.Link href="/about">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/gallery">Gallery</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav.Item>
                {/* <Nav.Item>
                    <Nav.Link href="/admin">Admin</Nav.Link>
                </Nav.Item> */}
            </Nav>

    )
}
