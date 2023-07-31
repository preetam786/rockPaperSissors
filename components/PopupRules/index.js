import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {RiCloseLine} from 'react-icons/ri'

import {
  PopupContainer,
  Button,
  RulesContainer,
  RulesImage,
} from './styledComponents'

const PopupRules = () => (
  <PopupContainer>
    <Popup modal trigger={<Button type="button">Rules</Button>}>
      {close => (
        <>
          <RulesContainer>
            <RulesImage
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesContainer>
          <Button type="button" onClick={() => close()}>
            <RiCloseLine />
          </Button>
        </>
      )}
    </Popup>
  </PopupContainer>
)

export default PopupRules
