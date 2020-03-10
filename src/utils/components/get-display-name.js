import isMemo from './is-memo';

function getDisplayName(Component) {
  const whereToGetName = isMemo(Component) ? Component.type : Component;

  return whereToGetName.displayName || whereToGetName.name || `Component`;
}

export default getDisplayName;
