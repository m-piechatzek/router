import React from 'react'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostsShow extends React.Component {
	render() {
		return (
			<div>
				<div>sup</div>
			</div>
		)
	}
}

export default connect(
	null,
	{ fetchPost }
)(PostsShow)
