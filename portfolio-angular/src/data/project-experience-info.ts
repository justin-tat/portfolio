export const EXPERIENCE_LINKS = [
  {
    title: 'Positive Charge',
    imageUrl : [
      [
        '/assets/experience-gifs/positive_charge/login_find_charger.gif',
        '/assets/experience-gifs/positive_charge/poi.gif',
      ],
      [
        '/assets/experience-gifs/positive_charge/add_poi.gif',
        '/assets/experience-gifs/positive_charge/location_details.gif',
      ]
      // [
      //   '/assets/experience-gifs/positive_charge/add_poi.gif',
      //   '/assets/experience-gifs/positive_charge/location_details.gif'
      // ]
    ],
    description : 'Dynamically renders direction from where you are to where you want to go. Part of the Positive Charge application to reclaim lost time spent charging your EV. Simply run a local search of your location and have family-friendly locations populate your map and choose your destination.',
    linkToGithub : 'https://github.com/justin-tat/PositiveCharge',
    technologies: [
      ['React', 'Babel', 'Webpack', 'Express'], 
      ['Material-UI', 'AWS', 'Jenkins' ]
    ]
  },
  {
    title: 'Twodoku',
    imageUrl : [
      [
        '/assets/experience-gifs/twodoku/sign_up_valid.gif',
        '/assets/experience-gifs/twodoku/login_valid.gif'
      ],
      [
        '/assets/experience-gifs/twodoku/start_game.gif',
        '/assets/experience-gifs/twodoku/submit_game.gif'
      ]
    ],
    description : 'Competitive two-player Sudoku application. Log into your account and connect with other Sudoku players of similar rating where you will be able to play competitive games of Sudoku with your rating rising and falling according to who was able to finish first!',
    linkToGithub : 'https://github.com/justin-tat/2P-Sudoku',
    technologies: [
      ['React-Native', 'Babel', 'Webpack', 'WebSocket'], 
      ['Springboot']
    ]
  },
  {
    title: 'Atelier',
    imageUrl : [
      [
        '/assets/experience-gifs/atelier/change_style.gif',
        '/assets/experience-gifs/atelier/image_change.gif'
      ],
      [
        '/assets/experience-gifs/atelier/view_change.gif'
      ]
    ],
    description : 'Full stack e-commerce product display. Displays a product, divided up by style with a set of images corresponding to each style. Flip through the different images of each style by using the arrow keys on screen, change the style displayed by clicking on the style and even zoom in on the image by clicking on the display component, panning across the display component to see different zoomed in portions. ',
    linkToGithub : 'https://github.com/justin-tat/upgraded-umbrella',
    technologies: [ 
      ['React', 'Babel', 'Webpack', 'Express'], 
      ['NGINX', 'Redis', 'PostgreSQL', 'Jest'], 
      ['Loader-IO', 'K6', 'AWS']
    ]
  }
  
];