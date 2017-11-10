export default function canonize(url) {
  const re = new RegExp('(https?:)?(\/\/)');
  const username = url.match(re)[2];
  return '@' + username;
}
