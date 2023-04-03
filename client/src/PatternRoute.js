import React, { Component } from "react";
import {
  MenuItem,
  TextField,
  Select,
  Slider,
  Grid,
  Typography,
  FormControl,
  InputLabel,
} from "@mui/material";
import Pattern from "./Pattern";

class PatternRoute extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewBoxX: 0,
      viewBoxY: 0,
      viewBoxWidth: 100,
      viewBoxHeight: 100,
      x: 0,
      y: 0,
      width: 0.25,
      height: 0.25,
      ratio: "none",
      patternUnits: "objectBoundingBox",
      patternContentUnits: "userSpaceOnUse",
    };
  }

  handleViewBox = (e) => {
    console.log(e.target.id);
    console.log(e.target.value);
    this.setState({ [`${e.target.id}`]: e.target.value });
  };
  handleViewBoxSlider = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  handleRatio = (e) => {
    this.setState({ ratio: e.target.value });
  };

  handlePatternUnits = (e) => {
    this.setState({ patternUnits: e.target.value });
  };

  handlePatternContentUnits = (e) => {
    this.setState({ patternContentUnits: e.target.value });
  };

  handleSize = (e) => {
    this.setState({ [`${e.target.name}`]: e.target.value });
  };

  render() {
    return (
      <Grid
        container
        spacing={5}
        style={{ paddingTop: "20px" }}
        justifyContent="center"
      >
        <Grid
          container
          item
          spacing={2}
          xs={12}
          lg={5.5}
          alignContent="flex-start"
        >
          {/* <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              onChange={this.handleSize}
              id="width"
              label="width"
              name="width"
            />
          </Grid> */}
          <Grid item xs={6} lg={3}>
            <Typography>width</Typography>
            <Slider
              onChange={this.handleSize}
              defaultValue={0.25}
              min={0.01}
              max={1}
              step={0.01}
              name="width"
            />
          </Grid>
          {/* <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              onChange={this.handleSize}
              id="height"
              label="height"
              name="height"
            />
          </Grid> */}
          <Grid item xs={6} lg={3}>
            <Typography>height</Typography>
            <Slider
              onChange={this.handleSize}
              defaultValue={0.25}
              min={0.01}
              max={1}
              step={0.01}
              name="height"
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <Typography>viewBox x</Typography>
            <Slider
              onChange={this.handleViewBoxSlider}
              defaultValue={0}
              min={-100}
              max={100}
              step={1}
              name="viewBoxX"
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <Typography>viewBox y</Typography>
            <Slider
              onChange={this.handleViewBoxSlider}
              defaultValue={0}
              min={-100}
              max={100}
              step={1}
              name="viewBoxY"
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <Typography>viewBox width</Typography>
            <Slider
              onChange={this.handleViewBoxSlider}
              defaultValue={100}
              min={0}
              max={200}
              step={1}
              name="viewBoxWidth"
            />
          </Grid>
          <Grid item xs={6} lg={3}>
            <Typography>viewBox height</Typography>
            <Slider
              onChange={this.handleViewBoxSlider}
              defaultValue={100}
              min={0}
              max={200}
              step={1}
              name="viewBoxHeight"
            />
          </Grid>
          {/* <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              onChange={this.handleViewBoxSlider}
              label="viewBox x"
              name="viewBoxX"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              onChange={this.handleViewBoxSlider}
              label="viewBox y"
              name="viewBoxY"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              onChange={this.handleViewBoxSlider}
              label="viewBox width"
              name="viewBoxWidth"
            />
          </Grid>
          <Grid item xs={12} lg={3}>
            <TextField
              fullWidth
              onChange={this.handleViewBoxSlider}
              label="viewBox height"
              name="viewBoxHeight"
            />
          </Grid> */}
          <Grid item xs={6} lg={3}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">Ratio</InputLabel>
              <Select
                sx={{ minWidth: 130 }}
                label="ratio"
                onChange={this.handleRatio}
              >
                <MenuItem value="none">none</MenuItem>
                <MenuItem value="xMinYMin meet">xMinYMin meet</MenuItem>
                <MenuItem value="xMinYMin slice">xMinYMin slice</MenuItem>
                <MenuItem value="xMinYMid meet">xMinYMid meet</MenuItem>
                <MenuItem value="xMinYMax meet">xMinYMax meet</MenuItem>
                <MenuItem value="xMinYMax slice">xMinYMax slice</MenuItem>
                <MenuItem value="xMidYMin meet">xMidYMin meet</MenuItem>
                <MenuItem value="xMidYMin slice">xMidYMin slice</MenuItem>
                <MenuItem value="xMidYMid meet">xMidYMid meet</MenuItem>
                <MenuItem value="xMidYMid slice">xMidYMid slice</MenuItem>
                <MenuItem value="xMidYMax meet">xMidYMax meet</MenuItem>
                <MenuItem value="xMidYMax slice">xMidYMax slice</MenuItem>
                <MenuItem value="xMaxYMin meet">xMaxYMin meet</MenuItem>
                <MenuItem value="xMaxYMin slice">xMaxYMin slice</MenuItem>
                <MenuItem value="xMaxYMid meet">xMaxYMid meet</MenuItem>
                <MenuItem value="xMaxYMid slice">xMaxYMid slice</MenuItem>
                <MenuItem value="xMaxYMax meet">xMaxYMax meet</MenuItem>
                <MenuItem value="xMaxYMax slice">xMaxYMax slice</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          {/* <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <InputLabel>patternUnits</InputLabel>
              <Select
                sx={{ minWidth: 130 }}
                label="patternUnits"
                onChange={this.handlePatternUnits}
              >
                <MenuItem value="objectBoundingBox">objectBoundingBox</MenuItem>
                <MenuItem value="userSpaceOnUse">userSpaceOnUse</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} lg={3}>
            <FormControl fullWidth>
              <InputLabel>patternContentUnits</InputLabel>
              <Select
                sx={{ minWidth: 130 }}
                label="patternUnits"
                onChange={this.handlePatternContentUnits}
              >
                <MenuItem value="userSpaceOnUse">userSpaceOnUse</MenuItem>
                <MenuItem value="objectBoundingBox">objectBoundingBox</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
        </Grid>
        <Grid item xs={12} lg={5.5}>
          <svg viewBox="0 0 500 500">
            <defs>
              <pattern
                viewBox={`${this.state.viewBoxX} ${this.state.viewBoxY} ${this.state.viewBoxWidth} ${this.state.viewBoxHeight}`}
                preserveAspectRatio={this.state.ratio}
                x={this.state.x}
                y={this.state.y}
                width={this.state.width}
                height={this.state.height}
                id="circlepattern"
                patternUnits={this.state.patternUnits}
                patternContentUnits={this.state.patternContentUnits}
              >
                <rect
                  fill="#F7931E"
                  width="1000"
                  height="1000"
                  x="-500"
                  y="-500"
                />
                <circle
                  fill="#FF0000"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  cx="0"
                  cy="0"
                  r="50"
                />
                <circle
                  fill="#29ABE2"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  cx="100"
                  cy="0"
                  r="50"
                />
                <circle
                  fill="#ED1E79"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  cx="0"
                  cy="100"
                  r="50"
                />
                <circle
                  fill="#D9E021"
                  stroke="#000000"
                  strokeMiterlimit="10"
                  cx="100"
                  cy="100"
                  r="50"
                />
              </pattern>
            </defs>
            {/* <Pattern/> */}
            <rect width="500" height="500" fill="url(#circlepattern)" />
          </svg>
        </Grid>
      </Grid>
    );
  }
}

export default PatternRoute;
