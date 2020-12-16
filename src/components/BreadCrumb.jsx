import { Link } from "react-router-dom";
import { Breadcrumb as BootstrapBreadCrumb, BreadcrumbItem } from "reactstrap";

export const BreadCrumb = ({ name, menuComponent }) => {
  return (
    <div className="row">
      <BootstrapBreadCrumb className="mt-3">
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        {name && <BreadcrumbItem active>{name}</BreadcrumbItem>}
        {menuComponent && (
          <>
            <BreadcrumbItem>
              <Link to="/menu">Menu</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{menuComponent}</BreadcrumbItem>
          </>
        )}
      </BootstrapBreadCrumb>
      <div className="col-12">
        {name ? <h3>{name}</h3> : <h3>{menuComponent}</h3>}
        <hr />
      </div>
    </div>
  );
};
