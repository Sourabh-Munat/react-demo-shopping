import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { updateSort } from '../../services/sort/actions';

const sortBy = [
	{ value: '', label: 'Select' },
	{ value: 'lowestprice', label: 'Lowest to highest' },
	{ value: 'highestprice', label: 'Highest to lowest' }
];

const Sort = ({ updateSort }) => {
	return (
		<div className="sort">
			Order by
			<select onChange={e => updateSort(e.target.value)}>
				{sortBy.map(o => (
					<option value={o.value} key={o.value}>
						{o.label}
					</option>
				))}
			</select>
		</div>
	)
};

Sort.propTypes = {
	updateSort: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	sort: state.sort.type
});

export default connect(
	mapStateToProps,
	{ updateSort }
)(Sort);
