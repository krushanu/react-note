import React, { Component, Fragment } from 'react';
import HeightIcon from '@material-ui/icons/Height';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import DeleteIcon from '@material-ui/icons/Delete';
import ScreenShareIcon from '@material-ui/icons/ScreenShare';
import CreateIcon from '@material-ui/icons/Create';

class PageComponent extends Component {
	state = {};
	render() {
		const { data } = this.props;
		return (
			<Fragment>
				<div style={{ padding: '10px' }}>
					<HeightIcon
						style={{
							color: '#a4af00',
						}}
					/>
					<CreateIcon
						style={{
							color: '#a4af00',
							marginLeft: '10px',
							float: 'right',
						}}
					/>
					<ScreenShareIcon
						style={{
							color: '#a4af00',
							marginLeft: '10px',
							float: 'right',
						}}
					/>
					<DeleteIcon
						style={{
							color: '#a4af00',
							marginLeft: '10px',
							float: 'right',
						}}
					/>
					<PersonAddIcon
						style={{
							color: '#a4af00',
							marginLeft: '10px',
							float: 'right',
						}}
					/>
				</div>
				<div style={{ padding: '0 10px' }}>
					<h2>{data?.header}</h2>
					<p>{data?.details}</p>
				</div>
			</Fragment>
		);
	}
}

export default PageComponent;
