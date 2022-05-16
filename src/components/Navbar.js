import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

  
const NavbarTest = () => {
  return (
  <Navbar bg="light" variant="dark">
    <Container>
    <Navbar.Brand href="">Top Spot</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="/Home">Home</Nav.Link>
      <Nav.Link href="/Quiz">Quiz</Nav.Link>
      <Nav.Link href="/TopArtists">Top Artists</Nav.Link>
      <Nav.Link href="/TopTracks">Top Tracks</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  )
}
  
export default NavbarTest;