type CardType = {
  name: String;
  image: String;
  descriptions: [String];
  bookPicture: String;
};

export const AuthorCard = ({
  name,
  image,
  descriptions,
  bookPicture,
}: CardType) => {
  return (
    <div>
      <img src={`url${image}`} />
    </div>
  );
};
