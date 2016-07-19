import React from "react";
import ReactDOM from "react-dom";

import Spinner from './Spinner.jsx';


class ImageLoading extends React.Component {
    state = {
        loaded: false
    };

    componentDidMount() {
        const imgTag = ReactDOM.findDOMNode(this.refs.imgView);
        const imgSrc = imgTag.getAttribute('src');
        const img = new window.Image();
        img.onload = this.onImageLoad;
        img.src = imgSrc;
    }

    onImageLoad = () => {
        this.setState({ loaded: true });
    };

    render() {
        let { className, ...props } = this.props;
        let spinner = null;

        if (this.state.loaded) {
            className += ' image-loaded';
        } else {
            spinner = <Spinner />;
        }

        return(
            <div>
                {spinner}
                <img
                    ref="imgView"
                    className={className}
                    {...props}
                />
            </div>
        )
    }
}

export default ImageLoading;