import express from 'express'
import cors from 'cors'
import { createProxyMiddleware } from 'http-proxy-middleware';
import mainRoutes from './routes/main.js'
import bodyParser from 'body-parser'
import path from 'path'
import { fileURLToPath } from 'url'



// Create Express app
const app = express()
app.use(express.static('public'))

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))

// Middleware
app.use(cors()); // Enable CORS
app.use(bodyParser.urlencoded({ extended: true })) // Parse URL-encoded bodies
app.use(bodyParser.json()); // Parse JSON bodies

// Routes


app.use(mainRoutes)



// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

