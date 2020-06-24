import React, { Component } from 'react';
import marked from 'marked';
import hljs from 'highlight.js/lib/core';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import pygmentize from 'pygmentize';

// Create your custom renderer.
const renderer = new marked.Renderer();

renderer.link = (href, title, text) => {
	return `<a target="_blank" href="${href}">${text}</a>`;
};
renderer.table = (header, body) => {
	return '<table class="table table-striped">' + header + body + '</table>';
};

const textStyles = {
	padding: 15,
	width: '45%',
	height: window.innerHeight - 150,
	border: '1px solid #CCCCCC',
	backgroundColor: 'white',
	overflow: 'scroll'
};

class Previewer extends Component {
	render() {
		return (
			<div
				id="preview"
				style={textStyles}
				dangerouslySetInnerHTML={{ __html: marked(this.props.content, { renderer: renderer }) }}
			/>
		);
	}
}

export default Previewer;
