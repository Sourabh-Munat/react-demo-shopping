import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addProduct } from '../../../services/cart/actions';

const Product = ({ product, addProduct }) => {
	product.quantity = 1;

	let formattedPrice = product.price.toFixed(2);

	let productInstallment;

	if (!!product.installments) {
		const installmentPrice = product.price / product.installments;

		productInstallment = (
			<div className="installment">
				<span>or {product.installments} x </span>
				<b>
					{product.currencyFormat}
					{installmentPrice.toFixed(2)}
				</b>
			</div>
		);
	}

	return (
		<div
			className="shelf-item"
			onClick={() => addProduct(product)}
			data-sku={product.sku}
		>
			{product.isFreeShipping && (
				<div className="shelf-stopper">Free shipping</div>
			)}
			<div className="shelf-item__thumb">
				<img src={`${process.env.PUBLIC_URL}/assets/${product.sku}_1.jpg`} alt={product.title} />
			</div>
			<p className="shelf-item__title">{product.title}</p>
			<div className="shelf-item__price">
				<div className="val">
					<small>{product.currencyFormat}</small>
					<b>{formattedPrice.substr(0, formattedPrice.length - 3)}</b>
					<span>{formattedPrice.substr(formattedPrice.length - 3, 3)}</span>
				</div>
				{productInstallment}
			</div>
			<div className="shelf-item__buy-btn">Add to cart</div>
		</div>
	);
};

Product.propTypes = {
	product: PropTypes.object.isRequired,
	addProduct: PropTypes.func.isRequired
};

export default connect(
	null,
	{ addProduct }
)(Product);
