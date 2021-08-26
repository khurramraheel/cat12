import logo from './logo.svg';
import './App.css';
import GoogleMapReact from 'google-map-react';
import Draggable from 'react-draggable';

import { Provider } from 'react-redux';
import SideNav from './components/sidenav/sidenav';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import meraStore from './store/store';

import M from 'materialize-css';

import PermissionModal from './components/permission-model/permission-model';

import React, { useEffect, useState, useRef, useParams } from 'react';

import Slider from './components/slider/slider';

import Header from './components/header/header';
import Footer from './components/footer/footer';

import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/home/home';
import CreateAd from './components/createad/createad';



import ListBox from './components/listBox/listBox';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import Dashboard from './components/dashboard/dashboard';


import { Launcher } from 'react-chat-window';


function App() {

  useEffect(() => {

    navigator.geolocation.getCurrentPosition((data) => {

      setCenter({
        lat: data.coords.latitude,
        lng: data.coords.longitude,
      });

    })


  }, []);


  let [name, setName] = useState("");

  const handleStart = (evt, data) => {
    console.log("starting")
    evt.target.parentNode.style.color = "red";
  }

  const handleDrag = (evt, data) => {
    console.log("drag")
  }

  const handleStop = (evt, data) => {
    console.log("stop");
    evt.target.parentNode.style.color = "black";
  }

  let [center, setCenter] = useState({
    lat: 59.95,
    lng: 30.33
  });

  let zoom = 7;


  let [locations, setLocations] = useState([]);

  const AnyReactComponent = ({ text }) => <img className="baloon" src="/baloon.png" />;

  let [messageList, setMessageList] = useState([]);

  return <div className="flex">
    <button onClick={() => {

      setMessageList([...messageList, {
        author: "ali",
        data: { text: "kya hal h" },
        type: "text"
      }]);


    }}>Send other banda message</button>
    <Launcher
      agentProfile={{
        teamName: 'OLX wali chat window',
        imageUrl: 'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png'
      }}
      onMessageWasSent={(message) => {

        setMessageList([...messageList, message]);

      }}
      messageList={messageList}
      showEmoji
    />

    {/* <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBb4HU-KrBNsrm9Hlj0Zz0-Le1GJO5j7rc" }}
        center={center}
        defaultZoom={zoom}
        onClick={(evt) => {

            setLocations([...locations, {lat:evt.lat, lng:evt.lng}]);

        }}
      >
        
        {
        locations.map((center) => {

          return <AnyReactComponent
            lat={center.lat}
            lng={center.lng}
            text="My Marker"
          />
        })
        }
      </GoogleMapReact>
    </div> */}

    {/* <Draggable
      axis="x"
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={handleStart}
      onDrag={handleDrag}
      onStop={handleStop}>
      <div>
        <div className="handle">Drag from here</div>
        <div>This readme is really dragging on...</div>
      </div>
    </Draggable> */}

    <Provider store={meraStore}>
      <BrowserRouter>
        <PermissionModal />
        <Header></Header>


        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />

        <div>

        </div>
        <Footer></Footer>

      </BrowserRouter>
    </Provider>
    <ToastContainer />
  </div >;




}

export default App;
