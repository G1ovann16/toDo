const express = require('express');
const app = express();
const PORT = 3000; 
const statusRouter = require('./backend/routes/status');
const taskRouter = require('./backend/routes/task');
const userRouter = require('./backend/routes/user');
const categoryRouter = require('./backend/routes/category');


app.use(express.json()); //bodyparser



app.use('/status',statusRouter)
app.use('/task',taskRouter)
app.use('/user',userRouter)
app.use('/category',categoryRouter)




app.listen(PORT, ()=>console.log(`server running on port ${PORT} `));