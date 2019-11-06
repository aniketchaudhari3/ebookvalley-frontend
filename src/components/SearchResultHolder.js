import React, { Component } from 'react'
import SearchResult from './SearchResult'
import Searchbar from './Searchbar'
export default class SearchResultHolder extends Component {

    constructor(props) {
        super(props);
        this.showBooks = this.showBooks.bind(this);
        this.state = {}
    }

    showBooks(bookItems) {
        this.setState({
            books: bookItems
        });
    }
    
    render() {
        return (
            <div>
                <div className="searchcontainer">
                    <div className="col-md-12 col-sd-12">
                        <div className="container col-md-6">
                            <center>
                                <h1 className="display-4">EbookValley</h1>
                                <p className="lead">Search for millions of Ebooks on the Internet!</p>
                            </center>
                            <Searchbar getbooks={this.showBooks} />
                        </div>
                    </div>
                </div>
                <div className=" col-md-12">
                    <div className="searchholder col-md-7">

                        {
                            this.state.books && this.state.books.map((item, index) => {
                                let bookName = (item.name.length > 50) ? item.name.toString().substring(0, 50) + '...' : item.name;
                                return <SearchResult key={index} 
                                title={bookName} 
                                year={item.year} 
                                downloads={item.downloads}
                                link={item.link}
                                img={item.img}
                                pages={item.pages}
                                />
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
