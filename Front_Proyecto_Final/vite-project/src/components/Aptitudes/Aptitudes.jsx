export default function Aptitudes() {
  return (
    <table class="table container col-8">
      <thead>
        <tr>
          <th scope="col">Respuestas</th>
          <th scope="col">Significado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">
            3 <i class="bi bi-arrow-right"></i>
          </th>
          <td>"TE CONSIDERAS MUY COMPETENTE"</td>
        </tr>
        <tr>
          <th scope="row">
            2 <i class="bi bi-arrow-right"></i>
          </th>
          <td>"TE CONSIDERAS COMPETENTE"</td>
        </tr>
        <tr>
          <th scope="row">
            1 <i class="bi bi-arrow-right"></i>
          </th>

          <td>"TE CONSIDERAS MEDIANAMENTE COMPETENTE"</td>
        </tr>
        <tr>
          <th scope="row">
            0 <i class="bi bi-arrow-right"></i>
          </th>

          <td>"TE CONSIDERAS INCOMPETENTE"</td>
        </tr>
      </tbody>
    </table>
  );
}
