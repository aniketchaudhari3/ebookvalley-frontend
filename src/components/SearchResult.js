import React, { Component } from 'react'

export default class SearchResult extends Component {


    render() {
        return (
            <div className="searchresult col-md-12">
                <h4 className="title">{this.props.title}</h4>
                <p className="author">{this.props.author}</p>
            </div>
        )
    }
}
