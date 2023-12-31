const vertical = [
  {
    title: 'Feedback App',
    name: 'vue3-feedback-widget',
    stack: ['Vue3', 'Vuetify', 'Firebase'],
    tags: ['UI', 'FE', 'BE', 'DB'],
    desc: 'This app showcases the power of Vue3 and Google modern and convenient cloud storage as Firebase Store. It also utilizes Vuetify - an easy and light Vue component library. It consists of 2 pages. One main allows you to post feedback with ratings and so on? and disallow votes more than once with the same email box address or phone number. The second page shows statistics of voting for users to understand their own role - that their actions impact the world - to say globally :)',
    path: 'vue3-feedback-widget',
    orientation: '|',
    deps: [
      "@vuelidate/core ^2.0.3",
      "@vuelidate/validators ^2.0.4",
      "dotenv ^16.3.1",
      "firebase ^10.5.2",
      "vee-validate ^4.11.8",
      "vite-plugin-vuetify ^1.0.2",
      "vue ^3.3.4",
      "vuetify ^3.3.23"
    ],
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
    desc: 'Didn\'t I mention before that I am a developer and love astro topics? So I desired to create an app within which I could see all calendar data in one place - i.e. lunar phases, date, and time to put it on an additional screen to track time-spending. And I also implement styling with great respect and love to Time whom I am worshiping and on whom I rely in all my dos. So I like to watch out for Time and spend it as effectively and positively as I can.',
    path: 'e-time',
    orientation: '|',
    deps: [
      "vue ^3.3.8",
      "@vitejs/plugin-vue ^4.5.0",
      "gh-pages ^6.1.0",
      "sass ^1.69.5",
      "vite ^5.0.0"
    ],
  },
  {
    title: 'If GPT was a dish - tech recipe',
    name: 'gpt-cuisine-symphony',
    stack: ['HTML' ,'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: 'In this gastronomic masterpiece, we explore the various ingredients that make up the harmonious blend of GPT-3.5 development. Each component plays a unique role, contributing to the symphony of code and creativity.\n\nThis demo has its\'s interesting story.\nOnce I was training with GPT-3.5. And I\'ve asked it been directed by internal curiosity.\nSo I\'ve asked: "if imagine that you are some good\\food\nas a complex product\nwhat you are consisting of in percentage and give me diagram if you can draw it with percentage and commenting usecases of each - as in food - what tool had been used on what step of preparing you ?"\nThat was a funny answer, I\'ve desided to save as this demo! :)',
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
    desc: 'Dynamic List of Goods is a React web application that allows you to load and display a list of goods dynamically. It provides various buttons to load different sets of goods, including all goods, the first five goods, and red goods. This project demonstrates React component rendering, dynamic data loading, and error handling. It is built using React, Bulma CSS, and Font Awesome icons.\n\nWas enjoyble to animate this fetched data displaying smoothily. Bulma is simple and nice, so I like it too.',
    path: 'react_dynamic-list-of-goods',
    orientation: '|',
    deps: [
      "@cypress/react ^5.12.4",
      "bulma ^0.9.3",
      "postcss ^8.4.12",
      "react ^17.0.2",
      "react-dom ^17.0.2",
    ],
    white_bg: true,
  },
  {
    title: 'Rainbow divs toggler demo app',
    name: 'div-toggle-colorizer',
    stack: ['HTML' , 'CSS', 'JS'],
    tags: ['UI', 'FE', 'API'],
    desc: 'This particular demo illustrates the power of JavaScript which creates all content and manages it interactively and smoothly via a few lines of code. When you click some specific div - it moves to the top. When you click on it a second time it moves to its initial place, and as result we have elements behavior if it has a memory state even if it has not.',
    path: 'div-toggle-colorizer',
    orientation: '|',
    deps: [],
  },
  {
    title: 'React Restaurant Landing App',
    name: 'restaurant-react',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'API'],
    desc: 'This is an example how easy is component-based approach to use in React.js, how easy and quick to prepair some landing page like this for any sort of bussiness representation.',
    path: 'restaurant-react',
    orientation: '|',
    deps: [
      "react ^18.2.0",
      "react-dom ^18.2.0",
      "react-icons ^4.6.0",
    ],
  },
  {
    title: 'React BEM Landing Responsive',
    name: 'gpt3-react',
    stack: ['React' , 'HTML', 'CSS'],
    tags: ['UI', 'FE', 'API'],
    desc: 'This lightweight react SPA demonstrates the modern BEM approach in writing stylesheet blocks and has a responsive instead of a gummy interface. Also, it is a very cool thing in React - it is very easy to manage content when it is divided into small easily maintainable blocks. React changed many lives of developers having different backgrounds and working areas.',
    path: 'gpt3-react',
    orientation: '|',
    deps: [
      "react ^18.2.0",
      "react-dom ^18.2.0",
      "react-icons ^4.6.0",
      "gh-pages ^4.0.0"
    ],
  },
  {
    title: 'Vue Weather Forecast App',
    name: 'weather-app',
    stack: ['HTML' ,'CSS', 'JS', 'Vue'],
    tags: ['UI', 'FE', 'API'],
    desc: 'The Vue.js Weather App is a simple web application that allows users to view weather information for different cities. It provides real-time weather data, including minimum and maximum temperatures, for selected locations.\n\nFeatures:\n+ View weather data for multiple cities.\n+ Sort the list of cities by name, minimum temperature, or maximum temperature.\n+ Add new cities to the list.\n+ Remove cities from the list.\n+ Responsive design for both landscape and portrait orientations.\n+ User-friendly interface.\n\n\'nuff said. Just app with Vue.js - Progressive JavaScript Framework!',
    path: 'weather-app',
    orientation: '|',
    deps: [
      "core-js ^3.8.3",
      "vue ^3.2.13"
    ],
  },
  {
    title: 'Vue Grocery Store with Cart',
    name: 'food-cart-vue',
    stack: ['HTML' ,'CSS', 'JS', 'Vue'],
    tags: ['UI', 'FE', 'API'],
    desc: 'This is a Vue.js application for an online food ordering system. It allows users to browse products, add them to the cart, and place orders. The app provides a user-friendly interface for selecting and ordering food items.\nFeatures:\n+ Browse a list of available food products.\n+ Add products to the shopping cart.\n+ View the shopping cart and manage the items.\n+ Place an order for the selected items.\n+ Responsive design for a seamless experience on different devices.',
    path: 'food-cart-vue',
    orientation: '|',
    deps: [
      "core-js ^3.8.3",
      "vue ^3.2.13",
      "vue-router ^4.0.3",
      "@babel/core ^7.12.16",
      "@vue/cli-service ~5.0.0",
      "eslint ^7.32.0",
      "gh-pages ^4.0.0",
      "sass ^1.55.0",
    ],
  },
  {
    title: 'React Live-coding - Cars App',
    name: 'react_live_coding_cars_table_task',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'API'],
    desc: 'Here is just hour live-coding result displayed.\nThe task was to display table of cars with working lazy search and filtering by color. It\'s really simple!..',
    path: 'react_live_coding_cars_table_task',
    orientation: '|',
    deps: [
      "bulma ^0.9.3",
      "react ^17.0.2",
      "react-dom ^17.0.2",
      "react-scripts ^4.0.3"
    ],
    white_bg: true,
  },
  {
    title: 'Site with sticky header',
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
    desc: 'JSON List is a simple web application that fetches JSON data from the https://jsonplaceholder.typicode.com/ API and displays it in a structured list format. This project demonstrates how to fetch and display JSON data using HTML, CSS, and JavaScript.',
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
    desc: 'Project is inspired by idea of creating versatile calendar, that would calculate and display correct lunar day phase.',
    path: 'lunar-solar-time',
    orientation: '|',
    deps: [
      "nodemon ^2.0.22",
      "sass ^1.62.1",
      "astronomia ^4.1.1",
      "julian ^0.2.0"
    ],
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
    title: 'Watch Widget SCSS Demo',
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
    desc: 'The AIB project is a web-based application showcasing various HTML, CSS, and JavaScript techniques to create an interactive and visually appealing web experience. This README provides an overview of the project\'s key features and highlights unique tags, attributes, properties, and techniques used in the code.\n\nAll had been begun from strict desire to implement shiny sing logo animated, moreover for development purposes area react on click, - square change its\'s color to white after first click and to green after second one click on it.',
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
    desc: 'The AIB project is a web-based application showcasing various HTML, CSS, and JavaScript techniques to create an interactive and visually appealing web experience. This README provides an overview of the project\'s key features and highlights unique tags, attributes, properties, and techniques used in the code.\n\nAll had been begun from strict desire to implement shiny sing logo animated, moreover for development purposes area react on click, - square change its\'s color to white after first click and to green after second one click on it.',
    path: 'AIB',
    orientation: '-',
    deps: [],
  },
  {
    title: 'React MUI: Table | Chart | List',
    name: 'backendless-tabs-jsx',
    stack: ['JS', 'React', 'React-router'],
    tags: ['UI', 'FE', 'API'],
    desc: 'This project serves as a template for a React-based application that implements tabs without backend integration. It showcases various components, including charts, lists, and tables, along with a navigation layout and a router component. The project utilizes modern web development tools and libraries such as React, React Router, Material-UI, and more.\n\n I\'d say - the most interesting for me during implementing this stuff was to force hash-router to act as common brouser-router without hash prepender #',
    path: 'backendless-tabs-jsx',
    orientation: '-',
    deps: [
      "@emotion/react ^11.11.1",
      "@emotion/styled ^11.11.0",
      "@mui/icons-material ^5.14.15",
      "@mui/material ^5.14.15",
      "@mui/styled-engine ^5.14.15",
      "@mui/styled-engine-sc ^6.0.0-alpha.3",
      "@mui/system ^5.4.1",
      "@mui/x-charts ^6.0.0-alpha.17",
      "prop-types ^15.8.1",
      "react ^18.2.0",
      "react-dom ^18.2.0",
      "react-router-dom ^6.17.0",
      "styled-components ^6.1.0"
    ],
  },
  {
    title: 'Vue Fetch Random User',
    name: 'random-user-vue',
    stack: ['HTML' ,'CSS', 'JS', 'Vue'],
    tags: ['UI', 'FE', 'API'],
    desc: 'Simple Vue app that demonstrate easy way to fetch and display user data, utilizing placeholder API: https://randomuser.me/api.\nVue.js is imported via CDN: https://unpkg.com/vue@3/dist/vue.global.js',
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
    desc: 'Here you\'ll find tasks related to Git, HTML/CSS, JavaScript, and more. Each task is organized in its own subfolder with detailed descriptions and implementations.\n\nThe most interesting block there is dedicated to JavaScript/TypeScript. Programming is really some kind of a passion...',
    path: 'devit-team',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Web Development Essentials',
    name: 'abz-agency-test-assignment',
    stack: ['CSS', 'JS', 'React', 'MUI'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'abz-agency-test-assignment',
    orientation: '-',
    deps: [],
  },
  {
    title: 'Nice Gadgets Store - Full-stack App',
    name: 'product-catalog',
    stack: ['CSS', 'JS', 'React', 'NodeJS'],
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
    title: 'React Task-Manager App',
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
    stack: ['CSS', 'JS', 'React', 'React-router'],
    tags: ['UI', 'FE', 'API'],
    desc: 'This is a React.js application that displays a table of people and allows users to browse details of each person. It uses React Router for navigation and displays information in a user-friendly manner.\n\n There are real peaple table displayed with interesting heritage relationships, which are highlighted interactively.',
    path: 'react_people-table-basics/#/people',
    orientation: '-',
    deps: [
      "@fortawesome/fontawesome-free ^6.1.2",
      "bulma ^0.9.4",
      "classnames ^2.3.1",
      "react ^18.2.0",
      "react-dom ^18.2.0",
      "react-router-dom ^6.3.0",
      "react-scripts 4.0.3"
    ],
  },
  {
    title: 'Vue Travel App with Vue-router',
    name: 'travel-app-vue',
    stack: ['CSS', 'JS', 'Vue', 'Vue-router'],
    tags: ['UI', 'FE', 'API'],
    desc: '',
    path: 'travel-app-vue',
    orientation: '-',
    deps: [],
    white_bg: true,
  },
  {
    title: 'Nuxt Theme Toggler Example',
    name: 'nuxt-demo',
    stack: ['CSS', 'JS', 'Vue', 'Nuxt'],
    tags: ['UI', 'FE', 'SSR', 'API'],
    desc: 'It is a demo of simplicity and power of Vue-Nuxt ecosystem toolkit, their intuitively clearness and DX wich stands for Developer eXperience. It ain\'t obvious and common practicized to deploy (publish) such a project ot gh-pages, but I\'ve done instanceof, and am proud of myself due to this fact. :)',
    path: 'nuxt-demo',
    orientation: '-',
    deps: [
      "@nuxt/postcss8 ^1.1.3",
      "@nuxtjs/color-mode ^3.2.0",
      "@nuxtjs/tailwindcss ^6.4.1",
      "autoprefixer ^10.4.13",
      "gh-pages ^5.0.0",
      "nuxt ^3.2.2",
      "postcss ^8.4.21",
      "tailwindcss ^3.2.7",
      "tailwindcss-dark-mode ^1.1.7",
      "@headlessui/vue ^1.7.10",
      "@heroicons/vue ^2.0.16"
    ],
  },
  {
    title: 'Movies Site - Add Movie Form',
    name: 'react_movies-list-add-form',
    stack: ['HTML' ,'CSS', 'JS', 'React'],
    tags: ['UI', 'FE', 'API'],
    desc: 'Welcome to the React Movies List & Add Form project! This is a simple web application built with React that allows you to manage a list of movies. You can view the list of movies, add new movies, and enjoy an intuitive user interface.\nForm gets dynamically validated with react stateful functional components. Everybody loves movies, and I\'m not an exceptional person in this case.',
    path: 'react_movies-list-add-form',
    orientation: '-',
    deps: [
      "@cypress/react ^5.12.4",
      "bulma ^0.9.3",
      "classnames ^2.3.1",
      "postcss ^8.4.12",
      "react ^17.0.2",
      "react-dom ^17.0.2",
      "react-scripts ^4.0.3"
    ],
  },
  {
    title: 'Custom Shaped Download Page',
    name: 'my-server-io',
    stack: ['HTML' ,'CSS', 'JS', '3D'],
    tags: ['UI', 'FE', 'API'],
    desc: 'The myserver.io project is a web application designed to provide a user-friendly interface for downloading and accessing client data. This README offers an overview of the project and highlights its key features.\n\nProject shows use-cases of different CSS modern features e.g. custom shaped areas look as been cutted out from some paper-sheet. Just CSS clip-path.. :)',
    path: 'my-server-io',
    orientation: '-',
    deps: [],
  },

  {
    title: 'Three.js 3D Cube Demo',
    name: 'graphics-js',
    stack: ['HTML' ,'CSS', 'JS', '3D'],
    tags: ['UI', 'FE', 'API'],
    desc: 'Pretty fine Three.js demo, where 3D cube can be moved with arrow keyboard buttons. The Three.js library is imported via CDN: https://threejs.org/build/three.js. So - it\'s simple and nice at once example, that technologies are very convinient to use novadays.',
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