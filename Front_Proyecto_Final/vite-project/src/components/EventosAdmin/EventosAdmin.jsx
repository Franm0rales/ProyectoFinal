export default function EventosAdmin(){
    return(
        <div class="container">
    <div class="row pt-5 pb-5">
        <div class="col-xl-3 col-md-6">
            <div class="card-admin bg-pattern">
                <div class="card-body">
                    <div class="float-right">
                        <i class="fa fa-archive text-primary h4 ml-3"></i>
                    </div>
                    <h1 class=" mt-0 pt-1">24</h1>
                    <p class="text-muted mb-0">Eventos totales</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card-admin bg-pattern">
                <div class="card-body">
                    <div class="float-right">
                        <i class="fa fa-th text-primary h4 ml-3"></i>
                    </div>
                    <h1 class="mt-0 pt-1">18</h1>
                    <p class="text-muted mb-0">Eventos completados</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card-admin bg-pattern">
                <div class="card-body">
                    <div class="float-right">
                        <i class="fa fa-file text-primary h4 ml-3"></i>
                    </div>
                    <h1 class="mt-0 pt-1">06</h1>
                    <p class="text-muted mb-0">Eventos pendientes</p>
                </div>
            </div>
        </div>
        <div class="col-xl-3 col-md-6">
            <div class="card-admin">
                <div class="card-body">
                    <form>
                        <div class="form-group mb-0">
                            <label>Search</label>
                            <div class="input-group mb-0">
                                <input type="text" class="form-control" placeholder="Search..." aria-describedby="project-search-addon" />
                                <div class="input-group-append">
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-lg-12">
            <div class="card-admin">
                <div class="card-body">
                    <div class="table-responsive project-list">
                        <table class="table project-table table-centered table-nowrap shadow-none">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Eventos</th>
                                    <th scope="col">Fecha evento</th>
                                    <th scope="col">Estado</th>
                                    <th scope="col">Asistentes</th>
                                    <th scope="col">Progreso</th>
                                    <th scope="col">Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>New admin Design</td>
                                    <td>02/5/2019</td>
                                    <td>
                                        <span class="text-success font-12"><i class="mdi mdi-checkbox-blank-circle mr-1"></i> Completed</span>
                                    </td>
                                    <td>
                                        <div class="team">
                                            <a href="javascript: void(0);" class="team-member" data-toggle="tooltip" data-placement="top" title="" data-original-title="Roger Drake">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar6.png" class="rounded-circle avatar-xs" alt="" style={{width:"1.5rem",height:"1.5rem"}} />
                                            </a>

                                            <a href="javascript: void(0);" class="team-member" data-toggle="tooltip" data-placement="top" title="" data-original-title="Reggie James">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar7.png" class="rounded-circle avatar-xs" alt="" style={{width:"1.5rem",height:"1.5rem"}}  />
                                            </a>

                                            <a href="javascript: void(0);" class="team-member" data-toggle="tooltip" data-placement="top" title="" data-original-title="Gerald Mayberry">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar8.png" class="rounded-circle avatar-xs" alt="" style={{width:"1.5rem",height:"1.5rem"}}  />
                                            </a>
                                        </div>
                                    </td>
                                    <td>
                                        <p class="mb-0">Progress<span class="float-right">100%</span></p>

                                        <div class="progress mt-2" style={{height: "5px"}}>
                                            <div class="progress-bar bg-success" role="progressbar" style={{width: "100%"}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                        </div>
                                    </td>

                                    <td>
                                        <div class="action">
                                        <i class="bi bi-x-square-fill  text-danger "></i>
                                        </div>
                                    </td>
                                </tr>

                               

                                
                            </tbody>
                        </table>
                    </div>

                   
                </div>
            </div>
        </div>
    </div>
</div>
    )
}