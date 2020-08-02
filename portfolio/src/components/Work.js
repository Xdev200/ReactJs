import React from 'react'

class Work extends React.Component{
    render(){
        return(
            <article id="work">
                <h2 className="major">Work Experience</h2>
                {/* <span className="image main"><img src="https://res.cloudinary.com/dlfd1c7by/image/upload/v1595908293/xdev200/exp_k76kqk.png" alt="EXPERIENCE" /></span> */}
                <p>
                    <ul>
                        <li><strong> <span style={{color:"#006DFF"}}>YorApp Solution Private Limited, Jamshedpur</span></strong>
                            <br/><strong>CO-Founder and CTO</strong>
                            <p style={{textAlign:"justify"}}>Responsible for Developing the company's strategy for using technological resources. and ensuring technologies are used efficiently, profitably and securely. Evaluating and implementing new systems and infrastructure.</p>
                        </li>
                        <li><strong><span style={{color:"#006DFF"}}>XGARBAGE LAB, Jamshedpur</span> </strong>
                            <br/><strong>CO-Founder and Front End Developer  </strong>
                            <p style={{textAlign:"justify"}}>Responsible for implementing visual elements that users see and interact within a web application</p>
                        </li>
                        <li><strong><span style={{color:"#006DFF"}}>Green Book Solutions, Banglore</span></strong>
                            <br/><strong>PHP Web Developer  </strong>
                            <p style={{textAlign:"justify"}}>Employee Management System: Worked on Green Book Solution project to manage employee related real time process that is advance one from other solution available in the market.</p>
                        </li>
                        <li><strong>  <span style={{color:"#006DFF"}}>GNU Linux Users Group, NIT Durgapur</span></strong>
                            <br/><strong>Core Committee Member  </strong>
                            <p style={{textAlign:"justify"}}>Promoting and Educating about FOSS through varied workshop on revolutionary Open Technologies throughout the year. We spread idea of open source to beginner.</p>
                        </li>
                        {/* <li><strong>  <span style={{color:"#006DFF"}}> [ Centre for Application Development, NIT Durgapur ] </span></strong>
                            <br/><strong>Creative head</strong>
                        </li> */}
                    </ul>
                </p>
            </article>
        )
    }
}

export default Work