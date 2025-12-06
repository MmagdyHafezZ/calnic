# Calnic Medical Clinic

A web application for managing medical clinic appointments, built for a course project.

## Authors (Full Names)

- Magdy Hafez
- Nick Holt
- Adiba Hossain
- Kosisochukwu Igbokwe

## What is this?

This is a clinic management system where you can:

- Login as a staff member (Front Desk Admin)
- Login as a doctor
- View multiple calendar views (Day, Week, Month, Year)
- Add new patients
- Create and confirm bookings
- Book off holidays for doctors
- Resolve conflicts caused by doctor holidays

## Setup Instructions (Step by Step)

### Step 1: Install Node.js

Node.js is required to run this project.

1. Go to https://nodejs.org/
2. Download the LTS version (Recommended For Most Users)
3. Run the installer and follow the prompts
4. Verify in terminal:
   ```bash
   node --version
   ```
   You should see v18.x.x or higher

### Step 2: Install pnpm

```bash
npm install -g pnpm
pnpm --version
```

### Step 3: Get the Project Files

```bash
cd path/to/calnic
```

### Step 4: Install Dependencies

```bash
pnpm install
```

### Step 5: Run the Project

```bash
pnpm dev
```

Open http://localhost:3000 in your browser.

## Exact Walkthrough

Follow these steps precisely to experience the core features.

### 1) Login and view different calendar views (Front Desk Admin first)

- On the Login page, type:
  - Username: `admin`
  - Password: `admin`
- Click “Login”
- You will land on the Dashboard
- In the center calendar:
  - Click “Day” to view single-day schedule
  - Click “Week” to view weekly schedule
  - Click “Month” to view monthly schedule
  - Click “Agenda” to view list of appointments
- Use the "Today" button to return to the current date
- Use the "Back" and "Next" arrows to navigate dates
- Observe colored blocks:
  - Green: Dr. Ahmed bookings
  - Pink: Dr. Turner bookings
  - Orange: Dr. Mike bookings
  - Blue: Dr. Joel bookings

### 2) Add new patient

- In the left sidebar, click “Add Patient”
- Fill out the New Patient form (fields marked \* are required). Enter appropriate values for:
  - Patient Info:
    - Name: e.g., `Jane Doe`
    - Date of Birth: e.g., `05/12/1990` (mm/dd/yyyy)
    - Alberta Personal Healthcare #: e.g., `1234567890`
  - Contact Info:
    - Phone Number: e.g., `555-0101`
    - Email Address: e.g., `jane.doe@example.com`
  - Emergency Contact:
    - Name: e.g., `John Doe`
    - Phone Number: e.g., `555-0102`
    - Relation: e.g., `Spouse`
- Click “Save Patient’s Info”
- You should see a success confirmation page
- Click “Back to Dashboard”

### 3) Create a booking and go through the booking guide

- In the left sidebar, click “Book”
- Booking guide steps:
  1. Select Patient:
     - Use search and select `Jane Doe`
  2. Select Doctor:
     - Choose `Dr. Turner`
  3. Select Date and Time:
     - Date: pick a day this week
     - Time: choose an available slot
  4. Select Appointment Type:
     - Choose `Consultation`
  5. Notes:
     - Type: `First-time consultation`
  - Click “Confirm”
- Review on the confirmation screen, then click “Submit Booking”
- You should see the appointment appear on the calendar and in Today’s appointments (right sidebar if it’s today)

### 4) Switch to doctor login

- Click “Logout”
- On the Login page, type:
  - Username: `turner`
  - Password: `doctor`
- Click “Login”
- You will land on the Doctor Dashboard

### 5) Book off a holiday (Doctor)

- Navigate to Doctor > Availability
- Click “Book Off Holiday”
- Enter:
  - Start Date: pick a date range that overlaps with your existing bookings (e.g., start next Monday)
  - End Date: 5 days after start date
  - Reason: `Annual leave`
- Click “Save”
- The system will mark those days as unavailable and may flag conflicts for existing appointments

### 6) Switch back to Front Desk Admin and resolve any problems with the book-off holiday

- Click “Logout”
- Login again as Front Desk Admin:
  - Username: `admin`
  - Password: `admin`
- Go to Dashboard
- Check the right sidebar for alerts/conflicts or open the calendar to see conflicted bookings
- For each conflict:
  - Click the conflicted appointment
  - Choose “Reschedule”
  - Pick a new date/time outside the doctor’s holiday range
  - Confirm changes
- Verify that conflicts are cleared and the calendar shows updated appointments

## What cases/functions were implemented?

- Authentication:
  - Front Desk Admin login (admin/admin)
  - Doctor login (turner/doctor)
- Patient Management:
  - Add new patient form and persistence in store
- Appointment Booking:
  - Multi-step booking guide (select patient, doctor, date/time, type, notes, confirm)
  - Appointment confirmation and calendar rendering
- Calendar Views:
  - Day, Week, Month, Year toggle and navigation
- Doctor Availability:
  - Book off holiday periods
  - Conflict detection for overlapping appointments
- Conflict Resolution:
  - Front Desk flow to reschedule affected appointments

## What data should be entered and when?

- At Login:
  - Admin: username `admin`, password `admin`
  - Doctor: username `turner`, password `doctor`
- New Patient Form:
  - Enter full demographics before creating bookings (name, DOB, contact, address)
- Booking Guide:
  - Select existing patient
  - Select doctor
  - Select date/time in available slots
  - Choose appointment type
  - Optional notes
- Book Off Holiday (Doctor):
  - Enter start date, end date, reason
- Conflict Resolution (Admin):
  - Open conflicted appointment
  - Select a new date/time outside holiday range
  - Confirm changes

## How to Stop the Server

Press Ctrl + C in the terminal.

## Technology Stack

- Next.js
- React
- Mantine UI
- React Big Calendar
- Tailwind CSS

## Project Structure

```
calnic/
├── app/                    # Pages and routes
│   ├── page.jsx            # Login page
│   ├── (protected)/        # Protected app areas
│   └── api/login/          # Login API
├── components/             # UI components
├── data/                   # Fake data (accounts, appointments)
├── store/                  # Application state stores
└── styles/                 # CSS styling files
```

## Common Issues

- Port 3000 in use:
  ```bash
  PORT=3001 pnpm dev
  ```
- Command not found: pnpm
  ```bash
  npm install -g pnpm
  ```
- Dependencies error:
  ```bash
  rm -rf node_modules
  pnpm install
  ```

## Useful Commands

```bash
pnpm dev       # Start development server
pnpm build     # Build for production
pnpm lint      # Check for code issues
```

## Need Help?

- Check terminal errors
- Refresh the page
- Clear browser cache
- Confirm the server is running
- See docs/PROJECT_GUIDE.md for more details

---

Made for Calnic Medical Clinic Course Project
