'use client'
import { Thread } from '@/components/assistant-ui/thread'
import { AssistantRuntimeProvider } from '@assistant-ui/react'
import { useChatRuntime } from '@assistant-ui/react-ai-sdk'

export default function Home() {
  const runtime = useChatRuntime({ api: '/api/chat' })

  return (
    <AssistantRuntimeProvider runtime={runtime}>
      <main className='h-dvh'>
        <Thread />
      </main>
    </AssistantRuntimeProvider>
  )
}
