import { useState } from "react";
import StudentCard from "./studentcard";
import "./index.css";

const students = [
  {
    rollNo: "CS101",
    name: "Asha Kumar",
    branch: "Computer Science",
    cgpa: 8.7,
  },
  {
    rollNo: "EC102",
    name: "Ravi Shah",
    branch: "Electronics",
    cgpa: 7.9,
  },
  {
    rollNo: "ME103",
    name: "Mina Patel",
    branch: "Mechanical",
    cgpa: 8.2,
  },
  {
    rollNo: "CE104",
    name: "Arjun Das",
    branch: "Civil",
    cgpa: 7.5,
  },
];

export default function App() {
  const [showProfiles, setShowProfiles] = useState(true);

  return (
    
    <main className="page">
      <header className="page-heading">
        <p className="eyebrow">STUDENT DIRECTORY</p>
        <h1>Student profiles</h1>
        <p className="subtitle">
          A quick look at each student's academic details.
        </p>

        <button
          className="visibility-button"
          type="button"
          onClick={() => setShowProfiles((show) => !show)}
          aria-expanded={showProfiles}
        >
          {showProfiles ? "Hide all profiles" : "Show all profiles"}
        </button>
      </header>

      {showProfiles && (
        <section className="student-grid" aria-label="Student profiles">
          {students.map((student) => (
            <StudentCard key={student.rollNo} {...student} />
          ))}
        </section>
      )}
    </main>
  );
}