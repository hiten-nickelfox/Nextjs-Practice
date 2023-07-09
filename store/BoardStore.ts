import { getTodosGroupedByColumn } from "@/lib/getTodosGroupedByColumn"
import { create } from "zustand"
import { databases } from "@/appwrite"

export const useBoardStore = create<BoardStore>((set) => ({
  board: {
    columns: new Map<TypeColumn, Column>()
  },
  getBoard: async () => {
    const board = await getTodosGroupedByColumn()
    set({ board })
  },
  setBoardState: (board) => set({ board }),
  updateTodoInDB: async (todo, columnID) => {
    await databases.updateDocument(
      process.env.NEXT_PUBLIC_APP_WRITE_DATABASE_ID!,
      process.env.NEXT_PUBLIC_APP_WRITE_TODO_COLLECTION_ID!,
      todo.$id,
      {
        title: todo.title,
        status: columnID
      }
    )
  }
}))
