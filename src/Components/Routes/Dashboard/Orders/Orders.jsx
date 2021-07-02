import { useEffect } from "react";

import Container from "../Container";
import useGetAPI from "Hooks/useGetAPI";
import { TableSkeleton } from "Components/Skeleton";
import OrdersList from "./Components/OrdersList";

function Orders() {
  const [response, getOrdersAPI] = useGetAPI({
    url: "/orders",
    headers: {},
  });

  const { success, isLoading, error, data } = response;

  useEffect(() => {
    getOrdersAPI();
  }, []);

  return (
    <Container title="لیست سفارشات">
      {isLoading && <TableSkeleton />}
      {!isLoading && <OrdersList orders={data.orders} />}
    </Container>
  );
}

export default Orders;
