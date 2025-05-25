export function Footer() {
    return (
      <footer className="page-footer  red darken-3">
        <div className="footer-copyright">
          <div className="container">
            © {new Date().getFullYear()} Mary
            <a className="grey-text  red darken-4 right" href="#!">
              Repository
            </a>
          </div>
        </div>
      </footer>
    );
  }