import { images } from "./images";

export const resultData = [
  {
    year: "2023/2024",
    result: [
      {
        id: "first_semester2023/2024",
        semester: "First Semester",
        CummulativeGradePoint: 3.5,
        class: "Second Class Upper",
        courses: [
          {
            course: "Environmental Protection and Community Informatics",
            code: "ENV 102",
            creditHours: 3,
            grade: "A",
            gradePoint: 4.0,
            qualityPoint: 12.0,
          },
          {
            course: "Community Health Planning",
            code: "CHP 201",
            creditHours: 3,
            grade: "B+",
            gradePoint: 3.5,
            qualityPoint: 10.5,
          },
          {
            course: "Health Policy Analysis",
            code: "HPA 301",
            creditHours: 3,
            grade: "A-",
            gradePoint: 3.7,
            qualityPoint: 11.1,
          },
          {
            course: "Community Development Planning",
            code: "CDP 202",
            creditHours: 3,
            grade: "B",
            gradePoint: 3.0,
            qualityPoint: 9.0,
          },
        ],
      },
      {
        id: "second_semester2024/2024",
        semester: "Second Semester",
        CummulativeGradePoint: 4.0,
        class: "Second Class Upper",
        courses: [
          {
            course: "Environmental Protection and Community Informatics",
            code: "ENV 102",
            creditHours: 3,
            grade: "A",
            gradePoint: 4.0,
            qualityPoint: 12.0,
          },
          {
            course: "Community Health Planning",
            code: "CHP 201",
            creditHours: 3,
            grade: "B+",
            gradePoint: 3.5,
            qualityPoint: 10.5,
          },
          {
            course: "Health Policy Analysis",
            code: "HPA 301",
            creditHours: 3,
            grade: "A-",
            gradePoint: 3.7,
            qualityPoint: 11.1,
          },
          {
            course: "Community Development Planning",
            code: "CDP 202",
            creditHours: 3,
            grade: "B",
            gradePoint: 3.0,
            qualityPoint: 9.0,
          },
        ],
      },
    ],
  },
  {
    year: "2022/2023",
    result: [
      {
        id: "first_semester2022/2023",
        semester: "First Semester",
        CummulativeGradePoint: 3.5,
        class: "Second Class Upper",
        courses: [
          {
            course: "Environmental Protection and Community Informatics",
            code: "ENV 102",
            creditHours: 3,
            grade: "A",
            gradePoint: 4.0,
            qualityPoint: 12.0,
          },
          {
            course: "Community Health Planning",
            code: "CHP 201",
            creditHours: 3,
            grade: "B+",
            gradePoint: 3.5,
            qualityPoint: 10.5,
          },
          {
            course: "Health Policy Analysis",
            code: "HPA 301",
            creditHours: 3,
            grade: "A-",
            gradePoint: 3.7,
            qualityPoint: 11.1,
          },
          {
            course: "Community Development Planning",
            code: "CDP 202",
            creditHours: 3,
            grade: "B",
            gradePoint: 3.0,
            qualityPoint: 9.0,
          },
        ],
      },
      {
        id: "second_semester2022/2023",
        semester: "Second Semester",
        CummulativeGradePoint: 4.0,
        class: "Second Class Upper",
        courses: [
          {
            course: "Environmental Protection and Community Informatics",
            code: "ENV 102",
            creditHours: 3,
            grade: "A",
            gradePoint: 4.0,
            qualityPoint: 12.0,
          },
          {
            course: "Community Health Planning",
            code: "CHP 201",
            creditHours: 3,
            grade: "B+",
            gradePoint: 3.5,
            qualityPoint: 10.5,
          },
          {
            course: "Health Policy Analysis",
            code: "HPA 301", 
            creditHours: 3,
            grade: "A-",
            gradePoint: 3.7,
            qualityPoint: 11.1,
          },
          {
            course: "Community Development Planning",
            code: "CDP 202",
            creditHours: 3,
            grade: "B",
            gradePoint: 3.0,
            qualityPoint: 9.0,
          },
        ],
      },
    ],
  },
];

export const courseInformation = [
  {
    code: "CHP 201",
    name: "Community Health Planning",
    creditHours: 3,
    image: images.environmental_sanitation,
    lecturer: {
      id: "lect256",
      name: "Jonas Asiedu",
      title: "Prof."
    },
    courseMaterial: [
      {
        name: "Introduction to Environmental Sanitation",
        docType: "file/pdf",
        numberOfPages: 54,
      },
      {
        name: "Overview of Environmental Sanitation",
        docType: "file/pdf",
        numberOfPages: 104
      },
      {
        name: "Lecture Notes",
        docType: "file/doc",
        numberOfPages: 84
      },
      {
        name: "Past Questions 2020 - 2024",
        docType: "file/pdf",
        numberOfPages: 22
      }
    ]
  },
  {
    code: "HPA 301",
    name: "Health Policy Analysis",
    creditHours: 3,
    image: images.health_policy,
    lecturer: {
      id: "lect152",
      name: "Fredrick Essien",
      title: "Dr."
    },
    courseMaterial: [
      {
        name: "Health Policy in Ghana",
        docType: "file/pdf",
        numberOfPages: 152,
      },
      {
        name: "Gender roles in Health Policy",
        docType: "file/pdf",
        numberOfPages: 24
      },
      {
        name: "Lecture Notes",
        docType: "file/doc",
        numberOfPages: 104
      },
      {
        name: "Past Questions 2020 - 2024",
        docType: "file/pdf",
        numberOfPages: 14
      }
    ]
  },
  {
    code: "CDP 202",
    name: "Community Development Planning",
    creditHours: 3,
    image: images.community_development,
    lecturer: {
      id: "lect122",
      name: "Freda Mensah",
      title: "Mrs."
    },
    courseMaterial: [
      {
        name: "Introduction to Community Development Planning",
        docType: "file/pdf",
        numberOfPages: 205,
      },
      {
        name: "Lecture Notes",
        docType: "file/doc",
        numberOfPages: 84
      },
      {
        name: "Past Questions 2020 - 2024",
        docType: "file/pdf",
        numberOfPages: 22
      }
    ],
    quizzes: [
      {
        id: "xvj1Dh",
        title: "Midsemester Examination",
        deadline: "25/09/2025",
        score: 0,
        allocated: 100,
        studentsCount: 255,
        duration: 60
      },
      {
        id: "bz2Hdt",
        title: "Take Home Assignment",
        deadline: "30/09/2025",
        score: 0,
        allocated: 20,
        studentsCount: 255,
        duration: 30
      },
      {
        id: "JV5ghf",
        title: "Quiz One (1)",
        deadline: "30/09/2025",
        score: 0,
        allocated: 10,
        studentsCount: 255,
        duration: 45
      },
    ]
  },
];


