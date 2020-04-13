import React from 'react';
import { Layout } from 'antd';
import {Row, Col } from 'antd';
import {Card} from './Block';


const { Header, Footer, Content } = Layout;
const place = [
    {
        id: 1,
        dream: 'Paris',
        img: 'https://images.unsplash.com/photo-1517826723985-0567c901f530?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
    },
    {
        id: 2,
        dream: 'Sea',
        img: 'https://images.unsplash.com/photo-1578922746465-3a80a228f223?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80'
    },
    {
        id: 1,
        dream: 'Kite',
        img: 'https://images.unsplash.com/photo-1565264684018-7dfbb5cd7601?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=667&q=80'
    },

]

export const ProductList= () => {
    const renderCards= (element) => (
        <Col span={4}>
        <Card el={element}/>

        </Col>
    )
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Header>Header</Header>
            <Content>
                <Row justify="space-around">
                {place.map(el => renderCards (el))}
                </Row>
            </Content>
            <Footer>Footer</Footer>
        </Layout>
    );
}


