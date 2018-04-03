import React, {Component} from 'react';


class RenderSelectedElementCard extends Component {



    render() {

       
        
        if(this.props.attrs !== null) {
        return (
            <div className='card'>
                <div>{this.props.selectedElement}</div>
                <div>{this.props.attrs.map(item =>{
                    return (
                        
                        <label  key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input onChange={this.props.changeInputs} type='text' name={Object.keys(item)} value={Object.values(item)} />
                        </label>
                        
                    ) 
                })}</div>
                    <button onClick={this.props.alertAttrs}>Submit Values</button>
            </div>
                )
                }else{ 
                return (<div>fuck you</div>)}
              
    }

}

export default RenderSelectedElementCard;