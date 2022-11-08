import React from 'react'
import './download.css'
import { Container, Row, Col } from 'reactstrap'


import appImg from '../../assets/images/app.png'
const Download = () => {
    return (
        <section>
            <Container className="app_container">

                <Row>
                    <Col lg='6' md='6'>
                        <div className="app__img">
                            <img src={appImg} alt="" />
                        </div>
                    </Col>
                    <Col lg='6' md='6'>
                        <div className="app__content">
                            <h5>Download our app</h5>
                            <h2 className='mb-4'>Never Feel Hungry! Download Our Mobile App! Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, necessitatibus.</h2>

                            <div className="app__btn d-flex align-items-center gap-5 mt-4">
                                <button className="btn__apple d-flex align-items-center gap-3">
                                    <i class="ri-apple-line"></i>
                                    <a href="#">App Store</a>
                                </button>

                                <button className="btn-google d-flex align-items-center gap-3">
                                    <i class="ri-google-play-line"></i>
                                    <a href="#">Google Play</a>
                                </button>
                            </div>
                        </div>
                    </Col>

                </Row>
            </Container>
        </section>
    )
}

export default Download
