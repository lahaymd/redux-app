import React, {Component} from 'react';
import Pattern from './Pattern';
import RadialGradient from './RadialGradient';
import SourceGraphicSelect from './SourceGraphicSelect';
import Gradient from './Gradient';
import LinearGradientRepresentation from './LinearGradientRepresentation';
import GradientEditor from './GradientEditor';
import StopAdder from "./StopAdder";
import RectWithGradient from './RectWithGradient';
import LinearGradients from './LinearGradients';
import LinearGradientSelect from './LinearGradientSelect';

class LinearGradientRoute extends Component {

    state = {
        fill: '',
        gradientAttrs: [{ x1: 0 }, { x2: 1 }, { y1: 0 }, { y2: 0 }, { spreadMethod: 'reflect' }, { gradientTransform: 0 }, { gradientUnits: 'objectBoundingBox' }, { id: 'linear1' }],
        stops: [],
        selectedGradientIndex: 0,
        linearGradients: []
    }

    async componentDidMount() {

        const res = await fetch('/linear_gradient');
        const json = await res.json();
        this.setState({ linearGradients: json })
        this.setState({ stops: json[json.length - 1][`stops`] })

    }

    handleGradientChange = (item, index) => e => {
        // console.log('gradient');
        // console.log(`item ${JSON.stringify(item)}`);
        // console.log(`index ${index}`);
        // console.log(`e name ${e.target.name}`);
        // console.log(`e value ${e.target.value}`);

        const gradAttrs = this.state.gradientAttrs.slice();
        const obj = { [`${e.target.name}`]: e.target.value }
        gradAttrs.splice(index, 1, obj)
        this.setState({ gradientAttrs: gradAttrs });


    }

    handleStop = () => e => {
        // console.log(e.target.name);

        this.setState({ [`${e.target.name}`]: e.target.value })

    }

    handleDeleteStop = (index) => e => {
        // console.log(`delete index  ${index}`);
        const stops = this.state.stops.slice();
        stops.splice(index, 1)
        this.setState({ stops })

    }

    handleNewLinearGradient = () => e => {

        // console.log('handle new linear gradient');

        let data = {
            name: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id')),
            stops: this.state.stops,
            x1: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x1'))),
            x2: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x2'))),
            y1: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y1'))),
            y2: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y2'))),
            spreadMethod: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'spreadMethod')),
            gradientTransform: +(Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientTransform'))),
            gradientUnits: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientUnits')),

        }

        fetch('/linear_gradient',
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }
        )
            .then(res => res.json())
            .then(data => {
                console.log('post stops' + JSON.stringify(data));


                const foo = this.state.linearGradients.slice();
                foo.push(data)


                this.setState({ linearGradients: foo })


            })

    }


    handlePushStop = () => e => {

        console.log('push stop');
        let stops = this.state.stops.slice();
        stops.push({ offset: this.state.offset, stopColor: this.state.stopColor, stopOpacity: this.state.stopOpacity })
        this.setState({ stops: stops })
        let data = {
            name: Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id')),
            stops: stops
        }

        fetch('/linear_gradient',
            {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(data)
            }
        )
            .then(res => res.json())
            .then(data => {

                console.log('post stops' + JSON.stringify(data));

                const foo = this.state.linearGradients.slice();
                const info = foo.findIndex(item => item.name === data.name);
                foo.splice(info, 1, data)



                this.setState({ linearGradients: foo })
                console.log('post stops' + JSON.stringify(data));
            })

    }





    handleStopChange = (param, index) => e => {
        console.log(param);
        console.log(index);
        console.log(e.target.name);
        console.log(e.target.value);
        const stops = this.state.stops.slice();
        const obj = { ...stops[index] }
        console.log(obj);
        obj[`${e.target.name}`] = e.target.value;
        console.log(obj);

        stops.splice(index, 1, obj)
        this.setState({ stops: stops })

    }





    handleSelectedLinearGradient = (e) => {
        this.setState({ stops: this.state.linearGradients[this.state.linearGradients.findIndex(item => item.name === e.target.value)][`stops`] })
       this.setState({selectedGradient: e.target.id})
        const ga = this.state.gradientAttrs.slice();
        ga[7] = { id: e.target.value }
        this.setState({ gradientAttrs: ga })
    }


    render() {

        const {foo} = this.state;

        return (
            <div>
                <LinearGradientSelect emitSelectedLinearGradient={this.handleSelectedLinearGradient} names={this.state.linearGradients.map(item => {


                    return item.name;
                })} />
                <svg width='500' height='200'>
                    <defs>
                        {/* <Gradient
                            id={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'id'))[0]}
                            x1={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x1'))[0]}
                            x2={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'x2'))[0]}
                            y1={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y1'))[0]}
                            y2={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'y2'))[0]}
                            spreadMethod={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'spreadMethod'))[0]}
                            gradientTransform={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientTransform'))[0]}
                            gradientUnits={Object.values(this.state.gradientAttrs.find(item => Object.keys(item) == 'gradientUnits'))[0]}
                        >
                            {this.state.stops.map((stop, index) => {
                                return (
                                    <stop key={index} offset={stop.offset} stopColor={stop.stopColor} stopOpacity={stop.stopOpacity} />
                                )
                            })}
                        </Gradient> */}
                        <LinearGradients gradientData={this.state.linearGradients} />
                    </defs>
                    <rect width='500' height='200' fill={`url(#${Object.values(this.state.gradientAttrs[7])[0]})`} />
                </svg>
                <GradientEditor createNewLinearGradient={this.handleNewLinearGradient} attrs={this.state.linearGradients[this.state.selectedGradientIndex]} changeGradient={this.handleGradientChange} />
                <StopAdder addStop={this.handleStop} pushStop={this.handlePushStop} />
                <LinearGradientRepresentation>
                    {this.state.stops.map((el, index, array) => {
                        return (
                            <div className='linear-rep' key={index}>
                                <label  >offset
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='range' min="0" max="1" step="0.01" name='offset' value={el.offset} />
                                </label>
                                <label  >stop-color
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='text' name='stopColor' value={el.stopColor} />
                                </label>
                                <label  >stop-opactiy
                                            <input key={el[index]} onChange={this.handleStopChange(el, index)} type='range' min="0" max="1" step="0.01" name='stopOpacity' value={el.stopOpacity} />
                                </label>
                                <button onClick={this.handleDeleteStop(index)}>DELETE</button>
                            </div>
                        )
                    })}
                </LinearGradientRepresentation> 
            </div>
        )
    }
}

export default LinearGradientRoute;