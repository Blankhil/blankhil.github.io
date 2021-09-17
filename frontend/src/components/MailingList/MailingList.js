import React from 'react';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(2),
			width: '35ch',
		},
	},
	button: {
		backgroundColor: '#00aaff',
	},
}));

// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	if (this == undefined) {
// 		alert('Form has errors.');
// 	} else {
// 		alert('Submitted! We will reach out with any updates to Wisecave!');
// 		toast('Submitted! We will reach out with any updates to Wisecave!');
// 	}
// };

export default function MailingList() {
	const classes = useStyles();

	return (
		<form
			className={classes.root}
			noValidate
			autoComplete='off'
			onSubmit={() =>
				alert('Submitted! We will reach out with any updates to Wisecave!')
			}
		>
			<TextField
				required
				id='outlined-first-name'
				label='First Name'
				variant='outlined'
			/>
			<TextField
				required
				id='outlined-last-name'
				label='Last Name'
				variant='outlined'
			/>
			<TextField
				required
				id='outlined-email'
				label='Email'
				type='email'
				variant='outlined'
			/>
			<br></br>
			<Button
				variant='contained'
				color='#00aaff'
				className={classes.button}
				type='submit'
			>
				Submit
			</Button>
		</form>
	);
}
