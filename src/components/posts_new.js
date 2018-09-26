import React from 'react'
import { Field, reduxForm } from 'redux-form'

class PostsNew extends React.Component {
	renderTitleField(field) {
		return (
			<div className="form-group">
				<label>Title</label>
				<input className="form-control" type="text" {...field.input} />
			</div>
		)
	}

	render() {
		return (
			<form>
				<Field name="title" component={this.renderTitleField} />
			</form>
		)
	}
}

export default reduxForm({
	form: 'PostsNewForm'
})(PostsNew)
