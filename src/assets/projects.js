const projects = [
  {
    title: 'Feedback App',
    name: 'vue3-feedback-widget',
    stack: ['Vue3', 'Vuetify', 'Firebase'],
    tags: ['UI', 'FE', 'BE', 'DB'],
    desc: '',
    path: 'vue3-feedback-widget',
    orientation: '|'
  },
  {
    title: 'Weather App',
    name: 'vue-weather-app',
    stack: ['Vue3', 'axios', 'i18n', 'maps'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'vue-weather-app',
    orientation: '|'
  },
  {
    title: 'Calendar App',
    name: 'e-time',
    stack: ['Vite' ,'Vue3', 'SCSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'e-time',
    orientation: '|'
  },
  {
    title: 'A<3B',
    name: 'AIB',
    stack: ['HTML', 'CSS', 'JS'],
    tags: ['FE', 'JS'],
    desc: '',
    path: 'AIB',
    orientation: '-'
  },
  {
    title: 'Y(our)-cocktail app',
    name: 'your-cocktail',
    stack: ['Vue', 'Nuxt', 'Vercel'],
    tags: ['FE', 'BE', 'SSR', 'API'],
    desc: '',
    path: 'https://your-cocktail-dugu.vercel.app/',
    orientation: '-'
  },
  {
    title: 'fireSnow - snowfall background',
    name: 'fireSnow',
    stack: ['Vite' ,'Vue3', 'SCSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'fireSnow',
    orientation: '|'
  },
  {
    title: 'Watch Widget SCSS',
    name: 'layout_stop-watch',
    stack: ['SCSS' ,'SASS', 'HTML', 'CSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'layout_stop-watch',
    orientation: '|'
  },
  {
    title: 'Wordle - Guess UA word app',
    name: 'wordle-js',
    stack: ['React' ,'TypeScript', 'HTML', 'CSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'wordle-js',
    orientation: '-'
  },
  {
    title: 'Clicker app - pure JavaScript',
    name: 'clicker-js',
    stack: ['HTML', 'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'clicker-js',
    orientation: '-'
  },
  {
    title: 'React BEM responsive landing',
    name: 'gpt3-react',
    stack: ['React' , 'HTML', 'CSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'gpt3-react',
    orientation: '|'
  },
  {
    title: 'React dynamic list of goods',
    name: 'react_dynamic-list-of-goods',
    stack: ['React', 'CSS', 'fetch', 'bulma'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'react_dynamic-list-of-goods',
    orientation: '-'
  },
  {
    title: 'Rainbow divs toggler',
    name: 'div-toggle-colorizer',
    stack: ['HTML' , 'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'div-toggle-colorizer',
    orientation: '-'
  },
]

const chunkArray = (arr, chunkSize) => {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    chunkedArray.push(chunk);
  }
  return chunkedArray;
}

const chunkedProjects = chunkArray(projects, 3);

export { projects, chunkedProjects }