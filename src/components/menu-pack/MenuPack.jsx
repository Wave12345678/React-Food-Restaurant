import React, { useEffect, useState } from 'react'
import './menupack.css'
import { Container, Row, Col } from 'reactstrap'
import ProductCard from '../product-card/ProductCard'
import { fastFoodProducts, riceMenuProducts, pizzaProducts, dessertProducts, coffeeProducts } from '../../assets/fake-data/products'



const MenuPack = () => {

    const [filter, setFilter] = useState('RICE-MENU')
    const [products, setProducts] = useState(fastFoodProducts)

    useEffect(() => {
        if (filter === 'RICE-MENU') {
            setProducts(riceMenuProducts)
        }
        if (filter === 'FAST-FOOD') {
            setProducts(fastFoodProducts)
        }
        if (filter === 'PIZZA') {
            setProducts(pizzaProducts)
        }
        if (filter === 'DESSERTS') {
            setProducts(dessertProducts)
        }
        if (filter === 'COFFEE') {
            setProducts(coffeeProducts)
        }
    }, [filter])

    return (
        <section>
            <Container>
                <Row>
                    <Col lg='12' className='text-center mb-5'>
                        <h3 className='menu__title'>Our Menu Pack</h3>
                    </Col>
                    <Col lg='12' className='text-center mb-4'>
                        <button className={`filter-btn ${filter === 'FAST-FOOD' ? 'active__btn' : ''}`} onClick={() => setFilter('FAST-FOOD')}>Fast Food</button>
                        <button className={`filter-btn ${filter === 'RICE-MENU' ? 'active__btn' : ''}`} onClick={() => setFilter('RICE-MENU')}>Rice Menu</button>
                        <button className={`filter-btn ${filter === 'PIZZA' ? 'active__btn' : ''}`} onClick={() => setFilter('PIZZA')}>Pizza</button>
                        <button className={`filter-btn ${filter === 'DESSERTS' ? 'active__btn' : ''}`} onClick={() => setFilter('DESSERTS')}>Desserts</button>
                        <button className={`filter-btn ${filter === 'COFFEE' ? 'active__btn' : ''}`} onClick={() => setFilter('COFFEE')}>Coffee</button>

                    </Col>

                    {
                        products.map(item => (
                            <Col lg='3' key={item.id} className='mb-4'>
                                <ProductCard item={item} />
                            </Col>
                        ))
                    }


                </Row>
            </Container>
        </section>
    )
}

export default MenuPack
