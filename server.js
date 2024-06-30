// server.js
const express = require('express');
const { sequelize } = require('./models');
const routes = require('./routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected!');
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
  })
  .catch(err => console.error('Database connection error:', err));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
