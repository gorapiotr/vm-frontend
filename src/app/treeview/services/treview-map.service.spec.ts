import {TreviewMapService} from './treview-map.service';

describe('treview-map.service.ts', () => {

  let treviewMapService: TreviewMapService;

  beforeEach(() => {
    treviewMapService = new TreviewMapService();
  });

  it('Test method prepareTreeStructureAsArray', () => {

    const rows = [
          ['a', 'a.a', 'a.a.a', 'a.a.a.a', 'a.a.a.a.a'],
          ['b', 'b.b', 'b.b.b', 'b.b.b.b', 'b.b.b.b.b'],
          ['', '', '', 'f.f', 'f.f.f'],
          ['c', 'c.c', '', '', ''],
          ['', 'c.d', '', '', ''],
          ['', 'c.e', 'c.e.e', '', '']
        ];

    const result = [
      {
        id: 'a.a.a.a.a',
        text: 'a.a.a.a.a',
        value: 'a.a.a.a.a',
        parentId: 'a.a.a.a',
        children: []
      },
      {
        id: 'a.a.a.a',
        text: 'a.a.a.a',
        value: 'a.a.a.a',
        parentId: 'a.a.a',
        children: []
      },
      {
        id: 'a.a.a',
        text: 'a.a.a',
        value: 'a.a.a',
        parentId: 'a.a',
        children: []
      },
      {
        id: 'a.a',
        text: 'a.a',
        value: 'a.a',
        parentId: 'a',
        children: []
      },
      {
        id: 'a',
        text: 'a',
        value: 'a',
        parentId: '0',
        children: []
      },
      {
        id: 'b.b.b.b.b',
        text: 'b.b.b.b.b',
        value: 'b.b.b.b.b',
        parentId: 'b.b.b.b',
        children: []
      },
      {
        id: 'b.b.b.b',
        text: 'b.b.b.b',
        value: 'b.b.b.b',
        parentId: 'b.b.b',
        children: []
      },
      {
        id: 'b.b.b',
        text: 'b.b.b',
        value: 'b.b.b',
        parentId: 'b.b',
        children: []
      },
      {
        id: 'b.b',
        text: 'b.b',
        value: 'b.b',
        parentId: 'b',
        children: []
      },
      {
        id: 'b',
        text: 'b',
        value: 'b',
        parentId: '0',
        children: []
      },
      {
        id: 'f.f.f',
        text: 'f.f.f',
        value: 'f.f.f',
        parentId: 'f.f',
        children: []
      },
      {
        id: 'f.f',
        text: 'f.f',
        value: 'f.f',
        parentId: 'b.b.b',
        children: []
      },
      {
        id: 'c.c',
        text: 'c.c',
        value: 'c.c',
        parentId: 'c',
        children: []
      },
      {
        id: 'c',
        text: 'c',
        value: 'c',
        parentId: '0',
        children: []
      },
      {
        id: 'c.d',
        text: 'c.d',
        value: 'c.d',
        parentId: 'c',
        children: []
      },
      {
        id: 'c.e.e',
        text: 'c.e.e',
        value: 'c.e.e',
        parentId: 'c.e',
        children: []
      },
      {
        id: 'c.e',
        text: 'c.e',
        value: 'c.e',
        parentId: 'c',
        children: []
      }
    ];

    const tree = treviewMapService.prepareTreeStructureAsArray(rows);

    expect(tree).toEqual(result);
  });

  it('Test method listToTree', () => {

    const positionsArray: any[] = [
      {
        id: 'a.a.a.a.a',
        text: 'a.a.a.a.a',
        value: 'a.a.a.a.a',
        parentId: 'a.a.a.a',
        children: []
      },
      {
        id: 'a.a.a.a',
        text: 'a.a.a.a',
        value: 'a.a.a.a',
        parentId: 'a.a.a',
        children: []
      },
      {
        id: 'a.a.a',
        text: 'a.a.a',
        value: 'a.a.a',
        parentId: 'a.a',
        children: []
      },
      {
        id: 'a.a',
        text: 'a.a',
        value: 'a.a',
        parentId: 'a',
        children: []
      },
      {
        id: 'a',
        text: 'a',
        value: 'a',
        parentId: '0',
        children: []
      },
      {
        id: 'b.b.b.b.b',
        text: 'b.b.b.b.b',
        value: 'b.b.b.b.b',
        parentId: 'b.b.b.b',
        children: []
      },
      {
        id: 'b.b.b.b',
        text: 'b.b.b.b',
        value: 'b.b.b.b',
        parentId: 'b.b.b',
        children: []
      },
      {
        id: 'b.b.b',
        text: 'b.b.b',
        value: 'b.b.b',
        parentId: 'b.b',
        children: []
      },
      {
        id: 'b.b',
        text: 'b.b',
        value: 'b.b',
        parentId: 'b',
        children: []
      },
      {
        id: 'b',
        text: 'b',
        value: 'b',
        parentId: '0',
        children: []
      },
      {
        id: 'f.f.f',
        text: 'f.f.f',
        value: 'f.f.f',
        parentId: 'f.f',
        children: []
      },
      {
        id: 'f.f',
        text: 'f.f',
        value: 'f.f',
        parentId: 'b.b.b',
        children: []
      },
      {
        id: 'c.c',
        text: 'c.c',
        value: 'c.c',
        parentId: 'c',
        children: []
      },
      {
        id: 'c',
        text: 'c',
        value: 'c',
        parentId: '0',
        children: []
      },
      {
        id: 'c.d',
        text: 'c.d',
        value: 'c.d',
        parentId: 'c',
        children: []
      },
      {
        id: 'c.e.e',
        text: 'c.e.e',
        value: 'c.e.e',
        parentId: 'c.e',
        children: []
      },
      {
        id: 'c.e',
        text: 'c.e',
        value: 'c.e',
        parentId: 'c',
        children: []
      }
    ];

    const result = [
      {
        id: 'a',
        text: 'a',
        value: 'a',
        parentId: '0',
        children: [
          {
            id: 'a.a',
            text: 'a.a',
            value: 'a.a',
            parentId: 'a',
            children: [
              {
                id: 'a.a.a',
                text: 'a.a.a',
                value: 'a.a.a',
                parentId: 'a.a',
                children: [
                  {
                    id: 'a.a.a.a',
                    text: 'a.a.a.a',
                    value: 'a.a.a.a',
                    parentId: 'a.a.a',
                    children: [
                      {
                        id: 'a.a.a.a.a',
                        text: 'a.a.a.a.a',
                        value: 'a.a.a.a.a',
                        parentId: 'a.a.a.a',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'b',
        text: 'b',
        value: 'b',
        parentId: '0',
        children: [
          {
            id: 'b.b',
            text: 'b.b',
            value: 'b.b',
            parentId: 'b',
            children: [
              {
                id: 'b.b.b',
                text: 'b.b.b',
                value: 'b.b.b',
                parentId: 'b.b',
                children: [
                  {
                    id: 'b.b.b.b',
                    text: 'b.b.b.b',
                    value: 'b.b.b.b',
                    parentId: 'b.b.b',
                    children: [
                      {
                        id: 'b.b.b.b.b',
                        text: 'b.b.b.b.b',
                        value: 'b.b.b.b.b',
                        parentId: 'b.b.b.b',
                        children: []
                      }
                    ]
                  },
                  {
                    id: 'f.f',
                    text: 'f.f',
                    value: 'f.f',
                    parentId: 'b.b.b',
                    children: [
                      {
                        id: 'f.f.f',
                        text: 'f.f.f',
                        value: 'f.f.f',
                        parentId: 'f.f',
                        children: []
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        id: 'c',
        text: 'c',
        value: 'c',
        parentId: '0',
        children: [
          {
            id: 'c.c',
            text: 'c.c',
            value: 'c.c',
            parentId: 'c',
            children: []
          },
          {
            id: 'c.d',
            text: 'c.d',
            value: 'c.d',
            parentId: 'c',
            children: []
          },
          {
            id: 'c.e',
            text: 'c.e',
            value: 'c.e',
            parentId: 'c',
            children: [
              {
                id: 'c.e.e',
                text: 'c.e.e',
                value: 'c.e.e',
                parentId: 'c.e',
                children: []
              }
            ]
          }
        ]
      }
    ];

    const tree = treviewMapService.listToTree(positionsArray);

    expect(tree).toEqual(result);
  });
});
