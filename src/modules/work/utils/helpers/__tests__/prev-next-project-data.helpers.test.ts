import * as prev_next_project_data from '@work/utils/helpers/prev-next-project-data.helpers';
// @ponicode
describe('prev_next_project_data.prevNextProjectData', () => {
  test('0', () => {
    let result: any = prev_next_project_data.prevNextProjectData(100);
    expect(result).toEqual([null, null]);
  });

  test('1', () => {
    let result: any = prev_next_project_data.prevNextProjectData(NaN);
    expect(result).toEqual([null, null]);
  });

  test('2', () => {
    let result: any = prev_next_project_data.prevNextProjectData(1);
    let object: any = [
      {
        client: 'MadeiraMadeira E-commerce',
        path: '/work/madeira',
        project: 'MadeiraMadeira to Next.js',
        description:
          'Active participation in the migration process from legacy e-commerce (PHP) to a new stack (React/NextJS).',
        tags: ['Development', 'Design'],
      },
      {
        client: 'Personal',
        path: '/work/portfolio-v1',
        project: 'Portfolio V1',
        description:
          "Patrick's previous portfolio of work. Built with Angular, Scully and TypeScript.",
        tags: ['Development', 'Design'],
      },
    ];
    expect(result).toEqual(object);
  });

  test('3', () => {
    let result: any = prev_next_project_data.prevNextProjectData(3);
    let object: any = [
      {
        client: 'Personal',
        path: '/work/portfolio-v1',
        project: 'Portfolio V1',
        description:
          "Patrick's previous portfolio of work. Built with Angular, Scully and TypeScript",
        tags: ['Development', 'Design'],
      },
      null,
    ];
    expect(result).toEqual(object);
  });

  test('4', () => {
    let result: any = prev_next_project_data.prevNextProjectData(0);
    let object: any = [
      null,
      {
        project: 'Picpay Legal Person Panel',
        client: 'Picpay',
        path: '/work/picpay',
        description:
          'Evolution of PJ (legal person) Account with a web seller panel dashboard.',
        tags: ['Development'],
      },
    ];
    expect(result).toEqual(object);
  });
});
