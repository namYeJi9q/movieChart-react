import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { focusNav, listPageReLoading } from "../atom/Atoms";
import styled from "styled-components";
import navList from "../atom/NavList";

export default function Nav() {
    const pageReLoading = useSetRecoilState(listPageReLoading);
    const [focusPath, setFocusPath] = useRecoilState(focusNav);
    const optionOnClick = () => {
        pageReLoading(true);
    };
    return (
        <Wrap>
            <Title>
                <Link to={"/"} onClick={() => setFocusPath("")}>
                    Movie Chart
                </Link>
            </Title>
            <Menu>
                {navList.map(({ title, path }, index) => {
                    return (
                        <li key={index}>
                            <Link
                                to={`/page/${path}/1`}
                                onClick={
                                    focusPath !== path ? optionOnClick : null
                                }
                                style={
                                    focusPath !== path
                                        ? null
                                        : {
                                              color: "#dcb0ff",
                                          }
                                }
                            >
                                {title}
                            </Link>
                        </li>
                    );
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
    justify-content: space-evenly;
    align-items: center;
`;

const Title = styled.h1`
    cursor: pointer;
`;

const Menu = styled.ul`
    display: flex;
    li {
        margin: 0 15px;
        cursor: pointer;
    }
`;
