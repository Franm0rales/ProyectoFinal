import "./HomeAdmin.css";
export default function HomeAdmin() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="main-box clearfix">
              <div class="table-responsive">
                <table class="table user-list">
                  <thead>
                    <tr>
                      <th>
                        <span>Usuarios</span>
                      </th>
                      <th>
                        <span>Fecha alta</span>
                      </th>
                      <th class="text-center">
                        <span>Estado</span>
                      </th>
                      <th>
                        <span>Email</span>
                      </th>
                      <th>&nbsp;</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <img
                          src="https://bootdey.com/img/Content/avatar/avatar1.png"
                          alt=""
                          style={{ width: "5rem", height: "3rem" }}
                        />
                        <a href="#" class="user-link">
                          Mila Kunis
                        </a>
                        <span class="user-subhead">Admin</span>
                      </td>
                      <td>2013/08/08</td>
                      <td class="text-center">
                        <span class="label label-default">Inactive</span>
                      </td>
                      <td>
                        <a href="#">mila@kunis.com</a>
                      </td>
                      <td style={{ width: "20%" }}>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="fa fa-search-plus fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link">
                          <span class="fa-stack">
                            <i class="fa fa-square fa-stack-2x"></i>
                            <i class="bi bi-pencil text-primary"></i>
                          </span>
                        </a>
                        <a href="#" class="table-link danger">
                          <span class="fa-stack">
                            <i class="bi bi-x-square-fill text-danger px-4"></i>
                            <i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
                          </span>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <ul class="pagination pull-right">
              <li>
                <a href="#">
                  <i class="fa fa-chevron-left"></i>
                </a>
              </li>
              <li>
                <a href="#">1</a>
              </li>
              <li>
                <a href="#">2</a>
              </li>
              <li>
                <a href="#">3</a>
              </li>
              <li>
                <a href="#">4</a>
              </li>
              <li>
                <a href="#">5</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
