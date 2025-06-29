const Student = ({ student }) => {
  return (
    <>
      <h4>Student</h4>
      {student.map((student) => (
        <div>
          <ul>
            <li>{student.Name}</li>
            <li>{student.Age}</li>
          </ul>
        </div>
      ))}
    </>
  );
};

export default Student;
