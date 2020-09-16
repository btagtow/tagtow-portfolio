import React from 'react'
import RightArrow from '../images/symbols/right-arrow.png'
import LeftArrow from '../images/symbols/left-arrow.png'
import image1 from '../images/me/image1.png'
import image2 from '../images/me/image2.png'
import image3 from '../images/me/image3.png'
import image4 from '../images/me/image4.png'
import image5 from '../images/me/image5.png'
import image6 from '../images/me/image6.png'


export default class Life extends React.Component {
    state={
        image: 1
    }

    rotateImage = () => {
        switch (this.state.image){
            case 1 : 
                return (
                    <div className="current-image">
                        <img className="image" src={image1} alt="me in Oregon mountains"></img>
                        {/* <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> */}
                    </div>
                )
            case 2 : 
                return (
                    <div className="current-image">
                        <img className="image" src={image2} alt="me at an Avs game"></img>
                        {/* <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> */}
                    </div>
                )
            case 3 : 
                return (
                    <div className="current-image">
                        <img className="image" src={image3} alt="me after Omaha Zoo 5k run"></img>
                        {/* <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> */}
                    </div>
                )
            case 4 : 
                return (
                    <div className="current-image">
                        <img className="image" src={image4} alt="me getting confirmed as a CASA volunteer"></img>
                        {/* <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> */}
                    </div>
                )   
            case 5 : 
                return (
                    <div className="current-image">
                        <img className="image" src={image5} alt="me posing with statue in New Orleans"></img>
                        {/* <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> */}
                    </div>
                )   
            case 6 : 
                return (
                    <div className="current-image">
                        <img className="image" src={image6} alt="me next to colorful Maine flowers"></img>
                        {/* <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption> */}
                    </div>
                )   
            default: return null
        }
    }

    nextImage = () => {
        if (this.state.image + 1 <= 6){

            return (
                this.setState({
                    image: this.state.image+1
                })
            )
        } else {
            this.setState({
                image: 1
            })
        }
    }
    previousImage = () => {
        if (this.state.image - 1 >= 1){

            return (
                this.setState({
                    image: this.state.image-1
                })
            )
        } else {
            this.setState({
                image: 6
            })
        }
    }

    render(){
        return (
            <div className="image-gallery">
                {/* <div className="content-nav">
                    <h3 value="fun" className="content-button clickable hover">fun</h3>
                    <h3 value="travel" className="content-button clickable hover">travel</h3>
                    <h3 value="giving back" className="content-button clickable hover">giving back</h3>
                </div> */}
                {/* <div> */}
                    <img className="clickable arrow" src={LeftArrow} onClick={this.previousImage} alt="left arrow"></img>
                        {this.rotateImage()}
                    <img className="clickable arrow" src={RightArrow} onClick={this.nextImage} alt="right arrow"></img>
                {/* </div> */}
    

                {/* {<div className="image-gallery">
                    <div className="image-container">
                        <img className="image" src={image1}></img>
                        <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                    </div>
                    <div className="image-container">
                        <img className="image" src={image4}></img>
                        <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
                    </div>
                </div>} */}
            </div>
        )
    }
}
