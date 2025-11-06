# Calnic Medical Clinic

A web application for managing medical clinic appointments, built for a course project.

## What is this?

This is a clinic management system where you can:
- Login as a staff member
- View a calendar of appointments
- See doctor availability
- Search for patients
- View today's appointments

## Setup Instructions (Step by Step)

### Step 1: Install Node.js

Node.js is required to run this project.

1. Go to [nodejs.org](https://nodejs.org/)
2. Download the **LTS version** (the one that says "Recommended For Most Users")
3. Run the installer and follow the prompts
4. To verify it's installed, open your terminal/command prompt and type:
   ```bash
   node --version
   ```
   You should see a version number like `v18.x.x` or higher

### Step 2: Install pnpm

pnpm is a package manager (like npm but faster).

1. Open your terminal/command prompt
2. Run this command:
   ```bash
   npm install -g pnpm
   ```
3. Verify it's installed:
   ```bash
   pnpm --version
   ```
   You should see a version number

### Step 3: Get the Project Files

1. Download or clone this project to your computer
2. Open your terminal/command prompt
3. Navigate to the project folder:
   ```bash
   cd path/to/calnic
   ```
   (Replace `path/to/` with where you saved the project)

### Step 4: Install Dependencies

This downloads all the libraries the project needs.

```bash
pnpm install
```

This might take a few minutes. You'll see a progress bar.

### Step 5: Run the Project

Start the development server:

```bash
pnpm dev
```

You should see something like:
```
ready - started server on 0.0.0.0:3000, url: http://localhost:3000
```

### Step 6: Open in Browser

1. Open your web browser (Chrome, Firefox, Safari, etc.)
2. Go to: **http://localhost:3000**
3. You should see the login page!

## How to Login

Use these credentials:
- **Username:** `admin`
- **Password:** `admin`

## How to Stop the Server

Press `Ctrl + C` in the terminal where it's running.

## How the Project Works

### What You'll See

#### Login Page
- Left side: Calnic branding and information
- Right side: Login form
- Enter username and password to access the dashboard

#### Dashboard
The dashboard has three main sections:

1. **Left Sidebar**
   - "Book" button - for booking new appointments
   - "Add Patient" button - for adding new patients
   - Doctor Availability panel - shows which doctors are available, operating, on break, or remote

2. **Center (Calendar)**
   - Big calendar showing appointments
   - Buttons at top to switch views: Day, Week, Month, Year
   - Arrows to go to previous/next month
   - Colored blocks show different appointment types:
     - Yellow = Morning appointments or Afternoon full
     - Green = Afternoon appointments available

3. **Right Sidebar**
   - Search bar to find patients
   - List of today's appointments with:
     - Patient name
     - Doctor name
     - Date and time

### Behind the Scenes

#### Technology Stack
- **Next.js** - The main framework (handles pages and routing)
- **React** - For building the user interface
- **Mantine UI** - Pre-made UI components (buttons, inputs, etc.)
- **React Big Calendar** - The calendar component
- **Tailwind CSS** - For styling

#### Project Structure

```
calnic/
│
├── app/                    # All the pages and routes
│   ├── page.jsx           # Login page
│   ├── dashboard/         # Dashboard page
│   ├── api/login/         # Login API
│   └── layout.jsx         # Wraps all pages
│
├── data/                  # Where data is stored
│   ├── accounts.json      # User login info
│   └── mock-data.js       # Fake appointments and doctors
│
└── styles/                # CSS styling files
```

#### How Login Works

1. You enter username and password
2. Click "Login" button
3. App sends request to `/api/login`
4. API checks `data/accounts.json` for matching username/password
5. If correct: saves user info and redirects to dashboard
6. If wrong: shows error message

#### How the Dashboard Works

1. Loads user info from browser storage
2. Loads appointments from `data/mock-data.js`
3. Displays calendar with appointments
4. Filters today's appointments for the right sidebar

### Current Data

Right now, the app uses **fake data** stored in files:
- Users: `data/accounts.json`
- Appointments: `data/mock-data.js`

In a real app, this would connect to a database.

## Common Issues

### Port 3000 Already in Use

If you see an error about port 3000:
```bash
# Try a different port
PORT=3001 pnpm dev
```

### "Command not found: pnpm"

Make sure you installed pnpm (Step 2 above):
```bash
npm install -g pnpm
```

### Dependencies Error

If something goes wrong with installation:
```bash
# Delete node_modules and try again
rm -rf node_modules
pnpm install
```

### Browser Shows Blank Page

1. Check the terminal for errors
2. Try refreshing the page
3. Clear your browser cache
4. Make sure the server is running (you should see the "ready" message)

## Useful Commands

```bash
# Start development server
pnpm dev

# Stop the server
Press Ctrl + C

# Check for code issues
pnpm lint

# Build for production
pnpm build
```

## Need Help?

If you're stuck:
1. Check the error message in the terminal
2. Google the error message
3. Ask your teammates
4. Check the `docs/` folder for more detailed info

---

**Made for Calnic Medical Clinic Course Project**
