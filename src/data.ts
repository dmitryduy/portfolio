import { icons } from "./icons";

export interface i18n {
  en: string,
  ru: string
}

export enum SkillType {
  FRONTEND,
  BACKEND,
  OTHER,
  NOT_WEB
}

export const data: {
  headerTitle: i18n
  headerSubtitle: i18n
  portfolio: IProject[]
  experience: {
    id: number,
    date: i18n,
    description: i18n
    title: i18n
  }[],
  skills: {
    id: number
    title: string
    icon: keyof typeof icons
    description: i18n
    type: SkillType
    position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    color: string
  }[],
} = {
  headerTitle: {
    ru: 'фронденд разработчик',
    en: 'frontend developer.'
  },
  headerSubtitle: {
    ru: 'Я Джош вашингтон',
    en: 'I\'m djothc vasitngot'
  },

  experience: [
    {
      id: 1,
      date: {
        ru: 'Сентябрь 2021 - Ноябрь 2021',
        en: 'September 2021 - November 2021'
      },
      title: {
        ru: 'Разработчик интерфесков',
        en: 'Enterphae fronedner'
      },
      description: {
        ru: 'Здесь я чем то занался, знаю, что это полезно, но все же',
        en: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als'
      }
    },
    {
      id: 2,
      date: {
        ru: 'Декабрь 2021 - Февраль 2022',
        en: 'December 2021 - February 2022'
      },
      title: {
        ru: 'Разработчик интерфесков',
        en: 'Enterphae fronedner'
      },
      description: {
        ru: 'Здесь я чем то занался, знаю, что это полезно, но все же',
        en: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als'
      }
    },
    {
      id: 3,
      date: {
        ru: 'Декабрь 2021 - Февраль 2022',
        en: 'December 2021 - February 2022'
      },
      title: {
        ru: 'Разработчик интерфесков',
        en: 'Enterphae fronedner'
      },
      description: {
        ru: 'Здесь я чем то занался, знаю, что это полезно, но все жеЗдесь я чем то занался, знаю, что это полезно, но все жеЗдесь я чеЗдесь я чем то занался, знаю, что это полезно, но все жеЗдесь я чем то занался, знаю, что это полезно, но все жеЗдесь я чем то занался, знаю, что это полезно, но все жеЗдесь я чем то занался, знаю, что это полезно, но все жеЗдесь я чем то занался, знаю, что это полезно, но все жем то занался, знаю, что это полезно, но все жеЗдесь я чем то занался, знаю, что это полезно, но все же',
        en: 'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but als'
      }
    }
  ],

  portfolio: [
    {
      id: 1,
      title: {
        en: 'Telegram clone',
        ru: 'Клон телеграма'
      },
      subtitle: {
        en: 'Application',
        ru: 'Приложение'
      },
      description: {
        en: 'This is a telegram.Thanks for watching',
        ru: 'Это телеграм. Спасибо за просмотр'
      },
      skills: ['HTML', 'CSS', 'React', 'Redux', 'Express', 'Styled-Components'],
      images: [
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png'
      ]
    },
    {
      id: 2,
      title: {
        en: 'Telegram clone',
        ru: 'Клон телеграма'
      },
      subtitle: {
        en: 'Application',
        ru: 'Приложение'
      },
      description: {
        en: 'This is a telegram.Thanks for watching',
        ru: 'Это телеграм. Спасибо за просмотр'
      },
      skills: ['HTML', 'CSS', 'React', 'Redux', 'Express', 'Styled-Components'],
      images: [
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png'
      ]
    },
    {
      id: 3,
      title: {
        en: 'Telegram clone',
        ru: 'Клон телеграма'
      },
      subtitle: {
        en: 'Application',
        ru: 'Приложение'
      },
      description: {
        en: 'This is a telegram.Thanks for watching',
        ru: 'Это телеграм. Спасибо за просмотр'
      },
      skills: ['HTML', 'CSS', 'React', 'Redux', 'Express', 'Styled-Components'],
      images: [
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-7.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-1.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-2.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-3.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-4.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-5.png',
        'https://raw.githubusercontent.com/dmitryduy/portfolio/master/src/images/telegram-6.png',

      ]
    }
  ],
  skills: [
    {
      id: 0,
      type: SkillType.FRONTEND,
      position: 1,
      title: 'JavaScript',
      icon: 'javaScript',
      color: '#333',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 1,
      type: SkillType.FRONTEND,
      position: 6,
      title: 'React',
      icon: 'react',
      color: '#5ed3f3',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 2,
      type: SkillType.FRONTEND,
      position: 2,
      title: 'CSS',
      icon: 'css',
      color: '#2194f0',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 3,
      type: SkillType.FRONTEND,
      position: 7,
      title: 'Styled-Components',
      icon: 'styledComponents',
      color: '#e4976d',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 4,
      type: SkillType.FRONTEND,
      position: 3,
      title: 'HTML',
      icon: 'html',
      color: '#dd4b25',
      description: {
        ru: 'Какой-то скилл, о котором я ничего не знаю, поэтому буду просто молчат. Спасибо за внимание',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 5,
      type: SkillType.FRONTEND,
      position: 4,
      title: 'Sass',
      icon: 'sass',
      color: '#c76395',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 6,
      type: SkillType.FRONTEND,
      position: 8,
      title: 'Redux',
      icon: 'redux',
      color: '#7248b6',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 7,
      type: SkillType.FRONTEND,
      position: 5,
      title: 'TypeScript',
      icon: 'typeScript',
      color: '#2f74c0',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 8,
      position: 1,
      type: SkillType.BACKEND,
      title: 'Express.js',
      icon: 'express',
      color: '#7e7e7e',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 9,
      type: SkillType.BACKEND,
      position: 7,
      title: 'Nest.js',
      icon: 'nestjs',
      color: '#d9224c',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 10,
      position: 5,
      type: SkillType.BACKEND,
      title: 'Node.js',
      icon: 'nodejs',
      color: '#6da35e',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 11,
      position: 1,
      type: SkillType.OTHER,
      title: 'Git',
      icon: 'git',
      color: '#e84e31',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 12,
      position: 3,
      type: SkillType.OTHER,
      title: 'Angular',
      icon: 'angular',
      color: '#d6002f',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 13,
      position: 5,
      type: SkillType.OTHER,
      title: 'JQuery',
      icon: 'jquery',
      color: '#1163a4',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 14,
      position: 6,
      type: SkillType.OTHER,
      title: 'npm',
      icon: 'npm',
      color: '#c53635',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 15,
      position: 8,
      type: SkillType.OTHER,
      title: 'BEM',
      icon: 'bem',
      color: '#333',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 16,
      position: 1,
      type: SkillType.NOT_WEB,
      title: 'Python',
      icon: 'python',
      color: '#686868',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 17,
      position: 5,
      type: SkillType.NOT_WEB,
      title: 'C++',
      icon: 'cpp',
      color: '#6195cb',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
    {
      id: 18,
      position: 7,
      type: SkillType.NOT_WEB,
      title: 'kotlin',
      icon: 'kotlin',
      color: '#e87c2b',
      description: {
        ru: 'Какой-то скилл',
        en: 'This is paragrahpa sometshi else'
      }
    },
  ]
}


export interface IProject {
  id: number
  title: {
    en: string
    ru: string
  }
  subtitle: {
    en: string
    ru: string
  }
  description: {
    en: string
    ru: string
  }
  skills: string[]
  images: string[]
}


export enum Page {
  HEADER,
  EXPERIENCE,
  SKILLS,
  PORTFOLIO
}

export const TOUCH_CONTAINER_PADDING = 10;

export const PHONE_BREAKPOINT = 700;