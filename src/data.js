// Mock Data for IT Support Dashboard
// Scenario: Night Shift has low volume but critically high resolution times due to lack of senior support.

export const kpiData = {
    totalTickets: 342,
    avgResolutionTime: "48m", // Blended average
    slaBreachRate: "18%",    // Driven high by night shift
    trend: "+5% vs last week"
};

export const shiftAnalysisData = [
    {
        name: "Day Shift (9AM-6PM)",
        avgResolutionTime: 15, // minutes
        volume: 280,
        staffing: "Full Team"
    },
    {
        name: "Night Shift (9PM-6AM)",
        avgResolutionTime: 240, // 4 hours in minutes
        volume: 62,
        staffing: "Skeleton Crew"
    }
];

export const hourlyWorkloadData = [
    // Night Shift (Start of day)
    { hour: "00:00", tickets: 5 },
    { hour: "01:00", tickets: 4 },
    { hour: "02:00", tickets: 6 },
    { hour: "03:00", tickets: 3 },
    { hour: "04:00", tickets: 5 },
    { hour: "05:00", tickets: 8 },
    // Day Shift Ramp up
    { hour: "06:00", tickets: 15 },
    { hour: "07:00", tickets: 25 },
    { hour: "08:00", tickets: 40 },
    { hour: "09:00", tickets: 55 }, // Peak start
    { hour: "10:00", tickets: 60 },
    { hour: "11:00", tickets: 58 },
    { hour: "12:00", tickets: 45 }, // Lunch dip
    { hour: "13:00", tickets: 52 },
    { hour: "14:00", tickets: 55 },
    { hour: "15:00", tickets: 50 },
    { hour: "16:00", tickets: 42 },
    { hour: "17:00", tickets: 35 },
    // Evening/Night Shift transition
    { hour: "18:00", tickets: 25 },
    { hour: "19:00", tickets: 15 },
    { hour: "20:00", tickets: 10 },
    { hour: "21:00", tickets: 8 },
    { hour: "22:00", tickets: 6 },
    { hour: "23:00", tickets: 4 },
];
