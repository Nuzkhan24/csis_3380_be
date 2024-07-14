const app = require('express')();

const { configApp } = require('./config');
const { setupApiRoutes } = require('./routes');

configApp(app);
setupApiRoutes(app);

app.get('/', (req, res) => {
  res.send({
    message: '[CSIS - 3380 - Group-1]: Bidding system backend is up',
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Server running on PORT: ', PORT);
});




// // Routes for CRUD operations
// const JobsController = require('./controller/jobs_controller');
// // Get all jobs 
// app.get('/api/jobs', JobsController.getAllJobs);

// // Create a new jobs
// app.post('/api/jobs', JobsController.postJob);

// // Get a single jobs by ID
// app.get('/api/jobs/:id', JobsController.getJob);

// // Get jobs by customerID
// app.get('/api/jobs/customer/:id', JobsController.getJobByCustomerId);

// // Update a jobs by ID
// app.put('/api/jobs/:id', JobsController.putJob);

// // Delete a jobs by ID
// app.delete('/api/jobs/:id', JobsController.removeJob);