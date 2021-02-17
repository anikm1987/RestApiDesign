const express=require('express');
const bodyParser=require('body-parser');
const crudRoutes=require('./src/routes/routes')

const PORT = process.env.PORT || 8000;
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(crudRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });
module.exports= app;



