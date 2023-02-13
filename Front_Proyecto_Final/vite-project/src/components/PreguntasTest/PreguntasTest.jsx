export default function PreguntasTest({ key, test }) {
  return (
    <>
      <div className="container mt-sm-5 my-1" key={key}>
        <div className="question ml-sm-5 pl-sm-5 pt-2">
          <div className="py-2 h5">
            <b>{test}</b>
          </div>
          <div className="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <label className="options">
              Small Business Owner or Employee
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="options">
              Nonprofit Owner or Employee
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
            <label className="options">
              Journalist or Activist
              <input type="radio" name="radio" />
              <span className="checkmark"></span>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
