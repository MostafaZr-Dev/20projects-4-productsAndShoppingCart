import { useEffect } from "react";

import Container from "../Container";
import useGetAPI from "Hooks/useGetAPI";
import Table from "./Components/Table";
import { TableSkeleton } from "Components/Skeleton";

function Category() {
  const [response, getCategoriesFromAPI] = useGetAPI({
    url: "/category",
    headers: {},
  });

  const { data, success, error, isLoading } = response;

  useEffect(() => {
    getCategoriesFromAPI();
  }, []);

  return (
    <Container title="لیست دسته بندی ها">
      {isLoading && <TableSkeleton />}
      {!isLoading && <Table data={data.categories ? data.categories : null} />}
    </Container>
  );
}

export default Category;
