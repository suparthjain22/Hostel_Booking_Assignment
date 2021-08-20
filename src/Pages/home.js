import React, { useState} from 'react';
import HomeCard from '../components/homeCard';
import NotBookedScreen from './notBookedScreen';

function Home(props){
    
    
  const [isRoombooked, setisRoombooked]=useState(false);
  
  let handleCloser=()=>{
    setisRoombooked(true);
  }
  let bookingRemove=()=>{
    setisRoombooked(false);
  }
  
  const navcont={
    height:"5vh",
    display:'flex',
    justifyContent:'space-between',
    background:'rgba(0,0,255,0.3)',
  }
  const left={
    marginLeft:'2vw',
    fontWeight:'bold',
    fontSize:'1.3em'
    
  }
  const right={
    marginRight:'2vw',
    // margintopight:'2vw',
    padding:'0 0.5vw',
    borderRadius:'50%',
    fontWeight:'bold',
    fontSize:'1.3em',
    background:'rgba(255,0,0,0.5)',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  }
  let letter=props.userName.slice(0,1);
    
  return(
    <>
      <div style={navcont}><span style={left} >Newton School</span><div style={right}>{letter}</div></div>
      {
        isRoombooked ? (<HomeCard name={props.userName} bookingremover={bookingRemove}/>) : (<NotBookedScreen handleClose={handleCloser}/>)
      }

    </>
  );

}
export default Home;