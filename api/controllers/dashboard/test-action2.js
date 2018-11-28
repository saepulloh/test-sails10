module.exports = {

  friendlyName: 'Welcome user',

  description: 'Look up the specified user and welcome them, or redirect to a signup page if no user was found.',

  inputs: {
    userId: {
      description: 'The ID of the user to look up.',
      // By declaring a numeric example, Sails will automatically respond with `res.badRequest`
      // if the `userId` parameter is not a number.
      type: 'number',
      // By making the `userId` parameter required, Sails will automatically respond with
      // `res.badRequest` if it's left out.
      required: true
    }
  },

  exits: {
    success: {
      responseType: 'ok'
    },
    notFound: {
      description: 'No user with the specified ID was found in the database.',
      responseType: 'notFound'
    }
  },

  fn: async function (inputs, exits) {
    // Display the welcome view.

    return exits.success(this.req.me);
  }
};