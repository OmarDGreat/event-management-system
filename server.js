require('dotenv').config(); // Load environment variables from .env file

// Print environment variables to verify they are loaded correctly
// console.log('PORT:', process.env.PORT);
// console.log('DB_USER:', process.env.DB_USER);
// console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
// console.log('DB_HOST:', process.env.DB_HOST);
// console.log('DB_PORT:', process.env.DB_PORT);
// console.log('DB_NAME:', process.env.DB_NAME);

const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Check database connection
sequelize.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
    // Start the server only after the database connection is successful
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    process.exit(1); // Exit the process with an error code
  });
