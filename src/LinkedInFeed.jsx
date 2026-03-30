import ProfileCard from "./ProfileCard.jsx";

function LinkedInFeed() {
    return (
        <div>
            <h1>LinkedIn Feed</h1>

            <ProfileCard
                name="Amruth L"
                role="Frontend Developer"
                isHiring={true}
            />

            <ProfileCard
                name="Rahul K"
                role="Data Analyst"
                isHiring={false}
            />
        </div>
    );
}

export default LinkedInFeed;