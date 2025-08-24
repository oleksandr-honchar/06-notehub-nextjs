import Link from "next/link";
import css from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={css.page}>
      <footer className={css.footer}>
  <div className={css.content}>
    <p>© {new Date().getFullYear()} NoteHub. All rights reserved.</p>
    <div className={css.wrap}>
      <p>Developer: Oleksandr Honchar</p>
      <p>
        Contact us:
        <Link href="mailto:student@notehub.app"> student@notehub.app</Link>
      </p>
    </div>
  </div>
</footer>


      
    </div>
  );
}