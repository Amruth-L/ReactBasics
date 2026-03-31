import { use, useState } from "react";

function ProfileCard({ name, role }) {
    const [liked, setLiked] = useState(false);
    const [isHiring, setIsHiring] = useState(true);
    return (
        <div style={{ border: "1px solid black", padding: "10px", margin: "10px" }}>
            <h2>{name}</h2>
            <p>{role}</p>

            <p style={{ color: isHiring ? "green" : "red" }}>
                {isHiring ? "hiring now" : "not hiring"}
            </p>
            <button onClick={() => setIsHiring(!isHiring)}>
                Toggle Hiring
            </button>
            <br /><br />
            <button onClick={() => setLiked(!liked)}>
                {liked ? "❤️ Liked" : "🤍 Like"}
            </button>


        </div>
    );
}



export default ProfileCard;