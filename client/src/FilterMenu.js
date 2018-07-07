import React, { Component } from 'react';


class FilterMenu extends Component {


    render() {



        return (
            <select value="" onChange={this.props.selectFilter}>
                <option value="" disabled >SELECT FILTER</option>
                <option value='feOffset' >feOffset</option>
                <option value='feGaussianBlur'>feGaussianBlur</option>
                <option value='feComposite'>feComposite</option>
                <option value='feMerge'>feMerge</option>
                <option value='feMorphology'>feMorphology</option>
                <option value='feFlood'>feFlood</option>
                <option value='feImage'>feImage</option>
                <option value='feTile'>feTile</option>
                <option value='feBlend'>feBlend</option>
                <option value='feColorMatrix'>feColorMatrix</option>
                <option value='feDisplacementMap'>feDisplacementMap</option>
                <option value='feTurbulence'>feTurbulence</option>
                <option value='feComponentTransfer'>feComponentTransfer</option>
                <option value='feConvolveMatrix'>feConvolveMatrix</option>
                <option value='feSpecularLightingFePointLight'>feSpecularLightingFePointLight</option>
                <option value='feSpecularLightingFeSpotLight'>feSpecularLightingFeSpotLight</option>
                <option value='feSpecularLightingFeDistantLight'>feSpecularLightingFeDistantLight</option>
                <option value='feDiffuseLightingFePointLight'>feDiffuseLightingFePointLight</option>
                <option value='feDiffuseLightingFeSpotLight'>feDiffuseLightingFeSpotLight</option>
                <option value='feDiffuseLightingFeDistantLight'>feDiffuseLightingFeDistantLight</option>
            </select>
        )
    }

}

export default FilterMenu;