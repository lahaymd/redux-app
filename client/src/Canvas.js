import React, {Component} from 'react';
import WebCam from './WebCam';


class Canvas extends Component {

   
    
    
    componentDidMount() {
        // this.updateCanvas();
        console.log(this.props.sourceGraphic);

        let video = this.props.sourceGraphic == 'webcam' ? document.querySelector("#canvas-video") : this.props.sourceGraphic == 'image' ? document.querySelector("#canvas-image") : null
        console.log(video);

        let ctx = this.refs.can.getContext('2d');
        if (video && this.props.sourceGraphic == 'image') {





            var imageObj1 = new Image();
            imageObj1.src = 'images/tiger.svg'
            function step() {
                ctx.clearRect(0, 0, 500, 500);
                ctx.drawImage(imageObj1, 0, 0, 500, 500)
                // ctx.fillRect(300, 300, 100, 100);
                requestAnimationFrame(step)
            }
            requestAnimationFrame(step);
        }
        if (video && this.props.sourceGraphic == 'webcam') {
            console.log(ctx.width);
            console.log(video);


            function step() {
                ctx.clearRect(0, 0, 500, 500);
                ctx.drawImage(video, 0, 0, 500, 500)
                // ctx.fillRect(300, 300, 100, 100);
                requestAnimationFrame(step)
            }
            requestAnimationFrame(step);
        }
    }

    // componentDidUpdate() {
    //     this.updateCanvas();
    // }

    componentWillReceiveProps(nextProps) {
        console.log('received props');
        console.log(nextProps);
        console.log(this.props);
        let video = nextProps.sourceGraphic == 'webcam' ? document.querySelector("#canvas-video") : nextProps.sourceGraphic == 'image' ? document.querySelector("#canvas-image") : null
        console.log(video);
        let ctx = this.refs.can.getContext('2d');

        if ( video && nextProps.sourceGraphic == 'image'){

            
            
            
            
            var imageObj1 = new Image();
            imageObj1.src = 'images/tiger.svg'
            function step() {
                ctx.clearRect(0, 0, 500, 500);
                ctx.drawImage(imageObj1, 0, 0, 500, 500)
                // ctx.fillRect(300, 300, 100, 100);
                requestAnimationFrame(step)
            }
            requestAnimationFrame(step);
                
                }
            // }
        if (video && nextProps.sourceGraphic == 'webcam') {
        console.log(ctx.width);
        console.log(video);


        function step() {
            ctx.clearRect(0, 0, 500,500);
            ctx.drawImage(video, 0, 0, 500, 500)
            // ctx.fillRect(300, 300, 100, 100);
            requestAnimationFrame(step)
        }
        requestAnimationFrame(step);
    }
    }
    
    updateCanvas() {
        console.log(this.props.sourceGraphic);
        
        let video = this.props.sourceGraphic == 'webcam' ? document.querySelector("#canvas-video") : this.props.sourceGraphic == 'image' ? document.querySelector("#canvas-video") : null
        console.log(video);

        if(video) {

       
        let ctx = this.refs.can.getContext('2d');
        console.log(ctx.width);
        
        

        // var imageObj1 = new Image();
        // imageObj1.src = 'images/tiger.svg'
        // imageObj1.onload = function () {
        //     ctx.drawImage(imageObj1, 0, 0, 500, 500);}
        
        function step() {
            ctx.drawImage(video, 0, 0, 500, 500)
            // ctx.fillRect(300, 300, 100, 100);
            requestAnimationFrame(step)
        }
        requestAnimationFrame(step);
        }
    }

    handlePixelData = (e) => {
        e.preventDefault();
        e.stopPropagation();
        console.log(e.pageX);
        console.log(e.pageY);
        console.log(this.refs.can);
        var rect = this.refs.can.getBoundingClientRect();
        console.log( e.clientX - rect.x);
        console.log( e.clientY - rect.y);
        
        
        
        const ctx = this.refs.can.getContext('2d');
        var imgData = ctx.getImageData(e.clientX - rect.x, e.clientY - rect.y, 1, 1),
        red = imgData.data[0],
        green = imgData.data[1],
        blue = imgData.data[2],
        alpha = imgData.data[3];
        console.log(red + " " + green + " " + blue + " " + alpha); 
        return false;
      

    }

    render(){
        console.log(this.props);
        
        return(
            <div>
                {/* <WebCam id='canvas-video' />  */}
              
                <WebCam id='canvas-video'  /> 
                
                <svg id='svg-canvas' xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox='0 0 500 500' width='500px' height='500px' preserveAspectRatio='none'><image id='canvas-image' xlinkHref='images/tiger.svg' width='500px' height='500px' preserveAspectRatio='none' /></svg>
                {/* } */}
            
                <canvas className={this.props.sourceGraphic == 'webcam' || this.props.sourceGraphic == 'image' ? '' : 'notcamorimg' }
            onMouseDown={this.handlePixelData} 
                    ref='can'
                    
                // onClick={this.props.RGBData} 
                onClick={this.props.canvasProp} width={this.props.width} height={this.props.height}></canvas>
            </div>
        )
    }
}

export default Canvas;