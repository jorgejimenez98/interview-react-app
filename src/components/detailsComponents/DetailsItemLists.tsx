import React from "react";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function DetailsItemLists({ list, title }) {
  return (
    <React.Fragment>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {list.length === 0 ? (
            <h6 className="text-center text-muted">No Items</h6>
          ) : (
            <List>
              {list.map((text: string, index: number) => {
                return (
                  <React.Fragment key={index}>
                    <ListItem role={undefined} dense button>
                      <ListItemIcon>
                        <p className="mt-2">
                          <span className={`badge bg-primary`}>
                            {index + 1}
                          </span>
                        </p>
                      </ListItemIcon>
                      <ListItemText primary={`${text}`} />
                    </ListItem>
                  </React.Fragment>
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
