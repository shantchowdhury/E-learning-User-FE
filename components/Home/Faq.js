import {Accordion, AccordionSummary, AccordionDetails} from '@mui/material'
import {IoIosArrowDown} from "react-icons/io";
import parse from "html-react-parser";

const Faq = ({ title, content }) => {
  return (
    <div>
       <Accordion>
        <AccordionSummary expandIcon={<IoIosArrowDown color='white' />} aria-controls="panel1a-content" id="panel1a-header">
          {title}
        </AccordionSummary>
        <AccordionDetails>
           {parse(content)}
        </AccordionDetails>
      </Accordion> 
    </div>
  );
};

export default Faq;
