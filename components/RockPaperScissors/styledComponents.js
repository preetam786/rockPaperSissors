import Styled from 'styled-components'

export const MainContainer = Styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  padding-top: 30px;
  padding-bottom: 30px;
  background-color: #223a5f;
`
export const ResponsiveContainer = Styled.div`
  width: 50%;
`
export const DetailsContainer = Styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 25px;
  border: 1px solid #ffffff;
  border-radius: 7px;
`
export const MainHeading = Styled.h1`
  width: 120px;
  display: flex;
  flex-direction: column;
`
export const SubHeading = Styled.span`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #ffffff;
  line-height: 1.5;
`
export const ScoreContainer = Styled.div`
  width: 120px;
  height: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px
`
export const ScoreText = Styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 30px;
  margin-bottom: 0;
`
export const Score = Styled.p`
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 600;
  margin-top: 0;
`
export const GameBody = Styled.div`
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const OptionContainer = Styled.ul`
  width: 100%;
  display: flex;
  justify-content: ${props => props.justifyContent};
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
  padding-left: 0;
`
export const OptionItem = Styled.li`
  width: 40%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Button = Styled.button`
  background-color: ${props => (props.active ? '#ffffff' : 'transparent')};
  border: none;
  border-radius: ${props => (props.active ? '8px' : '')};
  padding: ${props => (props.active ? '8px 25px' : '')};
  outline: none;
  cursor: pointer;
`
export const ChoiceImage = Styled.img`
  width: 100px;
`
export const GameResultContainer = Styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const SelectedBy = Styled.p`
  font-family: 'Roboto'
  font-size: 18px;
  color: #ffffff;
`

export const GameResult = Styled.p`
  font-family: 'Roboto'
  font-size: 16px;
  font-weight: 500;
  color: #ffffff;
`
