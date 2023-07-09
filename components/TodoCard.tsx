"use client"
import { XCircleIcon } from "@heroicons/react/24/solid"
import React from "react"
import {
  DraggableProvidedDragHandleProps,
  DraggableProvidedDraggableProps
} from "react-beautiful-dnd"

type Props = {
  todo: Todo
  index: number
  id: TypeColumn
  innerRef: (element: HTMLElement | null) => void
  draggableProps: DraggableProvidedDraggableProps
  draggableHandleProps: DraggableProvidedDragHandleProps | null | undefined
}
function TodoCard({ todo, draggableHandleProps, draggableProps, id, index, innerRef }: Props) {
  return (
    <div
      className="bg-white rounded-md space-y-2 drop-shadow-sm"
      {...draggableHandleProps}
      {...draggableProps}
      ref={innerRef}>
      <div className="flex justify-between items-center p-5">
        <p>{todo?.title}</p>
        <button className="text-red-500 hover:text-red-700">
          <XCircleIcon className="ml-5 h-8 w-8"></XCircleIcon>
        </button>
      </div>
    </div>
  )
}

export default TodoCard
