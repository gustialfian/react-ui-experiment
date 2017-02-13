import React, { Component } from 'react'

const Comment = (props) => {
  const likedStyle = props.liked 
    ? "mini ui blue icon button" 
    : "mini ui icon button"

  const handleClick = () => {
    props.onClick(props.commentId)
  }

  return (
    <div className="item">
      <div className="left floated content">
        <button className={likedStyle}
          onClick={handleClick}>
          <i className="thumbs up icon"></i>
        </button>
      </div>

      <div className="content">
        {props.text}
      </div>
    </div>
  )
} 

const CommentList = (props) => {
  const comments = props.comments.map((comment) => 
    <Comment key={comment.id} text={comment.text} liked={comment.liked}
      onClick={props.onClick} commentId={comment.id}/>
  )
  return (
    <div className="ui middle aligned divided list">
      {comments}
    </div>
  )
}

const CommentButton = (props) => {
  let textInput
  const handleClick = () => {
    props.onClick(textInput.value)
    textInput.value = ''
  }
  return (
    <div className="ui action input">
      <input type="text" placeholder="Write Comment"
        ref={(input) => textInput = input }/>

      <button className="ui blue right labeled icon button"
        onClick={handleClick}>
        <i className="comments icon"></i>
        Comment
      </button>
    </div>
  )
}

class CommentBox extends Component {
  constructor () {
    super()
    this.state = {
      comments: [
        {
          'id': 1,
          'text': "hey",
          'liked': true,
        },
        {
          'id': 2,
          'text': "hoy",
          'liked': true,
        },
        {
          'id': 3,
          'text': "lets go",
          'liked': false,
        },
      ]    
    }
  }

  handleClick = (text) => {
    const comments = this.state.comments.concat({
      'id': this.state.comments.length + 1,
      'text': text,
    })
    
    this.setState({ comments })
  }

  handleLikedComment = (id) => {
    const comments = this.state.comments.slice()
    comments[id-1].liked = !comments[id-1].liked

    this.setState({ comments }) 
  } 

  render() {
    return (
      <div className="ui container">
        <h1>CommentBox</h1>
        
        <div className="ui grid">
          <div className="column">
            <CommentList comments={this.state.comments}
              onClick={this.handleLikedComment}/>
            <CommentButton onClick={this.handleClick} />
          </div>
        </div>
      </div>
    )
  }
}

export default CommentBox
