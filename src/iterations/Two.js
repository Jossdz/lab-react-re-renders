/* eslint-disable no-func-assign */
import axios from 'axios'
import React from 'react'

function Two() {
  const [characters, setCharacters] = React.useState(null)
  const [search, setSearch] = React.useState('')

  React.useEffect(() => {
    async function getChars() {
      const {
        data: { results }
      } = await axios.get('https://rickandmortyapi.com/api/character')
      setCharacters(results)
    }
    getChars()
  }, [])

  const data = search
    ? characters.filter(characters =>
        characters.name.toLowerCase().includes(search)
      )
    : characters

  return (
    <div>
      <h1>Rick and Morty Characters</h1>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data?.map(el => (
          <Card key={el.id} name={el.name} image={el.image} />
        ))}
      </div>
    </div>
  )
}

function Card({ name, image }) {
  return (
    <div>
      <h2>{name}</h2>
      <img width='200' src={image} alt={`${name}-img`} />
    </div>
  )
}

export default Two
