import React from "react";
import Parallax from '../../utils/ParallaxBg.jsx';

class Slide_1 extends React.Component {

    render() {
        return(
            <Parallax
                className="presentation__slide presentation__slide--1"
            > 
                <div className="presentation__body">
                    <button className="presentation__break-btn">break it<br /> with us</button>
                    <div className="presentation__intro">
                        <h2 className="presentation__lead-in">
                            imagination<br /> is the <span className="presentation__lead-in--underline">only</span> limit.
                        </h2>
                        <div className="presentation__text">
                            we are keeping our hand on pulse of trends<br />but still always one step ahead
                        </div>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default Slide_1;