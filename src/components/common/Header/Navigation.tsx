import Link from "next/link";
import styled from "styled-components";
import { color, font } from "@/styles";

const navigations = [
  {
    name: "인증제",
    href: "/meister",
  },
  {
    name: "시간표",
    href: "/timetable",
  },
  {
    name: "급식표",
    href: "/meal",
  },
  {
    name: "일정표",
    href: "/calender",
  },
  {
    name: "게시판",
    href: "/post",
  },
  {
    name: "분실물 찾기",
    href: "/lostfound",
  },
];

const Navigation = () => {
  return (
    <NavigationList>
      {navigations.map((navigation) => (
        <NavigationListItem key={navigation.href} href={navigation.href}>
          {navigation.name}
        </NavigationListItem>
      ))}
    </NavigationList>
  );
};

const NavigationList = styled.ul`
  width: 100%;
  display: flex;
  gap: 5%;
`;

const NavigationListItem = styled(Link)`
  font-size: ${font.H5};
  color: ${color.black};
  cursor: pointer;
`;

export default Navigation;
