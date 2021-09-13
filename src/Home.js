import { Grid } from '@material-ui/core';
import React, { Component, Fragment } from 'react';
import PageComponent from './PageComponent';
import RowComponent from './RowComponent';

const DATALIST = [
	{
		id: 1,
		header: 'Asean ministers to start talks on regional digital economy agreement by 2025',
		timeStamp: 1631465291000,
		details:
			'SINGAPORE - As Asean continues to grapple with Covid-19 cases and an uncertain recovery, its economic ministers have committed to conducting a study on a region-wide digital economy pact by 2023. They also agreed to start negotiations on the Asean Digital Economy Framework Agreement by 2025. A focus on digital transformation to enable the smooth flow of goods and services and data will help ensure the region continues to draw global trade and investments, and better position itself for future growth, Singapore\'s Minister for Trade and Industry Gan Kim Yong said at meetings with his counterparts last week. Asean remains fully committed to free and open trade and deepening regional economic integration, especially amidst the challenging backdrop posed by Covid-19," he said. "As the region emerges from the pandemic, it is important to leverage new growth opportunities in areas such as digitalisation and sustainability so that we entrench Asean as an attractive trade and investment proposition for our global partners." The 53rd Asean Economic Ministers\' Meeting was held via video conference on Sept 8 and 9, and will continue from Sept 13 to 15 when the ministers will meet their counterparts from the grouping\'s key partners, including the United States and China.',
	},
	{
		id: 2,
		header: 'Value of good class bungalow deals may be heading for 10-year high',
		timeStamp: 1631465291000,
		details:
			"SINGAPORE - The total value of good class bungalow (GCB) deals is heading for a 10-year high if sales continue at the blistering pace they have set so far this year. There have been 68 sales totalling $2.05 billion from Jan 1 to Aug 20, up 392 per cent from the 21 deals worth $415.8 million in the same period last year, noted List Sotheby's International Realty.",
	},
	{
		id: 3,
		header: 'Header three',
		timeStamp: 1631465291000,
		details: 'fhqp wh fphwpq fhqp weh qwpeiufh qweiouf hqwi',
	},
	{
		id: 4,
		header: 'Header four',
		timeStamp: 1631465291000,
		details: 'fhqp wh fphwpq fhqp weh qwpeiufh qweiouf hqwi',
	},
	{
		id: 5,
		header: 'Header five',
		timeStamp: 1631465291000,
		details: 'fhqp wh fphwpq fhqp weh qwpeiufh qweiouf hqwi',
	},
	{
		id: 6,
		header: 'Header six',
		timeStamp: 1631465291000,
		details: 'fhqp wh fphwpq fhqp weh qwpeiufh qweiouf hqwi',
	},
	{
		id: 7,
		header: 'Header seven',
		timeStamp: 1631465291000,
		details: 'fhqp wh fphwpq fhqp weh qwpeiufh qweiouf hqwi',
	},
];

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataList: DATALIST,
			selectedId: 1,
		};
	}

	selection = (id) => {
		if (id) this.setState({ selectedId: id });
	};

	getDetails = (id) => {
		if (id) {
			const { dataList } = this.state;
			return dataList.filter((each) => each.id === id)[0];
		}
	};

	render() {
		const { dataList, selectedId } = this.state;
		const pageData = this.getDetails(selectedId);
		return (
			<Fragment>
				<Grid
					container
					direction="row"
					justify="flex-start"
					alignItems="flex-start"
				>
					<Grid
						item
						xs={3}
						style={{
							borderRight: '1px solid #666',
							padding: "0 10px"
						}}
					>
						<h3
							style={{
								textAlign: 'center',
							}}
						>
							Notes
							<span style={{ float: 'right', color: '#a4af00' }}>
								Edit
							</span>
						</h3>
						{dataList.map((eachData, index) => {
							return (
								<RowComponent
									data={eachData}
									click={this.selection}
								/>
							);
						})}
					</Grid>
					<Grid item xs={9}>
						<PageComponent data={pageData} />
					</Grid>
				</Grid>
			</Fragment>
		);
	}
}

export default Home;
