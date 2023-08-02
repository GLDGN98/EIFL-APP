import * as React from "react"
import { styled } from "@mui/material/styles"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import Paper from "@mui/material/Paper"
import TextField from "@mui/material/TextField"
import MenuItem from "@mui/material/MenuItem"
import Button from "@mui/material/Button"
import { Grid } from "@mui/material"
import backgroundImage from "../assets/img/matches-football-bg.jpg"
const footballTeams = [
  { name: "יהלום שחור חיפה", district: "North" },
  { name: "זלמן נתניה", district: "North" },
  { name: "תקומה פתח תקווה", district: "North" },
  { name: "צעירי קרית משה", district: "North" },
  { name: "צעירי יוספטל פתח תקווה", district: "North" },
  { name: "פג'ה פתח תקווה", district: "North" },
  { name: "עתידי בת ים", district: "North" },
  { name: "מעברה יבנה", district: "North" },
  { name: "חולון אולסטאר", district: "North" },
  { name: "ותיקי רחובות", district: "North" },
  { name: "הפועל יבנה", district: "North" },
  { name: "אריות באזי בת ים", district: "North" },
  { name: "אור יהודה", district: "North" },

  // Add more teams for the North district
  // ...
  { name: "קרית מלאכי אחי הכי", district: "South" },
  { name: "מזכרת בתיה אריות", district: "South" },
  { name: "נבסו קרית גת", district: "South" },
  { name: "נשרים גדרה", district: "South" },
  { name: "עתידי אשדוד", district: "South" },
  { name: "עתידי רמלה", district: "South" },
  { name: "צעירי אשדוד", district: "South" },
  { name: "צעירי קרית גת", district: "South" },
  { name: "אנדליי שפירא גדרה", district: "South" },
  { name: "אריות אשקלון", district: "South" },
  { name: "מוצ'ה אליאס אשקלון", district: "South" },
  { name: "חבשה בונה ר.א", district: "South" },
  { name: "יהלומי מלאכי", district: "South" },
  { name: "כוכבי אשדוד", district: "South" },

  // Add more teams for the South district
  // ...
]
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const FootballMatchesForm = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "NotoSansHebrew",
  padding: theme.spacing(2),
  "& > form": {
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
  },
  color: "white",
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

function createData(
  name,
  matchNumber,
  wins,
  ties,
  losses,
  goalsFor,
  goalsAgainst,
  points
) {
  return {
    name,
    matchNumber,
    wins,
    ties,
    losses,
    goalsFor,
    goalsAgainst,
    points,
  }
}

export function MatchesTable() {
  const [selectedDistrict, setSelectedDistrict] = React.useState("north")
  const [selectedTeam, setSelectedTeam] = React.useState("")
  const [goalsFor, setGoalsFor] = React.useState(0)
  const [goalsAgainst, setGoalsAgainst] = React.useState(0)
  const [northRows, setNorthRows] = React.useState(() =>
    generateInitialRows(
      footballTeams.filter((team) => team.district === "North")
    )
  )
  const [southRows, setSouthRows] = React.useState(() =>
    generateInitialRows(
      footballTeams.filter((team) => team.district === "South")
    )
  )
  function generateInitialRows(teams) {
    return teams.map((team) => createData(team.name, 0, 0, 0, 0, 0, 0, 0))
  }

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value)
    setSelectedTeam("")
  }

  const handleTeamChange = (event) => {
    setSelectedTeam(event.target.value)
  }

  const sortByPoints = (rows) => {
    return rows.slice().sort((a, b) => b.points - a.points)
  }

  const handleGoalsForChange = (event) => {
    setGoalsFor(parseInt(event.target.value))
  }

  const handleGoalsAgainstChange = (event) => {
    setGoalsAgainst(parseInt(event.target.value))
  }

  const handleUpdateMatchResult = (event) => {
    event.preventDefault()

    if (!selectedTeam || isNaN(goalsFor) || isNaN(goalsAgainst)) {
      return
    }

    const targetRows = selectedDistrict === "north" ? northRows : southRows

    const updatedRows = targetRows.map((row) => {
      if (row.name === selectedTeam) {
        const goalsRatio = `${goalsFor}-${goalsAgainst}`
        const points =
          goalsFor > goalsAgainst ? 3 : goalsFor === goalsAgainst ? 1 : 0

        return {
          ...row,
          wins: goalsFor > goalsAgainst ? row.wins + 1 : row.wins,
          ties: goalsFor === goalsAgainst ? row.ties + 1 : row.ties,
          losses: goalsFor < goalsAgainst ? row.losses + 1 : row.losses,
          goalsFor: row.goalsFor + goalsFor,
          goalsAgainst: row.goalsAgainst + goalsAgainst,
          goalsRatio,
          points: row.points + points,
        }
      } else {
        return row
      }
    })

    if (selectedDistrict === "north") {
      setNorthRows(updatedRows)
    } else {
      setSouthRows(updatedRows)
    }

    // Reset form values
    setSelectedTeam("")
    setGoalsFor(0)
    setGoalsAgainst(0)
  }

  const selectedRows = selectedDistrict === "north" ? northRows : southRows
  const sortedRows = sortByPoints(selectedRows)

  return (
    <div className="matches-result full">
      <div className="table">
        <div style={{ maxWidth: "1024px", margin: "auto" }}>
          <TextField
            style={{
              marginTop: "75px",
              background: "white",
              border: "1px solid black",
              borderRadius: "5px",
              marginBottom: "1em",
            }}
            select
            value={selectedDistrict}
            onChange={handleDistrictChange}
          >
            <MenuItem value="north">צפון</MenuItem>
            <MenuItem value="south">דרום</MenuItem>
          </TextField>
        </div>
        <TableContainer
          style={{ maxWidth: "1024px", margin: "auto" }}
          dir="rtl"
          component={Paper}
        >
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="center">קבוצה</StyledTableCell>
                <StyledTableCell align="right">מש'</StyledTableCell>
                <StyledTableCell align="right">נצ'</StyledTableCell>
                <StyledTableCell align="right">תיקו</StyledTableCell>
                <StyledTableCell align="right">הפ'</StyledTableCell>
                <StyledTableCell align="right">יחס שערים</StyledTableCell>
                <StyledTableCell align="right">נק'</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRows.map((row) => (
                <StyledTableRow key={row.name}>
                  <StyledTableCell align="center" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {row.matchNumber}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.wins}</StyledTableCell>
                  <StyledTableCell align="right">{row.ties}</StyledTableCell>
                  <StyledTableCell align="right">{row.losses}</StyledTableCell>
                  <StyledTableCell align="right">
                    {row.goalsRatio}
                  </StyledTableCell>
                  <StyledTableCell align="right">{row.points}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <FootballMatchesForm dir="rtl">
          <h3>עדכון תוצאת משחק</h3>
          <form
            style={{ background: "white", padding: "1em", borderRadius: "5px" }}
            onSubmit={handleUpdateMatchResult}
          >
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="בחר מחוז"
                  value={selectedDistrict}
                  onChange={handleDistrictChange}
                >
                  <MenuItem value="north">צפון</MenuItem>
                  <MenuItem value="south">דרום</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  select
                  fullWidth
                  label="בחר קבוצה"
                  value={selectedTeam}
                  onChange={handleTeamChange}
                >
                  <MenuItem value="">
                    <em>בחר קבוצה</em>
                  </MenuItem>
                  {selectedRows.map((row) => (
                    <MenuItem key={row.name} value={row.name}>
                      {row.name}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="כמות שערים שהובקעו"
                  name="goalsFor"
                  value={goalsFor}
                  onChange={handleGoalsForChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  type="number"
                  label="כמות שערים שהתקבלו"
                  name="goalsAgainst"
                  value={goalsAgainst}
                  onChange={handleGoalsAgainstChange}
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                >
                  עדכן תוצאה
                </Button>
              </Grid>
            </Grid>
          </form>
        </FootballMatchesForm>
      </div>
    </div>
  )
}
