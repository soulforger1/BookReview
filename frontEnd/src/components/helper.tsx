import { Link } from "react-router-dom";

type HelperTextType = {
  type?: "text" | "author" | "description" | "";
  content: string | string[];
  className?: any;
};

export const HelperText = ({
  type = "text",
  content,
  className,
}: HelperTextType) => {
  switch (type) {
    case "author":
      return (
        <div>
          {typeof content === "object" &&
            content?.map((cur, index) => (
              <Link
                key={`author-${index}`}
                to={`/author-detail/${cur.toUpperCase()}`}
                className={`ml-1 underline text-blue-500 ${className}`}
              >
                {`${cur} ${index === content.length - 1 ? "" : ", "}`}
              </Link>
            ))}
        </div>
      );
    case "text":
      return <p className={className}>{content}</p>;
    case "description":
      return (
        <div>
          {typeof content === "object" &&
            content.map((cur, index) => (
              <p
                key={`description-${index}`}
                className="text-base font-light mb-3"
              >
                {cur}
              </p>
            ))}
        </div>
      );
  }

  return <div></div>;
};

export const HelperTextWithTitleAndText = ({
  label,
  content,
}: {
  label?: string;
  content?: object | string | number;
}) => {
  return (
    <div className="flex">
      <p className="text-base font-semibold mr-2">{label}</p>
      {typeof content === "object" ? (
        content
      ) : (
        <p className="text-base font-light">{content}</p>
      )}
    </div>
  );
};
