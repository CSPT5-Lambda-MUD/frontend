// import React from 'react';
// import styled from 'styled-components';
// import axios from 'axios';

// const MapBox = styled.div`
//     height: 50vh;
//     width: 50%;
//     display: flex;
//     justify-content: space-evenly;
//     flex-wrap: wrap;
//     margin: 20px auto;
//     margin-top: 40px;

// `

// const MapItem = styled.div`
//     height: 5%;
//     width: 5%;
//     display: flex;

// `

// class MapComponent extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//         rooms: []
//     };
//   }

//   componentWillMount() {
//     const header = {
//         Authorization: `Token ${localStorage.getItem('token')}`,
//         'Content-Type': 'application/json'
//       };
      


    
//       axios
//       .get(`${process.env.REACT_APP_API}/adv/room/`, {
//         headers: header
//       })
//       .then(res => {
//         this.setState((state, props) => ({
//             rooms: res.data.rooms
//         }));
//       })
//       .catch(error => {
//         console.log(error);
//       });


//   };
  

//   render() {
//     return (
//         <MapBox>
//             {
//                 this.state.rooms.map(room => {
//                     console.log(room)
//                     if (room !== "0"){
//                         if (room.current_room) {
//                             console.log(room.n)
//                             return (
//                                 <MapItem>
//                                     <svg>
//                                         <rect  width="90%" height="90%" fill="red"  />
//                                         {(room.n !== 0) ? <rect  x="25%" y="-85%" width="33%" fill="black"  /> : null}
//                                         {(room.w !== 0) ? <rect  x="-85%" y="25%" height="33%" fill="black"  /> : null}
//                                         {(room.e !== 0) ? <rect  x="85%" y="25%" height="33%" fill="black"  /> : null}
//                                         {(room.s !== 0) ? <rect  x="25%" y="85%" width="33%" fill="black"  /> : null}
                                        
//                                     </svg>
//                                 </MapItem>
//                             )
//                         }
//                         else {
//                             return (
//                                 <MapItem>
//                                     <svg>
//                                         <rect  width="90%" height="90%" fill="darkblue"  />
//                                         {(room.n !== 0) ? <rect  x="25%" y="-85%" width="33%" fill="black"  /> : null}
//                                         {(room.w !== 0) ? <rect  x="-85%" y="25%" height="33%" fill="black"  /> : null}
//                                         {(room.e !== 0) ? <rect  x="85%" y="25%" height="33%" fill="black"  /> : null}
//                                         {(room.s !== 0) ? <rect  x="25%" y="85%" width="33%" fill="black"  /> : null}
//                                     </svg>
//                                 </MapItem>
//                             )
//                         }
//                     }
//                     else {
//                         return (
//                             <MapItem>
//                                 <svg >
//                                     <rect width="90%" height="90%" fill="lightgrey" />
//                                 </svg>
                                
//                             </MapItem>
//                         )
//                     }
//                 })
            
//             // this.setState((state, props) => ({
//             //     lastX: state.lastX + 20,
//             //     lastY: state.lastY + 20
//             // }));
            
//             }
//         </MapBox>
//     )
//   }
// };

// export default MapComponent
