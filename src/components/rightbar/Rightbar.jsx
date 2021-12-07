import { Users } from "../../dummyData";
import Online from "../online/Online";
import "./rightbar.css";

export default function Rightbar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/person/4.jpeg" alt="" />
                    <span className="birthdayText">
                        <b>Rick</b> and <b>others </b>have birthday today
                    </span>
                </div>
                <img className="rightBarAd" src="assets/post/5.jpeg" alt=""/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map((u)=>(
                        <Online key={u.id} user={u}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
