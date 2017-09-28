import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from '../../actions/index.js';
import './ComicDialog.css';

class ComicDialog extends Component {

	constructor() {
		super()
    this.state = { image_size: this.imageSize(window.innerWidth) }
		this.onClose = this.onClose.bind(this)
		this.handleResize = this.handleResize.bind(this)
	}
  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  imageSize(width) {
    return (width < 768) ? 'portrait_uncanny' : 'portrait_fantastic' 
  }


  handleResize() {
    this.setState({ image_size: this.imageSize(window.innerWidth) })
  }

  coverImage(image) {
    return `${image.path}/${this.state.image_size}.${image.extension}`
  }

	onClose(e) {
		e.preventDefault()
		this.props.resetComic()
	}

	render() {
		const { comic } = this.props
		if (!comic)
			return null

		const number = comic.number ? <p>Number: {comic.issueNumber}</p> : null
		const description = comic.variantDescription ? <p>Description: {comic.variantDescription}</p> : null
		const isbn = comic.isbn ? <p>ISBN: {comic.isbn}</p> : null
		const characters = comic.characters && comic.characters.length > 0 ? <p> Characters: {comic.characters.items.map(_ => _.name).join(', ')}</p> : null

		return (
			<div className="overlay">
				<div className="modal">
					<h2>{comic.title}</h2>
					<a className="modal-close" onClick={this.onClose}>&times;</a>
					<div className="modal-content">
						{number}
						{description}
						{isbn}
						{characters}
						<div className="pure-g">
							{comic.images.map(image => (
								<div key={image.path} className="pure-u-23-24 pure-u-md-1-4 pure-u-lg-1-5">
									<img role="presentation" src={this.coverImage(image)}></img>
								</div>
							))}
						</div>
						<p>Creators: {comic.creators.items.map(_ => _.name).join(', ')}</p>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => {
	return {
		comic: state.comic
	}
}


export default connect(mapStateToProps, actions)(ComicDialog)
