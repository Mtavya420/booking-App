export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="container mx-auto text-center">
        <p className="pt-8 lg:pt-16 sm:w-3/4 w-screen mx-auto text-center">
          © 2019-{year} Elkpro Salon. All rights reserved.
          <br />
          010-9539-9012 |765-26 Hannam-dong, Yongsan-gu, Seoul
        </p>
      </div>
      <style jsx>{`
        footer {
          height: 9.625rem;
          background: rgba(96, 90, 90, 0.89);
          color: white;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
        }
      `}</style>
    </footer>
  );
}
