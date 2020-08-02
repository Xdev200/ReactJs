import React from 'react'

class About extends React.Component{
    render(){
        return(
            <article id="about">
                <h2 className="major">About Me</h2>
                {/* <span class="image main"><img src="https://res.cloudinary.com/dlfd1c7by/image/upload/v1595908286/xdev200/about_omirhc.png" alt="ABOUT" /></span> */}
                <p style={{textAlign: "justify"}}>Hi, I am Jamshedpur-native, Developer turned Entrepreneur. I am FullStack Developer with MERN and Python-Django. I can also speak to databases and make servers do stuff. I like working on scalability, performance, design and great user
                    experiences. When I'm not coding, I'm probably hanging out with my friends, playing chess, watching movies, listening to music and chatting with friends.</p>
            </article>
        )
    }
}

export default About