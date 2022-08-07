import React from "react";
import { useLocation, useNavigate } from "react-router";
// reactstrap components
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import useQuery from "../../hooks/useQuery";

const FilterBottomSide = ({ totalPageSize }) => {
  const [page, x] = useQuery("page");
  const location = useLocation();
  const navigate = useNavigate();
  const pageNum = parseInt(page ?? 1);
  console.log(x)

  const handlePage = (y) => {
    console.log(location.search);
    
    x.delete("page")
    x?.append('page', pageNum + y);
    navigate("?" + x.toString());
  };
  console.log(page, totalPageSize)
  return (
    <>
      <nav aria-label="Page navigation example">
        <Pagination
          className="pagination justify-content-center"
          listClassName="justify-content-center"
        >
          <PaginationItem disabled={pageNum <= 1}>
            <PaginationLink
              onClick={() => handlePage(-1)}
              tabIndex="-1"
            >
              <i className="fa fa-angle-left" />
              <span className="sr-only">Previous</span>
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink onClick={(e) => e.preventDefault()}>
              {pageNum}
            </PaginationLink>
          </PaginationItem>
          <PaginationItem disabled={pageNum >= totalPageSize}>
            <PaginationLink onClick={() => handlePage(1)}>
              <i className="fa fa-angle-right" />
              <span className="sr-only">Next</span>
            </PaginationLink>
          </PaginationItem>
        </Pagination>
      </nav>
    </>
  );
};

export default FilterBottomSide;
