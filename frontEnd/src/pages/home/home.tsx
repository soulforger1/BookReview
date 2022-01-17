import { Header } from "../../components/index";

const dummy = [
  {
    name: "J.K. Rowling",
    image:
      "https://www.dymocks.com.au/getmedia/34b10144-33ac-47a2-8f31-7361de0c13da/jk-rowling.jpg.aspx?width=400&height=387&ext=.jpg",
    descriptions: [
      "Joanne Rowling was born in July 1965 at Yate General Hospital in England and grew up in Chepstow, Gwent where she went to Wyedean Comprehensive.",
      "Jo left Chepstow for Exeter University, where she earned a French and Classics degree, her course including one year in Paris. As a postgraduate she moved to London and worked as a researcher at Amnesty International among other jobs. She started...",
    ],
    bookPicture:
      "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781444964912&w=&h=570",
  },
  {
    name: "Edward Rutherfurd",
    image:
      "https://www.dymocks.com.au/getmedia/cc0bcb38-bad8-4c28-a4ba-0e3209008fb9/edward-rutherfurd.jpg.aspx?width=400&height=424&ext=.jpg",
    descriptions: [
      "Edward Rutherfurd was born in England, in the cathedral city of Salisbury. Educated locally, and at the universities of Cambridge, and Stanford, California, he worked in political research, bookselling and publishing. After numerous attempts to write books and plays, he finally abandoned his career in the book trade in 1983, and returned to his childhood home to write SARUM, a historical novel...",
    ],
    bookPicture:
      "https://www.dymocks.com.au/Pages/ImageHandler.ashx?q=9781444787825&w=&h=234",
  },
];

export const Page = () => {
  return <div></div>;
};

export const HomePage = () => (
  <div className="w-screen h-screen">
    <Header />
    <Page />
  </div>
);
