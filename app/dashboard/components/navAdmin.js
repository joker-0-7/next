"use client"
import Link from "next/link";

export default function NavAdmin() {
  return (
    <div className="nav-admin pt-2">
      <div className="logo text-light text-center">
        <h3>Shabrq</h3>
      </div>
      <div className="links ">
        <ul className="un-list p-0 pt-3 pb-3">
          <li className="home p-3 active">
            <Link href="/dashboard">
              <span className="icon me-3">
                <i className="bi bi-house"></i>
              </span>
              <span className="value">Home</span>
            </Link>
          </li>
          <li className="p-3 application-list">
            <Link href="/dashboard/pages/application-list">
              <span className="icon me-3">
                <i className="bi bi-list-ul"></i>
              </span>
              <span className="value">Application List</span>
            </Link>
          </li>
          <li className="p-3 category">
            <Link href="/dashboard/pages/category">
              <span className="icon me-3">
                <i className="bi bi-bookmark-plus"></i>
              </span>
              <span className="value">Category</span>
            </Link>
          </li>
          <li className="p-3 add-app">
            <Link href="/dashboard/pages/add-app">
              <span className="icon me-3">
                <i className="bi bi-plus-circle"></i>
              </span>
              <span className="value">Add Application</span>
            </Link>
          </li>
          <li className="p-3 forums">
            <Link href="/dashboard/pages/forums">
              <span className="icon me-3">
                <i className="bi bi-people"></i>
              </span>
              <span className="value">Forum</span>
            </Link>
          </li>
          <li className="p-3 ads">
            <Link href="/dashboard/pages/ads-setting">
              <span className="icon me-3">
                <i className="bi bi-currency-dollar"></i>
              </span>
              <span className="value">Ads</span>
            </Link>
          </li>
          <li className="p-3 users">
            <Link href="/dashboard/pages/users">
              <span className="icon me-3">
                <i className="bi bi-person"></i>
              </span>
              <span className="value">Users</span>
            </Link>
          </li>
        </ul>
      </div>
      <div className="settings">
        <ul className="un-list p-0 pt-3 pb-3">
          <li className="p-3 setting-page">
            <Link href="./dashboard/pages/setting-page">
              <span className="icon me-3">
                <i className="bi bi-gear"></i>
              </span>
              <span className="value">Settings</span>
            </Link>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
