

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-4 mt-5">
      <div className="container">
        <p className="mb-1">&copy; {new Date().getFullYear()} Chesterfield Academy. All rights reserved.</p>
        <p className="mb-0">
          <small>
            15234 Chesterfield Business Pkwy, Chesterfield, MO 63100 | (314) 111-0101
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;

