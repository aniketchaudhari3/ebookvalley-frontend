import React, { Component } from 'react'
import DownloadLoader from './DownloadLoader'
import apiConfig from './config'
export default class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            res: {
                'url': ''
            },
            showDownload: 'none',
            showLoader: 'none',
            showDownloadBtn: 'none',
            mainDwnBtn: 'block'
        }
        this.downloadBook = this.downloadBook.bind(this);
    }

    downloadBook(bookLink) {
        this.setState({
            showDownload: 'block',
            showLoader: 'block'
        });
        console.log(bookLink);
        fetch(apiConfig.downloadEnd + bookLink, { mode: 'cors' })
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        res: result,
                        mainDwnBtn: 'none',
                        showDownloadBtn: 'block',
                        showLoader: 'none'
                    });

                },

                (error) => {
                    console.log("Error getting book url");
                    this.setState({
                        mainDwnBtn: 'none',
                        showDownloadBtn: 'none',
                        showDownload: 'none',
                        showLoader: 'none'
                    });
                    alert("Failed to get book url!");
                }
            )
    }

    nFormatter(num) {
        if (num >= 1000000000) {
            return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
            return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
            return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
    }
    
    componentWillReceiveProps(){
        this.setState({
            res:{},
            mainDwnBtn: 'block',
            showDownloadBtn: 'none',
            showDownload: 'none',
            showLoader: 'none'
        })
    }
    
    render() {
        return (
            <div className="bookcard">

                <div className="media">
                    <div style={{ display: this.state.mainDwnBtn }} className="fav-box">
                        <a >
                            <i onClick={() => { this.downloadBook(this.props.link) }} title={"Download " + this.props.title} className="fa fa-arrow-circle-o-down" aria-hidden="true"></i>
                        </a>
                    </div>
                    <img className="d-flex align-self-start"
                        src={this.props.img}
                        alt={this.props.title}
                        title={this.props.title} />
                    <div className="media-body pl-3">
                        <div className="price">{this.props.title}</div>
                        <div className="address">{this.props.year}</div>
                        <div className="stats">
                            <span><i className="fa fa-download"></i>{this.nFormatter(this.props.downloads)}</span>
                            <span><i className="fa fa-file-text-o"></i>{this.props.pages} Pages</span>
                        </div>

                    </div>
                </div>
                <div style={{ display: this.state.showDownload }} className="downloadbook">
                    <center style={{ display: this.state.showDownloadBtn }}>
                        <a target="_blank" href={this.state.res.url}> <i className="fa fa-arrow-circle-down"></i> DOWNLOAD</a>
                    </center>
                    <center style={{ display: this.state.showLoader }}>
                        <DownloadLoader />
                    </center>

                </div>
            </div>

        )
    }
}
