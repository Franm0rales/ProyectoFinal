export default function BuscarEmpresa({ handleInputNombre }) {
  return (
    <div class="col-2">
      <input
        onChange={(e) => handleInputNombre(e.target.value)}
        type="text"
        class="form-control  col-6 mt-5 d-flex mb-5"
        placeholder="Search"
        name="nombre"
      />
    </div>
  );
}
