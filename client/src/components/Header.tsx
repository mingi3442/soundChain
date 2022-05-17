import { Link, useMatch } from "react-router-dom";
import styled from "styled-components";
import { motion, useAnimation, useViewportScroll } from "framer-motion";
import { useEffect, useState } from "react";
import { theme } from "../theme";

const Nav = styled(motion.nav)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99;
  position: fixed;
  width: 100%;
  height: 80px;
  top: 0;
  font-size: 14px;
  padding: 0 40px;
  color: white;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: 85%;
`;
const Col = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  margin-right: 50px;
  width: 200px;
  height: 200px;
`;

const Items = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Item = styled.li`
  margin-right: 20px;
  color: ${(props) => props.theme.accentColor};
  transition: color 0.3s ease-in-out;
  position: relative;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Circle = styled(motion.span)`
  position: absolute;
  width: 5px;
  height: 5px;
  border-radius: 2.5px;
  bottom: -5px;
  left: 0;
  right: 0;
  margin: 0 auto;
  background-color: ${(props) => props.theme.textColor};
`;

const navVariants = {
  top: {
    backgroundColor: "#ececec",
    color: theme.textColor,
  },
  scroll: {
    backgroundColor: theme.bgColor,
    color: theme.accentColor,
  },
};

function Header() {
  const signUpMatch = useMatch("/signup");
  const loginMatch = useMatch("/login");
  const navAnimation = useAnimation();
  const { scrollY } = useViewportScroll();

  useEffect(() => {
    scrollY.onChange(() => {
      if (scrollY.get() > 80) {
        navAnimation.start("scroll");
      } else {
        navAnimation.start("top");
      }
    });
  }, [scrollY, navAnimation]);
  return (
    <Nav variants={navVariants} animate={navAnimation} initial={"top"}>
      <LogoContainer>
        <Link to="/">
          <Logo src="/logoRow.png" alt="logo" />
        </Link>
      </LogoContainer>
      <Items>
        <Item>
          <Link to="/signup">Sign Up {signUpMatch && <Circle layoutId="circle" />}</Link>
        </Item>
        <Item>
          <Link to="/login">Log In {loginMatch && <Circle layoutId="circle" />}</Link>
        </Item>
      </Items>
      <Col></Col>
    </Nav>
  );
}

export default Header;
