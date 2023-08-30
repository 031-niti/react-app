import React from 'react'
import "../Comments.css"

export default Comment = (props)=> {
        return (
            <div className="dialogbox">
               <div className="body">
                        <span className="tip tip-up"></span>
                    <div className="message">
                        <span>
                            <b>{props.useId}</b> : {props.message}
                        </span>
                    </div>
               </div>
            </div>
        )
}