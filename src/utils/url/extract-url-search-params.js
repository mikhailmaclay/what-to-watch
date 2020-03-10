function extractURLSearchParams() {
  const searchParams = new URLSearchParams(window.location.search);

  const temp = {};

  searchParams.forEach((value, key) => {
    temp[key] = value;
  });

  return temp;
}

export default extractURLSearchParams;
