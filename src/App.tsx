import { BrowserRouter, Route, Routes } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>HOME</h1>} />
        <Route path="/new" element={<h1>New Creation</h1>} />

        <Route path="/:id">
          <Route 
          index
          element={<h1>Detail Page</h1>}
          />
        </Route>
          <Route path="edit"
          element={<h1>Editing Page</h1>}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App