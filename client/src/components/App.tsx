import React from 'react'
import { useSelector } from 'react-redux'
import { TApp } from '../redux/reducers/rootReducer'
import { useRoutes } from '../routes/routes'
import { Header } from './Header/Header'
import { Loader } from './Loader/Loader'
import './App.scss'

const App: React.FC = () => {
  const { token } = useSelector((state: TApp) => state.auth)
  const isAuthed = !!token
  const routes = useRoutes(isAuthed)
  const { isLoading } = useSelector((state: TApp) => state.loader)

  return (
    <>
      <div className="wrapper">
        <main className="page">
          <Header isAuthenticated={isAuthed} />
          <section className="sc">
            <div className={`sc__container ${isAuthed ? '_container' : ''}`}>
              <div className="sc__body">{routes}</div>
            </div>
          </section>
        </main>
      </div>
      {isLoading && <Loader />}
    </>
  )
}

export default App
