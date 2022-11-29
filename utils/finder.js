const reservation = {
  location: "komipa",
  seats: [
    {
      col: 3,
      items: [
        [
          {
            no: 1,
            status: "booked",
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
            status: "booked",
          },
          {
            no: 5,
            status: "booked",
          },
          {
            no: 6,
            status: "available",
          },
        ],
        [
          {
            no: 7,
            status: "booked",
          },
          {
            no: 8,
            status: "available",
          },
          {
            no: 9,
            status: "booked",
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
            status: "booked",
          },
          {
            no: 15,
            status: "booked",
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
            status: "booked",
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
            status: "booked",
          },
          {
            no: 27,
            status: "booked",
          },
          {
            no: 28,
            status: "booked",
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
            status: "booked",
          },
          {
            no: 32,
            status: "available",
          },
          {
            no: 33,
            status: "booked",
          },
          {
            no: 34,
            status: "booked",
          },
          {
            no: 35,
            status: "booked",
          },
          {
            no: 36,
            status: "booked",
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
            status: "booked",
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
            status: "booked",
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
            status: "booked",
          },
          {
            no: 46,
            status: "available",
          },
          {
            no: 47,
            status: "booked",
          },
          {
            no: 48,
            status: "available",
          },
        ],
        [
          {
            no: 49,
            status: "booked",
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
            status: "booked",
          },
          {
            no: 54,
            status: "booked",
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
            status: "booked",
          },
          {
            no: 60,
            status: "booked",
          },
        ],
        [
          {
            no: 61,
            status: "available",
          },
          {
            no: 62,
            status: "booked",
          },
          {
            no: 63,
            status: "available",
          },
          {
            no: 64,
            status: "booked",
          },
        ],
        [
          {
            no: 65,
            status: "available",
          },
          {
            no: 66,
            status: "booked",
          },
          {
            no: 67,
            status: "booked",
          },
          {
            no: 68,
            status: "available",
          },
        ],
      ],
    },
  ],
  total: 0,
  fix: false,
  saved: {
    meta: [
      {
        col: 2,
        line: 3,
        idx: 1,
        no: 50,
      },
    ],
    meta: [
      {
        col: 2,
        line: 3,
        idx: 1,
        no: 5,
      },
    ],
  },
};

const target = reservation.saved.meta.filter(item => {
  return item.no !== 50;
});

console.log(target);
