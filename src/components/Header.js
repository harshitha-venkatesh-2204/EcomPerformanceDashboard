import React from "react";
import { useEffect } from "react";

function Header() {
  return (
    <div className="page">
      <header className="navbar navbar-expand-md d-print-none">
        <div className="container-xl">
          <h1 className="navbar-brand navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            <img
              src={process.env.PUBLIC_URL + "/InsightsLogo.jpg"}
              width={60}
              height={100}
              alt="Insights"
              className="navbar-brand-image"
            />
            <span
              style={{
                fontFamily: "Lucida Handwriting, sans-serif",
                fontSize: "24px",
                color: "#0065b3",
              }}
            >
              Insights
            </span>
          </h1>
          <div className="row flex-fill align-items-center">
                <div className="col">
                  <ul className="navbar-nav">
                    <li className="nav-item active">
                      <a className="nav-link" href="./">
                        <span className="nav-link-icon d-md-none d-lg-inline-block">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M5 12l-2 0l9 -9l9 9l-2 0" />
                            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />
                            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                          </svg>
                        </span>
                        <span className="nav-link-title">Home</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-nav flex-row order-md-last">
                <div className="d-none d-md-flex">
                  <div className="nav-item dropdown d-none d-md-flex me-3">
                    <a
                      href="#"
                      className="nav-link px-0"
                      data-bs-toggle="dropdown"
                      tabIndex={-1}
                      aria-label="Show notifications"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6" />
                        <path d="M9 17v1a3 3 0 0 0 6 0v-1" />
                      </svg>
                      <span className="badge bg-red" />
                    </a>
                  </div>
                </div>
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link d-flex lh-1 text-reset p-0 dropdown-toggle"
                    aria-label="Open user menu"
                  >
                    <span
                      className="avatar avatar-sm"
                      style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/Icon.jpg)`,
                      }}
                    />

                    <div className="d-none d-xl-block ps-2">
                      <div>Manager</div>
                      <div className="mt-1 small text-secondary">
                        Business Operations and Transformation
                      </div>
                    </div>
                  </a>
                </div>
              </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
