import Button from "../UI/Button";

export default function CreatorCard({ name, username, bio, profilePicture, ussdCode, onTip }) {
  return (
    <div className="bg-[#1A1A1A] rounded-lg p-6 max-w-md mx-auto border border-[#333]">
      <img
        src={profilePicture || "/default-profile.png"}
        alt={name}
        className="w-24 h-24 rounded-full mx-auto mb-4 border-2 border-[#00FF85] object-cover"
      />
      <h2 className="text-2xl font-bold text-center">{name}</h2>
      <p className="text-[#B0B0B0] text-center mb-2">@{username}</p>
      <p className="text-[#B0B0B0] text-center mb-6">{bio}</p>
      <div className="flex justify-center gap-2 mb-4">
        <Button onClick={onTip}>Tip Now</Button>
      </div>
      <div className="text-center text-[#00FF85] text-sm">
        USSD Code: <span className="font-mono">{ussdCode}</span>
      </div>
    </div>
  );
}