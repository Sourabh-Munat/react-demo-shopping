import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { Thumb } from '../Thumb';

export const CartProduct = (props) => {
	const [isMouseOver, setIsMouseOver] = useState(false);
	const [product] = useState(props.product);
	const classes = ['shelf-item'];
	if (!!isMouseOver) {
		classes.push('shelf-item--mouseover');
	}

	const handleOnIncrease = () => {
		const { changeProductQuantity } = props;
		product.quantity = product.quantity + 1;
		changeProductQuantity(product);
	}

	const handleOnDecrease = () => {
		const { changeProductQuantity } = props;
		product.quantity = product.quantity - 1;
		changeProductQuantity(product);
	}

	return (
		<div className={classes.join(' ')}>
			<div
				className="shelf-item__del"
				onMouseOver={() => setIsMouseOver(true)}
				onMouseOut={() => setIsMouseOver(false)}
				onClick={() => props.removeProduct(product)}
			/>
			<Thumb
				classes="shelf-item__thumb"
				src={`${process.env.PUBLIC_URL}/assets/${product.sku}_2.jpg`}
				alt={product.title}
			/>
			<div className="shelf-item__details">
				<p className="title">{product.title}</p>
				<p className="desc">
					{`${product.availableSizes[0]} | ${product.style}`} <br />
					Quantity: {product.quantity}
				</p>
			</div>
			<div className="shelf-item__price">
				<p>{`INR ${product.price.toFixed(2)}`}</p>
				<div>
					<button onClick={handleOnDecrease} disabled={product.quantity === 1 ? true : false} className="change-product-button">-</button>
					<button onClick={handleOnIncrease} className="change-product-button">+</button>
				</div>
			</div>
		</div>
	);
}

CartProduct.propTypes = {
	product: PropTypes.object.isRequired,
	removeProduct: PropTypes.func.isRequired,
	changeProductQuantity: PropTypes.func.isRequired,
};
