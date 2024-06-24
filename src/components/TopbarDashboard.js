import './TopbarDashboard.css'


function TopbarDashboard() {

    return (
    <div className="row">
        <div className="row top_tiles">
            <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-24">
                <div className="tile-stats">
                    <div className="icon"><i className="fa fa-ticket"></i></div>
                    <div className="count"></div>
                    <h3>Tickets Pendientes</h3>
                </div>
            </div>
            <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-24">
                <div className="tile-stats">
                    <div className="icon"><i className="fa fa-list-alt"></i></div>
                    <div className="count"></div>
                    <h3>Proyectos</h3>
                </div>
            </div>
            <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-24">
                <div className="tile-stats">
                    <div className="icon"><i className="fa fa-th-list"></i></div>
                    <div className="count"></div>
                    <h3>Categorias</h3>
                </div>
            </div>
            <div className="animated flipInY col-lg-3 col-md-3 col-sm-6 col-xs-24">
                <div className="tile-stats">
                    <div className="icon"><i className="fa fa-users"></i></div>
                    <div className="count"></div>
                    <h3>Usuarios</h3>
                </div>
            </div>
        </div>
    </div>
    );
}

export default TopbarDashboard;