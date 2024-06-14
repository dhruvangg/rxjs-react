import React, { useState, useEffect } from 'react'
import noteStore from '../store/noteStore'

export default function TodoCount() {
    const [notes, setNotes] = useState(noteStore.initialState)
    useEffect(() => {
        noteStore.subscribe(setNotes)
        noteStore.init()
    }, [])
    return (
        <h1 className="text-2xl font-bold mb-4">Todo List ({notes.length})</h1>
    )
}
