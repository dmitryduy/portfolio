export interface i18n {
  en: string,
  ru: string
}

export const data: {
  headerTitle: i18n
  headerSubtitle: i18n
  portfolio: IProject[]
  experience: {
    id: number,
    date: i18n,
    description: i18n
  }[]
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
      description: {
        ru: 'Здесь я чем то занался, знаю, что это полезно, но все же',
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
