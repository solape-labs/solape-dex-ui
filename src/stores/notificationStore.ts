import { create } from "zustand";
import { produce } from "immer";
import { TransactionNotification } from "@/utils/notifications";

interface NotificationStore {
  notifications: TransactionNotification[];
  set: (fn: (state: NotificationStore) => NotificationStore) => void;
}

const useNotificationStore = create<NotificationStore>((set) => ({
  notifications: [],
  set: (fn) => set(produce(fn)),
}));

export default useNotificationStore;

