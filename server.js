import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const NODE_ENV = process.env.NODE_ENV || 'production';
const PORT = process.env.PORT || 3000;

const app = express();
const name = process.env.NAME;

// Serve static files (CSS, images, etc.)
app.use(express.static(path.join(__dirname, 'public')));

// Configure EJS BEFORE routes
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'src/views'));

// ROUTES
app.get('/', (req, res) => {
  res.render('home', { title: 'Welcome Home' });
});

app.get('/about', (req, res) => {
  res.render('about', { title: 'About Me' });
});

app.get('/products', (req, res) => {
  res.render('products', { title: 'Our Products' });
});

app.get('/student', (req, res) => {
  const student = {
    name: 'Daniel Wahlquist',
    id: '123456',
    email: 'daniel@example.com',
    address: '123 Main St, Rexburg, ID'
  };

  res.render('student', { title: 'Student Info', student });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running in ${NODE_ENV} mode on http://127.0.0.1:${PORT}`);
});
