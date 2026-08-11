import type { Education } from "@/types/education";

export const education: Education[] = [
  {
    institution: "Chandigarh University",
    degree: "Bachelor of Engineering, ",
    field: "Computer Science",
    startDate: "2020-08",
    endDate: "2024-06",
    location: "Punjab, India",
    description: "Graduated with a CGPA of 8.03/10.0. Focused on core computer science fundamentals, data structures, algorithms, and software engineering principles.",
    coursework: ["Data Structures & Algorithms", "Operating Systems", "Computer Networks", "Object-Oriented Programming", "Database Management Systems"],
    isVisible: true
  },
  {
    institution: "Shivam International School (CBSE)",
    degree: "Higher Secondary, ",
    field: "Science (PCM)",
    startDate: "2017-04",
    endDate: "2018-06",
    location: "Patna, Bihar",
    description: "Completed Higher Secondary education under the CBSE curriculum with a focus on the Science stream.",
    coursework: ["Mathematics", "Physics", "Chemistry", "Computer Science"],
    isVisible: false
  }
];
