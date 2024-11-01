import "../style2.css";

export default function Result() {
  return (
    <div className="ResultPage">
      <h1>Grand Entrance Exam Result</h1>
      <div className="input-container">
        <form>
          <div className="input-div">
            <label>Registration Number*</label>
            <input type="number" placeholder="Registration Number" required />
          </div>

          <div className="input-div">
            <label>CNIC or B-Form Number*</label>
            <input type="number" placeholder="CNIC or B-Form Number" required />
          </div>

          <div className="submit-container">
            <button>Get Result</button>
          </div>
        </form>
      </div>
    </div>
  );
}
