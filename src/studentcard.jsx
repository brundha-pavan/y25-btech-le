export default function StudentCard({ name, rollNo, branch, cgpa }) {
  return (
    <article>
      <h2>{name}</h2>
      <p>Roll No: {rollNo}</p>
      <p>Branch: {branch}</p>
      <p>CGPA: {cgpa}</p>
    </article>
  );
}