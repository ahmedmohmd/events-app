import { FC } from "react";

const ErrorPage: FC = () => {
  return (
    <div className="container flex items-center justify-center w-full h-screen p-4 mx-auto">
      <img
        className="w-72 h-72 md:w-96 md:h-96"
        src="/images/404.svg"
        alt="404 Error"
      />
    </div>
  );
};

export default ErrorPage;
