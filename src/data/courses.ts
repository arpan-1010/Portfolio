export interface Course {
  slug: string;
  degree: string;
  branch: string;
  institution: string;
  passingYear: string;
  cgpa: string;
}

export const courses: Course[] = [
  {
    slug: "btech",
    degree: "Bachelor of Technology",
    branch: "Computer Science & Technology",
    institution: "GITA Autonomous College, Bhubaneswar",
    passingYear: "2024",
    cgpa: "9.41",
  },
  {
    slug: "mtech",
    degree: "Master of Technology",
    branch: "Computer Science and Engineering",
    institution: "Indian Institute of Information Technology, Guwahati",
    passingYear: "2027 (Expected)",
    cgpa: "7.53",
  },
];
