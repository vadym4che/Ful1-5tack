export default function (path) {
  return path.includes('https') ? path : 'https://vadym4che.github.io/' + path
}
