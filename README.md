# InShare - File Sharing Application

A simple and elegant file sharing application that allows users to upload files and share them via email or direct links.

## Features

- 📁 **File Upload**: Easy drag-and-drop file upload interface
- 📧 **Email Sharing**: Send files directly via email
- 🔗 **Direct Links**: Generate shareable links for uploaded files
- ⏰ **Auto Expiry**: Files automatically expire after 24 hours
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Clean and intuitive user interface

## Project Structure

```
inshare/
├── backend/          # Node.js backend server
│   ├── config/       # Database configuration
│   ├── models/       # Database models
│   ├── routes/       # API routes
│   ├── services/     # Email and other services
│   ├── views/        # EJS templates
│   ├── public/       # Static assets
│   └── uploads/      # Uploaded files storage
├── frontend/         # Frontend web application
│   ├── index.html    # Main HTML file
│   ├── index.js      # JavaScript functionality
│   ├── style.css     # Styling
│   └── assets/       # Images and icons
└── README.md
```

## Technologies Used

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - MongoDB object modeling
- **Multer** - File upload handling
- **Nodemailer** - Email service
- **EJS** - Template engine

### Frontend
- **HTML5** - Markup
- **CSS3** - Styling
- **JavaScript** - Functionality
- **Fetch API** - HTTP requests

## Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the backend directory with:
   ```
   MONGO_CONNECTION_URL=your_mongodb_connection_string
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_email_password
   APP_BASE_URL=http://localhost:3000
   ```

4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Open `index.html` in a web browser or serve it using a local server:
   ```bash
   # Using Python
   python -m http.server 8080
   
   # Using Node.js
   npx serve .
   ```

## Usage

1. **Upload Files**: 
   - Drag and drop files onto the upload area
   - Or click to browse and select files
   - Maximum file size: 100MB

2. **Share Files**:
   - **Via Email**: Enter recipient email and sender email
   - **Via Link**: Copy the generated shareable link

3. **Download Files**:
   - Click on the download link
   - Files are available for 24 hours

## API Endpoints

- `POST /api/files` - Upload a file
- `GET /files/:uuid` - View file details
- `GET /files/download/:uuid` - Download a file
- `POST /api/files/send` - Send file via email

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

**Sachin K** - [GitHub](https://github.com/SachinK18)

Project Link: [https://github.com/SachinK18/inshare](https://github.com/SachinK18/inshare)
