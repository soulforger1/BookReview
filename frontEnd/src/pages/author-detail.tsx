import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { Header, HelperText } from "../components";

const Page = () => {
  const { "*": path } = useParams();
  path?.replace("%2", " ");

  const GETAUTHOR = gql`
    query {
      author(name: "${path}") {
        name
        description
        image
        books {
          poster
          id
        }
      }
    }
  `;

  const { data, loading } = useQuery(GETAUTHOR);
  const { name, description, image } = data?.author || {};

  if (loading) return <div>Loading</div>;

  if (!data.author) return <div>Author not found</div>;

  return (
    <div className="flex items-start w-3/5">
      <img
        className="w-64 object-contain rounded-xs mr-9"
        alt={`author-${name}`}
        src={image}
      />
      <div>
        <HelperText content={name} className="text-3xl font-semibold mb-5" />
        <HelperText type="description" content={description} />
      </div>
    </div>
  );
};

export const AuthorDetail = () => {
  return (
    <div className=" mt-28 flex justify-center">
      <Header />
      <Page />
    </div>
  );
};
