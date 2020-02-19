import * as React from "react"

import {
  Container,
  Paper,
  Typography,
  makeStyles,
  Grid,
  Button,
  Link
} from "@material-ui/core"
import { useHistory } from "react-router"

const useStyles = makeStyles(theme => ({
  paperHeader: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "center",
    color: theme.palette.text.secondary,
    border: "1px solid #ADADAD"
  },
  images: {
    margin: "0 0 65px 0"
  },
  imageTitle: {
    fontSize: "16pt",
    color: theme.palette.text.secondary,
    textAlign: "left"
  }
}))

export const Demo = () => {
  const history = useHistory()
  const classes = useStyles()
  return (
    <Container>
      <Paper className={classes.paperHeader}>
        <Typography component="h1" align="center" style={{ fontSize: "2em" }}>
          Host Profiles
        </Typography>
      </Paper>
      <Grid item xs={12} style={{ margin: "30px 0 0 0" }}>
        <Container>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12} style={{ marginBottom: "8px" }}>
                <Grid container>
                  <Grid item xs={2}>
                    <Typography
                      component="h3"
                      style={{ fontWeight: "bold", textDecoration: "und" }}
                      align="left"
                    >
                      Name
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      component="h3"
                      style={{ fontWeight: "bold" }}
                    ></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component="h3" style={{ fontWeight: "bold" }}>
                      Link
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ paddingBottom: "4px" }}>
                <Grid container>
                  <Grid item xs={2}>
                    <Typography component="p" align="left">
                      <Link
                        style={{
                          color: "rgba(0, 0, 0, 0.54)",
                          textDecoration: "none"
                        }}
                      >
                        Bonnie Wolfe
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography component="h3"></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      color="primary"
                      // variant="contained"
                      component={Link}
                      style={{ color: "white", backgroundColor: "#00AAEF" }}
                      // to={"/hosthome/guests/999/matches/999"}
                      onClick={() =>
                        history.push(`/hosthome/guests/999/matches/999`)
                      }
                    >
                      Profile
                    </Button>
                  </Grid>
                </Grid>
                <Grid container style={{ margin: "22px 0 0 0" }}>
                  <Grid item xs={2}>
                    <Typography component="p" align="left">
                      <Link
                        style={{
                          color: "rgba(0, 0, 0, 0.54)",
                          textDecoration: "none"
                        }}
                      >
                        Michael Romanov
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography component="h3"></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      color="primary"
                      // variant="contained"
                      component={Link}
                      style={{ color: "white", backgroundColor: "#00AAEF" }}
                      // to={"placeholder"}
                      onClick={() => history.push(`placeholder`)}
                    >
                      Profile
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
      <Paper className={classes.paperHeader} style={{ margin: "30px 0 0 0" }}>
        <Typography component="h1" align="center" style={{ fontSize: "2em" }}>
          Guest Profiles
        </Typography>
      </Paper>
      <Grid item xs={12} style={{ margin: "30px 0 0 0" }}>
        <Container>
          <Paper className={classes.paper}>
            <Grid container>
              <Grid item xs={12} style={{ marginBottom: "8px" }}>
                <Grid container>
                  <Grid item xs={2}>
                    <Typography
                      component="h3"
                      style={{ fontWeight: "bold", textDecoration: "und" }}
                      align="left"
                    >
                      Name
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography
                      component="h3"
                      style={{ fontWeight: "bold" }}
                    ></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Typography component="h3" style={{ fontWeight: "bold" }}>
                      Link
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={12} style={{ paddingBottom: "4px" }}>
                <Grid container>
                  <Grid item xs={2}>
                    <Typography component="p" align="left">
                      <Link
                        style={{
                          color: "rgba(0, 0, 0, 0.54)",
                          textDecoration: "none"
                        }}
                      >
                        Kirk Chu
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography component="h3"></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      color="primary"
                      // variant="contained"
                      component={Link}
                      style={{ color: "white", backgroundColor: "#00AAEF" }}
                      // to={"/hosthome/guests/999"}
                      onClick={() => history.push(`/hosthome/guests/999`)}
                    >
                      Profile
                    </Button>
                  </Grid>
                </Grid>
                <Grid container style={{ margin: "22px 0 0 0" }}>
                  <Grid item xs={2}>
                    <Typography component="p" align="left">
                      <Link
                        style={{
                          color: "rgba(0, 0, 0, 0.54)",
                          textDecoration: "none"
                        }}
                      >
                        Megan Sukarnoputri
                      </Link>
                    </Typography>
                  </Grid>
                  <Grid item xs={8}>
                    <Typography component="h3"></Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <Button
                      color="primary"
                      // variant="contained"
                      component={Link}
                      style={{ color: "white", backgroundColor: "#00AAEF" }}
                      // to={"placeholder"}
                      onClick={() => history.push(`placeholder`)}
                    >
                      Profile
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </Container>
      </Grid>
      <Paper className={classes.paperHeader} style={{ margin: "30px 0 0 0" }}>
        <Typography component="h1" align="center" style={{ fontSize: "2em" }}>
          Key Moments
        </Typography>
      </Paper>
      <Grid item xs={12} style={{ margin: "50px 0 0 0" }}>
        <Container>
          <Paper className={classes.paper} style={{ border: "none" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <div>
                <div className={classes.imageTitle}>Admin Page</div>
                <div className={classes.images}>
                  <img src={"/hosthome/img/adminPage.png"} alt={"Admin Page"} />
                </div>
              </div>
              <div>
                <div className={classes.imageTitle}>Guest Matches</div>
                <div className={classes.images}>
                  <img
                    src={"/hosthome/img/guestMatches.png"}
                    alt={"Guest Matches"}
                  />
                </div>
              </div>
              <div>
                <div className={classes.imageTitle}>
                  Interested/Not Interested Buttons
                </div>
                <div className={classes.images}>
                  <img
                    src={"/hosthome/img/interestButtons.png"}
                    alt={"Interested/Not Interested Buttons"}
                  />
                </div>
              </div>
              <div>
                <div className={classes.imageTitle}>
                  Annotation of Interested
                </div>
                <div className={classes.images}>
                  <img
                    src={"/hosthome/img/annotationOfInterested.png"}
                    alt={"Annotation of Interested"}
                  />
                </div>
              </div>
              <div>
                <div className={classes.imageTitle}>Annotation of Declined</div>
                <div className={classes.images}>
                  <img
                    src={"/hosthome/img/annotationOfDecline.png"}
                    alt={"Annotation of Declined"}
                  />
                </div>
              </div>
            </div>
          </Paper>
        </Container>
      </Grid>
    </Container>
  )
}