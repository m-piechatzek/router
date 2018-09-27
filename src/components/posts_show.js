import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchPost } from '../actions'

class PostsShow extends React.Component {
	componentDidMount() {
		if (!this.props.post) {
			const { id } = this.props.match.params
			console.log('id', id)
			this.props.fetchPost(id)
		}
	}

	render() {
		const { post } = this.props

		if (!post) {
			console.log('post', post)
			return <div>Loading...</div>
		}
		return (
			<div>
				<Link to="/">Back To Index</Link>
				<h3>{post.title}</h3>
				<h6>Categories: {post.categories}</h6>
				<p>{post.content}</p>
			</div>
		)
	}
}

function mapStateToProps({ posts }, ownProps) {
	console.log('pop', posts)
	return { post: posts[ownProps.match.params.id] }
}

export default connect(
	mapStateToProps,
	{ fetchPost }
)(PostsShow)
