import User from "./User"; 
import ProfileImage from "./ProfileImage";
import Timestamp from "./Timestamp";
import Message from "./Message";
import Actions from "./Actions";
function Tweet({tweet}) {
  const {user,timestamp,message} = tweet
  const {image} = user

    return (
      <div className="tweet">
      <ProfileImage image={image}/>

      <div className="body">
        <div className="top">
            <User user= {user}/>
            <Timestamp timestamp={timestamp}/>
        </div>

       <Message message={message}/>

       <Actions actions />
      </div>

      <i className="fas fa-ellipsis-h"></i>
    </div>

    
  )
}

export default Tweet;
