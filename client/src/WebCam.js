import React, { Component } from 'react';


class WebCam extends Component {

    componentDidMount() {
        var constraints = { video: true };
        var video = document.querySelector("video");

        function successCallback(stream) {
            video.srcObject = stream;
            video.play();
        }

        function errorCallback(error) {
            console.log("navigator.getUserMedia error: ", error);
        }

        navigator.mediaDevices.getUserMedia(constraints)
            .then(successCallback)
            .catch(errorCallback);

        if (!navigator.mediaDevices || !navigator.mediaDevices.enumerateDevices) {
            alert("enumerateDevices() not supported.");

        }

        // List cameras and microphones.

        navigator.mediaDevices.enumerateDevices()
            .then(function (devices) {
                devices.forEach(function (device) {
                    console.log(device.kind + ": " + device.label +
                        " id = " + device.deviceId);
                });
            })
            .catch(function (err) {
                alert(err.name + ": " + err.message);
            });

        if (window.MediaRecorder == undefined) {
            console.error('MediaRecorder not supported, boo');
        } else {
            var contentTypes = ["video/webm",
                "video/webm;codecs=vp8",
                "video/x-matroska;codecs=avc1",
                "audio/webm",
                "video/mp4;codecs=avc1",
                "video/invalid"];
            contentTypes.forEach(contentType => {
                console.log(contentType + ' is '
                    + (MediaRecorder.isTypeSupported(contentType) ?
                        'supported' : 'NOT supported '));
            });
        }

    }

    render() {

        return (
            <foreignObject width='220%' preserveAspectRatio='xMinXMin slice'>
            <video id={this.props.id} width='100%' height='100%' autoPlay ></video>
            </foreignObject>
        )
    }
}



export default WebCam;