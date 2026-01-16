# IT Support Process Improvement Dashboard

**Role:** Analyst Trainee / Frontend Developer Candidate
**Tech Stack:** React, Tailwind CSS, Recharts, Vite

## 📌 Project Overview
This project is a **Concept Validation Dashboard** designed to demonstrate data-driven decision-making in an IT Support environment. It was built to solve a specific business problem: **identifying the root cause of high SLA breaches during night shifts.**

The dashboard visualizes key performance indicators (KPIs) to correlate **Staffing Levels** with **Resolution Times**, providing actionable insights for process improvement.

## 💼 Business Scenario (The "Why")
**Observation:** The IT Operations team noticed a spike in SLA breaches despite overall ticket volume remaining within capacity.
**Data Analysis:**
- **Day Shift:** High Volume, Fast Resolution (Standard Operation).
- **Night Shift:** Low Volume, **400% Slower Resolution** (Anomaly).

**Conclusion:** The issue is not workload (volume), but **capability**. The Night Shift typically relies on junior staff who lack Level 2 support permissions, leading to long hold times for simple escalations.

**Recommendation:** Reallocate 2 Senior Analysts to a rotational Night Shift roster to reduce average resolution time and eliminate SLA breaches.

## 🚀 Key Features
- **KPI Metrics Cards**: Instant view of Total Tickets, Average Resolution Time (Blended), and SLA Breach Rate.
- **Shift Analysis Chart (Bar)**: A visual proof-point contrasting Day vs. Night shift efficiency.
- **Hourly Workload Trends (Line)**: Demonstrates that volume is NOT the root cause of the night shift delays.
- **Actionable Insights Panel**: Auto-generated recommendations based on the data analysis, ready for stakeholder presentation.

## 🛠️ Technical Implementation
- **React (Vite)**: Selected for component modularity and high performance.
- **Recharts**: Used for composable, responsive data visualization.
- **Tailwind CSS**: Implemented for rapid, professional styling consistent with corporate design systems.
- **Lucide React**: Vector iconography for clear visual hierarchy.

## 💻 Getting Started

### Prerequisites
- Node.js (v18+ recommended)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/05FireFox/Process-Improvement-Initiatives.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Process-Improvement-Initiatives
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running Locally
Start the development server:
```bash
npm run dev
```

## 📸 Dashboard Preview
*(Add a screenshot of your dashboard here)*

---
*This project was built to demonstrate proficiency in both **Technical Implementation (React/Frontend)** and **Business Analysis (Process Improvement)**.*
