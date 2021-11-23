import React from 'react'
import PropTypes  from 'prop-types'

function Profile(props) {
    const styling={ color: "red", textAlign:"center"}
    return (
        <div style={styling}>
            <h1>{props.fullName}</h1>
            <h2>{props.bio}</h2>
            <h2>{props.profession}</h2>
            <button onClick={()=> props.handleName(`My name is ${props.fullName}`)}>Click here</button>
            {props.children}
        </div>
    )
}
Profile.defaultProps={
    fullName:"Chivo Omodu",
    bio:"ux/ui",
    profession: "designer"
}
Profile.propTypes={
    fullName: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string,
    HandleName: PropTypes.func,
}
export default Profile
