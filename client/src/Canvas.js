import React, {Component} from 'react';
import WebCam from './WebCam';


class Canvas extends Component {

   
    
    
    componentDidMount() {
        this.updateCanvas();
    }
    
    updateCanvas() {
        const ctx = this.refs.canvas.getContext('2d');
        // ctx.fillRect(300, 300, 100, 100);
        console.log(ctx.width);
        
        const video = document.querySelector("#canvas-video");
    
        
            function step() {
                ctx.drawImage(video, 0, 0, 500, 500)
                requestAnimationFrame(step)
            }
            requestAnimationFrame(step);
        
    }

    handlePixelData = (e) => {
        const ctx = this.refs.canvas.getContext('2d');
        var imgData = ctx.getImageData(e.pageX, e.pageX, 1, 1),
        red = imgData.data[0],
        green = imgData.data[1],
        blue = imgData.data[2],
        alpha = imgData.data[3];
        console.log(red + " " + green + " " + blue + " " + alpha); 
      

    }

    render(){

        return(
            <div>
            <WebCam id='canvas-video'/>
            <canvas onMouseMove={this.handlePixelData} ref='canvas' width='500' height='500'></canvas>
            </div>
        )
    }
}

export default Canvas;