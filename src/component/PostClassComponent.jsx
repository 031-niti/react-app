import React, { Component } from 'react'
import "../post.css"

export default class PostClassComponent extends Component{
    render(){
        return(
            <div className='post'>
                <p><strong>{this.props.useId} </strong> : {this.props.message} </p>
                <p>{this.props.children}</p>
            </div>
        )
    }
}
