# Calnic Medical Clinic

A web application design to help clinic staff manage medical clinic appointments, built for CPSC 441 Design Portfolio 2.

## Authors (Full Names)

- Magdy Hafez
- Nicholas Holt
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

## Walkthrough

Follow these steps precisely to experience the core features. Refer to the demo video to see features in action!

Note: Some patients and appointments have already been added to simulate the system in action.

### 1) Login and view different calendar views (Front Desk Admin first)

- On the Login page, type:
  - Username: `admin`
  - Password: `admin`
- Click “Login”
- You will land on the dashboard
- In the center calendar:
  - Click “Day” to view single-day schedule
  - Click “Week” to view weekly schedule
  - Click “Month” to view monthly schedule
  - Click “Agenda” to view list of appointments
- Use the "Today" button to return to the current date
- Use the "Back" and "Next" arrows to navigate dates
- Selecting a date on the calendar will bring you to that date's day-view
- Observe colored blocks:
  - Green: Dr. Ahmed bookings
  - Pink: Dr. Turner bookings
  - Orange: Dr. Mike bookings
  - Blue: Dr. Joel bookings
- Click on any booking to see more information and access functions such as "Change Appointment" and "Cancel"
- Toggle doctor bookings using the selection buttons on the left
- Search for a patients bookings using the search bar in the right top corner
  - Clear filters using the x
- At any point, use the Calnic Logo in the top left hand corner to return to this screen.

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
- Click “Back to Dashboard” or make a booking

### 3) Create a booking

- On the left sidebar, click “Book”
- Booking guide steps:
  1. Select Patient:
     - As you type in the patient text-box, you can select an existing patient that appears below.
     - If the patient is not already in the database, an "Add Patient" button will appear. You can use this to add a new patient while booking.
  2. Select Appointment Type:
     - Use the radio buttons to select an appointment type.
     - Hover over the information icons on the left side of the appointment types to see more information.
  3. Add Notes and Medical History:
     - Use the input boxes labelled "Notes" and "Relevant Medical History" to add infromation to the booking. This info can be viewed at the end of the booking and on the dashboard when the appointment is selected.
  4. Click "Confirm"
  5. Decide on Using Diagnostic Questionnaire:
     - If used, answer each question (Note: questions are reactive and will given based on previous answers)
     - You may also skip the rest of the diagnostic at any time
     - If the questionnaire is skipped, move to step 7.
  6. Choose Docter:
     - Upon completing the questionnaire, you will be given a page to choose a doctor.
     - The doctor at the top of the page is the recommended doctor based on answers to the previous questions.
     - Select "Book with Doctor" on any of the doctors.
     - You may also choose the "Next Available Doctor" or "Change Answers" using the buttons at the top right.
  7. Schedule:
     - Use the left toolbar to change doctor choice, appointment type, and add to the "Symptoms" input box if necessary.
     - Use the calendar to select a date by pressing on the day.
     - Either use the "Quick Time" suggestions given on the left toolbar, or select your own timeslot on the calendar itself once a day is chosen.
     - Note: if custom time is chosen, you may drag on the calendar to add a custom length appointment
     - Appointments may not be booked where the calendar block is greyed out (due to another appointment with the selected doctor, or an invalid date. Doing so will give an error message.
  8. Click “Next: Confirm”:
     - Review on the confirmation screen, then click “Confirm Appointment”.
     - A success screen will be shown, from here you can review details.
     - Select "Open PDF" to print or download appointment details.
  9. View Appointment:
     - Use "Back to Dashboard" to return to the dashboard.
     - From here, you will be able to navigate to your new booking, using "Search Patient" or "Filter by Doctor" if needed.
     - Clicking on the booking will give in-depth information on booking information.

### 4) Switch to Doctor Login
- Click on the user's name (John Doe) in the top right corner
- Click “Logout”
- On the Login page, type:
  - Username: `turner`
  - Password: `doctor`
- Click “Login”
- You will land on the Doctor Dashboard

### 5) Book Off Time and Manage Status from Doctor Dashboard

- Select the "Change Availability" button
- To book time off:
  - Either drag to select a date range, or manually pick a range using the "Start" and "End" boxes.
  - Add a reason to the "Reason" input box.
  - Select "Review". If the range you provided overlaps with already booked appointments, you will receive a warning.
  - Press "Confirm" to confirm the time off.
  - All time off will be added to the "Unavailable blocks" section. You may also remove time off from here.
  - Either select "Add more" or "Back to schedule"
- The doctor dashboard also allows the doctor to select their current status. Use the dropdown menu on the left toolbar to do so.
- All of Dr. Turner's appointments can be viewed from his dashboard.

### 6) Switch back to Front Desk Admin and resolve any problems with the book-off holiday (only if a conflict was created earlier)

- Logout using the profile button in the top right hand corner.
- Login again as Front Desk Admin:
  - Username: `admin`
  - Password: `admin`
- Check the right sidebar for alerts/conflicts or open the calendar to see conflicted bookings
- For each conflict:
  - Use the warning and press "Reschedule" or find the conflict in the calendar and press "Change Appointment"
  - Pick a new date/time outside the doctor’s holiday range (which will now be greyed out)
  - Confirm changes
- Verify that conflicts are cleared and the calendar shows updated appointments

## What cases/functions were implemented?

- Authentication:
  - Front Desk Admin login (admin/admin)
  - Doctor login (turner/doctor)
  - Ability to switch accounts
  - User's stay logged in, even if the website is reloaded
- Patient Management:
  - Add new patient form and persistence in store
- Appointment Booking:
  - Multi-step booking guide including step by step patient question's and doctor recommendations
  - Appointment confirmation and calendar rendering
  - Double booking prevention
- Calendar Views:
  - Day, Week, Month, Year toggle and navigation
- Calendar Filters:
  - Filter by Doctor and Search Patient
- Appointment Management:
  - Select appointments to get information and edit or cancel
- Doctor Availability:
  - Book off time
  - Conflict detection for overlapping appointments
- Conflict Resolution:
  - Front Desk flow to reschedule affected appointments
- Error prevention
  - Appointments cannot be booked during invalid times (past dates, clinic closed, time off, preexisting appointment)
  - Patient's must be added to system before a booking is made with them
  - Mandatory fields are marked with a star and must be completed before continuing

## What data should be entered and when?

- At Login:
  - Admin: username `admin`, password `admin`
  - Doctor: username `turner`, password `doctor`
- New Patient Form:
  - Enter full demographics before creating bookings (name, DOB, contact, address)
- Booking Appointment:
  - Patient name that is already in the database
  - Notes, Medical History, Symptoms all optional
  - Use guide above for more information
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
