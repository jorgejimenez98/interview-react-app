import React from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heading: {
      fontSize: theme.typography.pxToRem(15),
    },
  })
);

function DetailsItemLists({ list, title }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {list.length === 0 ? (
            <div className="w-100 text-center">
              <h6 className="text-muted">No Items</h6>
            </div>
          ) : (
            <List className='w-100'>
              {list.map((text: string, index: number) => {
                return (
                  <ListItem role={undefined} dense button key={index}>
                    <ListItemIcon>
                      <p className="mt-3">
                        <span className={`badge bg-primary`}>{index + 1}</span>
                      </p>
                    </ListItemIcon>
                    <ListItemText primary={`${text}`} />
                  </ListItem>
                );
              })}
            </List>
          )}
        </AccordionDetails>
      </Accordion>
    </React.Fragment>
  );
}

export default DetailsItemLists;
