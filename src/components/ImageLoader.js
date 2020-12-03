import React from "react";

const _loaded = {};

class ImageLoader extends React.Component {
  state = {
    loaded: _loaded[this.props.src],
  };

  static defaultProps = {
    className: "",
    loadingClassName: "img-loading",
    loadedClassName: "img-loaded",
  };

  onLoad = () => {
    _loaded[this.props.src] = true;
    this.setState(() => ({ loaded: true }));
  };

  render() {
    let { className, loadedClassName, loadingClassName, ...props } = this.props;
    className = `${className} ${
      this.state.loaded ? loadedClassName : loadingClassName
    }`;

    return (
      <img
        src={this.props.src}
        alt={this.props.alt}
        onClick={this.props.onClick}
        className={className}
        onLoad={this.onLoad}
        {...props}
      />
    );
  }
}

export default ImageLoader;
