import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const Checkbox = ({ classes, label, handleCheckboxChange }) => {
	const [isChecked, setIsChecked] = useState(false);

	const toggleCheckboxChange = () => {
		setIsChecked(!isChecked);
		handleCheckboxChange(label);
	};

	return (
		<div className={classes}>
			<label>
				<input
					type="checkbox"
					value={label}
					checked={isChecked}
					onChange={toggleCheckboxChange}
				/>

				<span className="checkmark">{label}</span>
			</label>
		</div>
	);
}

Checkbox.propTypes = {
	label: PropTypes.string.isRequired,
	handleCheckboxChange: PropTypes.func.isRequired
};
