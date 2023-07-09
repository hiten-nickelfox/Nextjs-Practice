"use client"

import { useEffect } from "react"
import { DragDropContext, DropResult, Droppable } from "react-beautiful-dnd"
import { useBoardStore } from "@/store/BoardStore"
import Column from "./Column"

function Board() {
  const [boards, getBoard] = useBoardStore((state: BoardStore) => [state?.board, state?.getBoard])

  useEffect(() => {
    getBoard()
  }, [getBoard])

  const handleDragEnd = (result: DropResult) => {
    // Handle the drag end event here
    console.log(result)
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            ref={provided.innerRef}>
            {Array.from(boards?.columns.entries()).map(([id, columns], index) => (
              <Column key={id} id={id} todos={columns?.todos} index={index}></Column>
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default Board
