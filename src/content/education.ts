import type { Education } from "@/types/education";

export const education: Education[] = [
  {
    institution: "Chandigarh University",
    degree: "Bachelor of Engineering",
    field: "Computer Science",
    startDate: "2018-08",
    endDate: "2022-06",
    location: "Punjab, India",
    description: "Graduated with a CGPA of 8.03/10.0. Focused on core computer science fundamentals, data structures, algorithms, and software engineering principles.",
    coursework: ["Data Structures & Algorithms", "Object-Oriented Programming", "Database Management Systems", "Software Engineering"],
    isVisible: true
  },
  {
    institution: "Shivam International School (CBSE)",
    degree: "Intermediate (12th)",
    field: "PCM (Physics, Chemistry, Mathematics)",
    startDate: "2017-04",
    endDate: "2018-06",
    location: "Patna, Bihar",
    description: "Graduated with 55.3% in the CBSE board examinations.",
    isVisible: true
  }
];
