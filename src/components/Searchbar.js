import React, { Component } from 'react'

export default class Searchbar extends Component {

    render() {
        return (

            <div class="col-md-12 input-group mb-3">
                
                <input type="text" placeholder="Search Ebooks" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <div class="input-group-append">
                    <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
                </div>
            </div>
        )
    }
}
