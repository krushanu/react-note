import React, { Component, Fragment } from 'react';
import { withStyles } from '@material-ui/styles';
const styles = (theme) => ({
	paraStyle: {
		'text-overflow': 'ellipsis',
		overflow: 'hidden',
		'white-space': 'nowrap',
	},
	durationStyle: {
		color: '#a4af00',
		marginRight: '5px',
	},
});

class RowComponent extends Component {
	state = {};
	durationCalc = (duration) => {
		// This function is going to help in getting the desired business logic
		return new Date(duration).toLocaleString();
	};
	select = (id) => {
		const { click } = this.props;
		click(id);
	};
	render() {
		const { data, classes } = this.props;
		return (
			<div onClick={() => this.select(data.id)}>
				<hr />
				<h3 className={classes.paraStyle}>{data.header}</h3>
				<p className={classes.paraStyle}>
					<span className={classes.durationStyle}>
						{this.durationCalc(data.timeStamp)}
					</span>
					<span>{data.details}</span>
				</p>
			</div>
		);
	}
}

export default withStyles(styles)(RowComponent);
