Can be used to style inline text representing data or statistics, such as the scores in the table below.

 ```jsx
import {
  ALIGN,
  Table,
  TableCell,
  TableBody,
  TableRow,
  TableHeadingCell,
  TableHead,
} from 'mark-one';

<Table>
  <TableHead>
    <TableRow>
      <TableHeadingCell scope={'col'}>ID</TableHeadingCell>
      <TableHeadingCell scope={'col'}>First Name</TableHeadingCell>
      <TableHeadingCell scope={'col'}>Last Name</TableHeadingCell>
      <TableHeadingCell scope={'col'}>Score</TableHeadingCell>
    </TableRow>
  </TableHead>
  <TableBody isScrollable={true}>
    <TableRow isStriped={true}>
      <TableCell alignment={ALIGN.LEFT}>1</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Kristin</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Glenn</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>
          <Stat>1234</Stat>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.LEFT}>2</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Jack</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Thompson</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>
          <Stat>2121</Stat>
      </TableCell>
    </TableRow>
    <TableRow isStriped={true}>
      <TableCell alignment={ALIGN.LEFT}>3</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Lianne</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Michaels</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>
          <Stat>4321</Stat>
      </TableCell>
    </TableRow>
    <TableRow>
      <TableCell alignment={ALIGN.LEFT}>4</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Gabriela</TableCell>
      <TableCell alignment={ALIGN.LEFT}>Hines</TableCell>
      <TableCell alignment={ALIGN.RIGHT}>
          <Stat>925</Stat>
      </TableCell>
    </TableRow>
  </TableBody>
</Table>
 ```