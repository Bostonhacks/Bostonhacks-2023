import React from "react";
import felizSponsor from "../../assets/images/felizSponsor.svg";
import sponsorHeader from "../../assets/images/sponsorHeader.svg";
import sponsorFaceBox from "../../assets/images/sponsorFaceBox.svg";
import sponsorHeartGroup from "../../assets/images/sponsorHeartGroup.svg";
import applyButton from "../../assets/images/applyButton.svg";
export default function Sponsor() {
  const sponsors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 13, 14];
  return (
    <div class="flex justify-center items-center flex-col">
      <img src={felizSponsor} alt="schedule" class="mt-20" />
      <img src={sponsorHeader} alt="schedule" class="mt-20" />
      <div class="grid md:grid-cols-3 lg:grid-cols-6 gap-20 mt-20">
        {sponsors.map(() => (
          <div>
            <img src={sponsorFaceBox} alt="" />
            <img src={sponsorHeartGroup} alt="" />
          </div>
        ))}
      </div>
      <button>
        <img src={applyButton} alt="" class="mt-20" />
      </button>
    </div>
  );
}
