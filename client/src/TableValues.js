import React, {Component} from 'react';
import Canvas from './Canvas'

class TableValues extends Component {

    canvasRGBData =  e => {
        console.log(e);
        
    }
    handleRGBData =  e => {
        console.log(e);
        
    }

    render() {
        console.log(this.props);
        console.log(this.refs);
        
        console.log(this.props.tableValues);
        console.log(this.props.tableValues.split(' '));
        
        return (
            <div>
                <input type='range' min='1' max='256' step='1' name='changeNumberOfTableValues' onChange={this.props.changeNumberOfTableValues} />
            {this.props.tableValues.split(' ').map( (item, index) => {
                return (
                    <div>
                        <label key={index}>
                            {/* <input type='range' min='-1' max='1' step='.1' name={index} onChange={this.props.changeTableValues} /> */}
                            <input name={index} onChange={this.props.changeTableValues} />
                            {item}
                        </label>
                    </div>
                )
            })}
                <Canvas ref='canvasParent' width='500' height='500' onClick={this.canvasRGBData} RGBData={this.handleRGBData} canvasProp={this.props.pixelData} canvasData={this.props.canvasData} />
            </div>
        )
    }
}


export default TableValues;