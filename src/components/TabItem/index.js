// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, clickTabItem, isActive} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    clickTabItem(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-btn active' : 'tab-btn'

  return (
    <li className="tabItem-container">
      <button
        type="button"
        className={tabBtnClassName}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
