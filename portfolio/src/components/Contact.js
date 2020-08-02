import React from 'react'

class Contact extends React.Component{
    render(){
        return(
            <article id="contact">
                <h2 className="major">GET IN TOUCH WITH ME</h2>
                <ul className="icons">
                    <li><a href="https://bit.ly/xdev-tc" className="icon brands fa-twitter" target="__blank"><span className="label">Twitter</span></a></li>
                    <li><a href="https://bit.ly/xdev-fb" className="icon brands fa-facebook" target="__blank"><span className="label">facebook</span></a></li>
                    <li><a href="https://bit.ly/xdev-git" className="icon brands fa-github" target="__blank"><span className="label">GitHub</span></a></li>
                    <li><a href="https://bit.ly/xdev-linkedln" className="icon brands fa-linkedin" target="__blank"><span className="label">LinkedIn</span></a></li>
                    <li><a href="https://bit.ly/xdev-wa" className="icon brands fa-whatsapp" target="__blank"><span className="label">whatsapp</span></a></li>
                </ul>
            </article>
        )
    }
}

export default Contact