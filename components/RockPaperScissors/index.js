import {Component} from 'react'

import PopupRules from '../PopupRules'

import {
  MainContainer,
  ResponsiveContainer,
  DetailsContainer,
  MainHeading,
  SubHeading,
  ScoreContainer,
  ScoreText,
  Score,
  GameBody,
  OptionContainer,
  OptionItem,
  Button,
  ChoiceImage,
  GameResultContainer,
  SelectedBy,
  GameResult,
} from './styledComponents'

class RockPaperScissors extends Component {
  state = {
    isClicked: false,
    userChoice: '',
    opponentChoice: '',
    gameResult: '',
    score: 0,
  }

  getGameResult = () => {
    const {userChoice, opponentChoice} = this.state

    if (userChoice === opponentChoice) {
      this.setState(prevState => ({
        score: prevState.score,
        gameResult: 'IT IS DRAW',
      }))
    } else if (
      (userChoice === 'ROCK' && opponentChoice === 'SCISSORS') ||
      (userChoice === 'SCISSORS' && opponentChoice === 'PAPER') ||
      (userChoice === 'PAPER' && opponentChoice === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
        gameResult: 'YOU WON',
      }))
    } else if (
      (userChoice === 'SCISSORS' && opponentChoice === 'ROCK') ||
      (userChoice === 'PAPER' && opponentChoice === 'SCISSORS') ||
      (userChoice === 'ROCK' && opponentChoice === 'PAPER')
    ) {
      this.setState(prevState => ({
        score: prevState.score - 1,
        gameResult: 'YOU LOSE',
      }))
    }
  }

  getOpponentChoice = () => {
    const {choicesList} = this.props
    const randomIndex = Math.floor(Math.random() * choicesList.length)
    const opponentChoice = choicesList[randomIndex].id
    return opponentChoice
  }

  onClickChoice = event => {
    const opponentChoice = this.getOpponentChoice()
    this.setState(
      {
        isClicked: true,
        userChoice: event.target.alt,
        opponentChoice,
      },
      this.getGameResult,
    )
  }

  onClickPlayAgain = () => {
    this.setState({
      isClicked: false,
      userChoice: '',
      opponentChoice: '',
      gameResult: '',
    })
  }

  renderGameDetails = () => {
    const {score} = this.state
    return (
      <DetailsContainer>
        <MainHeading>
          <SubHeading>Rock</SubHeading>
          <SubHeading>Paper</SubHeading>
          <SubHeading>Scissors</SubHeading>
        </MainHeading>
        <ScoreContainer>
          <ScoreText>Score</ScoreText>
          <Score>{score}</Score>
        </ScoreContainer>
      </DetailsContainer>
    )
  }

  renderGameOptions = () => {
    const {choicesList} = this.props

    return (
      <OptionContainer justifyContent="space-around">
        {choicesList.map(eachChoice => (
          <OptionItem key={eachChoice.id}>
            <Button
              data-testid={`${eachChoice.id.toLowerCase()}Button`}
              type="button"
              onClick={this.onClickChoice}
            >
              <ChoiceImage src={eachChoice.imageUrl} alt={eachChoice.id} />
            </Button>
          </OptionItem>
        ))}
      </OptionContainer>
    )
  }

  renderGameResult = () => {
    const {choicesList} = this.props
    const {opponentChoice, userChoice, gameResult} = this.state

    const opponentChoiceObject = choicesList.find(
      eachChoice => eachChoice.id === opponentChoice,
    )

    const userChoiceObject = choicesList.find(
      eachChoice => eachChoice.id === userChoice,
    )

    return (
      <GameResultContainer>
        <OptionContainer justifyContent="space-between">
          <OptionItem>
            <SelectedBy>You</SelectedBy>
            <ChoiceImage src={userChoiceObject.imageUrl} alt="your choice" />
          </OptionItem>
          <OptionItem>
            <SelectedBy>Opponent</SelectedBy>
            <ChoiceImage
              src={opponentChoiceObject.imageUrl}
              alt="opponent choice"
            />
          </OptionItem>
        </OptionContainer>
        <GameResult>{gameResult}</GameResult>
        <Button type="button" active onClick={this.onClickPlayAgain}>
          PLAY AGAIN
        </Button>
      </GameResultContainer>
    )
  }

  render() {
    const {isClicked} = this.state

    return (
      <MainContainer>
        <ResponsiveContainer>
          {this.renderGameDetails()}
          <GameBody>
            {isClicked ? this.renderGameResult() : this.renderGameOptions()}
          </GameBody>
          <PopupRules />
        </ResponsiveContainer>
      </MainContainer>
    )
  }
}

export default RockPaperScissors
