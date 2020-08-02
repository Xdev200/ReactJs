import React from 'react'

class Books extends React.Component{
    render(){
        return(
            <article id="books">
                <h2>Must Read Books...</h2>
                <div className="imgbox">
                    <a href="https://bit.ly/zeroto1m" target="__blank">
                        <img src="https://bit.ly/xdev-0-1" atl="ZERO TO ONE"  style={{width: "90%"}}/>
                    </a>
                    <a href="https://twitter.com/xdev_200" target="__blank">
                        <img src="https://bit.ly/xdev-sprint" atl="SPRINT"  style={{width: "90%"}}/>
                    </a>
                    <a href="https://twitter.com/xdev_200" target="__blank">
                        <img src="https://bit.ly/xdev-htaht" atl="THE HARD THING ABOUT HARD THINGS"  style={{width: "90%"}}/>
                    </a>
                    <a href="https://twitter.com/xdev_200" target="__blank">
                        <img src="https://bit.ly/xdev-hooked" atl="HOOKED"  style={{width: "90%"}}/>
                    </a>
                    <a href="https://twitter.com/xdev_200" target="__blank">
                        <img src="https://bit.ly/xdev-pi" atl="PREDICTABLY IRRATIONAL"  style={{width: "90%"}}/>
                    </a>
                    <a href="https://twitter.com/xdev_200" target="__blank">
                        <img src="https://bit.ly/xdev-sa" atl="THE SUBTLE ART OF NOT GIVING A F*CK" style={{width: "90%"}}/>
                    </a>
                </div>
            </article> 
        )
    }
}

export default Books