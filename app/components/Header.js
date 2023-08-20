"use client"

import Link from "next/link";

function Header() {
  return (
<nav className="navbar navbar-expand-lg navbar-light bg-dark text-light">
  <div className="container">
    <a className="navbar-brand" href="#">Logo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-evenly">
<Link href='/'>
        <li className="nav-item">
        <i className="bi bi-house"></i>
          <span className="nav-link active" aria-current="page">الرئيسة</span>
        </li>
</Link>
<Link href='/'>
        <li className="nav-item">
        <i className="bi bi-controller"></i>
          <span className="nav-link">العاب مهكرة</span>
        </li>
</Link>
<Link href='/'>
        <li className="nav-item">
        <i className="bi bi-boxes"></i>
          <span className="nav-link">تطبيقات مهكرة</span>
        </li>
</Link>
{/* <Link href='/'>
        <li className="nav-item">
        <i className="bi bi-card-text"></i>
          <span className="nav-link">المدونة</span>
        </li>
</Link>
<Link href='/'>
        <li className="nav-item">
        <i className="bi bi-chat-right-dots"></i>
          <span className="nav-link">اسئلة شائعة</span>
        </li>
</Link> */}

      </ul>
    </div>
  </div>
</nav>

  );
}
export default Header();
