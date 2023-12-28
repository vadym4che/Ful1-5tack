const vertical = [
  {
    title: 'Feedback App',
    name: 'vue3-feedback-widget',
    stack: ['Vue3', 'Vuetify', 'Firebase'],
    tags: ['UI', 'FE', 'BE', 'DB'],
    desc: '',
    path: 'vue3-feedback-widget',
    orientation: '|',
    deps: [],
  },
  {
    title: 'Weather App',
    name: 'vue-weather-app',
    stack: ['Vue3', 'axios', 'i18n', 'maps'],
    tags: ['UI', 'FE', 'API'],
    desc: 'The Vue Weather App is a feature-rich weather application developed using Vue.js. It provides a user-friendly interface with various functionalities. The project structure follows a clean organization, separating components, helpers, and views.\n\nKey Functionalities:\n1. City Autocomplete Input: Utilizes the vue3-google-autocomplete package for a user-friendly city input field powered by Google Maps API.\n2. API Requests: Utilizes Axios to make API requests to Open-Meteo.com, a free open-source weather API.\n3. Current Weather Card: Displays weather information for the current day in a card format.\n4. Hourly Temperature Graph: Shows an hourly temperature graph for the current day using the Vue-chartjs plugin.\n5. Multiple Weather Blocks: Allows users to create multiple weather blocks for different cities, with a limit of 5 blocks.\n6. Favorites Tab: Features a "Favorites" tab where users can add or remove cities, with weather blocks displayed for added cities.\n7. Responsiveness: The application is responsive, utilizing SCSS and CSS @media for adaptability.\n8. Day/5 Days Toggle: Allows users to toggle between displaying "Day" or "5 Days" weather.\n9. Default User Location: Displays weather for the user\'s location determined by IP address using the Geoapify.com platform.\n10. Preloaders: Implements CSS preloader animations during API requests.\n11. Multilingual Support: Provides multilingual support for the interface and API responses in English and Ukrainian.\n12. Day/Night Mode: Features a toggle between Day and Night theme-view modes.',
    path: 'vue-weather-app',
    orientation: '|',
    deps: [
      "axios ^1.6.2",
      "chart.js ^4.4.0",
      "vue ^3.3.8",
      "vue-chartjs ^5.2.0",
      "vue-i18n ^9.8.0",
      "vue-router ^4.2.5",
      "vue3-google-autocomplete ^0.0.5"
    ]
  },
  {
    title: 'Calendar App',
    name: 'e-time',
    stack: ['Vite' ,'Vue3', 'SCSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'e-time',
    orientation: '|',
    deps: [],
  },
  {
    title: 'If GPT was a dish - tech recipe',
    name: 'gpt-cuisine-symphony',
    stack: ['HTML' ,'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'gpt-cuisine-symphony',
    orientation: '|',
    deps: [],
    white_bg: true,
  },
  {
    title: 'React dynamic list of goods',
    name: 'react_dynamic-list-of-goods',
    stack: ['React', 'CSS', 'fetch', 'bulma'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'react_dynamic-list-of-goods',
    orientation: '|',
    deps: [],
    white_bg: true,
  },
  {
    title: 'Rainbow divs toggler',
    name: 'div-toggle-colorizer',
    stack: ['HTML' , 'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'div-toggle-colorizer',
    orientation: '|',
    deps: [],
  },
  {
    title: 'React Restaurant Landing App',
    name: 'restaurant-react',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'restaurant-react',
    orientation: '|',
    deps: [],
  },
  {
    title: 'React BEM responsive landing',
    name: 'gpt3-react',
    stack: ['React' , 'HTML', 'CSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'gpt3-react',
    orientation: '|',
    deps: [],
  },
  {
    title: 'Vue Weather Forecast App',
    name: 'weather-app',
    stack: ['HTML' ,'CSS', 'JS', 'Vue'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'weather-app',
    orientation: '|',
    deps: [],
  },
  {
    title: 'Vue Grocery Store with Cart',
    name: 'food-cart-vue',
    stack: ['HTML' ,'CSS', 'JS', 'Vue'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'food-cart-vue',
    orientation: '|',
    deps: [],
  },
  {
    title: 'React Live-coding - Cars App',
    name: 'react_live_coding_cars_table_task',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'react_live_coding_cars_table_task',
    orientation: '|',
    deps: [],
    white_bg: true,
  },
  {
    title: 'Site with sticky header Example',
    name: 'react_decompose',
    stack: ['HTML' ,'CSS', 'JS'],
    tags: ['UI', 'FE'],
    desc: '',
    path: 'react_decompose',
    orientation: '|',
    deps: [],
  },
  {
    title: 'HTML5 Transforming JSON to List',
    name: 'json-list',
    stack: ['HTML' ,'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'json-list',
    orientation: '|',
    deps: [],
  },
  {
    title: 'Bykes Store Landing Page',
    name: 'layout_miami',
    stack: ['HTML' ,'CSS', 'SCSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'layout_miami',
    orientation: '|',
    deps: [],
  },
  {
    title: 'Multilayout Clock Widget',
    name: 'lunar-solar-time',
    stack: ['HTML' ,'CSS', 'SCSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'lunar-solar-time',
    orientation: '|',
    deps: [],
  },
  {
    title: 'fireSnow - snowfall background',
    name: 'fireSnow',
    stack: ['HTML' ,'CSS', 'SCSS'],
    tags: ['UI', 'FE', 'API'],
    desc: 'FIRESNOW® is a web page designed to create a captivating visual experience. It features falling snowflakes over a dark background, accompanied by animated text. The project aims to showcase creative CSS techniques for animation and styling. The project\'s HTML structure is minimal, with a basic layout consisting of a <div> element for snowflakes and sections for header and footer text. The document\'s metadata, including the title and favicon, is also defined.',
    path: 'fireSnow',
    orientation: '|',
    deps: [],
  },
  {
    title: 'Watch Widget SCSS',
    name: 'layout_stop-watch',
    stack: ['SCSS' ,'SASS', 'HTML', 'CSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'layout_stop-watch',
    orientation: '|',
    deps: [],
    white_bg: true,
  },
  {
    title: 'A💞B',
    name: 'AIB',
    stack: ['HTML', 'CSS', 'JS'],
    tags: ['FE', 'JS'],
    desc: '',
    path: 'AIB',
    orientation: '|',
    deps: [],
  },
]

const horizontal = [
  {
    title: 'A💞B',
    name: 'AIB',
    stack: ['HTML', 'CSS', 'JS'],
    tags: ['FE', 'JS'],
    desc: '',
    path: 'AIB',
    orientation: '-',
    deps: [],
  },
  {
    title: 'React MUI: Table | Chart | List',
    name: 'backendless-tabs-jsx',
    stack: ['HTML' ,'CSS', 'JS', 'React', 'React-router'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'backendless-tabs-jsx',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Vue Fetch Random User',
    name: 'random-user-vue',
    stack: ['HTML' ,'CSS', 'JS', 'Vue'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'random-user-vue',
    orientation: '-',
    deps: [],
    white_bg: true,
  },
  {
    title: 'The Base: Layout, Git, JS, TS',
    name: 'devit-team',
    stack: ['HTML' ,'CSS', 'JS', 'TS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'devit-team',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Web Development Essentials',
    name: 'abz-agency-test-assignment',
    stack: ['HTML' ,'CSS', 'JS', 'React', 'MUI'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'abz-agency-test-assignment',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Nice Gadgets Store - Full-stack App',
    name: 'product-catalog',
    stack: ['HTML' ,'CSS', 'JS', 'React', 'NodeJS'],
    tags: ['UI', 'FE', 'BE', 'DB', 'API'],
    desc: '',
    path: 'https://fe-jan23-team-six.github.io/product-catalog/',
    orientation: '-',
    deps: [],
    white_bg: true,
  },
  {
    title: 'React Todos Full-stack App',
    name: 'react_todo-app-with-api',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'BE', 'API'],
    desc: '',
    path: 'react_todo-app-with-api',
    orientation: '-',
    deps: [],
  },
  {
    title: 'React Task-management Table',
    name: 'react_dynamic-list-of-todos',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'react_dynamic-list-of-todos',
    orientation: '-',
    deps: [],
  },
  {
    title: 'React CRM-like people table',
    name: 'react_people-table-basics',
    stack: ['HTML' ,'CSS', 'JS', 'React', 'React-router'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'react_people-table-basics/#/people',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Vue Travel App with Vue-router',
    name: 'travel-app-vue',
    stack: ['HTML' ,'CSS', 'JS', 'Vue', 'Vue-router'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'travel-app-vue',
    orientation: '-',
    deps: [],
    white_bg: true,
  },
  {
    title: 'Nuxt simple Theme Toggler Example',
    name: 'nuxt-demo',
    stack: ['HTML' ,'CSS', 'JS', 'Vue', 'Nuxt'],
    tags: ['UI', 'FE', 'SSR', 'API'],
    desc: '',
    path: 'nuxt-demo',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Movies Site - Add Movie Form',
    name: 'react_movies-list-add-form',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'react_movies-list-add-form',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Custom Shaped Download Page',
    name: 'my-server-io',
    stack: ['HTML' ,'CSS', 'JS', '3D'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'my-server-io',
    orientation: '-',
    deps: [],
  },

  {
    title: 'Three.js 3D Cube',
    name: 'graphics-js',
    stack: ['HTML' ,'CSS', 'JS', '3D'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'graphics-js',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Wordle - Guess UA word app',
    name: 'wordle-js',
    stack: ['React' ,'TypeScript', 'HTML', 'CSS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'wordle-js',
    orientation: '-',
    deps: [],
    white_bg: true,
  },
  {
    title: 'Clicker app - pure JavaScript',
    name: 'clicker-js',
    stack: ['HTML', 'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'clicker-js',
    orientation: '-',
    deps: [],
  },
]

Array.prototype.shuffle = function () {
  return this.sort(() => Math.random() - 0.5);
};

vertical.shuffle()
horizontal.shuffle()

const projects = [
  vertical[10],
  horizontal[0],
  horizontal[1],

  vertical[6],
  vertical[7],
  vertical[8],

  vertical[12],
  horizontal[4],
  horizontal[5],

  horizontal[2],
  horizontal[3],
  vertical[11],

  horizontal[6],
  horizontal[7],
  vertical[13],

  vertical[14],
  horizontal[8],
  horizontal[9],

  vertical[1],
  vertical[3],
  vertical[0],

  vertical[5],
  vertical[2],
  vertical[4],

  vertical[16],
  horizontal[12],
  horizontal[13],

  horizontal[14],
  horizontal[15],
  vertical[17],

  horizontal[10],
  horizontal[11],
  vertical[15],
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

export { projects, chunkedProjects, vertical }