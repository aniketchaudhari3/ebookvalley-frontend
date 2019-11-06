import React, { Component } from 'react';
import SearchLoader from './SearchLoader';
import apiConfig from './config';

export default class Searchbar extends Component {
    constructor(props) {
        super(props);
        this.searchBook = this.searchBook.bind(this);
    }

    showLoader() {
        document.getElementById('loader').style.display = 'block';
    }
    hideLoader() {
        document.getElementById('loader').style.display = 'none';
    }
    searchBook(value) {
        console.log(value);
        this.showLoader();
        fetch(apiConfig.searchEnd + value, { mode: 'cors' })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                    //pass books to SearchResultHolder
                    this.props.getbooks(this.state.items);
                    this.hideLoader();
                },

                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                    this.hideLoader();
                }
            )

    }

    render() {
        return (
            <div>


                <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
                    <div className="input-group">
                        <input autoFocus={true} onKeyPress={(event) => {
                            if (event.which == 13) {
                                document.getElementById('searchbar').value &&
                                    this.searchBook(document.getElementById('searchbar').value)
                            }
                        }} id="searchbar" type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" className="searchinput form-control border-0 bg-light" />
                        <div className="input-group-append">
                            <button onClick={() => {
                                document.getElementById('searchbar').value &&
                                    this.searchBook(document.getElementById('searchbar').value)
                            }} id="button-addon1" type="submit" className="btn btn-link text-primary"><i className="fa fa-search"></i></button>
                        </div>
                    </div>

                </div>
                <center>
                    <div style={{ display: 'none' }} id="loader">
                        <SearchLoader />
                    </div>

                </center>
            </div>
        )
    }
}
