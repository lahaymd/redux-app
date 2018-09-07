import React, {Component} from 'react';
import WebCam from './WebCam';


class Canvas extends Component {

   
    
    
    componentDidMount() {
        this.updateCanvas();
    }
    
    updateCanvas() {
        const video = document.querySelector("#canvas-video")
        console.log(video);
        const ctx = this.refs.can.getContext('2d');
        console.log(ctx.width);
        
        
        
        
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
                {/* <WebCam id='canvas-video' />  */}
                {/* {this.props.sourceGraphic == 'webcam' ? 
                <WebCam id='canvas-video' /> 
                :  */}
                <svg id='svg-canvas' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox='0 0 500 500' width='100%' height='100%' preserveAspectRatio='none'><image id='canvas-video' xlinkHref='images/tiger.svg' width='500px' height='500px' preserveAspectRatio='none' /></svg>
                {/* } */}
            
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