import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Previewer from './components/Previewer';
import marked from 'marked';

const styles = {
	display: 'flex',
	justifyContent: 'space-evenly',
	paddingTop: 60,
	backgroundColor: '#CCFF99'
};

const navStyles = {
	padding: '10px 0 10px 0',
	fontWeight: 'bold',
	color: '#006600',
	textAlign: 'center',
	backgroundColor: '#66CC66'
};

const text = `# Welcome to my React Markdown Previewer!

## Heading
### Heading 2
  
This is a \`<div></div>\`, a simple code.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine ==  '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [My Personal Page](https://natsunoyoru97.github.io/main), and
> Block Quotes!

Column1 | Column2 | Column3
------------ | ------------- | -------------
This is | my | content....
WOW! | YEAH! | WHOAAAAAAAAA!!!

* And last but not least, let's not forget embedded images:

![Doge Meme w/ Text](https://s15.postimg.cc/oxmaj55bv/doge_1_62160_8778_image_13223.gif)`;

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			content: text
		};
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({ content: event.target.value });
	}

	render() {
		return (
			<div>
				<nav style={navStyles}>
					<h1>Markdown Previewer</h1>
				</nav>
				<div style={styles}>
					<Editor content={this.state.content} onChange={this.handleChange} />
					<Previewer content={this.state.content} />
				</div>
			</div>
		);
	}
}

export default App;
