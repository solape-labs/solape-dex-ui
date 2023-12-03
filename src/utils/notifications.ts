import useNotificationStore from "@/stores/notificationStore";

export type TransactionNotification = {
  type: 'success' | 'info' | 'error' | 'confirm';
  message: string;
  description?: string;
  txid?: string;
  id: number;
};

export function notify(newNotification: Omit<TransactionNotification, 'id'> & { type?: TransactionNotification['type'] }) {
  const { notifications, set: setNotificationStore } = useNotificationStore.getState();

  const newId = notifications.length === 0 ? 1 : Math.max(0, ...notifications.map(notif => notif.id)) + 1;

  const newNotif: TransactionNotification = {
    ...newNotification,
    id: newId,
    type: newNotification.type || 'success',
  };

  setNotificationStore((state) => ({
    ...state,
    notifications: [...state.notifications, newNotif],
  }));
}
