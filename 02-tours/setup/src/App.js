import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([])

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false)
      setTours(tours)
    } catch (e) {
      setLoading(false)
      console.log(e)
    }
  }

  useEffect(() => {
    fetchTours()
  }, [])

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours)
  }

  return <>
    {loading ?
      <main><Loading /></main> :
      tours.length > 0 ?
        <main><Tours tours={tours} removeTour={removeTour} /></main> :
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={fetchTours}>Refresh</button>
        </div>
      </main>
    }
  </>
}

export default App
