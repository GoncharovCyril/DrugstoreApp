export const Sorters = [
    {
        id: 1,
        title: 'Сначала дешевле',
        compareFunction: (a, b) => {
            if (parseFloat(a.min_price) < parseFloat(b.min_price)) {
                return -1;
              }
              if (parseFloat(a.min_price) > parseFloat(b.min_price)) {
                return 1;
              }
              // a должно быть равным b
              return 0;
        }
    },
    {
        id: 2,
        title: 'Сначала дороже',
        compareFunction: (a, b) => {
            if (parseFloat(a.min_price) > parseFloat(b.min_price)) {
                return -1;
              }
              if (parseFloat(a.min_price) < parseFloat(b.min_price)) {
                return 1;
              }
              // a должно быть равным b
              return 0;
        }
    },
    {
        id: 3,
        title: 'По названию (А-Я)',
        compareFunction: (a, b) => {
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return 1;
              }
              // a должно быть равным b
              return 0;
        }
    },
    {
        id: 4,
        title: 'По названию (Я-А)',
        compareFunction: (a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
                return -1;
              }
              if (a.name.toLowerCase() < b.name.toLowerCase()) {
                return 1;
              }
              // a должно быть равным b
              return 0;
        }
    }
]