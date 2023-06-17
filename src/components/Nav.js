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
                        style={{ color: "#f4a7bc" }}
                    />
                </a>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div`
    width: 100%;
    height: 90px;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
    z-index: 11;
    color: #fff;
`;

const Title = styled.h1`
    cursor: pointer;
    color: #f4a7bc;
`;

const Menu = styled.ul`
    display: flex;
    li {
        font-size: 16px;
        margin: 0 20px;
        cursor: pointer;
    }
`;
