import React, {Component} from 'react';

class LinearGradientIcon extends Component {

    render() {

        // const LinearGradientIcon = (props) => {
            // console.log(this.props);
            
            return (
                <svg className='svg-icon' viewBox='0 0 100 100' height='1em'>
            {/* <path stroke='currentColor' strokeWidth='10' fill='transparent' d='M5 5 L95 5 L60 40 V95 l-20 -10 V40 z' /> */}
                    <circle cx='50' cy='50' r='50' fill={this.props.gradient === '' ? 'url(#linear9)' : this.props.gradient} />
            </svg>
            )
            // }
        }
        }

export default LinearGradientIcon;