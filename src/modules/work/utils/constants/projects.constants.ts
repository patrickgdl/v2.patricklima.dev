import { PATHS } from '@common/utils/constants/paths.constants';
import { ProjectIdentifiers } from '@work/utils/types/projects';

export interface ProjectMeta {
  tags: string[];
  project: string;
  client: string;
  images: [string, string];
  description: string;
  path: `${typeof PATHS.work}/${string}`;
}

const sharedProjectData: Record<
  ProjectIdentifiers,
  Pick<ProjectMeta, 'client' | 'project' | 'path' | 'images'>
> = {
  'portfolio-v1': {
    client: 'Personal',
    path: PATHS.portfolioV1,
    project: 'Portfolio V1',
    images: [
      '/images/work/portfolio-v1/portfolio-v1-desktop-wide.png',
      '/images/work/portfolio-v1/portfolio-v1-phone-narrow.png',
    ],
  },
  madeiramadeira: {
    client: 'MadeiraMadeira',
    path: PATHS.madeiramadeira,
    project: 'MadeiraMadeira to Next.js',
    images: [
      '/images/work/madeiramadeira/madeiramadeira-laptop-wide.png',
      '/images/work/madeiramadeira/madeiramadeira-logo-narrow.png',
    ],
  },
  picpay: {
    project: 'Picpay Legal Person Panel',
    client: 'PicPay',
    path: PATHS.picpay,
    images: [
      '/images/work/picpay/picpay-laptop-wide.png',
      '/images/work/picpay/picpay-logo-narrow.png',
    ],
  },
};

export const PROJECT_METADATA: Record<ProjectIdentifiers, ProjectMeta> = {
  madeiramadeira: {
    ...sharedProjectData.madeiramadeira,
    description:
      'Active participation in the migration process from legacy e-commerce (PHP) to a new stack (React/NextJS).',
    tags: ['Development'],
  },
  picpay: {
    ...sharedProjectData.picpay,
    description:
      'Evolution of PJ (legal person) Account with a web seller panel dashboard.',
    tags: ['Development'],
  },
  'portfolio-v1': {
    ...sharedProjectData['portfolio-v1'],
    description:
      "Patrick's previous portfolio of work. Built with Angular, Scully and TypeScript.",
    tags: ['Development', 'Design'],
  },
};

export type ProjectPageData = Pick<
  ProjectMeta,
  'client' | 'project' | 'path' | 'images'
> & {
  details: string;
  tech: string[];
  contributions: string[];
  metaImage?: string;
  dates: string;
  url?: string;
};
export const PROJECT_PAGE_DATA: Record<ProjectIdentifiers, ProjectPageData> = {
  madeiramadeira: {
    ...sharedProjectData.madeiramadeira,
    contributions: ['Development', 'Design Systems', 'Architecture', 'Tooling'],
    metaImage: '/images/work/madeiramadeira/madeiramadeira-laptop-wide.png',
    details: `Monitoring and processing best practices on the web acting as Technical Lead.
      Active participation in the migration process from legacy e-commerce (PHP) to a new stack (React/NextJS),
      in architectural decisions, in the development of the Design System and in the use of a serverless CMS.`,
    dates: '12/2020 - 10/2021',
    tech: [
      'React',
      'Next.js',
      'TypeScript',
      'Storybook',
      'Stitches',
      'DatoCMS',
      'Testing Library',
    ],
    url: PATHS.madeiramadeiraURL,
  },
  picpay: {
    ...sharedProjectData.picpay,
    contributions: ['Development', 'Design Systems', 'Architecture', 'Tooling'],
    metaImage: '/images/work/picpay/picpay-laptop-wide.png',
    details: `Responsible for ensuring that the PJ (legal person) Account complies 
      with regulatory bodies and for positioning it in the market, by increasing its 
      range of products and services by developing a web seller panel dashboard for Picpay Empresas.`,
    dates: '10/2021 - current',
    tech: [
      'Angular',
      'TypeScript',
      'Akita',
      'RxJs',
      'Jest',
      'Testing Library',
      'SCSS',
    ],
    url: PATHS.picpayWorkURL,
  },
  'portfolio-v1': {
    ...sharedProjectData['portfolio-v1'],
    contributions: ['Development', 'Design', 'Design System'],
    metaImage: '/images/work/portfolio-v1/portfolio-v1-desktop-wide.png',
    dates: '2020 - 2021',
    details: `This was the first version of my portfolio built on Scully with Angular and TypeScript.
      For this project I was searching for something new to learn and it was SSG (Static Site Generation).
      Using the Scully library, I created a static generated website in Angular.`,
    url: PATHS.portfolioV1URL,
    tech: ['Angular', 'TypeScript', 'Scully', 'Jasmine', 'RxJs', 'SCSS'],
  },
};
