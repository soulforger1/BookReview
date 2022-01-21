import { useQuery, gql } from "@apollo/client";
import { Header } from "../../components/index";
import { AuthorCard } from "./authorCard";

export const Page = () => {
  const GETAUTHORS = gql`
    query {
      authors {
        name
        image
        description
        books {
          id
          poster
        }
      }
    }
  `;

  const { data } = useQuery(GETAUTHORS);
  const { authors } = data || {};

  return (
    <div>
      {authors?.map((cur: any, index: number) => (
        <AuthorCard
          key={`author-${index}`}
          name={cur.name}
          image={cur.image}
          description={cur.description[0]}
          bookImage={cur.books[0].poster}
          bookId={cur.books[0].id}
        />
      ))}
    </div>
  );
};

export const HomePage = () => (
  <div className="w-screen h-screen flex justify-center pt-16">
    <Header />
    <Page />
  </div>
);
