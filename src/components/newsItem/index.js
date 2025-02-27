import React, { Component, Fragment } from 'react';
import './newsItem.css';
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';




export default class NewsItem extends Component {
    handleVote = () =>  this.props.upvoteHandler(this.props.post.id);
    render() {
        let line = this.props.post.link ? (
            <a href={this.props.post.link}>{this.props.post.title}</a>
        ) : (
            <span>{this.props.post.title}</span>
        );
        return (
            <Fragment>
            <span className="ptr" onClick={this.handleVote}>
                    <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
                    {` ${this.props.post.upvotes}`}
                </span>
                <span className="newsitem">
                    {line}
                    <span>
                     <Link to={`/posts/${this.props.post.id}` }>Comments</Link>
                    </span>
                </span>
                <p className="author">{this.props.post.author}</p>
            </Fragment>
        );
    }
}