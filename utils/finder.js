const seats = [
  {
    col: 3,
    items: [
      [
        {
          no: 1,
          status: "available",
        },
        {
          no: 2,
          status: "available",
        },
        {
          no: 3,
          status: "available",
        },
        {
          no: 4,
          status: "available",
        },
        {
          no: 5,
          status: "available",
        },
        {
          no: 6,
          status: "available",
        },
      ],
      [
        {
          no: 7,
          status: "available",
        },
        {
          no: 8,
          status: "available",
        },
        {
          no: 9,
          status: "available",
        },
        {
          no: 10,
          status: "available",
        },
        {
          no: 11,
          status: "available",
        },
        {
          no: 12,
          status: "available",
        },
      ],
      [
        {
          no: 13,
          status: "available",
        },
        {
          no: 14,
          status: "available",
        },
        {
          no: 15,
          status: "available",
        },
        {
          no: 16,
          status: "available",
        },
        {
          no: 17,
          status: "available",
        },
        {
          no: 18,
          status: "available",
        },
      ],
    ],
  },
  {
    col: 3,
    items: [
      [
        {
          no: 19,
          status: "available",
        },
        {
          no: 20,
          status: "available",
        },
        {
          no: 21,
          status: "available",
        },
        {
          no: 22,
          status: "available",
        },
        {
          no: 23,
          status: "available",
        },
        {
          no: 24,
          status: "available",
        },
      ],
      [
        {
          no: 25,
          status: "available",
        },
        {
          no: 26,
          status: "available",
        },
        {
          no: 27,
          status: "available",
        },
        {
          no: 28,
          status: "available",
        },
        {
          no: 29,
          status: "available",
        },
        {
          no: 30,
          status: "available",
        },
      ],
      [
        {
          no: 31,
          status: "available",
        },
        {
          no: 32,
          status: "available",
        },
        {
          no: 33,
          status: "available",
        },
        {
          no: 34,
          status: "available",
        },
        {
          no: 35,
          status: "available",
        },
        {
          no: 36,
          status: "available",
        },
      ],
    ],
  },
  {
    col: 2,
    items: [
      [
        {
          no: 37,
          status: "available",
        },
        {
          no: 38,
          status: "available",
        },
        {
          no: 39,
          status: "available",
        },
        {
          no: 40,
          status: "available",
        },
      ],
      [
        {
          no: 41,
          status: "available",
        },
        {
          no: 42,
          status: "available",
        },
        {
          no: 43,
          status: "available",
        },
        {
          no: 44,
          status: "available",
        },
      ],
      [
        {
          no: 45,
          status: "available",
        },
        {
          no: 46,
          status: "available",
        },
        {
          no: 47,
          status: "available",
        },
        {
          no: 48,
          status: "available",
        },
      ],
      [
        {
          no: 49,
          status: "available",
        },
        {
          no: 50,
          status: "available",
        },
        {
          no: 51,
          status: "available",
        },
        {
          no: 52,
          status: "available",
        },
      ],
    ],
  },
  {
    col: 2,
    items: [
      [
        {
          no: 53,
          status: "available",
        },
        {
          no: 54,
          status: "available",
        },
        {
          no: 55,
          status: "available",
        },
        {
          no: 56,
          status: "available",
        },
      ],
      [
        {
          no: 57,
          status: "available",
        },
        {
          no: 58,
          status: "available",
        },
        {
          no: 59,
          status: "available",
        },
        {
          no: 60,
          status: "available",
        },
      ],
      [
        {
          no: 61,
          status: "available",
        },
        {
          no: 62,
          status: "available",
        },
        {
          no: 63,
          status: "available",
        },
        {
          no: 64,
          status: "available",
        },
      ],
      [
        {
          no: 65,
          status: "available",
        },
        {
          no: 66,
          status: "available",
        },
        {
          no: 67,
          status: "available",
        },
        {
          no: 68,
          status: "available",
        },
      ],
    ],
  },
];


const target = seats.find(({ items }) => {
  return items.some(elements => {
    return elements.some(el => el.no === 1);
  });
});

console.log(target)