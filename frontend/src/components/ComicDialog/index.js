import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions/index.js';
import './ComicDialog.css';

class ComicDialog extends Component {
	
	render() {
		if (!this.props.comic)
			return null

		return null
	}
}

const mapStateToProps = state => {
	return {
		comic: state.comic
	}
}


export default connect(mapStateToProps, actions)(ComicDialog)
