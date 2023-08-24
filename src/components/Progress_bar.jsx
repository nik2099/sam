import React from 'react'

const Progress_bar = ({bgcolor='#000',progress="40",height="30",className='progress-bar'}) => {
	
	const Parentdiv = {
		height: height,
		width: '100%',
		backgroundColor: 'whitesmoke',
		borderRadius: 40
	}
	
	const Childdiv = {
		height: '100%',
		width: `${progress}%`,
		backgroundColor: bgcolor,
	    borderRadius:40,
		textAlign: 'right'
	}
	
	const progresstext = {
		padding: 10,
		color: 'black',
		fontWeight: 900
	}
		
	return (
	<div style={Parentdiv} className={className}>
	<div style={Childdiv}>
		<span style={progresstext}></span>
	</div>
	</div>
	)
}

export default Progress_bar;
