const express = require('express');
const app = express();
app.use(express.static('./dist/wbdv-f19-jannuzi-client-angular'));
app.get('/*', function (req, res) {
  res.sendFile(__dirname + '/dist/wbdv-f19-jannuzi-client-angular/index.html');
});
app.listen(process.env.PORT || 8080);
