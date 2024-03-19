import { Fragment } from "react";
import { useSelector } from "react-redux";
import { getText } from "../../utils";
import { Paragraph } from "../UI";

export const TeamMember = (props) => {
  const { teamMemberIndex, imgName } = props;
  const language = useSelector((state) => state.language.activeLanguage);

  return (
    <div className="team-member-box flex-column">
      <div className="img-box margin-bot--sm">
        <picture>
          <source
            srcSet={`${process.env.PUBLIC_URL}/images/team/${imgName}.webp`}
            type="image/webp"
          />
          <img
            src={`${process.env.PUBLIC_URL}/images/team/${imgName}.jpg`}
            className="team-member-img shadow--dark"
            alt={getText("team_alt", language)}
          />
        </picture>
      </div>
      <Fragment>
        <Paragraph
          textKey={`team_member_${teamMemberIndex}_name`}
          additionalClasses={"team-member-name"}
        />
        <Paragraph
          textKey={`team_member_${teamMemberIndex}_role`}
          additionalClasses={"team-member-title"}
        />
      </Fragment>
    </div>
  );
};
