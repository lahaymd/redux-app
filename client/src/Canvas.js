import React, {Component} from 'react';
import WebCam from './WebCam';


class Canvas extends Component {

   
    
    
    componentDidMount() {
        this.updateCanvas();
    }
    
    updateCanvas() {
        const ctx = this.refs.can.getContext('2d');
        console.log(ctx.width);
        
        const video = document.querySelector("#canvas-video");
        
        
        function step() {
            ctx.drawImage(video, 0, 0, 500, 500)
            // ctx.fillRect(300, 300, 100, 100);
            requestAnimationFrame(step)
        }
        requestAnimationFrame(step);
        
    }

    handlePixelData = (e) => {
        console.log(e.pageX);
        console.log(e.pageY);
        console.log(this.refs.can);
        
        
        const ctx = this.refs.can.getContext('2d');
        var imgData = ctx.getImageData(e.pageX, 50, 1, 1),
        red = imgData.data[0],
        green = imgData.data[1],
        blue = imgData.data[2],
        alpha = imgData.data[3];
        console.log(red + " " + green + " " + blue + " " + alpha); 
      

    }

    render(){
        console.log(this.props);
        
        return(
            <div>
            <WebCam id='canvas-video' style={{display: 'none'}}/>
            <canvas 
            onMouseDown={this.handlePixelData} 
                    ref='can'
                    
                // onClick={this.props.RGBData} 
                onClick={this.props.canvasProp} width={this.props.width} height={this.props.height}></canvas>
            </div>
        )
    }
}

export default Canvas;