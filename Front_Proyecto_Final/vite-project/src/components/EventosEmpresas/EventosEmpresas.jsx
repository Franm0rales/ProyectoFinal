export default function EventosEmpresas() {
  return (
    <div class="container">
      <div class="card px-4 pt-4 pb-4 mx-auto mt-5">
        <div class="row">
          <img src="https://imgur.com/qzZIOK9.png" />
          <h5 class="align-self-center ml-2">Apple</h5>
          <div class="ml-auto">
            <span class="text-success">Seats available</span>
          </div>
        </div>
        <p class="mt-3 mb-2">10/06/20 -- Remote</p>
        <h5>Apple Worldwide Developer conference 2020</h5>
        <p class="mt-4 mb-2">Hosted by</p>
        <div class="users mb-5">
          <img src="https://imgur.com/uRVyoG7.png" />
          <img src="https://imgur.com/2W4OOpj.png" />
          <img src="https://imgur.com/3Jkqz66.png" />
          <img src="https://imgur.com/P5kPDPG.png" />
        </div>
        <button class="btn btn-dark mb-2">
          <span>Book a seat</span>
        </button>
        <button class="btn info">
          <span>More information</span>
        </button>
      </div>
    </div>
  );
}
