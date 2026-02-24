# **App Name**: MentorSync

## Core Features:

- Role-based Authentication and User Profiles: Securely register and log in users (students, teachers) and store their essential profile details and roles in Firestore for tailored access.
- Rule-based Mentor Allocation: A deterministic system that matches students to teachers based on predefined interest categories, teacher availability, and workload, dynamically preventing mentor overloading by updating Firestore records.
- Teacher Availability and Schedule Management: Teachers can easily toggle their active mode and manage their availability by defining fixed and blocked schedule slots, updating Firestore's user and schedule collections.
- Student-Initiated Interaction Requests: Students can send direct interaction requests to their allocated teachers, with options for exam mode and anonymous submissions, recorded in Firestore's interactionRequests collection and notifying teachers via FCM.
- Teacher Request Review & Session Initiation: Teachers can review incoming student interaction requests, accept or reject them, leading to the creation of session records in Firestore and notification to the student via FCM.
- Basic Spam Detection: A rule-based system that flags suspicious student interaction requests based on predefined rules (e.g., message frequency, blacklisted keywords) and creates reports in Firestore for review.

## Style Guidelines:

- Primary color: A deep, professional blue (#264D99), reflecting reliability and intelligence, chosen to contrast effectively with a light background.
- Background color: A very light, subtle blue (#EDF3FC), derived from the primary hue but heavily desaturated to ensure readability and a clean aesthetic.
- Accent color: A vibrant cyan (#2BC2DB), analogous to the primary color, providing strong contrast for interactive elements and highlights to evoke connectivity.
- Headline font: 'Space Grotesk' (sans-serif) for its modern, techy feel, conveying intelligence and precision. Body font: 'Inter' (sans-serif) for its excellent readability and neutral, objective appearance in information-dense sections.
- Use clean, modern, line-based icons with subtle fills for status indications, aligning with the professional and functional nature of an intelligent academic system.
- A clean, modular, and responsive layout, prioritizing information hierarchy and readability with clear dashboard interfaces for students and teachers. Utilize generous white space to enhance focus.
- Subtle and smooth transition animations for navigation and state changes, enhancing user flow without distracting from critical content or functionality.