import { Link } from "gatsby";
import React, { useEffect, useRef, useState, useCallback } from "react";
import styled from "styled-components";
import { menuData } from "./data/menuData"; // Ensure this is the correct path
import MenuButton from "./buttons/MenuButton";
import MenuTooltip from "./tooltip/MenuTooltip";

import logoIcon from "/src/images/icons/logo3.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    setIsOpen(!isOpen);
    event.preventDefault();
  }

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (
      ref.current &&
      !ref.current.contains(event.target as Node) &&
      !tooltipRef.current?.contains(event.target as Node)
    ) {
      console.log("Document is clicked");
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <Wrapper>
      <MyLink to="/">
        <img src={logoIcon} alt="Logo" />
      </MyLink>

      <MenuWrapper $count={menuData.length} ref={ref}> {/* Changed `count` to `$count` */}
        {menuData.map((item, index) =>
          item.link === "/account" ? (
            <MenuButton
              item={item}
              key={index}
              onClick={event => handleClick(event)}
            />
          ) : (
            <MenuButton item={item} key={index} />
          )
        )}
        <HamburgerWrapper>
          <MenuButton
            item={{ title: "", icon: menuData[3].icon, link: "/" }} 
            onClick={event => handleClick(event)}
          />
        </HamburgerWrapper>
      </MenuWrapper>

      <div ref={tooltipRef}>
        <MenuTooltip isOpen={isOpen} />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: sticky;
  top: 20px;
  display: grid;
  grid-template-columns: 44px auto;
  width: 100%;
  justify-content: space-between;
  padding-left: 19.4%;
  padding-right: 19.22%;
  align-items: center;
  z-index: 1000;

  @media (max-width: 768px) {
    top: 30px;
  }
  @media (max-width: 450px) {
    top: 20px;
    padding: 0 20px;
  }
`;

const MenuWrapper = styled.div`
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(${props => props.$count}, auto);

  a {
    transition: transform 0.3s ease-in-out;
  }

  a:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    > a {
      display: none;
    }
    grid-template-columns: auto;
  }
`;

const HamburgerWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MyLink = styled(Link)`
  img {
    width: 49px;
    height: 49px;
    transition: transform 0.3s ease-in-out;
  }

  :hover {
    transform: translateY(-10px);
  }
`;
