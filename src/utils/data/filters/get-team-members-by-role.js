import {FilterName} from '../../../consts';
import getFilter from './get-filter';

function getTeamMembersByRole(role) {
  return (team) => getFilter(FilterName.TEAM.ROLE, role)(team).map((member) => member.fullName);
}

export default getTeamMembersByRole;
