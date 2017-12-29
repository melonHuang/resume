const resume = {
  name: 'Wendy Huang',
  slogan: 'I want to build tools for humans',
  email: 'melonh0327@gmail.com',
  website: 'https://melonhuang.github.io',
  phonePrefix: '(86)',
  phone: '18588640327',
  summary: 'I’m a <strong>Senior Front-End Engineer</strong> with <strong>4 years working experience</strong>. Crafting interesting and useful tools is my jam. In the recent past, I have <strong>given talks</strong> at development conferences, <strong>started several open source projects</strong>, and actively participated in the <strong>translation of technical books</strong>.',
  works: [
    {
      company: 'Qihoo 360 Technology Co. Lt',
      position: 'Senior Front-End Developer - <strong>Annual Excellent Employee of department</strong>',
      duration: '2013 - 2017',
      projects: [
        {
          name: 'An online presentation editor - Shengxiang',
          website: 'https://ppt.baomitu.com/editor',
          duration: '2016 - 2017',
          details: [
            '<strong>Led a team</strong> of four Front-End developers, enforced coding standards, kept the group engaged and passionate.',
            '<strong>Designed predictable, scalable architecture</strong> with Vue&Vuex (React&Redux alike Javascript libraries).',
            'Automated workflow for development, testing, and production environment with Gulp, Webpack, PostCSS, etc.',
            'Designed database tables and implemented Back-End logics and APIs using ThinkJS (a Back-End MVC Framework).',
            'Designed innovative features and transformed them into coordinated ART and IT deliverables.',
          ]
        },
        {
          name: 'An interactive mobile storytelling platform - Baomitu',
          duration: '2015 - 2016',
          website: 'https://www.baomitu.com/',
          details: [
            'Built <strong>componentized architecture</strong> by designing Nova.js ( a web component framework like Polymer).'
          ]
        },
        {
          name: 'Mobile Guard Department',
          duration: '2014 - 2015',
          details: [
            'Developed official websites, mobile-side pages for special events and cross-device webviews.',
            'Made <strong>quick response and decisions</strong> to several independent and <strong>concurrent</strong> requirements every day, while making effective plans and guaranteeing high quality deliverables.',
            'Delivered <strong>high performance</strong> and compatible <strong>cross-device</strong> web pages.',
            'Designed NovaUI (an open source <strong>mobile-side</strong> component gallery) to share common mobile-side components with the other engineers.',
          ]
        },
        {
          name: 'CRM System',
          duration: '2013 - 2014',
          details: [
            'Wrote consistent, concise, and well documented codes to build pages full of form manipulations and charts.',
            'Abstracted and designed common plugins for reusability.',
          ]
        },
      ]
    }
  ],
  projects: [
    {
      name: 'Nova.js',
      website: 'http://melonhuang.github.io/nova/',
      duration: '2015 - 2016',
      intro: 'A production-ready Web Component Framework, only 12KB after gziped, providing an easy way to define custom element with data binding, CSS Scoping, etc.'
    },
    {
      name: 'NovaUI',
      website: 'http://75team.github.io/novaUI/',
      duration: '2013 - 2016',
      intro: 'A mobile side component gallery with high animation performance, flexible APIs and clear documents.'
    },
    {
      name: 'AnimationGenerator',
      website: 'https://chrome.google.com/webstore/detail/animation-generator/kionilekanaambbbnjghihllokicnnlj?utm_source=chrome-ntp-ico',
      duration: '2014 - 2014',
      intro: 'A Chrome Devtools extension which can help generate animation codes for web pages quickly.',
    },
  ],
  speaking: [
    {
      conference: 'The 2nd CSSConf of China',
      intro: 'High Performance Animation',
      duration: '2015'
    },
    {
      conference: 'Other talks',
      intro: 'How Browser Renders, <br>Mobile-side Development, <br>Web Component, etc',
      website: 'https://melonhuang.github.io/sharing/',
      duration: '2013 - now'
    }
  ],
  publications: [
    {
        name: 'Large Scale Javascript',
        intro: 'Translated Chapters 8 - 19 from English to Madarine',
        duration: '2016'
    },
    {
        name: 'The Mobile Handbook',
        intro: 'Translated Chapters 3 - 4 from English to Mandarine',
        duration: '2015'
    }
  ],
  education: [
    {
        name: 'Sun Yat-sen University',
        intro: 'Software Engineering BSc',
        duration: '2009 - 2013'
    }
  ],
  skills: [
    {
      name: 'Modern Web Stack',
      list: [
        'HTML5, CSS3, Javascript, DOM scripting',
        'Mobile-Side development, responsive web design',
        'Node.js and MVC Back-End Framework',
        'Network knowleges including HTTP protol, TCP handshakes, etc',
        'Fullstack, able to design database tables, implement Back-End logics and design UI',
        'Good documenting habit',
      ]
    },
    {
      name: 'Rich Experience in',
      list: [
        'Performance Optimization',
        'Large-scale web applications, designing scalable architecture and workflow',
        'Javascript Application Framework - Vue.js',
        'Cross-browser and cross-device development, handling compatibility issues',
      ]
    },
    {
      name: "Tools",
      list: [
        'npm, gulp, webpack, postCSS, babel, thinkjs, eslint, mocha.js, chai.js, etc',
        'vim, git/svn, chrome devtools, photoshop, zsh, etc',
        'Vue.js, Polymer, jQuery, Zepto, etc'
      ]
    }
  ]
}

export default resume
