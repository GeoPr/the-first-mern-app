import { Typography } from '@material-ui/core'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { LinkCard } from '../../components/LinkCard/LinkCard'
import { getLink } from '../../redux/reducers/currentLinkReducer/asyncActions'
import { TApp } from '../../redux/reducers/rootReducer'
import './Details.scss'

interface RouteParams {
  id: string
}

export const Details: React.FC = () => {
  const linkId = useParams<RouteParams>().id
  const { token } = useSelector((state: TApp) => state.auth)
  const dispatch = useDispatch()
  const link = useSelector((state: TApp) => state.currentLink)

  useEffect(() => {
    ;(async () => {
      await dispatch(getLink(linkId, token))
    })()
  }, [])

  return (
    <div className="details">
      <div className="details__body">
        <Typography variant="h2">
          Your link
        </Typography>
        <LinkCard link={link!} />
      </div>
    </div>
  )
}
