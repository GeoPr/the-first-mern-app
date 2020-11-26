import React from 'react'
import { ILink } from '../../redux/reducers/currentLinkReducer/currentLinkReducer'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableContainer from '@material-ui/core/TableContainer'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import Paper from '@material-ui/core/Paper'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'

interface IProps {
  links: Array<ILink>
}

export const LinksList: React.FC<IProps> = ({ links }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <strong>#</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Оригинальная</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Сокращенная</strong>
            </TableCell>
            <TableCell align="left">
              <strong>Отрыть</strong>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {links.map((link, idx) => (
            <TableRow key={link._id}>
              <TableCell component="th" scope="row">
                {idx + 1}
              </TableCell>
              <TableCell align="left">{link.from}</TableCell>
              <TableCell align="left">{link.to}</TableCell>
              <TableCell align="left">
                <Link to={`/details/${link._id}`}>
                  <Button color="primary" variant="contained">
                    Открыть
                  </Button>
                </Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
