import React from "react";
// import Parallax from '../../utils/ParallaxBg.jsx';

class Slide_2 extends React.Component {

    render() {
        return(
            <div className="presentation__slide presentation__slide--2">
                <div className="presentation__body">
                    <div className="presentation__wrapper">
                        <div className="presentation__slide-number">01</div>
                        <div className="presentation__intro">
                            <h2 className="lead-header lead-header--presentation">
                                Web<br/> design
                            </h2>
                            <div className="presentation__text">
                                Not just beatiful <br/>
                                but user-oriented
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide_2;
