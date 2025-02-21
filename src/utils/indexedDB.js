import { openDB } from "idb";

const dbPromise = openDB("quizDB", 1, {
  upgrade(db) {
    db.createObjectStore("history", { keyPath: "id", autoIncrement: true });
  },
});

export const saveAttempt = async (attempt) => {
  const db = await dbPromise;
  await db.add("history", attempt);
};

export const getAttempts = async () => {
  const db = await dbPromise;
  return db.getAll("history");
};
