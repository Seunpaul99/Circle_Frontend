import React from 'react'

export default function FriendCard({ friend }){
  return (
    <article className="friend-card">
      <h3>{friend.name}</h3>
      <p className="last-contact">Last contact: <strong>{friend.lastContact}</strong></p>
      <p className="notes">{friend.notes}</p>
      <div className="actions">
        <button className="btn">Remind me</button>
        <button className="btn secondary">Message</button>
      </div>
    </article>
  )
}
