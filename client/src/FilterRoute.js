import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updateName,
  updatePassword,
  checkAuth,
  addFilterToUser
} from "./actions/actions";
import { getUsers } from "./actions/actions";
import { changeAuth } from "./actions/actions";
import { getJWT } from "./actions/actions";
import { SketchPicker } from "react-color";
import Circle from "./Circle";
import SourceGraphic from "./SourceGraphic";
import SourceGraphicEditor from "./SourceGraphicEditor";
import "./App.css";
import "./styles.sass";
import Pattern from "./Pattern";
import RadialGradient from "./RadialGradient";
import SourceGraphicSelect from "./SourceGraphicSelect";
import Gradient from "./Gradient";
import LinearGradientRepresentation from "./LinearGradientRepresentation";
import GradientEditor from "./GradientEditor";
import StopAdder from "./StopAdder";
import LinearGradients from "./LinearGradients";
import RadialGradients from "./RadialGradients";
import LinearGradientSelect from "./LinearGradientSelect";
import FilterNameSelect from "./FilterNameSelect";
import FilterMenu from "./FilterMenu";
import WebCam from "./WebCam";
import ColorMatrix from "./ColorMatrix";
import TableValues from "./TableValues";
import ConcatFilters from "./ConcatFilters";
import Canvas from "./Canvas";
import Arrow from "./Arrow";
import { GET_NAMES } from "./actions/types";

class FilterRoute extends Component {
  constructor(props) {
    super(props);
    this.SourceGraphicRef = React.createRef()
    this.state = {
      // auth: false,
      base64: [],
      puppeteerImage: "element1",
      filterNamePuppeteer: "",
      newUserName: "",
      newUserPassword: "",
      showSourceGraphicEditor: true,
      dataURL: "images/tiger.svg",
      elements: [],
      stops: [],
      linearGradients: [],
      radialGradients: [],
      offset: "",
      stopColor: "",
      stopOpacity: "",
      SourceGraphicAttrs: [
        { x: "50%" },
        { y: "50%" },
        { fill: "" },
        { stroke: "" },
        { strokeWidth: 1 },
        { paintOrder: "stroke" },
        { fontSize: 240 },
        { textLength: 450 },
        { lengthAdjust: "spacing" },
        { textAnchor: "middle" },
        { alignmentBaseline: "middle" },
        { text: "SVG" }
      ],
      gradientAttrs: [
        { x1: 0 },
        { x2: 1 },
        { y1: 0 },
        { y2: 0 },
        { spreadMethod: "reflect" },
        { gradientTransform: 0 },
        { gradientUnits: "objectBoundingBox" },
        { id: "linear" }
      ],
      images: [],
      feImages: [],
      selectedSourceGraphic: "image",
      filterData: [],
      allFilterData: [],
      filterName: "",
      filterNames: [],
      feBlendDefaults: {
        type: "feBlend",
        attributes: [
          { in: "" },
          { in2: "" },
          { result: "blend" },
          { mode: "normal" }
        ]
      },
      feColorMatrixDefaults: {
        type: "feColorMatrix",
        attributes: [
          { in: "" },
          { result: "colorMatrix" },
          { type: "matrix" },
          { values: `1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0` }
        ]
      },
      feComponentTransferDefaults: {
        type: "feComponentTransfer",
        attributes: [{ in: "" }, { result: "componentTransfer" }],
        children: [
          {
            type: "feFuncR",
            attributes: [
              { type: "discrete" },
              { tableValues: "0 1" },
              { slope: 1 },
              { intercept: 0 },
              { amplitude: 1 },
              { exponent: 1 },
              { offset: 0 }
            ]
          },
          {
            type: "feFuncG",
            attributes: [
              { type: "discrete" },
              { tableValues: "0 1" },
              { slope: 1 },
              { intercept: 0 },
              { amplitude: 1 },
              { exponent: 1 },
              { offset: 0 }
            ]
          },
          {
            type: "feFuncB",
            attributes: [
              { type: "discrete" },
              { tableValues: "0 1" },
              { slope: 1 },
              { intercept: 0 },
              { amplitude: 1 },
              { exponent: 1 },
              { offset: 0 }
            ]
          },
          {
            type: "feFuncA",
            attributes: [
              { type: "discrete" },
              { tableValues: "0 1" },
              { slope: 1 },
              { intercept: 0 },
              { amplitude: 1 },
              { exponent: 1 },
              { offset: 0 }
            ]
          }
        ]
      },
      feCompositeDefaults: {
        type: "feComposite",
        attributes: [
          { in: "" },
          { in2: "" },
          { result: "composite" },
          { operator: "over" },
          { k1: 0 },
          { k2: 1 },
          { k3: 1 },
          { k4: 0 }
        ]
      },
      feConvolveMatrixDefaults: {
        type: "feConvolveMatrix",
        attributes: [
          { in: "" },
          { result: "convolveMatrix" },
          { kernelMatrix: "-1 -1 -1 -1 8 -1 -1 -1 -1" },
          { divisor: 1 },
          { bias: 0 },
          { targetX: 2 },
          { targetY: 2 },
          { edgeMode: "duplicate" },
          { preserveAlpha: true },
          { order: 3 }
        ]
      },
      feDiffuseLightingFeDistantLightDefaults: {
        type: "feDiffuseLighting",
        attributes: [
          { in: "" },
          { result: "diffuseDistant" },
          { lightingColor: "yellow" },
          { surfaceScale: 1 },
          { diffuseConstant: 2 }
        ],
        children: [
          {
            type: "feDistantLight",
            attributes: [{ azimuth: 0 }, { elevation: 0 }]
          }
        ]
      },
      feDiffuseLightingFePointLightDefaults: {
        type: "feDiffuseLighting",
        attributes: [
          { in: "" },
          { result: "diffusePoint" },
          { lightingColor: "red" },
          { surfaceScale: 1 },
          { diffuseConstant: 1 }
        ],
        children: [
          {
            type: "fePointLight",
            attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]
          }
        ]
      },
      feDiffuseLightingFeSpotLightDefaults: {
        type: "feDiffuseLighting",
        attributes: [
          { in: "" },
          { result: "diffuseSpot" },
          { lightingColor: "red" },
          { surfaceScale: 1 },
          { diffuseConstant: 1 }
        ],
        children: [
          {
            type: "feSpotLight",
            attributes: [
              { limitingConeAngle: 30 },
              { pointsAtX: 0 },
              { pointsAtY: 0 },
              { pointsAtZ: 30 },
              { x: 500 },
              { y: 400 },
              { z: 20 }
            ]
          }
        ]
      },
      feDisplacementMapDefaults: {
        type: "feDisplacementMap",
        attributes: [
          { in: "" },
          { in2: "" },
          { result: "displace" },
          { xChannelSelector: "R" },
          { yChannelSelector: "R" },
          { scale: 5 }
        ]
      },
      feFloodDefaults: {
        type: "feFlood",
        attributes: [
          { in: "" },
          { result: "flood" },
          { floodColor: "coral" },
          { floodOpacity: "1" }
        ]
      },
      feGaussianBlurDefaults: {
        type: "feGaussianBlur",
        attributes: [{ in: "" }, { result: "blur" }, { stdDeviation: [1, 1] }]
      },
      feImageDefaults: {
        type: "feImage",
        attributes: [
          { result: "image" },
          { x: 0 },
          { y: 0 },
          { width: 500 },
          { height: 500 },
          { preserveAspectRatio: "none" },
          { xlinkHref: "images/tiger.svg" }
        ]
      },
      feMergeDefaults: {
        type: "feMerge",
        attributes: [{ in: "" }, { result: "merge" }],
        children: [
          {
            type: "feMergeNode",
            attributes: [{ in: "SourceGraphic" }, { in: "SourceGraphic" }]
          }
        ]
      },
      feMorphologyDefaults: {
        type: "feMorphology",
        attributes: [
          { in: "" },
          { result: "morph" },
          { operator: "dilate" },
          { radius: [2, 2] }
        ]
      },
      feOffsetDefaults: {
        type: "feOffset",
        attributes: [{ in: "" }, { result: "offset" }, { dx: 0 }, { dy: 5 }]
      },
      feSpecularLightingFeDistantLightDefaults: {
        type: "feSpecularLighting",
        attributes: [
          { in: "" },
          { result: "specularDistant" },
          { lightingColor: "red" },
          { surfaceScale: 1 },
          { specularConstant: 1 },
          { specularExponent: 20 }
        ],
        children: [
          {
            type: "feDistantLight",
            attributes: [{ azimuth: 0 }, { elevation: 0 }]
          }
        ]
      },
      feSpecularLightingFePointLightDefaults: {
        type: "feSpecularLighting",
        attributes: [
          { in: "" },
          { result: "specularPoint" },
          { lightingColor: "red" },
          { surfaceScale: 1 },
          { specularConstant: 1 },
          { specularExponent: 20 }
        ],
        children: [
          {
            type: "fePointLight",
            attributes: [{ x: 400 }, { y: 300 }, { z: 10 }]
          }
        ]
      },
      feSpecularLightingFeSpotLightDefaults: {
        type: "feSpecularLighting",
        attributes: [
          { in: "" },
          { result: "specularSpot" },
          { lightingColor: "red" },
          { surfaceScale: 1 },
          { specularConstant: 1 },
          { specularExponent: 20 }
        ],
        children: [
          {
            type: "feSpotLight",
            attributes: [
              { limitingConeAngle: 30 },
              { pointsAtX: 0 },
              { pointsAtY: 0 },
              { pointsAtZ: 30 },
              { x: 500 },
              { y: 400 },
              { z: 20 }
            ]
          }
        ]
      },
      feTileDefaults: {
        type: "feTile",
        attributes: [{ in: "" }, { result: "tile" }]
      },
      feTurbulenceDefaults: {
        type: "feTurbulence",
        attributes: [
          { in: "" },
          { result: "turbulence" },
          { baseFrequency: [0.05, 0.05] },
          { numOctaves: 5 },
          { seed: 0 },
          { type: "turbulence" },
          { stitchTiles: "stitch" }
        ]
      }
    };
  }

  async componentDidMount() {
    if (this.props.auth) {
      this.props.checkAuth(this.props.username);
    }

    const res = await fetch("/linear_gradient");
    const json = await res.json();
    this.setState({ linearGradients: json });
    this.setState({ stops: json[json.length - 1][`stops`] });

    fetch("/filter_data")
      .then(res => res.json())
      .then(data => {
        this.setState({ filterNames: data.map(item => item.name) });
        this.setState({ allFilterData: data });
      });
    fetch("/radial_gradient")
      .then(res => res.json())
      .then(data => {
        this.setState({ radialGradients: data });
      });
  }

handleFullscreen = e => {
  this.SourceGraphicRef.current.requestFullscreen()
}

  handleNameChange = e => {
    this.props.updateName(e.target.value);
  };

  handlePasswordChange = e => {
    this.props.updatePassword(e.target.value);
  };

  handleLogin = () => e => {
    const data = {
      username: this.props.reduxName,
      password: this.props.reduxPassword
    };
    this.props.getJWT(data);
  };

  testPuppeteer = filtername => e => {
    let data = {
      svg: "puppeteer",
      name: this.state.filterNamePuppeteer,
      SourceGraphic: this.state.selectedSourceGraphic,
      gradient: Object.values(this.state.gradientAttrs[7])[0],
      image: this.state.dataURL
    };
    fetch("user/puppeteer", {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        console.log("image from puppeteer" + JSON.stringify(data));
        this.setState({ puppeteerImage: data.element });
      });
  };

  handleAddFilterToUser = () => e => {
    this.props.addFilterToUser(this.props.reduxName, this.state.filterData);
  };

  handleSelectedLinearGradient = e => {
    const sga = this.state.SourceGraphicAttrs.slice();
    sga[2] = { fill: `url(#${e.target.value})` };
    this.setState({ SourceGraphicAttrs: sga });
    const ga = this.state.gradientAttrs.slice();
    ga[7] = { id: e.target.value };
    this.setState({ gradientAttrs: ga });
  };

  handleImageToCanvas = e => {
    let reader = new FileReader();
    let file = e.target.files[0];
    reader.readAsDataURL(file);
    reader.onloadstart = function() {
      console.log(reader.readyState);
    };
    reader.onload = function(e) {
      console.log(e);
      console.log(reader.result);
    };
    reader.onloadend = e => {
      console.log(e);
      console.log(reader.result);
      this.setState({ dataURL: reader.result });
      var joined = this.state.base64.concat(reader.result);
      this.setState({ base64: joined });
    };
    reader.onerror = function() {
      console.log("There was an error reading the file!");
    };
  };

  handleMergeNodes = (index, idx) => e => {
    const newfilterData = [...this.state.filterData];
    const x = newfilterData[index].children[0].attributes.slice();
    x.push({ in: "SourceGraphic" });
    newfilterData[index].children[0].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleNewFilterData = () => {
    let data = {
      name: this.state.filterName,
      filterData: this.state.filterData
    };
    fetch("/filter_data", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        this.setState({ filterData: data.filterData });
      });
  };

  handleConcatFilterData = e => {
    fetch(`/filter_data/name/?name=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        const filterData = [...this.state.filterData];
        filterData.push(data[0].filterData);
        const flat = filterData.reduce((prev, curr) => prev.concat(curr), []);
        this.setState({ filterData: flat });
      });
  };

  handleDelete = key => e => {
    const filterData = [...this.state.filterData];
    filterData.splice(key, 1);
    this.setState({ filterData });
  };

  handleMoveUp = key => e => {
    const filterData = [...this.state.filterData];
    let splice = filterData.splice(key, 1);
    filterData.splice(key - 1, 0, splice[0]);
    this.setState({ filterData });
  };

  handleMoveDown = key => e => {
    const filterData = [...this.state.filterData];
    let splice = filterData.splice(key, 1);
    filterData.splice(key + 1, 0, splice[0]);
    this.setState({ filterData });
  };

  handleSelectSourceGraphic = e => {
    this.setState({ selectedSourceGraphic: e.target.value });
  };

  handleSelectedFilterName = e => {
    fetch(`/filter_data/name/?name=${e.target.value}`)
      .then(res => res.json())
      .then(data => {
        this.setState({ filterData: data[0].filterData });
      });
    this.setState({ filterNamePuppeteer: e.target.value });
  };

  handleNewFilter = e => {
    const filterData = this.state.filterData.slice();
    switch (e.target.value) {
      case "feBlend":
        const feBlendDefaults = { ...this.state.feBlendDefaults };
        filterData.push(feBlendDefaults);
        this.setState({ filterData });
        break;

      case "feColorMatrix":
        const feColorMatrixDefaults = { ...this.state.feColorMatrixDefaults };
        filterData.push(feColorMatrixDefaults);
        this.setState({ filterData });
        break;

      case "feComponentTransfer":
        const feComponentTransferDefaults = {
          ...this.state.feComponentTransferDefaults
        };
        filterData.push(feComponentTransferDefaults);
        this.setState({ filterData });
        break;

      case "feComposite": {
        const feCompositeDefaults = { ...this.state.feCompositeDefaults };
        filterData.push(feCompositeDefaults);
        this.setState({ filterData });
        break;
      }

      case "feConvolveMatrix":
        const feConvolveMatrixDefaults = {
          ...this.state.feConvolveMatrixDefaults
        };
        filterData.push(feConvolveMatrixDefaults);
        this.setState({ filterData });
        break;

      case "feDiffuseLightingFeDistantLight":
        filterData.push(this.state.feDiffuseLightingFeDistantLightDefaults);
        this.setState({ filterData });
        break;

      case "feDiffuseLightingFePointLight":
        filterData.push(this.state.feDiffuseLightingFePointLightDefaults);
        this.setState({ filterData });
        break;

      case "feDiffuseLightingFeSpotLight":
        filterData.push(this.state.feDiffuseLightingFeSpotLightDefaults);
        this.setState({ filterData });
        break;

      case "feDisplacementMap":
        const feDisplacementMapDefaults = {
          ...this.state.feDisplacementMapDefaults
        };
        filterData.push(feDisplacementMapDefaults);
        this.setState({ filterData });
        break;

      case "feFlood":
        const feFloodDefaults = { ...this.state.feFloodDefaults };
        filterData.push(feFloodDefaults);
        this.setState({ filterData });
        break;

      case "feGaussianBlur": {
        const feGaussianBlurDefaults = { ...this.state.feGaussianBlurDefaults };
        filterData.push(feGaussianBlurDefaults);
        this.setState({ filterData });
        break;
      }

      case "feImage":
        const feImageDefaults = { ...this.state.feImageDefaults };
        filterData.push(feImageDefaults);
        this.setState({ filterData });
        break;

      case "feMerge":
        const feMergeDefaults = { ...this.state.feMergeDefaults };
        filterData.push(feMergeDefaults);
        this.setState({ filterData });
        break;

      case "feMorphology":
        const feMorphologyDefaults = { ...this.state.feMorphologyDefaults };
        filterData.push(feMorphologyDefaults);
        this.setState({ filterData });
        break;

      case "feOffset": {
        const feOffsetDefaults = { ...this.state.feOffsetDefaults };
        filterData.push(feOffsetDefaults);
        this.setState({ filterData });
        break;
      }

      case "feSpecularLightingFeDistantLight":
        filterData.push(this.state.feSpecularLightingFeDistantLightDefaults);
        this.setState({ filterData });
        break;

      case "feSpecularLightingFePointLight":
        filterData.push(this.state.feSpecularLightingFePointLightDefaults);
        this.setState({ filterData });
        break;

      case "feSpecularLightingFeSpotLight":
        filterData.push(this.state.feSpecularLightingFeSpotLightDefaults);
        this.setState({ filterData });
        break;

      case "feTile":
        const feTileDefaults = { ...this.state.feTileDefaults };
        filterData.push(feTileDefaults);
        this.setState({ filterData });
        break;

      case "feTurbulence":
        const feTurbulenceDefaults = { ...this.state.feTurbulenceDefaults };
        filterData.push(feTurbulenceDefaults);
        this.setState({ filterData });
        break;

      default:
        console.log("you should never see me");

        break;
    }
  };

  handleFuncData = (item, index, kidIndex, idx, a) => e => {
    console.log(item);
    console.log(index);
    console.log(kidIndex);
    console.log(idx);
    console.log(a);
    console.log(e.target.name);
    console.log(e.target.value);
    const newArr = this.state.filterData.map(obj => ({ ...obj }));
    console.log(newArr);
    const newArray = newArr
      .map(obj => ({ ...obj }))
      [index].children.map(ob => ({ ...ob }));
    console.log(newArray);
    const nA = newArray[kidIndex].attributes.map(o => ({ ...o }));
    console.log(nA);
    const g = nA.map((item1, i) => {
      console.log(i);
      console.log(idx);
      console.log(item1);
      if (idx === i) {
        console.log("fuck");
        item1 = Object.assign(
          {},
          { [`${Object.keys(item1)}`]: e.target.value }
        );
      }
      console.log(item1);
      return item1;
    });
    console.log(nA);
    console.log(g);
    console.log(newArr[index].children[kidIndex].attributes);
    console.log(newArray[kidIndex]);
    console.log(newArray);
    newArray[kidIndex].attributes = g;
    console.log(newArray);
    newArr[index].children = newArray;
    console.log(newArr);
    this.setState({ filterData: newArr });
  };

  handleFilterName = () => e => {
    this.setState({ filterName: e.target.value });
  };

  handleFilterEvent = () => e => {
    console.log(e.target.id);
    this.setState({ filterName: e.target.id });
  };

  handleChangeComplete = (index, idx, item) => color => {
    const newColor = Object.assign({}, color);
    const hex = newColor.hex;
    const newArr = this.state.filterData.map(obj => ({ ...obj }));
    const newArray = newArr
      .map(obj => ({ ...obj }))
      [index].attributes.map(o => ({ ...o }));
    const bar = Object.assign({}, { [`${Object.keys(item)}`]: hex });
    const g = newArray.map((item1, i) => {
      if (Object.keys(item1)[0] === Object.keys(item)[0]) {
        item1 = Object.assign({}, bar);
      }
      return item1;
    });
    newArr[index].attributes = g;
    this.setState({ filterData: newArr });
  };

  handleKernelMatrix = (index, idx) => e => {
    const newfilterData = [...this.state.filterData];
    const x = newfilterData[index].attributes.slice();
    const foo = Object.values(x[2])[0].split(" ");
    foo.splice(e.target.id, 1, e.target.value);
    const fooj = foo.join(" ");
    x.splice(idx, 1, { kernelMatrix: fooj });
    newfilterData[index].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleAddKernelMatrix = (index, idx) => e => {
    const newfilterData = [...this.state.filterData];
    const x = newfilterData[index].attributes.slice();
    const foo = Object.values(x[2])[0].split(" ");
    const bar = Object.values(x[9])[0]
      .toString()
      .split(" ");
    foo.push(0);
    const fooj = foo.join(" ");
    x.splice(idx, 1, { kernelMatrix: fooj });
    newfilterData[index].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleNumberOfTableValues = (index, idx, kidIndex) => e => {
    const newTableValues = Object.values(
      this.state.filterData[index].children[kidIndex].attributes[1]
    )[0].split(" ");
    const mimi = Array(parseInt(e.target.value))
      .fill(0)
      .map((item, index) => index / e.target.value);
    const mimi1 = mimi.join(" ");
    newTableValues.splice(parseInt(e.target.name), 1, e.target.value);
    const newTableValues1 = newTableValues.join(" ");
    const newfilterData = [...this.state.filterData];
    const x = newfilterData[index].children[kidIndex].attributes.slice();
    x.splice(idx, 1, { tableValues: mimi1 });
    newfilterData[index].children[kidIndex].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleRGBData = (index, idx, kidIndex) => e => {
    console.log(index);
    console.log(idx);
    console.log(kidIndex);
    console.log("clicked");
    console.log(e);
    console.log(e.target);
    console.log(e.target.getBoundingClientRect());
    console.log(e.target.getBoundingClientRect().top);
    console.log(e.clientY - e.target.getBoundingClientRect().top);
    console.log(e.pageX);
    console.log(e.clientX);
    console.log(e.pageY);
    console.log(e.clientY);

    const ctx = e.target.getContext("2d");
    var imgData = ctx.getImageData(
        e.clientX - e.target.getBoundingClientRect().left,
        e.clientY - e.target.getBoundingClientRect().top,
        1,
        1
      ),
      red = imgData.data[0],
      green = imgData.data[1],
      blue = imgData.data[2],
      alpha = imgData.data[3];
    console.log(red + " " + green + " " + blue + " " + alpha);
    const newfilterData = [...this.state.filterData];
    console.log(newfilterData);
    const feFuncR = Object.values(
      newfilterData[index].children[0].attributes[1]
    )[0].split(" ");
    const feFuncG = Object.values(
      newfilterData[index].children[1].attributes[1]
    )[0].split(" ");
    const feFuncB = Object.values(
      newfilterData[index].children[2].attributes[1]
    )[0].split(" ");
    const feFuncA = Object.values(
      newfilterData[index].children[3].attributes[1]
    )[0].split(" ");
    console.log(feFuncR);
    console.log(feFuncR.length);
    console.log(feFuncR.length / 256);
    console.log(256 / feFuncR.length);
    console.log(Math.floor(red / (255 / feFuncR.length)));
    console.log(Math.floor(green / (255 / feFuncR.length)));
    console.log(Math.floor(blue / (255 / feFuncR.length)));
    console.log(red);
    console.log(red / 256);
    console.log(256 / red);
    feFuncR[Math.floor(red / (256 / feFuncR.length))] = 0;
    feFuncG[Math.floor(green / (256 / feFuncG.length))] = 0;
    feFuncB[Math.floor(blue / (256 / feFuncB.length))] = 0;
    feFuncA[Math.floor(alpha / (256 / feFuncA.length))] = 0;
    console.log(feFuncR);
    const feFuncR1 = feFuncR.join(" ");
    const feFuncG1 = feFuncG.join(" ");
    const feFuncB1 = feFuncB.join(" ");
    const feFuncA1 = feFuncA.join(" ");
    console.log(feFuncR1);
    if (kidIndex === 0) {
      console.log("red");
    }

    const r = newfilterData[index].children[0].attributes.slice();
    const g = newfilterData[index].children[1].attributes.slice();
    const b = newfilterData[index].children[2].attributes.slice();
    const a = newfilterData[index].children[3].attributes.slice();
    console.log(r);

    r.splice(idx, 1, { tableValues: feFuncR1 });
    g.splice(idx, 1, { tableValues: feFuncG1 });
    b.splice(idx, 1, { tableValues: feFuncB1 });
    a.splice(idx, 1, { tableValues: feFuncA1 });
    newfilterData[index].children[0].attributes = r;
    newfilterData[index].children[1].attributes = g;
    newfilterData[index].children[2].attributes = b;
    // newfilterData[index].children[3].attributes = a;
    this.setState({ filterData: newfilterData });
  };

  handleTableValues = (index, idx, kidIndex) => e => {
    console.log(index);
    console.log(idx);
    console.log(kidIndex);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target);
    console.log(e.target.index);
    console.log(
      Object.values(
        this.state.filterData[index].children[kidIndex].attributes[1]
      )[0].split(" ")
    );
    const newTableValues = Object.values(
      this.state.filterData[index].children[kidIndex].attributes[1]
    )[0].split(" ");
    newTableValues.splice(parseInt(e.target.name), 1, e.target.value);
    console.log(newTableValues);
    const newTableValues1 = newTableValues.join(" ");

    const newfilterData = [...this.state.filterData];
    console.log(newfilterData);
    const x = newfilterData[index].children[kidIndex].attributes.slice();
    console.log(x);

    x.splice(idx, 1, { tableValues: newTableValues1 });
    newfilterData[index].children[kidIndex].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleColorMatrixData = (index, idx, matrix) => e => {
    console.log(newMatrix);
    console.log(index);
    console.log(idx);
    console.log(matrix);

    console.log(e.target.value);
    console.log(e.target.name);
    console.log(e.target);
    console.log(e.target.index);
    // const newMatrix = Object.values(this.state.feColorMatrixDefaults.attributes[3])[0].split(' ')
    const newMatrix = Object.values(
      this.state.filterData[index].attributes[3]
    )[0].split(" ");
    // console.log(newMatrix1);

    console.log(newMatrix);
    newMatrix.splice(parseInt(e.target.name), 1, e.target.value);
    console.log(newMatrix);
    const newMatrix1 = newMatrix.join(" ");
    console.log(newMatrix1);

    const newfilterData = [...this.state.filterData];
    console.log(newfilterData);
    const x = newfilterData[index].attributes.slice();
    console.log(x);

    x.splice(idx, 1, { values: newMatrix1 });
    newfilterData[index].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleBaseFrequencyData = (index, idx, bindex) => e => {
    const newfilterData = [...this.state.filterData];
    console.log(index);
    console.log(idx);
    console.log(bindex);
    console.log(e.target.value);
    console.log(e.target.name);
    console.log(
      newfilterData[index].attributes[
        newfilterData[index].attributes.findIndex((a, x) => x === 3)
      ]
    );
    console.log(newfilterData[index].attributes.findIndex((a, x) => x === 3));
    console.log(
      newfilterData[index].attributes.findIndex(
        (a, x) => Object.keys(a)[0] === e.target.name
      )
    );
    // console.log(newfilterData[index].attributes.findIndex(attrIndex => { console.log(Object.keys(attrIndex)[0]); console.log(e.target.name); Object.keys(attrIndex)[0] === e.target.name }))
    console.log(
      newfilterData[index].attributes[
        newfilterData[index].attributes.findIndex(
          attrIndex => Object.keys(attrIndex)[0] === e.target.name
        )
      ]
    );
    console.log(newfilterData);
    const x = newfilterData[index].attributes.slice();
    console.log(x);
    const baseFrequencyValue = Object.values(
      newfilterData[index].attributes[
        newfilterData[index].attributes.findIndex(
          attrIndex => Object.keys(attrIndex)[0] === e.target.name
        )
      ]
    )[0].slice();
    // const baseFrequencyValue = Object.values(newfilterData[index].attributes[2])[0].slice()
    console.log(baseFrequencyValue);
    baseFrequencyValue[bindex] = parseFloat(e.target.value);
    console.log(baseFrequencyValue);
    x[
      newfilterData[index].attributes.findIndex(
        attrIndex => Object.keys(attrIndex)[0] === e.target.name
      )
    ] = { [`${e.target.name}`]: baseFrequencyValue };
    // x[2] = {[`${e.target.name}`]:baseFrequencyValue};
    // x.splice(idx, 1, { [`${e.target.name}`]: isNaN(e.target.value) || isNaN(parseInt(e.target.value)) ? e.target.value : parseFloat(e.target.value) })
    newfilterData[index].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleImage = (index, idx) => e => {
    const newfilterData = [...this.state.filterData];
    const x = newfilterData[index].attributes.slice();
    x.splice(idx, 1, {
      [`${e.target.className.baseVal}`]:
        isNaN(e.target.id) || isNaN(parseInt(e.target.id))
          ? e.target.id
          : parseFloat(e.target.id)
    });
    newfilterData[index].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleFilterDataMode = (index, idx) => e => {
    console.log(e.target);
    console.log(e.target.className);

    console.log(e.target.id);
    console.log(index);
    console.log(e.target.value);
    console.log(e.target.name);
    const newfilterData = [...this.state.filterData];
    console.log(newfilterData);
    const x = newfilterData[index].attributes.slice();
    console.log(x);

    x.splice(idx, 1, { [`${e.target.className}`]: e.target.id });
    newfilterData[index].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  handleFilterData = (index, idx) => e => {
    console.log(e.target);

    console.log(e.target.id);
    console.log(index);
    console.log(e.target.value);
    console.log(e.target.name);
    const newfilterData = [...this.state.filterData];
    console.log(newfilterData);
    const x = newfilterData[index].attributes.slice();
    console.log(x);

    x.splice(idx, 1, {
      [`${e.target.name}`]:
        isNaN(e.target.value) || isNaN(parseInt(e.target.value))
          ? e.target.value
          : parseFloat(e.target.value)
    });
    newfilterData[index].attributes = x;
    this.setState({ filterData: newfilterData });
  };

  render() {
    return (
      <div className="App">
        <div>
          {this.props.auth ? <div>logged in</div> : <div>not logged in</div>}
          <label>
            NAME: {this.props.reduxName}
            <input
              type="text"
              value={this.props.name}
              onChange={this.handleNameChange}
            />
          </label>
          <label>
            PASSWORD
            <input
              type="text"
              value={this.props.name}
              onChange={this.handlePasswordChange}
            />
          </label>
          <button onClick={this.handleLogin()}>login</button>
          <button onClick={this.handleAddFilterToUser()}>add filter</button>
        </div>

        <div className="grid-svg-filterdata">
          <svg
            ref={this.SourceGraphicRef}
            onClick={this.handleFullscreen}
            className="item-a"
            id="puppeteer"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 500 500"
            width="100%"
            height="100%"
            preserveAspectRatio="none"
          >
            <defs>
              <LinearGradients gradientData={this.state.linearGradients} />
              <RadialGradients gradientData={this.state.radialGradients} />
              <linearGradient
                id="coin"
                x2="50%"
                y2="40%"
                spreadMethod="reflect"
              >
                <stop stopColor="white" offset="82%" />
                <stop stopColor="gold" offset="92%" />
                <stop stopColor="gold" offset="30%" />
                <stop stopColor="goldenrod" offset="70%" />
                <stop stopColor="darkgoldenrod" offset="100%" />
              </linearGradient>
              <RadialGradient />
              <g id="SourceGraphic">
                <circle cx="50%" cy="50%" r="50%" fill="orange" />
                <text textAnchor="middle" x="50%" y="50%" fontSize="200">
                  svg
                </text>
              </g>
              <rect
                id="gold"
                x="0"
                y="0"
                width="50"
                height="50"
                fill="url(#coin)"
              />
              <rect
                id="lgr"
                width="100"
                height="100"
                fill={`url(#${Object.values(
                  this.state.gradientAttrs.find(
                    item => Object.keys(item) == "id"
                  )
                )}`}
              />
              <rect
                id="rad"
                x="0"
                y="0"
                width="500"
                height="500"
                fill="url(#rg)"
              />
              <circle id="circ" cx="250" cy="250" r="200" fill="url(#rg)" />
              <Pattern />
              <rect id="bi" width="50" height="50" fill="url(#p)" />
              <filter
                id="filterData"
                colorInterpolationFilters="sRGB"
                width="200%"
                height="200%"
              >
                {this.state.filterData.map((item, index) => {
                  const attrs = item.attributes.reduce((prev, curr) => {
                    let key = Object.keys(curr)[0];
                    console.log(Object.keys(curr));
                    console.log(prev);
                    console.log(curr);

                    if (Object.values(curr) != "") {
                      prev[key] = curr[key];
                      return prev;
                    } else {
                      return prev;
                    }
                  }, {});
                  console.log(attrs);

                  switch (item.type) {
                    case "feComponentTransfer": {
                      const funcRAttrs = item.children[
                        item.children.findIndex(i => i.type === "feFuncR")
                      ].attributes.reduce((prev, curr) => {
                        let key = Object.keys(curr)[0];
                        console.log(Object.keys(curr));
                        console.log(prev);
                        console.log(curr);

                        if (Object.values(curr) != "") {
                          prev[key] = curr[key];
                          return prev;
                        } else {
                          return prev;
                        }
                      }, {});
                      const funcGAttrs = item.children[
                        item.children.findIndex(i => i.type === "feFuncG")
                      ].attributes.reduce((prev, curr) => {
                        let key = Object.keys(curr)[0];
                        console.log(Object.keys(curr));
                        console.log(prev);
                        console.log(curr);

                        if (Object.values(curr) != "") {
                          prev[key] = curr[key];
                          return prev;
                        } else {
                          return prev;
                        }
                      }, {});
                      const funcBAttrs = item.children[
                        item.children.findIndex(i => i.type === "feFuncB")
                      ].attributes.reduce((prev, curr) => {
                        let key = Object.keys(curr)[0];
                        console.log(Object.keys(curr));
                        console.log(prev);
                        console.log(curr);

                        if (Object.values(curr) != "") {
                          prev[key] = curr[key];
                          return prev;
                        } else {
                          return prev;
                        }
                      }, {});
                      const funcAAttrs = item.children[
                        item.children.findIndex(i => i.type === "feFuncA")
                      ].attributes.reduce((prev, curr) => {
                        let key = Object.keys(curr)[0];
                        console.log(Object.keys(curr));
                        console.log(prev);
                        console.log(curr);

                        if (Object.values(curr) != "") {
                          prev[key] = curr[key];
                          return prev;
                        } else {
                          return prev;
                        }
                      }, {});

                      return (
                        <item.type key={index} {...attrs}>
                          <feFuncR {...funcRAttrs} />
                          <feFuncG {...funcGAttrs} />
                          <feFuncB {...funcBAttrs} />
                          <feFuncA {...funcAAttrs} />
                        </item.type>
                      );
                    }

                    case "feDiffuseLighting":
                      {
                        console.log(item.children);

                        if (
                          item.children[
                            item.children.findIndex(
                              i => i.type === "feDistantLight"
                            )
                          ]
                        ) {
                          const feDistantLightAttrs = item.children[
                            item.children.findIndex(
                              i => i.type === "feDistantLight"
                            )
                          ].attributes.reduce((prev, curr) => {
                            let key = Object.keys(curr)[0];
                            console.log(Object.keys(curr));
                            console.log(prev);
                            console.log(curr);

                            if (Object.values(curr) != "") {
                              prev[key] = curr[key];
                              return prev;
                            } else {
                              return prev;
                            }
                          }, {});
                          console.log(feDistantLightAttrs);

                          return (
                            <item.type key={index} {...attrs}>
                              <feDistantLight {...feDistantLightAttrs} />
                            </item.type>
                          );
                        }

                        if (
                          item.children[
                            item.children.findIndex(
                              i => i.type === "fePointLight"
                            )
                          ]
                        ) {
                          const fePointLightAttrs = item.children[
                            item.children.findIndex(
                              i => i.type === "fePointLight"
                            )
                          ].attributes.reduce((prev, curr) => {
                            let key = Object.keys(curr)[0];
                            console.log(Object.keys(curr));
                            console.log(prev);
                            console.log(curr);

                            if (Object.values(curr) != "") {
                              prev[key] = curr[key];
                              return prev;
                            } else {
                              return prev;
                            }
                          }, {});

                          return (
                            <item.type key={index} {...attrs}>
                              <fePointLight {...fePointLightAttrs} />
                            </item.type>
                          );
                        }
                        if (
                          item.children[
                            item.children.findIndex(
                              i => i.type === "feSpotLight"
                            )
                          ]
                        ) {
                          const feSpotLightAttrs = item.children[
                            item.children.findIndex(
                              i => i.type === "feSpotLight"
                            )
                          ].attributes.reduce((prev, curr) => {
                            let key = Object.keys(curr)[0];
                            console.log(Object.keys(curr));
                            console.log(prev);
                            console.log(curr);

                            if (Object.values(curr) != "") {
                              prev[key] = curr[key];
                              return prev;
                            } else {
                              return prev;
                            }
                          }, {});

                          return (
                            <item.type key={index} {...attrs}>
                              <feSpotLight {...feSpotLightAttrs} />
                            </item.type>
                          );
                        }
                      }

                      break;

                    case "feSpecularLighting": {
                      console.log(item.children);

                      if (
                        item.children[
                          item.children.findIndex(
                            i => i.type === "feDistantLight"
                          )
                        ]
                      ) {
                        const feDistantLightAttrs = item.children[
                          item.children.findIndex(
                            i => i.type === "feDistantLight"
                          )
                        ].attributes.reduce((prev, curr) => {
                          let key = Object.keys(curr)[0];
                          console.log(Object.keys(curr));
                          console.log(prev);
                          console.log(curr);

                          if (Object.values(curr) != "") {
                            prev[key] = curr[key];
                            return prev;
                          } else {
                            return prev;
                          }
                        }, {});
                        console.log(feDistantLightAttrs);

                        return (
                          <item.type key={index} {...attrs}>
                            <feDistantLight {...feDistantLightAttrs} />
                          </item.type>
                        );
                      }

                      if (
                        item.children[
                          item.children.findIndex(
                            i => i.type === "fePointLight"
                          )
                        ]
                      ) {
                        const fePointLightAttrs = item.children[
                          item.children.findIndex(
                            i => i.type === "fePointLight"
                          )
                        ].attributes.reduce((prev, curr) => {
                          let key = Object.keys(curr)[0];
                          console.log(Object.keys(curr));
                          console.log(prev);
                          console.log(curr);

                          if (Object.values(curr) != "") {
                            prev[key] = curr[key];
                            return prev;
                          } else {
                            return prev;
                          }
                        }, {});

                        return (
                          <item.type key={index} {...attrs}>
                            <fePointLight {...fePointLightAttrs} />
                          </item.type>
                        );
                      }
                      if (
                        item.children[
                          item.children.findIndex(i => i.type === "feSpotLight")
                        ]
                      ) {
                        const feSpotLightAttrs = item.children[
                          item.children.findIndex(i => i.type === "feSpotLight")
                        ].attributes.reduce((prev, curr) => {
                          let key = Object.keys(curr)[0];
                          console.log(Object.keys(curr));
                          console.log(prev);
                          console.log(curr);

                          if (Object.values(curr) != "") {
                            prev[key] = curr[key];
                            return prev;
                          } else {
                            return prev;
                          }
                        }, {});

                        return (
                          <item.type key={index} {...attrs}>
                            <feSpotLight {...feSpotLightAttrs} />
                          </item.type>
                        );
                      }
                    }

                    case "feMerge":
                      console.log(item.children);
                      console.log(item.children[0].attributes);

                      return (
                        <item.type key={index} {...attrs}>
                          {item.children[0].attributes.map((i, idx) => {
                            console.log(i);
                            return (
                              <feMergeNode key={idx} in={Object.values(i)} />
                            );
                          })}
                        </item.type>
                      );

                    default:
                      return <item.type key={index} {...attrs} />;
                  }
                })}
              </filter>
            </defs>

            {this.state.selectedSourceGraphic === "text" ? (
              <SourceGraphic
                filter={this.state.filterName}
                text={Object.values(this.state.SourceGraphicAttrs[11])}
                elements={this.state.filterData}
                x={Object.values(this.state.SourceGraphicAttrs[0])}
                y={Object.values(this.state.SourceGraphicAttrs[1])}
                fill={Object.values(this.state.SourceGraphicAttrs[2])}
                stroke={Object.values(this.state.SourceGraphicAttrs[3])}
                strokeWidth={Object.values(this.state.SourceGraphicAttrs[4])}
                paintOrder={Object.values(this.state.SourceGraphicAttrs[5])}
                fontSize={Object.values(this.state.SourceGraphicAttrs[6])}
                textLength={Object.values(this.state.SourceGraphicAttrs[7])}
                lengthAdjust={Object.values(this.state.SourceGraphicAttrs[8])}
                textAnchor={Object.values(this.state.SourceGraphicAttrs[9])}
                alignmentBaseline={Object.values(
                  this.state.SourceGraphicAttrs[10]
                )}
              />
            ) : this.state.selectedSourceGraphic === "image" ? (
              <image
                className={this.state.filterData.length ? "filter" : ""}
                xlinkHref="images/tiger.svg"
                width="500px"
                height="500px"
                preserveAspectRatio="none"
              />
            ) : this.state.selectedSourceGraphic === "webcam" ? (
              <WebCam id="video" />
            ) : this.state.selectedSourceGraphic === "video" ? (
              <foreignObject id="fo" width="400px" height="400px">
                <iframe
                  className={this.state.filterData.length ? "filter" : ""}
                  width="400px"
                  height="400px"
                  src="https://www.youtube.com/embed/stUolWxG3wo?loop=1&autoplay=1&playlist=stUolWxG3wo"
                  frameBorder="0"
                  allowFullScreen="allowFullScreen"
                />
                {/* <video width='100%' height='100%' className={this.state.filterData.length ? 'filter' : ''} xmlns="http://www.w3.org/1999/xhtml" id="image0-video" src='' controls>

                                            </video> */}
              </foreignObject>
            ) : this.state.selectedSourceGraphic === "pic" ? (
              <image
                id="imageElement"
                className={this.state.filterData.length ? "filter" : ""}
                xlinkHref={this.state.dataURL}
                width="500px"
                height="500px"
                preserveAspectRatio="none"
              />
            ) : (
              <Circle elements={this.state.filterData} />
            )}
          </svg>
          <div className="filterData-wrapper item-b ">
            {this.state.filterData.map((i, index) => {
              console.log(i.attributes);
              console.log(i.children);
              return (
                <div className={`filterData  ${i.type}`} key={i + index}>
                  <div className="i-type">{i.type}</div>
                  <div className="button-wrapper">
                    <svg
                      onClick={this.handleDelete(index)}
                      id="x"
                      viewBox="-20 -20 140 140"
                      preserveAspectRatio="xMinYMin slice"
                    >
                      <defs>
                        <radialGradient id="xg">
                          <stop offset="0" stop-color="orange" />
                          <stop offset="1" stop-color="red" />
                        </radialGradient>
                        <filter
                          width="300%"
                          height="300%"
                          x="-50%"
                          y="-50%"
                          id="filter-x"
                        >
                          <feOffset in="SourceGraphic" dx="5" dy="5" />
                          <feColorMatrix type="hueRotate" values="90" />
                          <feGaussianBlur stdDeviation="3" />
                          <feMerge>
                            <feMergeNode />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <g filter="url(#filter-x)">
                        <line
                          stroke="url(#xg)"
                          x1="0"
                          y1="0"
                          x2="100"
                          y2="100"
                          strokeWidth="20"
                          strokeLinecap="butt"
                        />
                        <line
                          x1="100"
                          y1="0"
                          x2="0"
                          y2="100"
                          stroke="url(#xg)"
                          strokeWidth="20"
                          strokeLinecap="butt"
                        />
                      </g>
                    </svg>
                    <Arrow move={this.handleMoveUp(index)} transform="0" />
                    <Arrow move={this.handleMoveDown(index)} transform="180" />
                  </div>

                  {i.attributes.map((item, idx) => {
                    console.log(i);
                    console.log(i.type);
                    console.log(Object.keys(item)[0]);
                    console.log(Object.values(item)[0]);
                    console.log(Object.keys(item));
                    console.log(index);
                    if (
                      i.type === "feMerge" &&
                      Object.keys(item)[0] === "result"
                    ) {
                      return (
                        <div key="merge-result">
                          <label key={Object.keys(item) + "result"}>
                            {Object.keys(item)}
                            <input
                              type="text"
                              name={Object.keys(item)}
                              value={Object.values(item)}
                              onChange={this.handleFilterData(index, idx)}
                            />
                          </label>
                          <button
                            key="merge-button"
                            onClick={this.handleMergeNodes(index, idx)}
                          >
                            more mergeNodes
                          </button>
                        </div>
                      );
                    }
                    if (
                      i.type === "feComposite" &&
                      Object.keys(item)[0] === "operator"
                    ) {
                      return (
                        <select
                          onChange={this.handleFilterData(index, idx)}
                          name={Object.keys(item)}
                          key={Object.keys(item)}
                        >
                          <option disabled selected>
                            {Object.keys(item)}
                          </option>
                          <option>over</option>
                          <option>in</option>
                          <option>out</option>
                          <option>atop</option>
                          <option>xor</option>
                          <option>arithmetic</option>
                        </select>
                      );
                    }

                    if (
                      i.type === "feComposite" &&
                      Object.values(i.attributes[3])[0] === "arithmetic"
                    ) {
                      console.log("comp arithmetic");
                      console.log(Object.keys(item)[0]);
                      console.log("k1 son");
                      return Object.keys(item)[0].charAt(0) === "k" ? (
                        <div key={Object.keys(item)[0] + idx}>
                          <label key={Object.keys(item) + "range"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="0"
                              max="2"
                              step="0.1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      ) : (
                        <label key={Object.keys(item)}>
                          {Object.keys(item)}
                          <input
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            type="text"
                            value={Object.values(item)}
                          />
                          {Object.values(item)}
                        </label>
                      );
                    }
                    if (
                      i.type === "feComposite" &&
                      Object.values(i.attributes[0])[0] != "arithmetic"
                    ) {
                      console.log("comp arithmetic");
                      console.log(Object.keys(item)[0]);
                      console.log("k1 son");
                      return Object.keys(item)[0].charAt(0) === "k" ? null : (
                        <label key={Object.keys(item)}>
                          {Object.keys(item)}
                          <input
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            type="text"
                            value={Object.values(item)}
                          />
                          {Object.values(item)}
                        </label>
                      );
                    }
                    if (
                      i.type === "feComponentTransfer" &&
                      Object.keys(item)[0] === "result"
                    ) {
                      console.log(Object.keys(item)[0]);
                      return (
                        <div>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              type="text"
                              name={Object.keys(item)}
                              value={Object.values(item)}
                              onChange={this.handleFilterData(index, idx)}
                            />
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "dx") {
                      return (
                        <div className="dx" key={Object.keys(item)[0] + idx}>
                          <label key={Object.keys(item) + "range"}>
                            <span>{Object.keys(item)}</span>
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="number"
                              min="-20"
                              max="20"
                              step="1"
                              value={Object.values(item)}
                            />
                            <span>{Object.values(item)}</span>
                          </label>
                          {/* <label key={Object.keys(item)}><span>{Object.keys(item)}</span><input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} /><span>{Object.values(item)}</span></label> */}
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "dy") {
                      return (
                        <div className="dy" key={Object.keys(item)[0] + idx}>
                          <label key={Object.keys(item) + "range"}>
                            <span>{Object.keys(item)}</span>
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="number"
                              min="-20"
                              max="20"
                              step="1"
                              value={Object.values(item)}
                            />
                            <span>{Object.values(item)}</span>
                          </label>
                          {/* <label key={Object.keys(item)}><span>{Object.keys(item)}</span><input onChange={this.handleFilterData(index, idx)} name={Object.keys(item)} type='text' value={Object.values(item)} /><span>{Object.values(item)}</span></label> */}
                        </div>
                      );
                    }
                    else if (Object.keys(item)[0] === "stdDeviation") {
                      console.log(Object.values(item)[0]);
                      console.log(Object.values(item)[0][0]);
                      return (
                        <div>
                          {Object.values(item)[0].map((value, bindex) => {
                            return (
                              <div>
                                <label key={Object.keys(item) + "a"}>
                                  {Object.keys(item)}
                                  <input
                                    onChange={this.handleBaseFrequencyData(
                                      index,
                                      idx,
                                      bindex
                                    )}
                                    name={Object.keys(item)}
                                    type="range"
                                    min="0"
                                    max="20"
                                    step="1"
                                    value={value}
                                  />
                                  {value}
                                </label>
                                <label key={Object.keys(item)}>
                                  {Object.keys(item)}
                                  <input
                                    onChange={this.handleBaseFrequencyData(
                                      index,
                                      idx,
                                      bindex
                                    )}
                                    name={Object.keys(item)}
                                    type="text"
                                    value={value}
                                  />
                                  {value}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "radius") {
                      console.log(Object.values(item)[0]);
                      console.log(Object.values(item)[0][0]);
                      return (
                        <div>
                          {Object.values(item)[0].map((value, bindex) => {
                            return (
                              <div>
                                <label key={Object.keys(item) + "a"}>
                                  {Object.keys(item)}
                                  <input
                                    onChange={this.handleBaseFrequencyData(
                                      index,
                                      idx,
                                      bindex
                                    )}
                                    name={Object.keys(item)}
                                    type="range"
                                    min="0"
                                    max="100"
                                    step=".1"
                                    value={value}
                                  />
                                  {value}
                                </label>
                                <label key={Object.keys(item)}>
                                  {Object.keys(item)}
                                  <input
                                    onChange={this.handleBaseFrequencyData(
                                      index,
                                      idx,
                                      bindex
                                    )}
                                    name={Object.keys(item)}
                                    type="text"
                                    value={value}
                                  />
                                  {value}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      );
                    }
                    else if (Object.keys(item)[0] === "baseFrequency") {
                      console.log(Object.values(item)[0]);
                      console.log(Object.values(item)[0][0]);
                      return (
                        <div>
                          {Object.values(item)[0].map((value, bindex) => {
                            return (
                              <div>
                                <label key={Object.keys(item) + "a"}>
                                  {Object.keys(item)}
                                  <input
                                    onChange={this.handleBaseFrequencyData(
                                      index,
                                      idx,
                                      bindex
                                    )}
                                    name={Object.keys(item)}
                                    type="range"
                                    min=".001"
                                    max="1"
                                    step=".001"
                                    value={value}
                                  />
                                  {value}
                                </label>
                                <label key={Object.keys(item)}>
                                  {Object.keys(item)}
                                  <input
                                    onChange={this.handleBaseFrequencyData(
                                      index,
                                      idx,
                                      bindex
                                    )}
                                    name={Object.keys(item)}
                                    type="text"
                                    value={value}
                                  />
                                  {value}
                                </label>
                              </div>
                            );
                          })}
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "scale") {
                      return (
                        <div>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="-100"
                              max="100"
                              step="1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (
                      Object.keys(item)[0] === "numOctaves" ||
                      Object.keys(item)[0] === "seed"
                    ) {
                      return (
                        <div>
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="1"
                              max="10"
                              step="1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "floodOpacity") {
                      return (
                        <div>
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="0"
                              max="1"
                              step=".1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "surfaceScale") {
                      return (
                        <div className="surfaceScale">
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="1"
                              max="100"
                              step="1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            <span>{Object.values(item)}</span>
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "diffuseConstant") {
                      return (
                        <div className="diffuseConstant">
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min=".1"
                              max="2"
                              step=".1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (
                      Object.keys(item)[0] === "specularConstant" ||
                      Object.keys(item)[0] === "specularExponent"
                    ) {
                      return (
                        <div>
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="1"
                              max="50"
                              step="1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (
                      Object.keys(item)[0] === "x" ||
                      Object.keys(item)[0] === "y" ||
                      Object.keys(item)[0] === "width" ||
                      Object.keys(item)[0] === "height"
                    ) {
                      return (
                        <div>
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="1"
                              max="500"
                              step="1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (
                      Object.keys(item)[0] === "divisor" ||
                      Object.keys(item)[0] === "bias"
                    ) {
                      return (
                        <div>
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="0"
                              max="10"
                              step="1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "targetX") {
                      console.log(this.state.filterData);
                      console.log(index);
                      console.log(idx);
                      console.log(
                        Object.values(
                          this.state.filterData[index].attributes[2]
                        )
                      );
                      console.log(
                        Object.values(
                          this.state.filterData[index].attributes[2]
                        )[0].split(" ").length
                      );
                      console.log(
                        Object.values(
                          this.state.filterData[index].attributes[9]
                        )[0]
                          .toString()
                          .split(" ")[0]
                      );

                      return (
                        <div>
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="0"
                              max={
                                Object.values(
                                  this.state.filterData[index].attributes[9]
                                )[0]
                                  .toString()
                                  .split(" ")[0] - 1
                              }
                              step="1"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "targetY") {
                      console.log(this.state.filterData);
                      console.log(index);
                      console.log(idx);
                      console.log(
                        Object.values(
                          this.state.filterData[index].attributes[2]
                        )
                      );
                      console.log(
                        Object.values(
                          this.state.filterData[index].attributes[2]
                        )[0].split(" ").length
                      );
                      console.log(
                        Object.values(
                          this.state.filterData[index].attributes[9]
                        )[0]
                          .toString()
                          .split(" ")[1] ||
                          Object.values(
                            this.state.filterData[index].attributes[9]
                          )[0]
                            .toString()
                            .split(" ")[0]
                      );

                      return (
                        <div>
                          <label key={Object.keys(item) + "a"}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="range"
                              min="0"
                              max={
                                (Object.values(
                                  this.state.filterData[index].attributes[9]
                                )[0]
                                  .toString()
                                  .split(" ")[1] ||
                                  Object.values(
                                    this.state.filterData[index].attributes[9]
                                  )[0]
                                    .toString()
                                    .split(" ")[0]) - 1
                              }
                              step="1"
                              value={Math.min(
                                Object.values(item),
                                (Object.values(
                                  this.state.filterData[index].attributes[9]
                                )[0]
                                  .toString()
                                  .split(" ")[1] ||
                                  Object.values(
                                    this.state.filterData[index].attributes[9]
                                  )[0]
                                    .toString()
                                    .split(" ")[0]) - 1
                              )}
                            />
                            {Math.min(
                              Object.values(item),
                              (Object.values(
                                this.state.filterData[index].attributes[9]
                              )[0]
                                .toString()
                                .split(" ")[1] ||
                                Object.values(
                                  this.state.filterData[index].attributes[9]
                                )[0]
                                  .toString()
                                  .split(" ")[0]) - 1
                            )}
                          </label>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              onChange={this.handleFilterData(index, idx)}
                              name={Object.keys(item)}
                              type="text"
                              value={Object.values(item)}
                            />
                            {Object.values(item)}
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "floodColor") {
                      console.log(
                        Object.values(
                          this.state.filterData[index].attributes[idx]
                        )[0]
                      );

                      return (
                        <SketchPicker
                          color={
                            Object.values(
                              this.state.filterData[index].attributes[idx]
                            )[0]
                          }
                          onChange={this.handleChangeComplete(index, idx, item)}
                        />
                      );
                    } else if (Object.keys(item)[0] === "lightingColor") {
                      return (
                        <SketchPicker
                          color={
                            Object.values(
                              this.state.filterData[index].attributes[idx]
                            )[0]
                          }
                          onChange={this.handleChangeComplete(index, idx, item)}
                        />
                      );
                    } else if (
                      i.type === "feColorMatrix" &&
                      Object.keys(item)[0] === "type"
                    ) {
                      return (
                        <select
                          onChange={this.handleFilterData(index, idx)}
                          name={Object.keys(item)}
                          key={Object.keys(item)}
                        >
                          <option disabled selected>
                            {Object.keys(item)}
                          </option>
                          <option>matrix</option>
                          <option>hueRotate</option>
                          <option>saturate</option>
                          <option>luminanceToAlpha</option>
                        </select>
                      );
                    } else if (
                      i.type === "feColorMatrix" &&
                      Object.keys(item)[0] === "values" &&
                      Object.values(i.attributes[2])[0] === "matrix"
                    ) {
                      console.log(Object.values(i.attributes[2]));

                      return (
                        <ColorMatrix
                          key="ColorMatrix"
                          changeMatrix={this.handleColorMatrixData(
                            index,
                            idx,
                            Object.values(
                              this.state.feColorMatrixDefaults.attributes[3]
                            )[0]
                          )}
                          matrixValues={
                            Object.values(
                              this.state.filterData[index].attributes[3]
                            )[0]
                          }
                        />
                      );
                    } else if (
                      i.type === "feColorMatrix" &&
                      Object.keys(item)[0] === "values" &&
                      Object.values(i.attributes[2])[0] === "hueRotate"
                    ) {
                      console.log(Object.values(i.attributes[2]));
                      return (
                        <label key={Object.keys(item) + "range"}>
                          {Object.keys(item)}
                          <input
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            type="range"
                            min="0"
                            max="360"
                            step="1"
                            value={Object.values(item)}
                          />
                          {Object.values(item)}
                        </label>
                      );
                    } else if (
                      i.type === "feColorMatrix" &&
                      Object.keys(item)[0] === "values" &&
                      Object.values(i.attributes[2])[0] === "saturate"
                    ) {
                      console.log(Object.values(i.attributes[2]));

                      return (
                        <label key={Object.keys(item) + "range"}>
                          {Object.keys(item)}
                          <input
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            type="range"
                            min="0"
                            max="10"
                            step="1"
                            value={Object.values(item)}
                          />
                          {Object.values(item)}
                        </label>
                      );
                    } else if (
                      i.type === "feColorMatrix" &&
                      Object.keys(item)[0] === "values" &&
                      Object.values(i.attributes[2])[0] === "luminanceToAlpha"
                    ) {
                      console.log(Object.values(i.attributes[2]));

                      return null;
                    } else if (
                      i.type === "feTurbulence" &&
                      Object.keys(item)[0] === "type"
                    ) {
                      return (
                        <select
                          onChange={this.handleFilterData(index, idx)}
                          name={Object.keys(item)}
                          key={Object.keys(item)}
                        >
                          <option disabled selected>
                            {Object.keys(item)}
                          </option>
                          <option>turbulence</option>
                          <option>fractalNoise</option>
                        </select>
                      );
                    } else if (Object.keys(item)[0] === "preserveAlpha") {
                      return (
                        <select
                          onChange={this.handleFilterData(index, idx)}
                          name={Object.keys(item)}
                          key={Object.keys(item)}
                        >
                          <option disabled selected>
                            {Object.keys(item)}
                          </option>
                          <option>true</option>
                          <option>false</option>
                        </select>
                      );
                    } else if (Object.keys(item)[0] === "edgeMode") {
                      return (
                        <select
                          onChange={this.handleFilterData(index, idx)}
                          name={Object.keys(item)}
                          key={Object.keys(item)}
                        >
                          <option disabled selected>
                            {Object.keys(item)}
                          </option>
                          <option>duplicate</option>
                          <option>wrap</option>
                          <option>none</option>
                        </select>
                      );
                    }
                    else if (Object.keys(item)[0] === "operator") {
                      return (
                        <select
                          onChange={this.handleFilterData(index, idx)}
                          name={Object.keys(item)}
                          key={Object.keys(item)}
                        >
                          <option>{Object.keys(item)}</option>
                          <option>dilate</option>
                          <option>erode</option>
                        </select>
                      );
                    } else if (Object.keys(item)[0] === "order") {
                      return (
                        <div>
                          <select
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            key={Object.keys(item)}
                          >
                            <option disabled selected>
                              {Object.keys(item)}
                            </option>
                            {/* <option>9 1</option>
                                                    <option>1 9</option>
                                                    */}
                            {Array(
                              parseInt(
                                Object.values(
                                  this.state.filterData[index].attributes[2]
                                )[0].split(" ").length
                              )
                            )
                              .fill(0)
                              .map((matrix, matIdx, matArray) => {
                                console.log(matIdx);
                                console.log(matArray);
                                console.log(matArray.length % (matIdx + 1));

                                if (matArray.length % (matIdx + 1) === 0) {
                                  return (
                                    <option>{`${matIdx + 1} ${matArray.length /
                                      (matIdx + 1)}`}</option>
                                  );
                                }
                              })}
                          </select>
                          <label key={Object.keys(item)}>
                            <span>ORDER{Object.keys(item)}</span>
                            <input
                              type="text"
                              name={Object.keys(item)}
                              value={Object.values(item)}
                              onChange={this.handleFilterData(index, idx)}
                            />
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "kernelMatrix") {
                      console.log(Object.values(item)[0].split(" "));

                      return (
                        <div>
                          <button
                            onClick={this.handleAddKernelMatrix(index, idx)}
                          >
                            add
                          </button>
                          <select
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            key={Object.keys(item)}
                          >
                            <option>{Object.keys(item)}</option>
                            <option>-1 -1 -1 -1 8 -1 -1 -1 -1</option>
                            <option>1 0 0 0 0 0 0 0 -1</option>
                            <option>3 0 0 0 0 0 0 0 -3</option>
                            <option> 0 -1 0 -1 5 -1 0 -1 0</option>
                            <option>0 0 0 -1 1 0 0 0 0</option>
                            <option>-2 -1 0 -1 1 1 0 1 2</option>
                            <option>0 0 0 0 0 0 0 0 1</option>
                            <option>-1 0 1 -2 0 2 -1 0 1</option>
                            <option>-1 -2 -1 0 0 0 1 2 1</option>
                            <option>5 5 -3 5 0 -3 -3 -3 -3</option>
                            <option>1 0 -1 1 0 -1 0 .5 0</option>
                            <option>-1 -1 3 -2 1 -1 -1 1 -1</option>
                            <option>-3 0 0 0 -3 0 0 0 4</option>
                          </select>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              type="text"
                              name={Object.keys(item)}
                              value={Object.values(item)}
                              onChange={this.handleFilterData(index, idx)}
                            />
                          </label>
                          {Object.values(item)[0]
                            .split(" ")
                            .map((el, ind) => {
                              return (
                                <label>
                                  {el}
                                  <input
                                    type="text"
                                    value={el}
                                    onChange={this.handleKernelMatrix(
                                      index,
                                      idx
                                    )}
                                    key={ind}
                                    id={ind}
                                  />
                                  <input
                                    type="range"
                                    min="-10"
                                    max="10"
                                    step=".1"
                                    value={el}
                                    onChange={this.handleKernelMatrix(
                                      index,
                                      idx
                                    )}
                                    key={ind}
                                    id={ind}
                                  />
                                </label>
                              );
                            })}
                        </div>
                      );
                    } else if (
                      Object.keys(item)[0] === "xChannelSelector" ||
                      Object.keys(item)[0] === "yChannelSelector"
                    ) {
                      return (
                        <select
                          onChange={this.handleFilterData(index, idx)}
                          name={Object.keys(item)}
                          key={Object.keys(item)}
                        >
                          <option>{Object.keys(item)}</option>
                          <option>R</option>
                          <option>G</option>
                          <option>B</option>
                          <option>A</option>
                        </select>
                      );
                    } else if (Object.keys(item)[0] === "mode") {
                      return (
                        <div>
                          <h1>
                            {Object.values(
                              this.state.filterData[index].attributes[idx]
                            )}
                          </h1>
                          <div className="mode-wrapper">
                            <div
                              className="mode"
                              id="normal"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              normal
                            </div>
                            <div
                              className="mode"
                              id="screen"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              screen
                            </div>
                            <div
                              className="mode"
                              id="lighten"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              lighten
                            </div>
                            <div
                              className="mode"
                              id="darken"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              darken
                            </div>
                            <div
                              className="mode"
                              id="multiply"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              multiply
                            </div>
                            <div
                              className="mode"
                              id="overlay"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              overlay
                            </div>
                            <div
                              className="mode"
                              id="color-dodge"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              color-dodge
                            </div>
                            <div
                              className="mode"
                              id="color-burn"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              color-burn
                            </div>
                            <div
                              className="mode"
                              id="hard-light"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              hard-light
                            </div>
                            <div
                              className="mode"
                              id="soft-light"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              soft-light
                            </div>
                            <div
                              className="mode"
                              id="difference"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              difference
                            </div>
                            <div
                              className="mode"
                              id="exclusion"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              exclusion
                            </div>
                            <div
                              className="mode"
                              id="hue"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              hue
                            </div>
                            <div
                              className="mode"
                              id="saturation"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              saturation
                            </div>
                            <div
                              className="mode"
                              id="color"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              color
                            </div>
                            <div
                              className="mode"
                              id="luminosity"
                              onMouseOver={this.handleFilterDataMode(
                                index,
                                idx
                              )}
                            >
                              luminosity
                            </div>
                          </div>
                          <select
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            key={Object.keys(item)}
                          >
                            <option>{Object.keys(item)}</option>
                            <option>normal</option>
                            <option>screen</option>
                            <option>lighten</option>
                            <option>darken</option>
                            <option>multiply</option>
                            <option>overlay</option>
                            <option>color-dodge</option>
                            <option>color-burn</option>
                            <option>hard-light</option>
                            <option>soft-light</option>
                            <option>difference</option>
                            <option>exclusion</option>
                            <option>hue</option>
                            <option>saturation</option>
                            <option>color</option>
                            <option>luminosity</option>
                          </select>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "xlinkHref") {
                      return (
                        <div>
                          <div className="image-wrapper">
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <rect
                                fill="url(#rg)"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="#circ"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <rect
                                fill="url(#coin)"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="#gold"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <rect
                                fill="url(#p)"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="#bi"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <rect
                                fill="url(#rg)"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="#rad"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <image
                                xlinkHref="images/tiger.svg"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="images/tiger.svg"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <image
                                xlinkHref="images/a.svg"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="images/a.svg"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <image
                                xlinkHref="images/s.svg"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="images/s.svg"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <image
                                xlinkHref="images/wrigley.jpeg"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="images/wrigley.jpeg"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <image
                                xlinkHref="http://www.mikelahay.com/images/cooper.png"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="http://www.mikelahay.com/images/cooper.png"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                            <svg viewBox="0 0 50 50" width="100%" height="100%">
                              <use
                                xlinkHref="#SourceGraphic"
                                width="50"
                                height="50"
                                className={Object.keys(item)}
                                id="#SourceGraphic"
                                onClick={this.handleImage(index, idx)}
                              />
                            </svg>
                          </div>
                          <select
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            key={Object.keys(item)}
                          >
                            <option>{Object.keys(item)}</option>
                            {/* <option>#rect</option> */}
                            <option>#circ</option>
                            <option>#gold</option>
                            <option>#bi</option>
                            <option>#rad</option>
                            <option>images/tiger.svg</option>
                            <option>images/a.svg</option>
                            <option>images/s.svg</option>
                            <option>images/wrigley.jpeg</option>
                            <option>
                              http://www.mikelahay.com/images/cooper.png
                            </option>
                          </select>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              type="text"
                              name={Object.keys(item)}
                              value={Object.values(item)}
                              onChange={this.handleFilterData(index, idx)}
                            />
                          </label>
                        </div>
                      );
                    } else if (Object.keys(item)[0] === "preserveAspectRatio") {
                      return (
                        <div>
                          <select
                            onChange={this.handleFilterData(index, idx)}
                            name={Object.keys(item)}
                            key={Object.keys(item)}
                          >
                            <option>{Object.keys(item)}</option>
                            <option>none</option>
                            <option>xMinYMin meet</option>
                            <option>xMinYMin slice</option>
                            <option>xMinYMid meet</option>
                            <option>xMinYMid slice</option>
                            <option>xMinYMax meet</option>
                            <option>xMinYMax slice</option>
                            <option>xMidYMin meet</option>
                            <option>xMidYMin slice</option>
                            <option>xMidYMid meet</option>
                            <option>xMidYMid slice</option>
                            <option>xMidYMax meet</option>
                            <option>xMidYMax slice</option>
                            <option>xMaxYMin meet</option>
                            <option>xMaxYMin slice</option>
                            <option>xMaxYMid meet</option>
                            <option>xMaxYMid slice</option>
                            <option>xMaxYMax meet</option>
                            <option>xMaxYMax slice</option>
                          </select>
                          <label key={Object.keys(item)}>
                            {Object.keys(item)}
                            <input
                              type="text"
                              name={Object.keys(item)}
                              value={Object.values(item)}
                              onChange={this.handleFilterData(index, idx)}
                            />
                          </label>
                        </div>
                      );
                    } else {
                      return (
                        <div className="in-or-result">
                          <label key={Object.keys(item)}>
                            <span>{Object.keys(item)}</span>
                            <input
                              type="text"
                              name={Object.keys(item)}
                              value={Object.values(item)}
                              onChange={this.handleFilterData(index, idx)}
                            />
                          </label>
                        </div>
                      );
                    }
                  })}

                  {i.children
                    ? i.children.map((kid, kidIndex) => {
                        console.log(i);
                        console.log(i.children);
                        console.log(index);
                        console.log(kid);
                        console.log(kidIndex);
                        console.log(Object.values(kid.attributes[0])[0]);

                        return (
                          <label className="here?" key={kid.type}>
                            {kid.type}
                            {kid.attributes.map((a, idx) => {
                              console.log(kid.attributes[0]);
                              console.log(a);
                              console.log(kid.type);
                              const regex = /Func/;
                              console.log(regex.test(kid.type));

                              if (Object.keys(a) == "type") {
                                return (
                                  <select
                                    onChange={this.handleFuncData(
                                      i,
                                      index,
                                      kidIndex,
                                      idx,
                                      a
                                    )}
                                    name={Object.keys(a)}
                                    key={Object.keys(a)}
                                  >
                                    <option disabled selected>
                                      {Object.keys(a)}
                                    </option>
                                    <option>discrete</option>
                                    <option>table</option>
                                    <option>linear</option>
                                    <option>gamma</option>
                                    <option>identity</option>
                                  </select>
                                );
                              }

                              if (regex.test(kid.type)) {
                                console.log("feFuncR");

                                if (
                                  Object.values(kid.attributes[0])[0] ==
                                    "discrete" ||
                                  Object.values(kid.attributes[0])[0] == "table"
                                ) {
                                  console.log("im discrete");

                                  if (Object.keys(a) == "tableValues") {
                                    return (
                                      <TableValues
                                        selectedGraphic={
                                          this.state.selectedSourceGraphic
                                        }
                                        key="TableValues"
                                        pixelData={this.handleRGBData(
                                          index,
                                          idx,
                                          kidIndex
                                        )}
                                        changeTableValues={this.handleTableValues(
                                          index,
                                          idx,
                                          kidIndex
                                        )}
                                        changeNumberOfTableValues={this.handleNumberOfTableValues(
                                          index,
                                          idx,
                                          kidIndex
                                        )}
                                        tableValues={
                                          Object.values(
                                            this.state.filterData[index]
                                              .children[kidIndex].attributes[1]
                                          )[0]
                                        }
                                      />
                                    );
                                  } else {
                                    return null;
                                  }
                                }

                                if (
                                  Object.values(kid.attributes[0])[0] ==
                                  "linear"
                                ) {
                                  console.log("im linear");

                                  if (
                                    Object.keys(a) == "slope" ||
                                    Object.keys(a) == "intercept"
                                  ) {
                                    console.log("im tablevalues");

                                    return (
                                      <div>
                                        <label key={Object.keys(a)}>
                                          {Object.keys(a)}
                                          <input
                                            name={Object.keys(a)}
                                            value={Object.values(a)}
                                            onChange={this.handleFuncData(
                                              i,
                                              index,
                                              kidIndex,
                                              idx,
                                              a
                                            )}
                                          />
                                        </label>
                                        <label key={Object.keys(a)}>
                                          {Object.keys(a)}
                                          <input
                                            type="range"
                                            min="-2"
                                            max="2"
                                            step=".1"
                                            name={Object.keys(a)}
                                            value={Object.values(a)}
                                            onChange={this.handleFuncData(
                                              i,
                                              index,
                                              kidIndex,
                                              idx,
                                              a
                                            )}
                                          />
                                        </label>
                                      </div>
                                    );
                                  } else {
                                    return null;
                                  }
                                }

                                if (
                                  Object.values(kid.attributes[0])[0] == "gamma"
                                ) {
                                  console.log("im gamma");

                                  if (
                                    Object.keys(a) == "amplitude" ||
                                    Object.keys(a) == "exponent" ||
                                    Object.keys(a) == "offset"
                                  ) {
                                    console.log("im tablevalues");

                                    return (
                                      <div>
                                        <label key={Object.keys(a)}>
                                          {Object.keys(a)}
                                          <input
                                            name={Object.keys(a)}
                                            value={Object.values(a)}
                                            onChange={this.handleFuncData(
                                              i,
                                              index,
                                              kidIndex,
                                              idx,
                                              a
                                            )}
                                          />
                                        </label>
                                        <label key={Object.keys(a)}>
                                          {Object.keys(a)}
                                          <input
                                            type="range"
                                            min="-2"
                                            max="2"
                                            step=".1"
                                            name={Object.keys(a)}
                                            value={Object.values(a)}
                                            onChange={this.handleFuncData(
                                              i,
                                              index,
                                              kidIndex,
                                              idx,
                                              a
                                            )}
                                          />
                                        </label>
                                      </div>
                                    );
                                  } else {
                                    return null;
                                  }
                                }
                              }

                              if (Object.keys(a) == "azimuth") {
                                return (
                                  // <label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="0" max="40" step=".1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /><span>{Object.values(a)}</span></label>
                                  <div>
                                    <label key={Object.keys(a) + "a"}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="range"
                                        min="0"
                                        max="360"
                                        step="1"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                    <label key={Object.keys(a)}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="text"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                  </div>
                                );
                              } else if (Object.keys(a) == "elevation") {
                                return (
                                  // <label key={Object.keys(a)}>{Object.keys(a)}<input type='range' min="0" max="40" step=".1" name={Object.keys(a)} value={Object.values(a)} onChange={this.handleFuncData(i, index, kidIndex, idx, a)} /><span>{Object.values(a)}</span></label>
                                  <div>
                                    <label key={Object.keys(a) + "a"}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="range"
                                        min="0"
                                        max="500"
                                        step="1"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                    <label key={Object.keys(a)}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="text"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                  </div>
                                );
                              } else if (
                                Object.keys(a) == "limitingConeAngle"
                              ) {
                                return (
                                  <div>
                                    <label key={Object.keys(a) + "a"}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="range"
                                        min="0"
                                        max="500"
                                        step="1"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                    <label key={Object.keys(a)}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="text"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                  </div>
                                );
                              } else if (
                                Object.keys(a) == "x" ||
                                Object.keys(a) == "y" ||
                                Object.keys(a) == "z" ||
                                Object.keys(a) == "pointsAtX" ||
                                Object.keys(a) == "pointsAtY" ||
                                Object.keys(a) == "pointsAtZ"
                              ) {
                                return (
                                  <div>
                                    <label key={Object.keys(a) + "a"}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="range"
                                        min="-500"
                                        max="500"
                                        step="1"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                    <label key={Object.keys(a)}>
                                      {Object.keys(a)}
                                      <input
                                        onChange={this.handleFuncData(
                                          i,
                                          index,
                                          kidIndex,
                                          idx,
                                          a
                                        )}
                                        name={Object.keys(a)}
                                        type="text"
                                        value={Object.values(a)}
                                      />
                                      {Object.values(a)}
                                    </label>
                                  </div>
                                );
                              } else {
                                return (
                                  <label key={Object.keys(a)}>
                                    {Object.keys(a)}
                                    <input
                                      name={Object.keys(a)}
                                      value={Object.values(a)}
                                      onChange={this.handleFuncData(
                                        i,
                                        index,
                                        kidIndex,
                                        idx,
                                        a
                                      )}
                                    />
                                  </label>
                                );
                              }
                            })}
                          </label>
                        );
                      })
                    : ""}
                </div>
              );
            })}
          </div>

          <div className="select-wrapper item-c">
            {/* <button onClick={this.props.changeAuth}>auth</button> */}
            {/* {this.props.auth ? <div>authorized</div> : <div>not authorized</div>}
                            {this.props.reduxName} */}
            <FilterMenu selectFilter={this.handleNewFilter} />
            <SourceGraphicSelect
              selectSourceGraphic={this.handleSelectSourceGraphic}
            />
            <FilterNameSelect
              emitSelectedFilterName={this.handleSelectedFilterName}
              names={this.state.filterNames}
            />
            <ConcatFilters
              emitSelectedFilterName={this.handleConcatFilterData}
              names={this.state.filterNames}
            />

            <LinearGradientSelect
              grad={this.state.SourceGraphicAttrs[2]}
              emitSelectedLinearGradient={this.handleSelectedLinearGradient}
              names={this.state.linearGradients
                .concat(this.state.radialGradients)
                .map(item => {
                  return item.name;
                })}
            />

            <div className="new-filter-data">
              <input
                name="filterName"
                value={this.state.filterName}
                onChange={this.handleFilterName()}
              />
              <div>
                <svg
                  onClick={this.handleNewFilterData}
                  id="Layer_1"
                  viewBox="0 0 100 100"
                >
                  <polyline
                    strokeWidth="5"
                    fill="#CCCCCC"
                    stroke="#000000"
                    strokeLinecap="square"
                    points="9,9.5 72,9.5 89.5,27 89.5,90.5 8.5,90.5 9,9.5 "
                  />
                  <rect
                    x="17.5"
                    y="9.5"
                    fill="#666666"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="54"
                    height="63"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    d="M-45,0"
                  />
                  <rect
                    x="26.5"
                    y="18.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="36"
                    height="9"
                  />
                  <rect
                    x="26.5"
                    y="36.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="36"
                    height="9"
                  />
                  <path
                    fill="none"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    d="M27,62"
                  />
                  <rect
                    x="26.5"
                    y="54.5"
                    stroke="#000000"
                    strokeMiterlimit="10"
                    width="36"
                    height="9"
                  />
                </svg>
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={this.handleImageToCanvas}
            />
            <button onClick={this.testPuppeteer()}>save svg as png</button>
          </div>
          <div className="filter-thumbnail">
            {this.state.allFilterData.map((data, index) => {
              // console.log(data);

              return (
                <svg key={index} viewBox="0 0 500 500" width="100%">
                  <defs>
                    <filter
                      id={data.name}
                      colorInterpolationFilters="sRGB"
                      width="200%"
                      height="200%"
                    >
                      {data.filterData.map((item, index) => {
                        // console.log(item.attributes);
                        const attrs = item.attributes.reduce((prev, curr) => {
                          let key = Object.keys(curr)[0];
                          // console.log(Object.keys(curr));
                          // console.log(prev);
                          // console.log(curr);

                          if (Object.values(curr) != "") {
                            prev[key] = curr[key];
                            return prev;
                          } else {
                            return prev;
                          }
                        }, {});
                        // console.log(attrs);

                        switch (item.type) {
                          case "feComponentTransfer": {
                            const funcRAttrs = item.children[
                              item.children.findIndex(i => i.type === "feFuncR")
                            ].attributes.reduce((prev, curr) => {
                              let key = Object.keys(curr)[0];
                              // console.log(Object.keys(curr));
                              // console.log(prev);
                              // console.log(curr);

                              if (Object.values(curr) != "") {
                                prev[key] = curr[key];
                                return prev;
                              } else {
                                return prev;
                              }
                            }, {});
                            const funcGAttrs = item.children[
                              item.children.findIndex(i => i.type === "feFuncG")
                            ].attributes.reduce((prev, curr) => {
                              let key = Object.keys(curr)[0];
                              // console.log(Object.keys(curr));
                              // console.log(prev);
                              // console.log(curr);

                              if (Object.values(curr) != "") {
                                prev[key] = curr[key];
                                return prev;
                              } else {
                                return prev;
                              }
                            }, {});
                            const funcBAttrs = item.children[
                              item.children.findIndex(i => i.type === "feFuncB")
                            ].attributes.reduce((prev, curr) => {
                              let key = Object.keys(curr)[0];
                              // console.log(Object.keys(curr));
                              // console.log(prev);
                              // console.log(curr);

                              if (Object.values(curr) != "") {
                                prev[key] = curr[key];
                                return prev;
                              } else {
                                return prev;
                              }
                            }, {});
                            const funcAAttrs = item.children[
                              item.children.findIndex(i => i.type === "feFuncA")
                            ].attributes.reduce((prev, curr) => {
                              let key = Object.keys(curr)[0];
                              // console.log(Object.keys(curr));
                              // console.log(prev);
                              // console.log(curr);

                              if (Object.values(curr) != "") {
                                prev[key] = curr[key];
                                return prev;
                              } else {
                                return prev;
                              }
                            }, {});

                            return (
                              <item.type key={index} {...attrs}>
                                <feFuncR {...funcRAttrs} />
                                <feFuncG {...funcGAttrs} />
                                <feFuncB {...funcBAttrs} />
                                <feFuncA {...funcAAttrs} />
                              </item.type>
                            );
                          }

                          case "feDiffuseLighting": {
                            // console.log(item.children);

                            if (
                              item.children[
                                item.children.findIndex(
                                  i => i.type === "feDistantLight"
                                )
                              ]
                            ) {
                              const feDistantLightAttrs = item.children[
                                item.children.findIndex(
                                  i => i.type === "feDistantLight"
                                )
                              ].attributes.reduce((prev, curr) => {
                                let key = Object.keys(curr)[0];
                                // console.log(Object.keys(curr));
                                // console.log(prev);
                                // console.log(curr);

                                if (Object.values(curr) != "") {
                                  prev[key] = curr[key];
                                  return prev;
                                } else {
                                  return prev;
                                }
                              }, {});
                              // console.log(feDistantLightAttrs);

                              return (
                                <item.type key={index} {...attrs}>
                                  <feDistantLight {...feDistantLightAttrs} />
                                </item.type>
                              );
                            }

                            if (
                              item.children[
                                item.children.findIndex(
                                  i => i.type === "fePointLight"
                                )
                              ]
                            ) {
                              const fePointLightAttrs = item.children[
                                item.children.findIndex(
                                  i => i.type === "fePointLight"
                                )
                              ].attributes.reduce((prev, curr) => {
                                let key = Object.keys(curr)[0];
                                // console.log(Object.keys(curr));
                                // console.log(prev);
                                // console.log(curr);

                                if (Object.values(curr) != "") {
                                  prev[key] = curr[key];
                                  return prev;
                                } else {
                                  return prev;
                                }
                              }, {});

                              return (
                                <item.type key={index} {...attrs}>
                                  <fePointLight {...fePointLightAttrs} />
                                </item.type>
                              );
                            }
                            if (
                              item.children[
                                item.children.findIndex(
                                  i => i.type === "feSpotLight"
                                )
                              ]
                            ) {
                              const feSpotLightAttrs = item.children[
                                item.children.findIndex(
                                  i => i.type === "feSpotLight"
                                )
                              ].attributes.reduce((prev, curr) => {
                                let key = Object.keys(curr)[0];
                                // console.log(Object.keys(curr));
                                // console.log(prev);
                                // console.log(curr);

                                if (Object.values(curr) != "") {
                                  prev[key] = curr[key];
                                  return prev;
                                } else {
                                  return prev;
                                }
                              }, {});

                              return (
                                <item.type key={index} {...attrs}>
                                  <feSpotLight {...feSpotLightAttrs} />
                                </item.type>
                              );
                            }
                          }
                          case "feSpecularLighting": {
                            if (
                              item.children[
                                item.children.findIndex(
                                  i => i.type === "feDistantLight"
                                )
                              ]
                            ) {
                              const feDistantLightAttrs = item.children[
                                item.children.findIndex(
                                  i => i.type === "feDistantLight"
                                )
                              ].attributes.reduce((prev, curr) => {
                                let key = Object.keys(curr)[0];
                                if (Object.values(curr) != "") {
                                  prev[key] = curr[key];
                                  return prev;
                                } else {
                                  return prev;
                                }
                              }, {});
                              return (
                                <item.type key={index} {...attrs}>
                                  <feDistantLight {...feDistantLightAttrs} />
                                </item.type>
                              );
                            }
                            if (
                              item.children[
                                item.children.findIndex(
                                  i => i.type === "fePointLight"
                                )
                              ]
                            ) {
                              const fePointLightAttrs = item.children[
                                item.children.findIndex(
                                  i => i.type === "fePointLight"
                                )
                              ].attributes.reduce((prev, curr) => {
                                let key = Object.keys(curr)[0];
                                if (Object.values(curr) != "") {
                                  prev[key] = curr[key];
                                  return prev;
                                } else {
                                  return prev;
                                }
                              }, {});
                              return (
                                <item.type key={index} {...attrs}>
                                  <fePointLight {...fePointLightAttrs} />
                                </item.type>
                              );
                            }
                            if (
                              item.children[
                                item.children.findIndex(
                                  i => i.type === "feSpotLight"
                                )
                              ]
                            ) {
                              const feSpotLightAttrs = item.children[
                                item.children.findIndex(
                                  i => i.type === "feSpotLight"
                                )
                              ].attributes.reduce((prev, curr) => {
                                let key = Object.keys(curr)[0];
                                if (Object.values(curr) != "") {
                                  prev[key] = curr[key];
                                  return prev;
                                } else {
                                  return prev;
                                }
                              }, {});
                              return (
                                <item.type key={index} {...attrs}>
                                  <feSpotLight {...feSpotLightAttrs} />
                                </item.type>
                              );
                            }
                          }

                          case "feMerge":
                            return (
                              <item.type key={index} {...attrs}>
                                {item.children[0].attributes.map((i, idx) => {
                                  return (
                                    <feMergeNode
                                      key={idx}
                                      in={Object.values(i)}
                                    />
                                  );
                                })}
                              </item.type>
                            );
                          default:
                            return <item.type key={index} {...attrs} />;
                        }
                      })}
                    </filter>
                  </defs>
                  {this.state.selectedSourceGraphic === "text" ? (
                    <SourceGraphic
                      filter={`url(#${data.name})`}
                      text={Object.values(this.state.SourceGraphicAttrs[11])}
                      // elements={this.state.filterData}
                      x={Object.values(this.state.SourceGraphicAttrs[0])}
                      y={Object.values(this.state.SourceGraphicAttrs[1])}
                      fill={Object.values(this.state.SourceGraphicAttrs[2])}
                      stroke={Object.values(this.state.SourceGraphicAttrs[3])}
                      strokeWidth={Object.values(
                        this.state.SourceGraphicAttrs[4]
                      )}
                      paintOrder={Object.values(
                        this.state.SourceGraphicAttrs[5]
                      )}
                      fontSize={Object.values(this.state.SourceGraphicAttrs[6])}
                      textLength={Object.values(
                        this.state.SourceGraphicAttrs[7]
                      )}
                      lengthAdjust={Object.values(
                        this.state.SourceGraphicAttrs[8]
                      )}
                      textAnchor={Object.values(
                        this.state.SourceGraphicAttrs[9]
                      )}
                      alignmentBaseline={Object.values(
                        this.state.SourceGraphicAttrs[10]
                      )}
                    />
                  ) : this.state.selectedSourceGraphic === "image" ? (
                    <image
                      onClick={this.handleFilterEvent()}
                      filter={`url(#${data.name})`}
                      id={data.name}
                      xlinkHref="images/tiger.svg"
                      width="100%"
                      height="100%"
                      preserveAspectRatio="none"
                    />
                  ) : this.state.selectedSourceGraphic === "webcam" ? (
                    // <WebCam id="video" />
                    <circle cx='100' cy='100' r='50' />
                  ) : this.state.selectedSourceGraphic === "video" ? (
                    <foreignObject
                      filter={`url(#${data.name})`}
                      id="fo"
                      width="400px"
                      height="400px"
                    >
                      <iframe
                        width="400px"
                        height="400px"
                        src="https://www.youtube.com/embed/stUolWxG3wo?loop=1&autoplay=1&playlist=stUolWxG3wo"
                        frameBorder="0"
                        allowFullScreen="allowFullScreen"
                      />
                    </foreignObject>
                  ) : this.state.selectedSourceGraphic === "pic" ? (
                    <image
                      xlinkHref={this.state.dataURL}
                      filter={`url(#${data.name})`}
                      width="500px"
                      height="500px"
                      preserveAspectRatio="none"
                    />
                  ) : (
                    <Circle
                      filter={`url(#${data.name})`}
                      elements={this.state.filterData}
                    />
                  )}
                </svg>
              );
            })}
          </div>
        </div>
        <img
          width="200"
          height="200"
          src={`images/${this.state.puppeteerImage}.png`}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  reduxName: state.users.username,
  auth: state.jwt.authorized,
  reduxPassword: state.users.password,
  reduxFilterData: state.users.filterData
});

export default connect(
  mapStateToProps,
  {
    updateName,
    updatePassword,
    getUsers,
    changeAuth,
    getJWT,
    checkAuth,
    addFilterToUser
  }
)(FilterRoute);
