var express = require('express')
var http = require('http')
var path = require('path')
var reload = require('reload')

var app = express()
  
const PORT = process.env.PORT || 4000;
 
app.use('/', express.static('dist', {
  extensions: ['html', 'htm']
}));
 
app.listen(PORT, () => {
  console.log(`Listening on localhost:${PORT}`);
})
 
// reload(app).then(function (reloadReturned) { 
//   server.listen(app.get('port'), function () {
//     console.log(`Web server listening on port http://localhost:${app.get('port')}`)
//   })
// }).catch(function (err) {
//   console.error('Reload could not start, could not start server/sample app', err)
// })
