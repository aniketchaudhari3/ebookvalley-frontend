import React, { Component } from 'react'
import Searchbar from './Searchbar'
export default class PageHeader extends Component {

    render() {
        return (
            <div className="searchcontainer">
                <div class="col-md-12">
                    <div class="container col-md-6">
                        <center>
                        <h1 class="display-4">EbookValley</h1>
                        <p class="lead">Search for millions of Ebooks on the Internet!</p>
                        </center>
                        <Searchbar/>
                    </div>
                </div>  
            </div>
            )
        }
    }
