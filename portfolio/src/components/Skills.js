import React from 'react'


class Skills extends React.Component{
    render(){
        return(
            <article id="skills">
                <h2 className="major">My Technology Stack</h2>
                {/* <span className="image main"><img src="https://miro.medium.com/max/13000/1*x7EP6PaUwr34E9nzjULtzw.jpeg" height="250px" alt="SKILL" /></span> */}
                <table>
                    <tr style={{textAlign: "center"}}>
                        <td>HTML</td>
                        <td>CSS</td>
                        <td>JavaScript</td>
                        <td>PHP</td>
                    </tr>
                    <tr style={{textAlign: "center"}}>
                        <td>MongoDB</td>
                        <td>ExpressJs</td>
                        <td>ReactJs</td>
                        <td>Nodejs</td>
                    </tr>
                    <tr style={{textAlign: "center"}}>
                        <td>Python</td>
                        <td>Django</td>
                        <td>MySql</td>
                        <td>AWS</td>
                    </tr>
                </table>
            </article>
        )
    }
}

export default Skills