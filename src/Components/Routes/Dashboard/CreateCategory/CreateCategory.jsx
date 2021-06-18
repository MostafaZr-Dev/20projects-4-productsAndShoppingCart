import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import Container from "../Container";
import Form from "./Components/Form";
import { Progress } from "Components/Progress";
import usePostAPI from "Hooks/usePostAPI";
import Toast from "Components/Toast";

function CreateCategory() {
  const history = useHistory();

  const [response, createCategoryAPI] = usePostAPI({
    url: "/category/create",
    configs: {},
  });
  const { isLoading, success, error } = response;

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        history.push("/dashboard/category");
      }, 1800);
    }
  }, [success]);


  const handleCreateCategory = (values) => {
    createCategoryAPI(values);
  };

  return (
    <Container title="ایجاد دسته بندی">
      {isLoading && <Progress isDeterminate={false} />}
      <Toast open={success} type="success" message="دسته بندی ایجاد شد." />
      <Toast open={error} type="error" message="مشکلی بوجود آمده بعدا امتحان کنید!" />
      <Form onSubmit={handleCreateCategory} />
    </Container>
  );
}

export default CreateCategory;
