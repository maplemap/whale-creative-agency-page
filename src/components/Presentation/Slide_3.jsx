import React from "react";
import Parallax from '../../utils/ParallaxBg.jsx';


class Slide_3 extends React.Component {

    render() {
        return(
            <Parallax className="presentation__slide presentation__slide--3">
                <div className="presentation__body">
                    <div className="presentation__intro">
                        <h2 className="presentation__lead-in">
                            mobile<br /> application<br /> design.
                        </h2>
                        <div className="presentation__text">
                            from ideas to mockups<br /> to design<br /> to your enjoy
                        </div>
                    </div>
                </div>
            </Parallax>
        )
    }
}

export default Slide_3;