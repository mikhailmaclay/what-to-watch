import {PathName} from '../../../constants/consts';

function adaptUser(userDataItem) {
  return {
    id: userDataItem.id,
    email: userDataItem.email,
    name: userDataItem.name,
    avatar: PathName.SERVER + userDataItem[`avatar_url`],
    myList: null
  };
}

export default adaptUser;
