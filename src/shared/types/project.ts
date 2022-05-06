export interface ProjectTypes {
  coronavirus: Project;
  games: Project;
  post: Project;
  business: Project;
  game: Project;
  todo: Project;
  competition: Project;
  contact: Project;
  pizza: Project;
  SqrLearning: Project;
  qrcode: Project;
  "telegram-bot": Project;
  portfolio: Project;
  join: Project;
}

interface Project {
  name: string;
  description: {
    short_description: string;
    long_description: string;
  };
  github: {
    frontend: null | string;
    backend: null | string;
  };
  technology: {
    frontend: string;
    backend: null | string;
  };
  main_picture: string;
  pictures: Array<string>;
  is_backend: boolean;
  is_frontend: boolean;
  is_lost: boolean;
  is_developed: boolean;
  work_level: number;
  filter: string;
  link_to_the_site: string;
}
