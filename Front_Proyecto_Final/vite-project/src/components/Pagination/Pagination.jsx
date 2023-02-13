export default function Pagination() {
  return (
    <nav
      aria-label="Page navigation example "
      className="d-flex justify-content-center pt-5"
    >
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
  );
}
