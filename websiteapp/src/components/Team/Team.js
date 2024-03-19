import { useSelector } from "react-redux";
import { getText } from "../../utils";
import "./Team.css";

import { TeamMember } from "./TeamMember";

export const Team = () => {
  const language = useSelector((state) => state.language.activeLanguage);

  return (
    <section className="section-team padding--section" id="section_team">
      {/* <!-- team headline --> */}
      <div className="container team-headline padding-bot-lg1">
        <h2 className={`heading-secondary language--${language}`}>
          {getText("team_headline", language)}
        </h2>
      </div>
      {/* <!-- team members --> */}
      <div className="container grid--team">
        <TeamMember imgName="1BeglaryanD" teamMemberIndex="1" />

        <TeamMember imgName="7DemirchyanE" teamMemberIndex="2" />

        <TeamMember imgName="4MazmanyanV" teamMemberIndex="3" />

        <TeamMember imgName="8NersisyanS" teamMemberIndex="4" />

        <TeamMember imgName="3SuqiasyanK" teamMemberIndex="5" />

        <TeamMember imgName="9Sirekyan" teamMemberIndex="6" />

        <TeamMember imgName="5Aghadjanyan" teamMemberIndex="7" />

        <TeamMember imgName="6QocharyanS" teamMemberIndex="8" />

        <TeamMember imgName="12Atoyan" teamMemberIndex="9" />

        <TeamMember imgName="2TantushyanR" teamMemberIndex="10" />

        <TeamMember imgName="11Mkrtchyan" teamMemberIndex="11" />

        <TeamMember imgName="10Karapetyan" teamMemberIndex="12" />
      </div>
    </section>
  );
};
