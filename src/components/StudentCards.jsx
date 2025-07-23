import React from 'react';
import './StudentCards.css';

const students = [
  {
    id: 1,
    name: 'Sri Dharsini',
    course: 'B.Tech Artificial Intelligence and Data Science',
    bio: 'Loves AI and pastel designs',
    achievements: 'Won Hackathon 2024',
    github: 'https://github.com/sridharsini-sys/ushadharsini',
    photo: 'https://i.postimg.cc/bvjNX6YF/Screenshot-2025-07-22-214943.png',
    linkedin: 'https://linkedin.com/in/sri-dharsini',
    email: 'sridharsini2006@gmail.com'
  },
  {
    id: 2,
    name: 'Subbulaxmy',
    course: 'B.Tech Artificial Intelligence and Data Science',
    bio: 'Creative coder with an eye for glowing UI designs',
    achievements: 'Won Hackathon 2024',
    github: 'https://github.com/subbu-sys2005/subbulaxmy-portfolio',
    photo: 'https://i.postimg.cc/ZY1Q1BZs/Screenshot-2025-07-23-215945.png',
    linkedin: 'https://linkedin.com/in/subbulaxmy',
    email: 'subbu2005@gmail.com'
  },
  {
    id: 3,
    name: 'Ranjani',
    course: 'AI & Data Science',
    bio: 'Data analytics',
    achievements: 'Won Hackathon 2024',
    photo: 'https://i.postimg.cc/T1BVKQZD/Screenshot-2025-07-24-005009.png',
    linkedin: 'https://linkedin.com/in/Ranjani',
    email: 'ranjani2005@gmail.com'
  },
  {
    id: 4,
    name: 'Harisree',
    course: 'B.Com (C.A)',
    bio: 'Business Accounter',
    skills: 'Basic computer knowledge',
    photo: 'https://i.postimg.cc/zXLpqH9h/Screenshot-2025-07-24-005001.png',
    linkedin: 'https://linkedin.com/in/Harisree',
    email: 'harisree2004@gmail.com'
  }
];

function StudentCards() {
  return (
    <div className="card-container">
      {students.map((student) => (
        <div className="student-card" key={student.id}>
          <img src={student.photo} className="student-img" alt={student.name} />
          <h2>{student.name}</h2>
          <p>{student.course}</p>
          <p>{student.bio}</p>
          {student.achievements && <p>{student.achievements}</p>}
          {student.skills && <p><strong>Skills:</strong> {student.skills}</p>}
          <div>
            {student.github && <a href={student.github}>GitHub</a>} {' '}
            | <a href={student.linkedin}>LinkedIn</a>
          </div>
          <p>{student.email}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentCards;