export type Category = {
    id: number;
    name: string;
    children: Category[] | [];
    collapsed?: boolean; // 숨김/보임 상태
  };
  
  export const categories = [
    {
      id: 1,
      name: "데이터",
      children: [
        { id: 2, name: "게임데이터", children: [] },
        { id: 3, name: "로드데이터", children: [] },
        { id: 4, name: "외부데이터", children: [] }
      ],
      collapsed: true
    },
    {
      id: 5,
      name: "개선사항",
      children: [
        { id: 6, name: "복지", children: [] },
        {
          id: 7,
          name: "연봉",
          children: [
            { id: 8, name: "월급", children: [] },
            {
              id: 9,
              name: "주급",
              children: [{ id: 10, name: "일당", children: [] }]
            }
          ]
        },
        { id: 11, name: "식대", children: [] },
        { id: 12, name: "도서비", children: [] },
        { id: 13, name: "와우", children: [] }
      ],
      collapsed: true
    },
    {
      id: 14,
      name: "음료수",
      children: [
        { id: 15, name: "게토레이", children: [] },
        { id: 16, name: "코카콜라", children: [] },
        { id: 17, name: "펩시", children: [] }
      ],
      collapsed: true
    }
  ];
  