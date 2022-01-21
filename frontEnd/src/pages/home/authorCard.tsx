import { useNavigate } from "react-router-dom";

type AuthorCardTypes = {
  image: string;
  name: string;
  description: string;
  bookImage: string;
  bookId: string;
};

export const AuthorCard = (props: AuthorCardTypes) => {
  const { image, name, description, bookImage, bookId } = props;
  const navigate = useNavigate();

  const authorClick = () => {
    navigate(`/author-detail/${name}`);
  };
  const bookClick = () => {
    navigate(`/book-detail/${bookId}`);
  };

  return (
    <div className="flex pt-10">
      <img
        onClick={authorClick}
        className="w-40 h-full object-contain rounded-md cursor-pointer"
        alt={`${name}'s poster'`}
        src={image}
      />

      <div className="px-10">
        <p className="text-xl cursor-pointer" onClick={authorClick}>
          {name}
        </p>
        <p className="text-sm font-light w-56 pl-1">{description}</p>
      </div>

      <img
        onClick={bookClick}
        className="w-40 h-40 object-contain rounded-xs cursor-pointer"
        alt={`${name}'s book'`}
        src={bookImage}
      />
    </div>
  );
};
