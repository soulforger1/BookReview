import { useState } from "react";
import { useMutation, gql, useSubscription } from "@apollo/client";
import { FileInput, Header, Input } from "../components";

const CreateAuthor = gql`
  mutation Mutation($file: Upload!) {
    singleUpload(file: $file) {
      filename
      mimetype
      encoding
    }
  }
`;

const Page = () => {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [create] = useMutation(CreateAuthor);

  const handleClick = async () => {
    console.log(image);
    try {
      const { data } = await create({ variables: { file: image } });

      console.log(data);
    } catch (err) {
      console.log(JSON.stringify(err, null, 2));
    }
  };
  //   console.log(text.split("\n"));

  return (
    <div className="flex flex-col items-center">
      <FileInput
        label="...select your pucture"
        onFileSelect={(file) => setImage(file)}
      />
      <Input label="Name" className="w-96" />
      <Input
        label="Description"
        textarea
        className="h-40 w-96 pt-3"
        onChange={(e) => setText(e.target.value)}
      />

      <button
        onClick={handleClick}
        className="flex justify-center items-center text-white rounded-md text-sm font-medium w-32 h-12 bg-gray-500 hover:bg-gray-400"
      >
        Upload
      </button>
    </div>
  );
};

export const NewAuthor = () => {
  return (
    <div className="pt-20 flex justify-center">
      <Header />
      <Page />
    </div>
  );
};
