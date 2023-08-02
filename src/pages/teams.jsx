import React from "react"
import HaifaImg from "../assets/img/teams/north/יהלום שחור חיפה.jpeg"
import NetanyaImg from "../assets/img/teams/north/פנתרי זלמן נתניה.jpeg"
import PetahTikvaImg from "../assets/img/teams/north/תקומה פת.jpeg"
import KiryatMoshe from "../assets/img/teams/north/צעירי קרית משה.jpeg"
import PetahTikvaImg2 from "../assets/img/teams/north/צעירי יוספטל פתח תקווה.jpeg"
import PetahTikvaImg3 from "../assets/img/teams/north/פגה פתח תקווה.jpeg"
import BatYamImg from "../assets/img/teams/north/עתידי בת ים.jpeg"
import YavneImg from "../assets/img/teams/north/מעברה יבנה.jpeg"
import HolomImg from "../assets/img/teams/north/חולון.jpeg"
import RehovotImg from "../assets/img/teams/north/ותיקי רחובות.jpeg"
import YavneImg2 from "../assets/img/teams/north/הפועל יבנה.jpeg"
import BatYamImg2 from "../assets/img/teams/north/אריות באזי בת ים.jpeg"
import OrYehudaImg from "../assets/img/teams/north/אור יהודה.jpeg"
import KiryatMalachi from "../assets/img/teams/south/קרית מלאכי.jpeg"
import MazkeretBatya from "../assets/img/teams/south/מזכרת בתיה אריות.jpeg"
import KiryatGatImg from "../assets/img/teams/south/נבסו קרית גת.jpeg"
import GaderaImg from "../assets/img/teams/south/נשרים גדרה.jpeg"
import AshdodImg from "../assets/img/teams/south/עתידי אשדוד.jpeg"
import RamleImg from "../assets/img/teams/south/עתידי רמלה.jpeg"
import AshdodImg2 from "../assets/img/teams/south/צעירי אשדוד.jpeg"
import KiryatGatImg2 from "../assets/img/teams/south/צעירי קרית-גת.jpeg"
import GaderaImg2 from "../assets/img/teams/south/אנדלי-שפירא-גדרה.jpeg"
import AshkelonImg from "../assets/img/teams/south/אריות אשקלון.jpeg"
import AshkelonImg2 from "../assets/img/teams/south/אשקלון.jpeg"
import HaveshaBone from "../assets/img/teams/south/חבשה בונה.jpeg"
import MalachiImg2 from "../assets/img/teams/south/יהלומי מלאכי.jpeg"
import AshdodImg3 from "../assets/img/teams/south/כוכבי אשדוד.jpeg"

export const Teams = () => {
  const footballTeams = [
    { name: "יהלום שחור חיפה", district: "North", icon: HaifaImg },
    { name: "זלמן נתניה", district: "North", icon: NetanyaImg },
    { name: "תקומה פתח תקווה", district: "North", icon: PetahTikvaImg },
    { name: "צעירי קרית משה", district: "North", icon: KiryatMoshe },
    { name: "צעירי יוספטל פתח תקווה", district: "North", icon: PetahTikvaImg2 },
    { name: "פג'ה פתח תקווה", district: "North", icon: PetahTikvaImg3 },
    { name: "עתידי בת ים", district: "North", icon: BatYamImg },
    { name: "מעברה יבנה", district: "North", icon: YavneImg },
    { name: "חולון אולסטאר", district: "North", icon: HolomImg },
    { name: "ותיקי רחובות", district: "North", icon: RehovotImg },
    { name: "הפועל יבנה", district: "North", icon: YavneImg2 },
    { name: "אריות באזי בת ים", district: "North", icon: BatYamImg2 },
    { name: "אור יהודה", district: "North", icon: OrYehudaImg },

    // Add more teams for the North district
    // ...
    { name: "קרית מלאכי אחי הכי", district: "South", icon: KiryatMalachi },
    { name: "מזכרת בתיה אריות", district: "South", icon: MazkeretBatya },
    { name: "נבסו קרית גת", district: "South", icon: KiryatGatImg },
    { name: "נשרים גדרה", district: "South", icon: GaderaImg },
    { name: "עתידי אשדוד", district: "South", icon: AshdodImg },
    { name: "עתידי רמלה", district: "South", icon: RamleImg },
    { name: "צעירי אשדוד", district: "South", icon: AshdodImg2 },
    { name: "צעירי קרית גת", district: "South", icon: KiryatGatImg2 },
    { name: "אנדליי שפירא גדרה", district: "South", icon: GaderaImg2 },
    { name: "אריות אשקלון", district: "South", icon: AshkelonImg },
    { name: "מוצ'ה אליאס אשקלון", district: "South", icon: AshkelonImg2 },
    { name: "חבשה בונה ר.א", district: "South", icon: HaveshaBone },
    { name: "יהלומי מלאכי", district: "South", icon: MalachiImg2 },
    { name: "כוכבי אשדוד", district: "South", icon: AshdodImg3 },

    // Add more teams for the South district
    // ...
  ]

  const southTeams = footballTeams.filter((team) => team.district === "South")
  const northTeams = footballTeams.filter((team) => team.district === "North")

  return (
    <div className="teams">
      <div className="south-team">
        <div className="header">
          <h2>דרום</h2>
        </div>
        <div className="team-list south">
          {southTeams.map((team) => (
            <div className="team">
              <div className="team-image">
                <img src={team.icon} alt={team.name} />
              </div>
              <p className="team-name">{team.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="north-team">
        <div className="header">
          <h2>צפון</h2>
        </div>
        <div className="team-list north">
          {northTeams.map((team) => (
            <div className="team">
              <div className="team-image">
                <img src={team.icon} alt={team.name} />
              </div>
              <p className="team-name">{team.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
