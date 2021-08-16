import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({fullName,bio,profession,handleName, children}) => {
    return (
        <div style={{margin:"5% 30%", backgroundColor:"lightblue", padding:"0.5%", }}>
            {children}
            <h2 style={{fontWeight:"bolder", color:"blueviolet"}}>{fullName}</h2>
            <h3 style={{fontWeight:"bold", color:"darkblue"}}>{profession}</h3>
            <p style={{textAlign:"center"}}>{bio}</p>
            <button 
                onClick={()=>handleName(fullName)} 
                style={{color:"white", fontWeight:"bold", backgroundColor:"blue", borderRadius:"5px", border:"none", padding:"0.5%"}}
            >
            Click here 
            </button>

            
        </div>
    )
}

export default Profile
Profile.defaultProps={
    fullName: "jane/john doe",
    profession: "no profession",
    bio: ""
}
Profile.propTypes={
    fullName: PropTypes.string,
    professional: PropTypes.string,
    bio: PropTypes.string,
}