# Project Guide

Simple guide to understand and work with the Calnic project.

## Project Overview

This is a medical clinic management app with:
- **Login page** - staff can log in
- **Dashboard** - calendar view of appointments
- **Mock data** - fake appointments and doctors for testing

## File Structure Explained

### Main Folders

```
calnic/
│
├── app/                    # Your pages and API
├── data/                   # Data files (users, appointments)
├── styles/                 # CSS files
└── public/                 # Images and static files
```

### Important Files

#### `app/page.jsx` - Login Page
This is the first page users see. It has:
- Username and password inputs
- Submit button that checks credentials
- Error messages if login fails

**To modify the login page:**
1. Open `app/page.jsx`
2. Look for the form elements (TextInput, PasswordInput, Button)
3. Edit the styling or add new fields

#### `app/dashboard/page.jsx` - Main Dashboard
The main screen after login. It shows:
- Calendar with appointments
- Doctor availability
- List of today's appointments

**To modify the dashboard:**
1. Open `app/dashboard/page.jsx`
2. Find the three main sections (left sidebar, calendar, right sidebar)
3. Edit components or add new features

#### `app/api/login/route.js` - Login API
This handles the login logic:
- Receives username and password
- Checks against `data/accounts.json`
- Returns success or error

**To add a new user:**
1. Open `data/accounts.json`
2. Add a new user object with username and password

#### `data/accounts.json` - User Accounts
List of users who can log in.

Example:
```json
{
  "accounts": [
    {
      "id": "1",
      "name": "John Doe",
      "email": "admin",
      "password": "admin",
      "role": "front desk admin"
    }
  ]
}
```

#### `data/mock-data.js` - Appointments & Doctors
Fake data for testing:
- List of doctors with their status
- List of appointments with dates and times

**To add appointments:**
1. Open `data/mock-data.js`
2. Add to the `appointments` array
3. Use the same format as existing appointments

## How to Add Features

### Example: Add a New Page

1. Create a new folder in `app/` like `app/patients/`
2. Add a `page.jsx` file inside it
3. The URL will be automatically `/patients`

Example:
```jsx
// app/patients/page.jsx
export default function PatientsPage() {
  return (
    <div>
      <h1>Patients</h1>
      <p>List of patients here...</p>
    </div>
  );
}
```

### Example: Add a Button to Dashboard

1. Open `app/dashboard/page.jsx`
2. Find where you want to add the button
3. Use Mantine's Button component:

```jsx
<Button
  size="lg"
  onClick={() => alert('Button clicked!')}
>
  My New Button
</Button>
```

### Example: Add New Doctor to List

1. Open `data/mock-data.js`
2. Add to the `doctors` array:

```javascript
export const doctors = [
  { id: 1, name: 'Dr. Ahmed', status: 'Appt', color: 'green' },
  { id: 5, name: 'Dr. Smith', status: 'Available', color: 'blue' }, // NEW
];
```

## Technologies Used

**Next.js** - React framework
- Handles routing (pages)
- API routes (backend)

**Mantine UI** - UI components
- Pre-made buttons, inputs, etc.
- Makes things look nice without much CSS

**React Big Calendar** - Calendar view
- Shows appointments in calendar format
- Month/week/day views

## Common Tasks

### Change Login Credentials

Edit `data/accounts.json`:
```json
{
  "email": "your-username",
  "password": "your-password"
}
```

### Change Calendar Month

In `app/dashboard/page.jsx`, find:
```javascript
const [currentDate, setCurrentDate] = useState(new Date(2025, 9, 1));
```
Change the month number (0 = January, 9 = October)

### Add Doctor Status Color

In `data/mock-data.js`:
```javascript
{ id: 1, name: 'Dr. Ahmed', status: 'Appt', color: 'green' }
```
Colors: green, blue, pink, yellow, red

### Change Page Title

In `app/layout.jsx`, find:
```javascript
export const metadata = {
  title: 'Calnic Medical Clinic',  // Change this
};
```

## Tips for Development

1. **Keep the server running** - You'll see changes live in the browser
2. **Check the terminal** - Errors show up there first
3. **Use browser console** - Press F12 to see JavaScript errors
4. **Save often** - Changes auto-refresh the page
5. **Ask for help** - If stuck, ask your teammates!

## Need More Help?

- Check the README for setup instructions
- Google error messages
- Check Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)
- Check Mantine docs: [mantine.dev](https://mantine.dev)
