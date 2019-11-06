import React, { PureComponent } from 'react'

class SearchLoader extends PureComponent {
    render() {
        return (

            <svg className="lds-wave" width="80px" height="80px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid"><circle cx="11" cy="38.086" ng-attr-r="{{config.radius}}" fill="#e15b64" r="5">
                <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="0s" repeatCount="indefinite"></animate>
            </circle><circle cx="22" cy="56.4712" ng-attr-r="{{config.radius}}" fill="#f47e60" r="5">
                    <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.125s" repeatCount="indefinite"></animate>
                </circle><circle cx="33" cy="68.3092" ng-attr-r="{{config.radius}}" fill="#f8b26a" r="5">
                    <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.25s" repeatCount="indefinite"></animate>
                </circle><circle cx="44" cy="69.6081" ng-attr-r="{{config.radius}}" fill="#abbd81" r="5">
                    <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.375s" repeatCount="indefinite"></animate>
                </circle><circle cx="55" cy="61.914" ng-attr-r="{{config.radius}}" fill="#e15b64" r="5">
                    <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.5s" repeatCount="indefinite"></animate>
                </circle><circle cx="66" cy="43.5288" ng-attr-r="{{config.radius}}" fill="#f47e60" r="5">
                    <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.625s" repeatCount="indefinite"></animate>
                </circle><circle cx="77" cy="31.6908" ng-attr-r="{{config.radius}}" fill="#f8b26a" r="5">
                    <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.75s" repeatCount="indefinite"></animate>
                </circle><circle cx="88" cy="30.3919" ng-attr-r="{{config.radius}}" fill="#abbd81" r="5">
                    <animate attributeName="cy" values="30;70;30" times="0;0.5;1" dur="1s" calcMode="spline" keySplines="0.5 0 0.5 1;0.5 0 0.5 1" begin="-0.875s" repeatCount="indefinite"></animate>
                </circle></svg>
        )
    }
}

export default SearchLoader;