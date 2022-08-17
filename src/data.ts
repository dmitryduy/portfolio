import { icons } from "./icons";

export interface i18n {
  en: string,
  ru: string
}

export enum SkillTags {
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
    title: i18n,
  }[],
  skills: {
    id: number
    title: string
    icon: keyof typeof icons
    description: i18n
    type: SkillTags
    position: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8
    color: string
  }[],
} = {
  headerTitle: {
    ru: 'frontend developer',
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
        en: 'Porten Site',
        ru: 'Сайт Porten'
      },
      subtitle: {
        en: 'Site',
        ru: 'Верстка'
      },
      description: {
        en: 'Layout of a simple website without adaptive with flexbox and scss preprocessor.I learned how to use the preprocessor',
        ru: 'Верстка простого сайта без адаптива на флексах и препроцессоре scss. На этой верстке учился пользоваться препроцессором'
      },
      skills: ['HTML', 'Flexbox', 'SCSS'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/porten-0.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/porten-1.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/porten-2.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/porten-3.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/porten-4.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/html_code/tree/main/portain',
      link: 'https://dmitryduy.github.io/html_code/portain/index.html'
    },
    {
      id: 2,
      title: {
        en: 'Junno site',
        ru: 'Сайт Junno'
      },
      subtitle: {
        en: 'Application, e-commerce',
        ru: 'Приложение, e-commerce'
      },
      description: {
        en: 'The first full-fledged application on the react-redux stack. Styles are written in Styled-Components. Added a list of products, there is a possibility' +
          'mark your favorite products, add to the wishlist, as well as delete from it',
        ru: 'Первое полноценное приложение на стеке реакте-редакс. стили написаны на Styled-Components. Добавлен список товаров, есть возможность' +
          ' отмечать понравившиеся товары, добавлять в список желаний, а также удалять из него.'
      },
      skills: ['React', 'Redux', 'Styled-Components', 'Redux-thunk'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/junno-0.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/junno-1.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/junno-2.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/junno-3.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/junno',
      link: 'https://dmitryduy.github.io/junno/'
    },
    {
      id: 3,
      title: {
        en: 'Healthy food Site',
        ru: 'Сайт Healthy food'
      },
      subtitle: {
        en: 'Site',
        ru: 'Верстка'
      },
      description: {
        en: 'A full-fledged one-page website with an adaptive design. Implemented its own slider, applied BEM methodology for naming classes. Styles are written on the scss preprocessor. Semantic layout. The project is assembled with gulp',
        ru: 'Полноценный одностраничный сайт с адаптивным дизайном. Реализован свой слайдер, применена методология БЕМ для наименования классов. Стили написаны на препроцессоре scss. Семантическая верстка. Проект собирается при помощи галпа'
      },
      skills: ['HTML', 'SCSS', 'JS', 'Gulp', 'Flexbox', 'Grid'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/healthy-0.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/healthy-1.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/healthy-2.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/healthy-3.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/healthyFood',
      link: 'https://dmitryduy.github.io/healthyFood/app/'
    },
    {
      id: 4,
      title: {
        en: 'Dodo clone',
        ru: 'Клон доо пицца'
      },
      subtitle: {
        en: 'Application',
        ru: 'Приложение'
      },
      description: {
        en: 'Dodo pizza website written in typescript and react. It is possible to choose the city from which you want to order delivery. A list of pizzas with the ability to collect them is available.',
        ru: 'Сайт додопиццы, написанный на typescript и реакт. Есть возможность выбрать город, с которого хотите заказать, доставку. Доступен список пицц с возможностю собирать их.'
      },
      skills: ['Typescript', 'React', 'redux', 'Styled-Components', 'Flexbox'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/dodo-0.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/dodo-1.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/dodo-2.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/dodo',
      link: 'https://dmitryduy.github.io/dodo/#'
    },
    {
      id: 5,
      title: {
        en: 'Clock',
        ru: 'Часы'
      },
      subtitle: {
        en: 'Decoration',
        ru: 'Декорации'
      },
      description: {
        en: 'Custom watches written in pure js',
        ru: 'Кастомные часы, написанные на чистом js'
      },
      skills: ['Javascript', 'HTML', 'CSS'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/clock-0.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/clock-1.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/clocks',
      link: 'https://dmitryduy.github.io/clocks/'
    },
    {
      id: 6,
      title: {
        en: 'Tinkoff Stocks',
        ru: 'Биржа акций Тинькофф'
      },
      subtitle: {
        en: 'Application',
        ru: 'Приложение'
      },
      description: {
        en: 'The stock exchange application written on the react. The user can buy and put up for sale shares. The interaction of purchase and sale is implemented on sockets. Test users: admin, user.',
        ru: 'Приложение биржи акция, написанное на реакте. Пользователь может покупать и выставлять на продажу акции. Взаимодейтсвие купли-продажи реализовано на сокетах. Тестовые пользователи: admin, user.'
      },
      skills: ['React', 'Typescript', 'Redux', 'Socket', 'express', 'Styled-components'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/investings-0.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/investings-1.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/investings-2.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/investings-3.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/investings-4.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/investing',
      link: 'https://dmitryduy.github.io/investing/'
    },
    {
      id: 7,
      title: {
        en: 'Tetris',
        ru: 'Тетрис'
      },
      subtitle: {
        en: 'Game',
        ru: 'Игра'
      },
      description: {
        en: 'A Tetris game written in pure javascript with canvas. Control of the arrows on the keyboard.',
        ru: 'Игра тетрис, написанная на чистом javascript с канвасом. Управление стрелочками на клавиатуре.'
      },
      skills: ['Javascript', 'Canvas', 'Css'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/tetris-0.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/tetris',
      link: 'https://dmitryduy.github.io/tetris/'
    },
    {
      id: 8,
      title: {
        en: 'Cases',
        ru: 'Кейсы'
      },
      subtitle: {
        en: 'Application',
        ru: 'Приложение'
      },
      description: {
        en: 'An application of cases written in react. The user can twist cases and knock out weapons. He can also put them in the contract to get more expensive guns',
        ru: 'Приложение кейсов, написанное на реакте. Пользователь может крутить кейсы и выбивать оружия. Также он может их класть в контракте, для получения более дорогих орудий'
      },
      skills: ['React', 'Redux', 'Styled-Components'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/cases-0.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/cases-1.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/cases-2.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/cases-3.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/cases-4.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/cases-5.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/cases-6.png?raw=true',
      ],
      github: 'https://github.com/dmitryduy/cases',
      link: 'https://dmitryduy.github.io/cases/'
    },
    {
      id: 9,
      title: {
        en: 'Telegram clone',
        ru: 'Клон телеграма'
      },
      subtitle: {
        en: 'Application',
        ru: 'Приложение'
      },
      description: {
        en: 'WIP. A clone of the messenger written in react+typescript. The backend is written in Nestjs. It is possible to search for users, correspond with them. Customize the appearance of the application.',
        ru: 'На данный момент в разработки. Клон мессенджера, написанный на react+typescript. Бекенд написан на Nestjs. Возможно искать пользователей, переписываться с ними. Кастомизировать внешний вид приложения.'
      },
      skills: ['React', 'Redux-toolkit', 'Styled-Components', 'Typescript', 'Socket', 'Nestjs', 'Storybook'],
      images: [
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/telegram-1.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/telegram-2.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/telegram-3.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/telegram-4.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/telegram-5.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/telegram-6.png?raw=true',
        'https://github.com/dmitryduy/portfolio/blob/master/src/images/telegram-7.png?raw=true'
      ],
      github: 'https://github.com/dmitryduy/telegram'
    },

  ],
  skills: [
    {
      id: 0,
      type: SkillTags.FRONTEND,
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
      type: SkillTags.FRONTEND,
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
      type: SkillTags.FRONTEND,
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
      type: SkillTags.FRONTEND,
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
      type: SkillTags.FRONTEND,
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
      type: SkillTags.FRONTEND,
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
      type: SkillTags.FRONTEND,
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
      type: SkillTags.FRONTEND,
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
      type: SkillTags.BACKEND,
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
      type: SkillTags.BACKEND,
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
      type: SkillTags.BACKEND,
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
      type: SkillTags.OTHER,
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
      type: SkillTags.OTHER,
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
      type: SkillTags.OTHER,
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
      type: SkillTags.OTHER,
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
      type: SkillTags.OTHER,
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
      type: SkillTags.NOT_WEB,
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
      type: SkillTags.NOT_WEB,
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
      type: SkillTags.NOT_WEB,
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
  github: string
  link?: string
}


export enum Page {
  HEADER,
  EXPERIENCE,
  SKILLS,
  PORTFOLIO
}

export const TOUCH_CONTAINER_PADDING = 10;

export const PHONE_BREAKPOINT = 700;