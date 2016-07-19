import React from "react";
import ReactDOM from "react-dom";


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
        if (this.state.loaded) {
            className += ' image-loaded';
        }

        return(
            <img
                ref="imgView"
                className={className}
                {...props}
            />
        )
    }
}

export default ImageLoading;