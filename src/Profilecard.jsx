
function ProfileCard({username, age, location, bio, hobbies, occupation, image}){
   

    return(
        <div className="maincard-container">
        <div className="profilecard-container">
            <div className="leftside">
                <div className="image">
                    <img src={image} alt="profile image" />
                </div>
                <div className="occupation-and-name">
                    <div className="name"><h2>{username}</h2>
                    </div>

                    <div className="occupation">
                        <p>{occupation}</p>
                    </div>
                </div>

                <div className="bio">
                    <p>{bio}</p>
                </div>

                <div className="button-container">
                    <div className="first-btn">
                        <button>Follow</button>
                    </div>

                    <div className="second-btn">
                        <button>
                            Message
                        </button>
                    </div>
                </div>
            </div>

            <div className="rightside">
                <div className="age-container">
                    <h3>{age}</h3>
                    <p>Age</p>
                    
                </div>

                <div className="location">
                    <h3>{location}</h3>
                    <p>Location</p>
                </div>

                <div className="hobbies">
                    <h3>Hobbies</h3>
                    <p>{hobbies}</p>
                </div>
            </div>

        </div>
        </div>
    )
}

// ProfileCard.propTypes = {
//       username : PropTypes.string.isRequired,
//       age : PropTypes.number.isRequired,
//       location : PropTypes.string.isRequired,
//       bio : PropTypes.string,
//       hobbies : PropTypes.string,
//       occupation : PropTypes.string.isRequired
//     }
    
//     ProfileCard.defaultProps = {
//       username : "Enter Username",
//       age : "Enter a Number here, that is your age",
//       occupation : "This area is for what you do for a living",
//       location : "Cambodia",
//       bio : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos atque enim similique!",
//       hobbies : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos atque enim similique! olor sit amet consectetur"
//     }

export default ProfileCard