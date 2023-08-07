// cors.ts

const corsHeaders = {
    'Access-Control-Allow-Origin': 'https://datatrainigsite.streamlit.app/', // Replace '*' with the specific origin you want to allow
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, authorization, x-client-info, apikey',
  };
  
  export { corsHeaders };

