import axios from 'axios'
import {atom, selector} from 'recoil'

export const notifications = atom({
    key: "notifications",
    default: selector({
        key: "notificationSelector",
        get: async ()=> {
            const res = await axios.get('http://localhost:3000/notifications')
            return res.data
        }
    })
})

export const totalNotificationSelector = selector({
    key: "totalNotificationCount",
    get: ({get}) => {
        const allNotifications = get(notifications)

        return allNotifications.network + allNotifications.jobs + allNotifications.messages + allNotifications.notifications
    }
})
