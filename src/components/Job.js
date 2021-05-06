import React from 'react'
import more from '../resources/more.svg'

function Job(props) {

    const job = props.thisjob;

    return (
        <div className="Job" style={props.style}>
            <div className="Job__Heading">
                <div className="Job__Heading--title">{job.title}</div>
                <div className="Job__Heading--time">{job.timeStamp}</div>
            </div>
            <div className="Job__Info">
                <div className="Job__Info--company">{job.company}</div>
                <div className="Job__Info--location">{job.location}</div>
            </div>
            <div className="Job__Details">{job.details}</div>
            <div className="Job__Pay">{job.pay}</div>
            <div className="Job__More"><img src={more} height="15px" width="15px"/></div>
        </div>
    )
}

export default Job
