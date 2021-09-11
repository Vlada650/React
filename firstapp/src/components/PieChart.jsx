import React from 'react'
import '../App.css'
import './main.css'

class CommentsField extends React.Component {
    state = {
        comments: [],
        form: {
            name: '',
            comment: ''
        }
    }
    componentDidMount() {
        if (localStorage.getItem('state')) {
            this.setState({ ...JSON.parse(localStorage.getItem('state')) })
        }
    }
    addComment = () => {
        this.setState({
            comments: [
                ...this.state.comments,
                {
                    name: this.state.form.name,
                    comment: this.state.form.comment
                }
            ],
            form: {
                name: '',
                comment: ''
            }
        }, () => localStorage.setItem('state', JSON.stringify(this.state)))
    }
    handleChange = (elem) => {
        this.setState({
            form: {
                ...this.state.form,
                [elem.target.name]: elem.target.value,
            }
        })
    }
    render() {
        return (
            < div className="user-comments" >
                {
                    this.state.comments.map(comment => <div key={comment.name}>
                        <span className="user-comments__name" >{comment.name}: </span>
                        <span className="user-comments__text" >{comment.comment}</span>
                    </div>)
                }
                < div className="user-comments__textarea" >
                    < label className="user-comments__textarea-name" > Имя: <br /><input type="text" value={this.state.form.name} name="name" className="" onChange={this.handleChange} /></label >
                    <br />< label className="user-comments__textarea-text" > Комментарий: <br /><textarea name="comment" rows="10" cols="50" value={this.state.form.comment} onChange={this.handleChange}></textarea></label >
                    <br /><button className="user-comments__textarea-btn" onClick={this.addComment}>Добавить комментарий</button>
                </div >
            </div >

        )
    }
}
export default CommentsField;