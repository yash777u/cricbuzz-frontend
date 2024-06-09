# Table of Contents

    Introduction
    Project Setup
    Running Locally
    Data Flow Overview
        Fetching Data
        Displaying Data
        Conditional Rendering
    Example Code
________________________________________________________________________________________________________________________________________________________________________________________
[cinnamon-2024-06-09T155058+0530.webm](https://github.com/yash777u/cricbuzz-frontend/assets/95225950/e1d9da35-f1e3-46ca-8770-8541b11d524d)



# Run Locally on System
To run your Cricbuzz frontend project locally after cloning it from GitHub, follow these short and simple steps:

''' Backend Code ''' :- https://github.com/yash777u/Cricbuzz

1. **Clone the repository**:
   ```sh
   git clone https://github.com/yash777u/cricbuzz-frontend.git
   cd cricbuzz-frontend
   ```

2. **Install dependencies**:
   ```sh
   npm install
   ```

3. **Start the development server**:
   ```sh
   npm run dev
   ```

Your project should now be running locally, and you can access it in your web browser at the URL displayed in your terminal (typically `http://localhost:3000` or a similar address).
______________________________________________________________________________________________________________________________________________________________________________________
# SAMPLE UI PICTURES FOR PROJECT 

______________________________________________________________________________________________________________________________________________________________________________________
# Create a Similar Project 

### Step 1: Create a new Vite + React project
1. Open your terminal and run:
   ```sh
   npm create vite@latest my-project --template react
   cd my-project
   ```

### Step 2: Install dependencies
1. Install the necessary dependencies:
   ```sh
   npm install
   npm install -D tailwindcss postcss autoprefixer
   npx tailwindcss init -p
   ```

### Step 3: Configure Tailwind CSS
1. Open `tailwind.config.js` and update the `content` section:
   ```js
   module.exports = {
     content: [
       "./index.html",
       "./src/**/*.{js,ts,jsx,tsx}",
     ],
     theme: {
       extend: {},
     },
     plugins: [],
   }
   ```

2. Add Tailwind directives to `src/index.css`:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

### Step 4: Install Bootstrap
1. Install Bootstrap:
   ```sh
   npm install bootstrap
   ```

2. Import Bootstrap CSS in `src/main.jsx`:
   ```js
   import 'bootstrap/dist/css/bootstrap.min.css';
   import React from 'react';
   import ReactDOM from 'react-dom';
   import App from './App';
   import './index.css';

   ReactDOM.createRoot(document.getElementById('root')).render(
     <React.StrictMode>
       <App />
     </React.StrictMode>
   );
   ```

### Step 5: Install Motion One
1. Install Motion One:
   ```sh
   npm install @motionone/react
   ```

### Step 6: Optionally install a UI library (e.g., Material-UI)
1. Install Material-UI:
   ```sh
   npm install @mui/material @emotion/react @emotion/styled
   ```

### Step 7: Run the development server
1. Start the development server:
   ```sh
   npm run dev
   ```

### Example usage in `src/App.jsx`
```jsx
import React from 'react';
import { motion } from '@motionone/react';
import Button from '@mui/material/Button';

function App() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Hello, world!</h1>
      <button className="btn btn-primary mt-4">Bootstrap Button</button>
      <Button variant="contained" color="primary" className="mt-4">Material-UI Button</Button>
      <motion.div
        animate={{ scale: 1.5 }}
        transition={{ duration: 0.5 }}
        className="mt-4"
      >
        Motion One Animation
      </motion.div>
    </div>
  );
}

export default App;
```

### Summary
1. **Create Project**: `npm create vite@latest my-project --template react`
2. **Install Dependencies**:
   - Vite: `npm install`
   - Tailwind CSS: `npm install -D tailwindcss postcss autoprefixer && npx tailwindcss init -p`
   - Bootstrap: `npm install bootstrap`
   - Motion One: `npm install @motionone/react`
   - Material-UI (optional): `npm install @mui/material @emotion/react @emotion/styled`
3. **Configure Tailwind**: Update `tailwind.config.js` and `src/index.css`
4. **Import CSS**: Import Bootstrap CSS in `src/main.jsx`
5. **Run Development Server**: `npm run dev`

This will set up your Vite + React project with Tailwind CSS, Bootstrap, Motion One, and optionally Material-UI for development.
