import { useQuery, gql } from "@apollo/client";
import { useParams, Link } from "react-router-dom";
import { Header, HelperText, HelperTextWithTitleAndText } from "../components";

const Page = () => {
  const { "*": path } = useParams();
  const GETBOOK = gql`
  query {
    book(id: "${path}") {
      price
      description
      poster
      detail {
        width
        ages
        format
        isbn
        title
        author
        edition
        publisher
        length
        category
        date
        pages
        height
        weight
      }
    }
  }
  `;

  const { data, loading } = useQuery(GETBOOK);
  const { book } = data || {};
  const { description, detail, poster, price } = book || {};

  if (loading) return <div>Loading</div>;

  if (!data) return <div>Book not found</div>;

  return (
    <div className="flex flex-col items-center w-3/5">
      <div className="flex justify-center">
        <img
          className="w-64 object-contain rounded-xs mr-9"
          alt={`book-${detail?.title}`}
          src={poster}
        />
        <div>
          <HelperText
            className="text-3xl font-normal mb-4"
            content={detail?.title}
          />

          <div className="flex mb-2">
            <p>By</p>
            <HelperText type="author" content={detail?.author} />
            <HelperText
              className="ml-2"
              content={`| ${detail?.format} | ${detail?.date}`}
            />
          </div>

          <HelperText
            className="text-2xl font-semibold mb-2"
            content={`$${price}`}
          />
          <HelperText type="description" content={description} />
        </div>
      </div>
      <div className="flex">
        <div>
          <HelperTextWithTitleAndText content={detail?.title} label="Title: " />
          <HelperTextWithTitleAndText
            content={
              <div>
                {detail?.author.map((cur: any, index: number) => (
                  <Link
                    key={`author-${index}`}
                    to={`/author-detail/${cur.toUpperCase()}`}
                    className="ml-1 underline text-blue-500"
                  >
                    {`${cur} ${
                      index === detail?.author.length - 1 ? "" : ", "
                    }`}
                  </Link>
                ))}
              </div>
            }
            label="Author: "
          />
          <HelperTextWithTitleAndText
            content={detail?.edition}
            label="Edition: "
          />
          <HelperTextWithTitleAndText
            content={detail?.publisher}
            label="Publisher: "
          />
          <HelperTextWithTitleAndText content={detail?.isbn} label="ISBN: " />
          <HelperTextWithTitleAndText
            content={detail?.length}
            label="Length: "
          />
          <HelperTextWithTitleAndText content={detail?.width} label="Width: " />
          <HelperTextWithTitleAndText content={detail?.ages} label="Ages: " />
        </div>
        <div>
          <HelperTextWithTitleAndText
            content={detail?.format}
            label="Format: "
          />
          <HelperTextWithTitleAndText
            content={detail?.category}
            label="Category: "
          />
          <HelperTextWithTitleAndText
            content={detail?.date}
            label="Publication Date: "
          />
          <HelperTextWithTitleAndText content={detail?.pages} label="Pages: " />
          <HelperTextWithTitleAndText
            content={detail?.height}
            label="Height: "
          />
          <HelperTextWithTitleAndText
            content={detail?.weight}
            label="Weight: "
          />
        </div>
      </div>
    </div>
  );
};

export const BookDetail = () => {
  return (
    <div className="pt-24 flex justify-center">
      <Header />
      <Page />
    </div>
  );
};
