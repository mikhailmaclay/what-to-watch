function urlize(string) {
  return string
    .replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`)
    .replace(/[0-9]+/g, (match) => `-${match}-`)
    .replace(/--/g, `-`)
    .replace(/^-/g, ``);
}

export default urlize;
