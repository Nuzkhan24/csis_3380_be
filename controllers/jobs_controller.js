const Job = require('../model/jobs_model');

// Create a new Job session
async function postJob(req, res) {
  try {
    console.log(req.body);
    const job = await Job.create(req.body);
    res.status(201).json(job);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
}

// Get all Job sessions
async function getAllJobs(req, res) {
  try {
    const Jobs = await Job.find();
    res.json(Jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get a single Job session by ID
async function getJob(req, res) {
  try {
    const job = await  Job.findById(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job session not found' });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Get a single Job session by ID
async function  getJobByCustomerId(req, res) {
  try {
    console.log(req.params.id);
    const jobs = await Job.where({ customerId: req.params.id });
    if (!jobs) {
      return res.status(404).json({ error: 'Job session not found' });
    }
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Update a Job session by ID
async function putJob(req, res) {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    if (!job) {
      return res.status(404).json({ error: 'Job session not found' });
    }
    res.json(job);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

// Delete a Job session by ID
async function removeJob(req, res) {
  try {
    const job = await Job.findByIdAndDelete(req.params.id);
    if (!job) {
      return res.status(404).json({ error: 'Job session not found' });
    }
    res.json({ message: 'Job session deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

module.exports = {
  postJob,
  getAllJobs,
  getJob,
  putJob,
  removeJob,
  getJobByCustomerId
};
