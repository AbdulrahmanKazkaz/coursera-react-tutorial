import { Link } from "react-router-dom";
import { Breadcrumb as BootstrapBreadCrumb, BreadcrumbItem } from "reactstrap";

export const BreadCrumb = ({ name }) => {
  return (
    <div className="row">
      <BootstrapBreadCrumb className="mt-3">
        <BreadcrumbItem>
          <Link to="/">Home</Link>
        </BreadcrumbItem>
        <BreadcrumbItem active>{name}</BreadcrumbItem>
      </BootstrapBreadCrumb>
      <div className="col-12">
        <h3>{name}</h3>
        <hr />
      </div>
    </div>
  );
};
