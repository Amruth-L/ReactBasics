function ProfileCard({ name, role, isHiring }) {
    return (
        <div style={{ border: "1px solid gray", padding: "10px", margin: "10px" }}>
            <h2>{name}</h2>
            <p>{role}</p>

            {isHiring ? (
                <p style={{ color: "green" }}>Hiring Now</p>
            ) : (<p style={{ color: "red" }}>Not Hiring</p>)}
        </div>
    );
}
export default ProfileCard;