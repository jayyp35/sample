import React from 'react'
import Banner from './Banner'
import JobOffers from './JobOffers'
import Featured from './FeaturedCompanies'


function Home() {

    let jobs = [
        {
            title:"Junior Java Developer",
            timeStamp:"2 hours ago",
            company:"PickSaaS",
            location:"Wrclaw, Polska",
            details:"I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work)",
            pay:"$ up to PLN 550 net / MD B2B"
        },
        {
            title:"Junior Project Manager",
            timeStamp:"3 hours ago",
            company:"Frontkom",
            location:"Lubin, Polska",
            details:"Join us in the Lublin office to build innovative long-term projects. Exciting international clients and partners and a work environment focused on learning and growth awaits you!",
            pay:""
        },
        {
            title:"Junior Java Developer",
            timeStamp:"1 day ago",
            company:"PickSaaS",
            location:"Wrclaw, Polska",
            details:"I am currently looking for a Java Developer. Project for Public Sector Location: Wrocław (during the pandemic remote work)",
            pay:"$ up to PLN 550 net / MD B2B"
        }
    ]

    let companies = [
        "GrandParade",
        "Seargin",
        "Dex Ventures",
        "NBC",
        "SVT SP Zoo",
        "DG Tech",
        "PickSaaS",
        "BlackRose",
        "FrontKom"
    ]

    return (
        <div className="Home">
            <Banner/>
            <JobOffers jobs={jobs}/>
            <Featured companies={companies}/>
        </div>
    )
}

export default Home
