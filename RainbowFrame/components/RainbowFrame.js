import React from 'react';
import PropTypes from 'prop-types';
import ColorFrame from './ColorFrame';

class RainbowFrame extends React.Component {
    static propTypes = {
        colors: PropTypes.arrayOf(PropTypes.string).isRequired,
      };
    constructor(props) {
        super(props);
        this.state = {
            frames: this.makeFrames(this.colors),
        } 
    }
    makeFrames = (colors) => {
        var colors = this.props.colors;      
        var frames = [];
        colors.forEach((color, i) => {
            
            frames.push(
                <ColorFrame color={color}>
                {frames[i - 1] }{(i== 0 )?this.props.children:null} 
                </ColorFrame>
            );
            
        });
        console.log(frames);
        return frames;
    }
    render() {
        return (
            <div>
            {this.state.frames[this.state.frames.length - 1]}   
            </div>
            );
    }
}
export default RainbowFrame;
