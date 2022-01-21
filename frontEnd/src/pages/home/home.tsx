import { useQuery, gql } from "@apollo/client";
import { Header } from "../../components/index";
import { AuthorCard } from "./authorCard";

const dummy = [
  {
    name: "J.K. Rowling",
    image:
      "https://www.dymocks.com.au/getmedia/34b10144-33ac-47a2-8f31-7361de0c13da/jk-rowling.jpg.aspx?width=400&height=387&ext=.jpg",
    descriptions:
      "Joanne Rowling was born in July 1965 at Yate General Hospital in England and grew up in Chepstow, Gwent where she went to Wyedean Comprehensive.",
    bookPicture:
      "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781444964912&w=&h=570",
  },
  {
    name: "Edward Rutherfurd",
    image:
      "https://www.dymocks.com.au/getmedia/cc0bcb38-bad8-4c28-a4ba-0e3209008fb9/edward-rutherfurd.jpg.aspx?width=400&height=424&ext=.jpg",
    descriptions:
      "Edward Rutherfurd was born in England, in the cathedral city of Salisbury. Educated locally, and at the universities of Cambridge, and Stanford, California, he worked in political research, bookselling and publishing. After numerous attempts to write books and plays, he finally abandoned his career in the book trade in 1983, and returned to his childhood home to write SARUM, a historical novel...",
    bookPicture:
      "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781444787825&w=&h=234",
  },
];

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
