// cors.ts

function allowCors(req, res, next) {
  // Replace '*' with the specific origin you want to allow
  res.setHeader('Access-Control-Allow-Origin', 'https://datatrainigsite.streamlit.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
}

module.exports = { allowCors };
