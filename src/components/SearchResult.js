import React, { Component } from 'react'

export default class SearchResult extends Component {


    render() {
        return (
            <div class="searchresult w-100">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-10">
                            <h5 class="title">{this.props.title}</h5>
                            <p class="author">{this.props.author}</p>
                        </div>
                        <div class="col-md-2">
                            <a href="#" class="btn btn-primary">Download</a>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}
