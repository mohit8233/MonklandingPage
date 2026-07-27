import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  writeBatch,
} from "firebase/firestore";

import db from "./firestore";

const notificationRef = collection(db, "notifications");

/* ==============================
   ADD NOTIFICATION
================================ */

export const addNotification = async ({
  uid,
  title,
  message,
  type = "info",
}) => {
  try {
    const docRef = await addDoc(notificationRef, {
      uid,
      title,
      message,
      type,
      read: false,
      createdAt: serverTimestamp(),
    });

    console.log("Notification Added :", docRef.id);

    return docRef.id;
  } catch (err) {
    console.error("Add Notification Error :", err);
  }
};

/* ==============================
   REALTIME LISTENER
================================ */

export const listenNotifications = (
  uid,
  callback
) => {
  const q = query(
    notificationRef,
    where("uid", "==", uid),
    orderBy("createdAt", "desc")
  );

  return onSnapshot(
    q,
    (snapshot) => {
      callback(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
      );
    },
    (error) => {
      console.error(error);
    }
  );
};

/* ==============================
   MARK READ
================================ */

export const markNotificationRead =
  async (id) => {
    try {
      await updateDoc(
        doc(db, "notifications", id),
        {
          read: true,
        }
      );
    } catch (err) {
      console.error(err);
    }
  };

/* ==============================
   MARK ALL
================================ */

export const markAllRead =
  async (notifications) => {
    try {
      const batch = writeBatch(db);

      notifications.forEach((item) => {
        if (!item.read) {
          batch.update(
            doc(db, "notifications", item.id),
            {
              read: true,
            }
          );
        }
      });

      await batch.commit();
    } catch (err) {
      console.error(err);
    }
  };

/* ==============================
   DELETE
================================ */

export const deleteNotification =
  async (id) => {
    try {
      await deleteDoc(
        doc(db, "notifications", id)
      );
    } catch (err) {
      console.error(err);
    }
  };