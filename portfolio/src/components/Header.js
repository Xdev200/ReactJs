import React from 'react'

class Header extends React.Component{
    render(){
        return(
        <header id="header">
            <div className="logo">
                <img src="https://bit.ly/xdev-logo" width="100%" alt="XDEV200"/>
            </div>
            <div className="content">
                <div className="inner">
                    <h1><span className="txt-rotate" data-period="3000" data-rotate='[ "Madhusudan Das", "XDEV200", "KONNECT2MADDY" ]'></span></h1>
                    <p><span className="txt-rotate" data-period="2000" data-rotate='[ "Co-Founder & CTO@YorApp","🎓NIT-DURGAPUR","💻 Full-Stack Web Developer","🤵Entrepreneur","♞CHESS", "❤Gadgets"]'></span></p>
                </div>
            </div>
            <nav>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#work">Experience</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#books">Books</a></li>
                    <li><a href="https://bit.ly/xdev-blog">Blog</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        )
    }
}

export default Header