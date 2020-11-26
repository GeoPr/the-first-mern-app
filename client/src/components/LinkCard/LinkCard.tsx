import React from 'react'
import { ILink } from '../../redux/reducers/currentLinkReducer/currentLinkReducer'
import './LinkCard.scss'

export const LinkCard: React.FC<{ link: ILink }> = ({ link }) => {
  return (
    <>
      {!!link && (
        <div className="details__item">
          <p>
            Your link:
            <a href={link?.to} target="_blank" rel="noopener noreferrer">
              {link?.to}
            </a>
          </p>
          <p>
            From:
            <a href={link?.from} target="_blank" rel="noopener noreferrer">
              {link?.from}
            </a>
          </p>
          <p>
            Number of clicks: <strong>{link?.clicks}</strong>
          </p>
          <p>
            Date: <strong>{new Date(link!.date!).toLocaleDateString()}</strong>
          </p>
        </div>
      )}
    </>
  )
}
