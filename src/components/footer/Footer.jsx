import React from 'react'
import './footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap'


const footerQuickLinks = [
    {
        display: "Terms & Conditions",
        url: '#'
    },
    {
        display: "Privacy Policy",
        url: '#'
    },
    {
        display: "Return & Refund",
        url: '#'
    },
    {
        display: "Payment Method",
        url: '#'
    },
]

const footerLinks = [
    {
        display: "About Us",
        url: '#'
    },
    {
        display: "Menu",
        url: '#'
    },
    {
        display: "Recipes",
        url: '#'
    },
    {
        display: "Contacts",
        url: '#'
    },
]

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__top">
                <Container>
                    <Row>
                        <Col lg='4' md='4' sm='6'>
                            <div className="logo">
                                <h2 className='d-flex align-items-center gap-1 mb-4'>
                                    <span><i class="ri-restaurant-2-line"></i></span>
                                    Chef Food
                                </h2>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias dolore iusto laborum quidem dolor iste.</p>
                            </div>
                        </Col>

                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                <p>Info Links</p>
                            </h5>
                            <ListGroup>

                                {
                                    footerQuickLinks.map((item, index) => (
                                        <ListGroupItem className='link__item'
                                            key={index}>
                                            <a href={item.url}>{item.display}</a>
                                        </ListGroupItem>
                                    ))
                                }


                            </ListGroup>
                        </Col>

                        <Col lg='2' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                <p>Quick Links</p>
                            </h5>
                            <ListGroup>

                                {
                                    footerLinks.map((item, index) => (
                                        <ListGroupItem className='link__item'
                                            key={index}>
                                            <a href={item.url}>{item.display}</a>
                                        </ListGroupItem>
                                    ))
                                }


                            </ListGroup>
                        </Col>


                        <Col lg='3' md='4' sm='6'>
                            <h5 className="footer__link-title">
                                <p>Contact</p>
                            </h5>

                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-map-pin-line"></i>
                                USA, California
                            </ListGroupItem>
                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-mail-line"></i>
                                example@mail.us
                            </ListGroupItem>
                            <ListGroupItem className='link__item d-flex align-items-center gap-3'>
                                <i class="ri-phone-line"></i>
                                +1 5156 165 1561
                            </ListGroupItem>

                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="footer__bottom">
                <Container>
                    <Row>
                        <Col lg='12'>
                            <p>copyright 2020, developed by Bekzod</p>
                        </Col>
                    </Row>
                </Container>
            </div>

        </footer>)
}

export default Footer
