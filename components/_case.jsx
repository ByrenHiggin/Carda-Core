
const Case = (props) => (
  <div>
    <h3>Case Details</h3>
    <div>
        <p>Case Number: {props.case.CaseNumber}</p>
        <p>Created Date: {props.case.Created_date}</p>
    </div>
  </div>
)

export default Case