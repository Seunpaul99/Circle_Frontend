import React from 'react'
import Header from '../components/Header'
import FriendCard from '../components/FriendCard'

const mockFriends = [
  { id: 1, name: 'Ada', lastContact: '2025-10-30', notes: 'Loves hiking' },
  { id: 2, name: 'Tunde', lastContact: '2025-11-02', notes: 'Prefers weekend calls' },
  { id: 3, name: 'Kemi', lastContact: '2025-10-25', notes: 'New job - congratulate' }
]

export default function Home(){
  return (
    <div className="container">
      <Header />
      <main>
        <section className="intro">
          <h2>Your Circle</h2>
          <p>Keep track of friends, when you last reached out, and little notes to keep relationships alive.</p>
        </section>

        <section className="friends-grid">
          {mockFriends.map(f => (
            <FriendCard key={f.id} friend={f} />
          ))}
        </section>
      </main>
    </div>
  )
}
