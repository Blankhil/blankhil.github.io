import React from 'react';
import './style.css';
import { makeStyles, styled } from '@material-ui/core/styles';
import { Grid, Avatar, Container, Paper } from '@material-ui/core';

import MailingList from '../../components/MailingList/MailingList';

const useStyles = makeStyles((theme) => ({
	root: {
		height: '100%',
		marginBottom: 40,
		marginTop: 100,
	},
	large: {
		width: theme.spacing(100),
		height: theme.spacing(100),
	},
}));

const Item = styled(Paper)(({ theme }) => ({
	...theme.typography.body2,
	padding: theme.spacing(1),
	textAlign: 'center',
	color: theme.palette.text.primary,
}));

export default function Landing() {
	const classes = useStyles();

	return (
		<div>
			<Container maxWidth='lg' justifyContent='center' alignItems='center'>
				<Grid
					container
					spacing={2}
					className={classes.root}
					direction='column'
					justifyContent='center'
					alignItems='center'
				>
					<Grid item xs={12}>
						<Avatar
							className={classes.large}
							src='./wisecave.png'
							alt='Wisecave logo'
							style={{
								height: '150px',
								width: '150px',
							}}
						/>
					</Grid>
					<Grid>
						<Item>
							<h1>Wisecave</h1>
							<h3>Please e-mail wisecaveapp@gmail.com for inquiries!</h3>
							<MailingList />
						</Item>
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
