import React, { Component } from 'react';

const textStyles = {
	padding: 15,
	width: '45%',
	height: window.innerHeight - 150,
	border: '1px solid #CCCCCC',
	backgroundColor: 'white',
	overflow: 'scroll'
};

class Editor extends Component {
	render() {
		return (
			<textarea
				id="editor"
				style={textStyles}
				onChange={this.props.onChange}
				defaultValue={this.props.content}
				type="text"
			/>
		);
	}
}

export default Editor;
