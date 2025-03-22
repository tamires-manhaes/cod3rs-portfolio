import Technology from '../technology/Technology'

export enum Type {
  GAME = 'game',
  WEB = 'web',
  MOBILE = 'mobile',
}

export enum Level {
  INICIANTE = 1,
  INTERMEDIARIO = 2,
  AVANCADO = 3,
  EXPERT = 4,
}

export interface Project {
  id: number
  name: string
  description: string
  imgUrl: string[]
  level: Level
  type: Type
  principal: boolean
  repository: string
  technologies: Technology[]
}
