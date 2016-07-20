import React from 'react';
import Lane from './Lane';

export default ({lane, ...props}) => (
	<div {...props}>{lane.name}</div>
)