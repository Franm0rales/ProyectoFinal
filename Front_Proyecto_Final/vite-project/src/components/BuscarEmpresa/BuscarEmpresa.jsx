export default function BuscarEmpresa({ empresaABuscar, setEmpresaABuscar }) {
  return (
    <div class="col-2">
      <div>
        <input
          onChange={(e) => setEmpresaABuscar(e.target.value)}
          type="text"
          class="form-control  col-6 mt-5 d-flex mb-5"
          placeholder="Search"
          name="nombre"
          value={empresaABuscar}
        />
      </div>
    </div>
  );
}
