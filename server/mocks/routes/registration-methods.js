const REGISTRATION_METHODS = [
   {
      id: 1,
      name: 'phone',
      displayedName: 'Phone number',
   },
   {
      id: 2,
      name: 'email',
      displayedName: 'Email address',
   },
];

module.exports = [
   {
      id: 'registration-methods',
      url: '/registration-methods',
      method: 'GET',
      variants: [
         {
            id: 'success',
            type: 'json',
            options: {
               status: 200,
               body: REGISTRATION_METHODS,
            },
         },
         {
            id: 'error',
            type: 'json',
            options: {
               status: 400,
               body: {
                  message: 'Error in /registration-methods route',
               },
            },
         },
      ],
   },
];
