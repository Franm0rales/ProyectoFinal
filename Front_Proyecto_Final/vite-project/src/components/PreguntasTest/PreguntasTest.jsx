export default function PreguntasTest() {
  return (
    <>
      <div class="container mt-sm-5 my-1">
        <div class="question ml-sm-5 pl-sm-5 pt-2">
          <div class="py-2 h5">
            <b>1. which option best describes your job role?</b>
          </div>
          <div class="ml-md-3 ml-sm-3 pl-md-5 pt-sm-0 pt-3" id="options">
            <label class="options">
              Small Business Owner or Employee
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="options">
              Nonprofit Owner or Employee
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
            <label class="options">
              Journalist or Activist
              <input type="radio" name="radio" />
              <span class="checkmark"></span>
            </label>
          </div>
        </div>
        <nav aria-label="Page navigation example ">
          <ul class="pagination">
            <li class="page-item">
              <a id="test" class="page-link" href="#">
                Previous
              </a>
            </li>
            <li class="page-item">
              <a id="test" class="page-link" href="#">
                1
              </a>
            </li>
            <li class="page-item">
              <a id="test" class="page-link" href="#">
                2
              </a>
            </li>
            <li class="page-item">
              <a id="test" class="page-link" href="#">
                3
              </a>
            </li>
            <li class="page-item">
              <a id="test" class="page-link" href="#">
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
