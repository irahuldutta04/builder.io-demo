import { BuilderComponent, builder } from "@builder.io/react";
import { useEffect, useState } from "react";

builder.init(import.meta.env.VITE_BUILDER_API_KEY);

const MyComponent = () => {
  const [builderContentJson, setBuilderContentJson] = useState(null);

  useEffect(() => {
    builder
      .get("page", { url: location.pathname })
      .promise()
      .then(setBuilderContentJson);
  }, []);

  return <BuilderComponent model="page" content={builderContentJson} />;
};

export default MyComponent;
