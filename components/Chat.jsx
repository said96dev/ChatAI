'use client'
import React, { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import { generateChatResponse } from '@/utils/action'
import toast from 'react-hot-toast'
const Chat = () => {
  const [text, setText] = useState('')
  const [messages, setMessages] = useState([])
  const { mutate, isPending } = useMutation({
    mutationFn: (query) => generateChatResponse([...messages, query]),
    onSuccess: (data) => {
      if (!data) {
        setMessages((prev) => [
          ...prev,
          { role: 'system', content: 'somthing went wrong', bg: 'text-error' },
        ])

        toast.error('somthing failed')
        return
      }
      setMessages((prev) => [...prev, data])
    },
  })
  console.log(messages)
  const handelSubmit = (e) => {
    e.preventDefault()
    const query = {
      role: 'user',
      content: text,
    }
    mutate(query)
    setMessages((prev) => [...prev, query])
    setText('')
  }

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        {messages.map(({ role, content, bg }, index) => {
          const avatar = role == 'user' ? '👤' : '🤖'
          const bcg = role === 'user' ? 'bg-base-200' : 'bg-base-100'
          return (
            <div
              key={index}
              className={`py-6 flex ${bcg} -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
            >
              <span className="mr-4">{avatar}</span>
              <p className={`max-w-3xl ${bg}`}>{content}</p>
            </div>
          )
        })}
        {isPending ? <span className="loading"></span> : null}
      </div>
      <form onSubmit={handelSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            type="text"
            className="input input-borderd join-item w-full"
            value={text}
            required
            placeholder="Message GPT AI"
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
          <button
            type="submit"
            className="btn btn-primary join-item"
            disabled={isPending}
          >
            {isPending ? 'Please wait...' : 'Ask Questions'}
          </button>
        </div>
      </form>
    </div>
  )
}

export default Chat
