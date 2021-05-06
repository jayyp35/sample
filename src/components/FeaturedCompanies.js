import React from 'react'
import briefcase from '../resources/case.svg'

function FeaturedCompanies(props) {

    const companies = props.companies;

    return (
        <div className="FeaturedCompanies">
            <div className="FeaturedCompanies__Heading">Featured Companies</div>
            <div className="FeaturedCompanies__Companies">
                {
                    companies.map((company)=>{
                        return (<div className="FeaturedCompanies__Companies--company">
                            <div className="company-image">
                            <img src={briefcase} alt=""/>
                            </div> 
                            <div className="company-name">{company}</div>
                            </div>); 
                    })
                }
            </div> 
        </div>
    )
}

export default FeaturedCompanies
