import styled, { css } from "styled-components";
import { MEAL } from "@/constants";
import { IMealListItem } from "@/interfaces";
import { color } from "@/styles";

const MealListItem = ({ date, menu, currentSlideIndex }: IMealListItem) => {
  const mealSlideTypeGenerator = (dateProps: number) => {
    const isPrevSlide = dateProps === currentSlideIndex - 1;
    const isFirstSlide = dateProps === currentSlideIndex;
    const isThirdSlide = dateProps === currentSlideIndex + 2;
    const isNextSlide = dateProps === currentSlideIndex + 3;
    if (isPrevSlide) return MEAL.PREV.TYPE;
    if (isThirdSlide) return MEAL.THIRD.TYPE;
    if (isFirstSlide) return MEAL.FIRST.TYPE;
    if (isNextSlide) return MEAL.NEXT.TYPE;
    return MEAL.SECOND.TYPE;
  };

  const isCurrentSlide =
    date >= currentSlideIndex && date <= currentSlideIndex + 2;

  return (
    <Container>
      <MealList current={isCurrentSlide} state={mealSlideTypeGenerator(date)}>
        <MealListHeader>
          <Circles>
            <Red />
            <Yellow />
            <Green />
          </Circles>
        </MealListHeader>
        {menu.map((item) => (
          <div key={item}>{item}</div> // 컴포넌트 제작 예정임미다
        ))}
      </MealList>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

const MealList = styled.div<{ current: boolean; state: string }>`
  width: 100%;
  height: 60vh;
  background-color: ${color.white};
  border-radius: 10px;
  position: absolute;
  box-shadow: 0px -2px 10px 0.5px ${color.meal_shadow};
  visibility: ${(props) => (props.current ? "visible" : "hidden")};

  ${(props) => {
    if (props.state === MEAL.THIRD.TYPE) {
      return css`
        transition: all 0.5s linear;
        top: 6vh;
      `;
    }

    if (props.state === MEAL.FIRST.TYPE) {
      return css`
        transition: all 0.5s linear;
        transform: scaleX(0.9);
        top: 2vh;
      `;
    }

    if (props.state === MEAL.SECOND.TYPE) {
      return css`
        transform: scaleX(0.95);
        transition: all 0.5s linear;
        top: 4vh;
      `;
    }

    if (props.state === MEAL.PREV.TYPE) {
      return css`
        transform: scaleX(0.85);
        transition: all 0.5s linear;
        top: 0px;
        opacity: 0;
      `;
    }

    return css`
      transform: scaleX(1.05);
      top: 8vh;
      transition: all 0.5s linear;
      opacity: 0;
    `;
  }}
`;

const MealListHeader = styled.div`
  width: 100%;
  height: 11%;
  border-radius: 10px 10px 0 0;
  background-color: ${color.meal_header};
  display: flex;
  align-items: center;
`;

const Circles = styled.div`
  display: flex;
  align-items: center;
  margin-left: 15px;
  gap: 6px;
`;

const Circle = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 25px;
`;

const Red = styled(Circle)`
  background-color: ${color.primary_red};
`;

const Yellow = styled(Circle)`
  background-color: ${color.primary_yellow};
`;

const Green = styled(Circle)`
  background-color: ${color.primary_mint};
`;

export default MealListItem;
