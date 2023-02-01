export default function SearchAdmin() {
  return (
    <nav class="navbar bg-dark d-flex">
      <div class="container ">
        <a class="navbar-brand" href="#">
          <img
            src="../../Avatar.png"
            alt="Bootstrap"
            width="30"
            height="24"
            className="mr-3 rounded-circle img-thumbnail shadow-sm"
          />
          <span className="px-4 text-white">Fran admin</span>
        </a>
        <form class="d-flex" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary text-white" type="submit">
            Search
          </button>
        </form>
      </div>
    </nav>
  );
}
