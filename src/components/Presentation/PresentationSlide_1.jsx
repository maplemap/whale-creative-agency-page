import React from "react";
// import Parallax from '../../utils/ParallaxBg.jsx';


class Slide_1 extends React.Component {
    render() {
        return(
            <div className="presentation__slide presentation__slide--1">
                <div className="presentation__body">
                    <div className="presentation__intro">
                        <h2 className="presentation__lead-in">
                            imagination<br /> is the <span className="presentation__lead-in--underline">only</span> limit.
                        </h2>
                        <div className="presentation__text">
                            we are keeping our hand on pulse of trends<br />but still always one step ahead
                        </div>
                    </div>
                    <h3 className="brand-name brand-name--presentation">
                        <div
                            // parallaxSpeed={.15}
                            className="brand-name__text"
                        >
                            <sup className="brand-name__star">*</sup>
                            <i className="brand-name__W">w</i>
                            <i className="brand-name__H">h</i><br />
                            <i className="brand-name__A">a</i>
                            <i className="brand-name__L">l</i><br />
                            <i className="brand-name__E">e</i>
                        </div>
                    </h3>
                </div>
            </div>
        )
    }
}

export default Slide_1;
