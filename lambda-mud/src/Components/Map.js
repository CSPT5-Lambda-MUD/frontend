import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MapBox = styled.div`
    height: 100vh;
    width: 80%;
    margin: auto auto;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;

`

const MapItem = styled.div`
    height: 10%;
    width: 10%;

`

class MapComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        rooms: []
    };
  }

  componentDidMount() {
    console.log("dfdfsdf???")
    const header = {
        Authorization: `Token ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
      };
      


    
      axios
      .get(`${process.env.REACT_APP_API}/adv/rooms/`, {
        headers: header
      })
      .then(res => {
        this.setState((state, props) => ({
            rooms: res.data.rooms
        }));
      })
      .catch(error => {
        console.log(error);
      });


  };
  

  render() {
    return (
        <MapBox>
            {
                this.state.rooms.map(room => {
                    console.log(room)
                    if (room !== "0"){
                        if (room.current_room) {
                            return (
                                <MapItem>
                                    <svg>
                                        <rect  width="38%" height="45%" fill="blue"  />
                                    </svg>
                                    
                                </MapItem>
                            )
                        }
                        else {
                            return (
                                <MapItem>
                                    <svg>
                                        <rect  width="38%" height="45%" fill="red"  />
                                    </svg>
                                    
                                </MapItem>
                            )
                        }
                    }
                    else {
                        return (
                            <MapItem>
                                <svg >
                                    <rect width="38%" height="45%"  />
                                </svg>
                                
                            </MapItem>
                        )
                    }
                })
            
            // this.setState((state, props) => ({
            //     lastX: state.lastX + 20,
            //     lastY: state.lastY + 20
            // }));
            
            }
        </MapBox>
    )
  }
};

export default MapComponent