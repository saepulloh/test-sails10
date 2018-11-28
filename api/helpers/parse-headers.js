module.exports = {


  friendlyName: 'Parse headers',


  description: 'Digunakan untuk ambil informasi req headers di semua action',


  inputs: {
    req: {
      type: 'ref',
      description: 'The current incoming request (req).',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs, exits) {
    var headers = await sails.helpers.parseMyHeaders(inputs.req);
    // All done.
    return exits.success();

  }


};

