interface Board {
  columns: Map<TypeColumn, Column>
}

interface BoardStore {
  board: Board
  getBoard: () => void
}

type TypeColumn = "todo" | "inprogress" | "done"

interface Column {
  id: TypeColumn
  todos: Todo[]
}

interface Todo {
  $id: string
  $createdAt: string
  title: string
  status: TypeColumn
  image?: Image
}

interface Image {
  bucketId: string
  fileId: string
}
