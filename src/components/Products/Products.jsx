import React from 'react';
import { Grid } from '@material-ui/core';
import Product from './Product/Product';
import useStyles from './StylesProducts';


const products = [
    {   
        id: 1,
        name: 'Robot',
        description: 'A good new toy',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be13.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Plastic'
    },
    {   
        id: 2,
        name: 'Robot',
        description: 'A good new help for you',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Metal'
    },
    {   
        id: 3,
        name: 'Robot',
        description: 'A good new toy',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be13.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Carbon'
    },
    {   
        id: 4,
        name: 'Robot',
        description: 'A good new help for you',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Wood'
    },
    {   
        id: 5,
        name: 'Robot',
        description: 'A good new toy',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be13.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Tungsten'
    },
    {   
        id: 6,
        name: 'Robot',
        description: 'A good new help for you',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Metal'
    },
    {   
        id: 7,
        name: 'Robot',
        description: 'A good new toy',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be13.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Plastic'
    },
    {   
        id: 8,
        name: 'Robot',
        description: 'A good new help for you',
        price: '฿5,300.00',
        image: 'http://assets.stickpng.com/thumbs/580b57fbd9996e24bc43be0f.png',
        stock: '01/100',
        createdAt: '18-05-2021',
        material: 'Metal'
    }
];

const Products = () => {

    const classes = useStyles();

    return (
        <div className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justify='center' spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} />
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Products;