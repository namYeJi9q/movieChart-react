import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import navList from "../atom/NavList";

export default function Nav() {
    return (
        <Wrap>
            <h1>Movie Chart</h1>
            <Menu>
                {navList.map(({ title, path }) => {
                    return <li>{title}</li>;
                })}
            </Menu>
            <div>
                <a
                    href="https://github.com/namYeJi9q/movieChart-react.git"
                    target="_blank"
                >
                    <FontAwesomeIcon
                        icon={faGithub}
                        style={{ color: "#000" }}
                    />
                </a>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 90px;
    background-color: #eee;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const Menu = styled.ul`
    display: flex;
    li {
        margin: 0 15px;
    }
`;
