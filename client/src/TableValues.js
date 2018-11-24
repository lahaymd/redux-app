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
                <input type='number' min='1' max='256' step='1' name='changeNumberOfTableValues' onChange={this.props.changeNumberOfTableValues} /> {this.props.tableValues.split(' ').length}
                {/* <input type='text' name='changeNumberOfTableValues' onChange={this.props.changeNumberOfTableValues} /> {this.props.tableValues.split(' ').length} */}
            {this.props.tableValues.split(' ').map( (item, index) => {
                return (
                    <div>
                        <label key={index + 'a'}><input onChange={this.props.changeTableValues} name={index} type='number' min="0" max="1" step=".01" value={item} />{parseFloat(item).toPrecision(2)}</label>
                    </div>
                )
            })}
                <Canvas sourceGraphic={this.props.selectedGraphic} ref='canvasParent' width='500px' height='500px' onClick={this.canvasRGBData} RGBData={this.handleRGBData} canvasProp={this.props.pixelData} canvasData={this.props.canvasData} />
            </div>
        )
    }
}


export default TableValues;