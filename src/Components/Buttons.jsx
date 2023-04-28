import { useRouter } from "next/router";
import Link from "next/link";
export default function Buttons(props) {
  const router = useRouter();
  return (
    <div className="lg:mb-12">
      <Link
        passHref={true}
        scroll={false}
        href={{
          pathname: "/",
          query: { id: "services" },
        }}
        legacyBehavior>
        <a>
          <button
            className={`border ${
              props.mobile ? "ml-3" : "ml-24"
            } py-2 px-3 hover:opacity-75`}
            style={{ color: "#0074D9" }}
          >
            See other services
          </button>
        </a>
      </Link>
      <style jsx>{`
        button {
          border-color: #0074D9;
          border-radius: 15px;
          font-weight: bold;
          font-size: 16px;
          margin-top: 50px;
          outline: none;
        }
        .ml-80 {
          margin-left: 20rem;
        }
        @media (max-width: 1521px) {
          .ml-80 {
            margin-left: 15rem;
          }
        }
        @media (max-width: 1080px) {
          .ml-80 {
            margin-left: 0rem;
          }
        }
      `}</style>
    </div>
  );
}
