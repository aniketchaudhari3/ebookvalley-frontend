import React, { Component } from 'react'

export default class Searchbar extends Component {
    constructor(props){
        super(props);
        this.searchBook = this.searchBook.bind(this);
    }

    searchBook(value){
        console.log(value);
    }
    componentDidMount() {
        fetch("http://localhost:5000/api?q=crushing it", {mode:'cors'})
          .then(res => console.log(res.json()))
        //   .then(
        //     (result) => {
        //       this.setState({
        //         isLoaded: true,
        //         items: result.items
        //       });
        //     },
            
        //     (error) => {
        //       this.setState({
        //         isLoaded: true,
        //         error
        //       });
        //     }
        //   )
      }

    render() {
        return (

            <div class="col-md-12 input-group mb-3">
                
                <input id="searchbar" onChange={() => {this.searchBook(document.getElementById('searchbar').value)}} type="text" placeholder="Search Ebooks" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                <div class="input-group-append">
                    <span class="input-group-text" id="inputGroup-sizing-default">Search</span>
                </div>
            </div>
        )
    }
}
