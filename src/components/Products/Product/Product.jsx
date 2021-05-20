import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './Styles';

const Product = ({ product }) => {

    const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.image} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant='h5' gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant='h6'>
                            {product.price}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant='subtitle1'>
                            {product.createdAt}
                        </Typography>
                        <Typography variant='subtitle1'>
                            {product.material}
                        </Typography>
                    </div>
                    <br></br>
                    <div>
                        <Typography variant='body1' color='textSecondary'>
                            {product.description}
                        </Typography>
                    </div>
                    <br></br>
                </CardContent>
                    <div>
                    <CardActions className={classes.cardActions} disableSpacing>
                        <Typography variant='h6'>
                            {product.stock}
                        </Typography>
                        <IconButton arial-label='Add to Cart'>
                             <AddShoppingCart />
                        </IconButton>
                    </CardActions>
                    </div>
            </Card>
            
        </div>
    )
}

export default Product;