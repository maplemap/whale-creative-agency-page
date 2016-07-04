import React from "react";
import Parallax from '../../utils/ParallaxBg.jsx';

class Slide_2 extends React.Component {

    render() {
        return(
            <div className="presentation__slide presentation__slide--2">
                <div className="presentation__body">
                    <h2 className="brand-name brand-name--presentation">
                        <Parallax parallaxSpeed={.15} className="brand-name__text">
                            <i className="brand-name__star">*</i>
                            <i className="brand-name__W">w</i>
                            <i className="brand-name__H">h</i>
                            <i className="brand-name__A">a</i><br />
                            <i className="brand-name__L">l</i><br />
                            <i className="brand-name__E">e</i>
                        </Parallax>
                    </h2>
                </div>
            </div>
        )
    }
}

export default Slide_2;