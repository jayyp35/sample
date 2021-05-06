import React from 'react'
import Job from './Job'
import right from '../resources/right.svg'

function JobOffers(props) { 

    const jobs = props.jobs;
    const last = jobs.length-1;

    return (
        <div className="JobOffers">
            <div className="JobOffers__Heading">
                <div className="JobOffers__Heading--left">Newest Job Offers</div>
                <div className="JobOffers__Heading--right">View all job offers <img src={right} alt="" height="20px" width="20px"/></div>
            </div>
            <div className="JobOffers__Jobs">
                {jobs.map((job,index)=>{
                    if(index == last)
                        return <Job thisjob={job} style={{border:'none',margin:0}}/>
                    else
                        return <Job thisjob={job}/>
                })}
            </div>           
        </div>
    )
}

export default JobOffers
