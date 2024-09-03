import './App.css'
import { useRecoilValue } from 'recoil'
import { notifications, totalNotificationSelector } from './atoms'

function App() {
  const totalNotificationCount = useRecoilValue(totalNotificationSelector)
  const notificationCount = useRecoilValue(notifications)
  
  return (
    <>
      <button>Home</button>
      <button>My Network ({notificationCount.network >= 100 ? "99+" : notificationCount.network})</button>
      <button>Jobs ({notificationCount.jobs})</button>
      <button>Messaging ({notificationCount.messages})</button>
      <button>Notifications ({notificationCount.notifications})</button>
      <button>Me ({totalNotificationCount})</button>
    </>
  )
}

export default App
