// cors.ts

const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Replace '*' with the specific origin you want to allow
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
};

module.exports = { corsHeaders };
