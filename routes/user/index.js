const UserController = require('../../controllers/user_controller');

const setupUserRoutes = (app) => {
    app.post('/api/signup', UserController.signup);

    app.post('/api/login', UserController.signin);
    
    app.get('/api/users/:id', UserController.getUser);
    
    app.get('/api/users/role/:role', UserController.getUsersByRole);
    
    app.put('/api/users/:id', UserController.putUser);    
}

module.exports = { setupUserRoutes }