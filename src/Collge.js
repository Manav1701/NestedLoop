import Student from './Student'

const Collge = ({ collge }) => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#ccc",
          border: "1px solid black",
          margin: "10px",
          padding: "5px",
          borderRadius: "30px",
          display : 'flex',
          justifyContent:'center',
        }}
      >
        <div>
          <h2>{collge.Name}</h2>
          <ul>
            <li>
              <h5>{collge.Website}</h5>
            </li>
            <li>
              <Student student={collge.student} />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Collge;
