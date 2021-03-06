import React, { Component, Fragment } from "react";
import UserPanel from "./UserPanel";
import { Link } from "react-router-dom";
import { MENUITEMS } from "./../../constants/menu";
import { path } from "./../../constants/path";
import RoleAllow from "../RoleAllow";

import logo from "./../../assets/images/dashboard/mwstore-logo.png";

export class sidebar extends Component {
  state = { selectedPath: "1", mainmenu: [] };
  onItemSelection = (arg, e) => {
    this.setState({ selectedPath: arg.path });
  };

  componentWillMount() {
    this.setState({
      mainmenu: MENUITEMS,
    });
  }s

  componentDidMount() {
    var currentUrl = window.location.pathname;

    this.state.mainmenu.forEach((items) => {
      if (!items.children) {
        if (items.path === currentUrl) this.setNavActive(items);
        return null;
      }

      items.children.forEach((subItems) => {
        if (subItems.path === currentUrl) this.setNavActive(subItems);
        if (!subItems.children) return;
        subItems.children.forEach((subSubItems) => {
          if (subSubItems.path === currentUrl) this.setNavActive(subSubItems);
        });
      });
    });
  }

  setNavActive(item) {
    MENUITEMS.forEach((menuItem) => {
      if (menuItem !== item) menuItem.active = false;
      if (menuItem.children && menuItem.children.includes(item))
        menuItem.active = true;
      if (menuItem.children) {
        menuItem.children.forEach((submenuItems) => {
          if (submenuItems !== item) {
            submenuItems.active = false;
          }
          if (submenuItems.children) {
            submenuItems.children.forEach((childItem) => {
              childItem.active = false;
            });
            if (submenuItems.children.includes(item)) {
              submenuItems.active = true;
              menuItem.active = true;
            }
          }
        });
      }
    });
    item.active = !item.active;

    this.setState({
      mainmenu: MENUITEMS,
    });
  }
  /* eslint-disable jsx-a11y/anchor-is-valid */
  render() {
    const mainmenu = this.state.mainmenu.map((menuItem, i) => (
      <RoleAllow key={i} allowedRole={menuItem.role}>
        <li className={`${menuItem.active ? "active" : ""}`} key={i}>
          {menuItem.sidebartitle ? (
            <div className="sidebar-title">{menuItem.sidebartitle}</div>
          ) : (
            ""
          )}
          {menuItem.type === "sub" ? (
            <a
              href={null}
              className="sidebar-header "
              onClick={() => this.setNavActive(menuItem)}
            >
              <menuItem.icon />
              <span>{menuItem.title}</span>
              <i className="fa fa-angle-right pull-right"></i>
            </a>
          ) : (
            ""
          )}
          {menuItem.type === "link" ? (
            <Link
              to={`${process.env.PUBLIC_URL}${menuItem.path}`}
              className={`sidebar-header ${menuItem.active ? "active" : ""}`}
              onClick={() => this.setNavActive(menuItem)}
            >
              <menuItem.icon />
              <span>{menuItem.title}</span>
              {menuItem.children ? (
                <i className="fa fa-angle-right pull-right"></i>
              ) : (
                ""
              )}
            </Link>
          ) : (
            ""
          )}
          {menuItem.children ? (
            <ul
              className={`sidebar-submenu ${
                menuItem.active ? "menu-open" : ""
              }`}
              style={
                menuItem.active
                  ? { opacity: 1, transition: "opacity 500ms ease-in" }
                  : {}
              }
            >
              {menuItem.children.map((childrenItem, index) => (
                <li
                  key={index}
                  className={
                    childrenItem.children
                      ? childrenItem.active
                        ? "active"
                        : ""
                      : ""
                  }
                >
                  {childrenItem.type === "sub" ? (
                    <a
                      href={null}
                      onClick={() => this.setNavActive(childrenItem)}
                    >
                      <i className="fa fa-circle"></i>
                      {childrenItem.title}{" "}
                      <i className="fa fa-angle-right pull-right"></i>
                    </a>
                  ) : (
                    ""
                  )}

                  {childrenItem.type === "link" ? (
                    <Link
                      to={`${process.env.PUBLIC_URL}${childrenItem.path}`}
                      className={childrenItem.active ? "active" : ""}
                      onClick={() => this.setNavActive(childrenItem)}
                    >
                      <i className="fa fa-circle"></i>
                      {childrenItem.title}{" "}
                    </Link>
                  ) : (
                    ""
                  )}
                  {childrenItem.children ? (
                    <ul
                      className={`sidebar-submenu ${
                        childrenItem.active ? "menu-open" : "active"
                      }`}
                    >
                      {childrenItem.children.map((childrenSubItem, key) => (
                        <li
                          className={childrenSubItem.active ? "active" : ""}
                          key={key}
                        >
                          {childrenSubItem.type === "link" ? (
                            <Link
                              to={`${process.env.PUBLIC_URL}${childrenSubItem.path}`}
                              className={childrenSubItem.active ? "active" : ""}
                              onClick={() => this.setNavActive(childrenSubItem)}
                            >
                              <i className="fa fa-circle"></i>
                              {childrenSubItem.title}
                            </Link>
                          ) : (
                            ""
                          )}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    ""
                  )}
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>
      </RoleAllow>
    ));

    return (
      <Fragment>
        <div className="page-sidebar">
          <div className="main-header-left d-none d-lg-block">
            <div className="logo-wrapper">
              <Link to={path.HOME}>
                <img className="blur-up lazyloaded" src={logo} alt="" />
              </Link>
            </div>
          </div>
          <div className="sidebar custom-scrollbar">
            <UserPanel />
            <ul className="sidebar-menu">{mainmenu}</ul>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default sidebar;
