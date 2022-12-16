export default function Footer() {
  let today = new Date();
  return (
    <footer className="footer-container">
      <p className="page-footer">
        <a href="">Terms and conditions</a>
        <a href="">Privacy</a>
        <span> &copy; Riviera {today.getFullYear()}</span>
      </p>
    </footer>
  );
}
