import {NavLink} from "react-router-dom";

export const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="navigation__list">
                <li className="navigation__item">
                    <NavLink to="/users" className="navigation__link">Users</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/about" className="navigation__link">About</NavLink>
                </li>
                <li className="navigation__item">
                    <NavLink to="/blog" className="navigation__link">Posts</NavLink>
                </li>
            </ul>
        </nav>
    );
};
