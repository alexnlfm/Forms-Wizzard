const COUNTRIES = [
   {
      id: 1,
      name: 'Israel',
   },
   {
      id: 2,
      name: 'United States',
   },
   {
      id: 3,
      name: 'Canada',
   },
   {
      id: 4,
      name: 'Mexico',
   },
   {
      id: 5,
      name: 'Brazil',
   },
];

module.exports = [
   {
      id: 'countries',
      url: '/countries',
      method: 'GET',
      variants: [
         {
            id: 'success',
            type: 'json',
            options: {
               status: 200,
               body: COUNTRIES,
            },
         },
         {
            id: 'error',
            type: 'json',
            options: {
               status: 400,
               body: {
                  message: 'Error in /countries route',
               },
            },
         },
      ],
   },
];
