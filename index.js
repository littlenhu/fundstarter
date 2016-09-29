var fs = require("fs");
var file_name = "public/index.html";
var input = fs.readFileSync(file_name, "utf8");
app.set('port', (process.env.PORT || 8080))
var port = process.env.PORT || 8080
app.listen(app.get('port'), function() {
  console.log("Node app is running at :" + app.get('port'))
})
