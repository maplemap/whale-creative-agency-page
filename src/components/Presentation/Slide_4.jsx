import React from "react";


class Slide_4 extends React.Component {

    render() {
        return(
            <div className="presentation__slide presentation__slide--4">
                <div className="presentation__body">
                    <div className="presentation__intro">
                        <h2 className="presentation__lead-in">
                            branding
                        </h2>
                        <div className="presentation__text">
                            we will make your  brand is unique<br /> and noticable
                        </div>
                    </div>
                    <div className="terminal-42 terminal-42--presentation">
                        <span className="terminal-42__color">#F8E71C</span><br />
                        <span className="terminal-42__name">Terminal 42</span><br />
                        <span className="terminal-42__text">coworking<br /> space</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Slide_4;