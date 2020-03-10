function isCurrentURL(url) {
  return window.location.pathname + window.location.search === url;
}

export default isCurrentURL;
