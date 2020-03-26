import {FilterName} from '../../../constants/consts';
import getFilter from '../filters/get-filter';

function selectTeamMembersByRole(role) {
  return (team) => getFilter(FilterName.TEAM.ROLE, role)(team).map((member) => member.fullName);
}

export default selectTeamMembersByRole;
