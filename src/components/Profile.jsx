import Bio from "./Bio";
import StatCard from "./StatCard";
import Controls from "./Controls";
import Hire from "./Hire";

function Profile({
  followers,
  rate,
  handleFollow,
  handleAddRate,
  handleReset,
}) {
  return (
    <div className="flex items-end justify-between bg-[#F5E7C6] px-20 py-10">
      <div>
        <Bio name="Jelian S. Limetares" username="xhieczi" />

        <div className="mt-6 flex gap-6">
          <StatCard value={followers} label="Followers" />
          <StatCard value={rate} label="PHP per hour" />
        </div>
      </div>

      <Controls
        handleFollow={handleFollow}
        handleAddRate={handleAddRate}
        handleReset={handleReset}
      />

      <Hire rate={rate} />
    </div>
  );
}

export default Profile;