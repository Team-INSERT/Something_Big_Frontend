import styled from "styled-components";
import React from "react";
import dayjs from "dayjs";
import { theme, flex, font } from "@/styles";
import { ArrowIcon } from "@/assets/icons";
import { Column, Row } from "@/components/Flex";
import { DATE, DIRECTION } from "@/constants";
import { useCalendarListQuery } from "../services/query.service";
import { useCalendar } from "../hooks";
import WeekDayHeaderBox from "./WeekDayHeaderBox";
import { CalendarItem } from "../types";
import { getPaddingDayOfMonth } from "../helpers";
import CalendarListItem from "./CalendarListItem";

const CalendarPage = () => {
  const { currentMonth, handleCalendarMonthChange } = useCalendar();
  const { calendarList, refetch } = useCalendarListQuery(currentMonth);

  React.useEffect(() => {
    refetch();
  }, [currentMonth, refetch]);

  return (
    <Layout>
      <Column gap="8px" alignItems="center">
        <TitleText>🗓️ 캘린더</TitleText>
        <SubTitleText>
          좌우 화살표 방향키를 탭해 날짜를 조정해보세요.
        </SubTitleText>
      </Column>
      <Row width="100%" gap="16px">
        <ArrowIcon
          width={40}
          height={40}
          direction={DIRECTION.LEFT}
          onClick={() => handleCalendarMonthChange(DATE.DECREASE)}
        />
        <CalendarBox>
          <CurrentDateText>
            {dayjs().year()}년 {currentMonth}월
          </CurrentDateText>
          <CalendarList>
            <WeekDayHeaderBox />
            {getPaddingDayOfMonth(currentMonth).map((_, key) => (
              <CalendarListItem key={key} isEmpty />
            ))}
            {calendarList?.map((calendar: CalendarItem) => (
              <CalendarListItem key={calendar.date} calendar={calendar} />
            ))}
          </CalendarList>
        </CalendarBox>
        <ArrowIcon
          width={40}
          height={40}
          direction={DIRECTION.RIGHT}
          onClick={() => handleCalendarMonthChange(DATE.INCREASE)}
        />
      </Row>
    </Layout>
  );
};

const Layout = styled.div`
  width: 100%;
  ${flex.COLUMN_CENTER};
  gap: 24px;
`;

const TitleText = styled.span`
  ${font.H2};
`;

const SubTitleText = styled.span`
  color: ${theme.gray};
`;

const CalendarBox = styled.main`
  width: 100%;
  background-color: ${theme.white};
  border-radius: 5px;
  ${flex.COLUMN_FLEX};
  padding: 24px 32px;
  gap: 36px;
`;

const CurrentDateText = styled.h1`
  ${font.H2};
`;

const CalendarList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5%;
`;

export default CalendarPage;
