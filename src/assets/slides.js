const slidesArray = [
  {
    title: 'Version Control',
    content: [
      { name: 'Git', path: '/git.webp' },
      { name: 'GitHub', path: '/github.webp' },
      { name: 'Bash', path: '/bash.webp' },
    ],
  },
  {
    title: 'Frontend Development',
    content: [
      { name: 'Vite', path: '/vite.webp' },
      { name: 'Node.js', path: '/node.webp' },
      { name: 'npm', path: '/npm.webp' },
    ],
  },
  {
    title: 'Web Design',
    content: [
      { name: 'HTML5', path: '/html5.webp' },
      { name: 'CSS3', path: '/css3.webp' },
      { name: 'Figma', path: '/figma.webp' },
    ],
  },
  {
    title: 'CSS Preprocessors',
    content: [
      { name: 'Sass', path: '/sass.webp' },
      { name: 'WebGL', path: '/webgl.webp' },
      { name: 'Three.js', path: '/threejs.webp' },
    ],
  },
  {
    title: 'JavaScript',
    content: [
      { name: 'JavaScript ES6', path: '/js6.webp' },
      { name: 'ECMAScript 6', path: '/es6.webp' },
      { name: 'TypeScript 2020', path: '/ts2020.webp' },
    ],
  },
  {
    title: 'APIs and Networking',
    content: [
      { name: 'JSON', path: '/json.webp' },
      { name: 'REST', path: '/rest.webp' },
      { name: 'Postman', path: '/postman.webp' },
    ],
  },
  {
    title: 'JavaScript Frameworks',
    content: [
      { name: 'Vue.js', path: '/vue.webp' },
      { name: 'Nuxt.js', path: '/nuxt.webp' },
      { name: 'React.js', path: '/react.webp' },
    ],
  },
  {
    title: 'Python Web Development',
    content: [
      { name: 'Python', path: '/python.webp' },
      { name: 'Flask', path: '/flask.webp' },
      { name: 'Django', path: '/django.webp' },
    ],
  },
  {
    title: 'PHP Development',
    content: [
      { name: 'PHP', path: '/php.webp' },
      { name: 'Laravel', path: '/laravel.webp' },
      { name: 'WordPress', path: '/wordpress.webp' },
    ],
  },
]


const arrayToHTML = (content) => content.map(item => `
  <div class="content">
    <div style="background-image: url('${item.path}')" class="image"></div>
    <p class="p2">${item.name}</p>
  </div>
`).join('')

const slides = slidesArray.map(item => {
  return {
    title: item.title,
    content: arrayToHTML(item.content)
  }
})

export default slides
