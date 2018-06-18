import React, {Component} from 'react';


class FilterSelect extends Component {


    render() {


        
        return (
            <select value="" onChange={this.props.selectChange}>
                <option value="" disabled >Choose filter here</option>
                <option value='FeOffset' >FeOffset</option>
                {/* <option value='EdgeDetection'>EdgeDetection</option> */}
                <option value='FeGaussianBlur'>FeGaussianBlur</option>
                <option value='FeComposite'>FeComposite</option>
                <option value='FeMerge'>FeMerge</option>
                <option value='FeMorphology'>FeMorphology</option>
                <option value='FeFlood'>FeFlood</option>
                <option value='FeImage'>FeImage</option>
                <option value='FeTile'>FeTile</option>
                <option value='FeBlend'>FeBlend</option>
                <option value='FeColorMatrix'>FeColorMatrix</option>
                <option value='FeDisplacementMap'>FeDisplacementMap</option>
                <option value='FeTurbulence'>FeTurbulence</option>
                <option value='FeComponentTransfer'>FeComponentTransfer</option>
                <option value='FeConvolveMatrix'>FeConvolveMatrix</option>
                <option value='FeSpecularLightingFePointLight'>FeSpecularLightingFePointLight</option>
                <option value='FeSpecularLightingFeSpotLight'>FeSpecularLightingFeSpotLight</option>
                <option value='FeSpecularLightingFeDistantLight'>FeSpecularLightingFeDistantLight</option>
                <option value='FeDiffuseLightingFePointLight'>FeDiffuseLightingFePointLight</option>
                <option value='FeDiffuseLightingFeSpotLight'>FeDiffuseLightingFeSpotLight</option>
                <option value='FeDiffuseLightingFeDistantLight'>FeDiffuseLightingFeDistantLight</option>
            </select>
        )
    }

}

export default FilterSelect;