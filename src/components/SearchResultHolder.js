import React, { Component } from 'react'
import SearchResult from './SearchResult'
export default class SearchResultHolder extends Component {

constructor(props){
    super(props);
    this.state = {
        books: [
            {title: "Crushing it", author: "Gary Vaynerchuk"},
            {title: "Pyjama Profit", author: "Varun Mayya"},
            {title: "Think and Grow Rich", author: "Napolean Hill"}
        ]
    }
}
    render() {
        return (
            <div className=" col-md-12">
                <div className="searchholder col-md-7">
                   
                    {
                        this.state.books.map((item, index) => {
                            return <SearchResult key={index} title={item.title} author={item.author}/>
                        })
                    }
                </div>
            </div>
        )
    }
}
