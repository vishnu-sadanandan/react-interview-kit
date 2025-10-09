import "./App.css";
import Accordion from "./components/Accordion";
import AccordionGroup from "./components/Accordion/AccordionGroup";

const interviewCard = [
  {
    id: "q:1",
    title: "Questions-1",
    content:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula",
  },
  {
    id: "q:2",
    title: "Questions-2",
    content:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula",
  },
  {
    id: "q:3",
    title: "Questions-3",
    content:
      "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula",
  },
];
function App() {
  return (
    <>
      <h1>React Interview Kit</h1>
      <div className="problem-statemets mt-3 flex flex-col items-start gap-3">
        <div className="usage-accordion flex flex-col items-start">
          <h2>Problem Statement 1: Accordion Standalone Component</h2>
          <div className="mt-2"></div>
          <div className={`flex flex-col gap-3 w-full`}>
            <div className="accordion-container flex flex-col gap-2">
              {interviewCard.map((question) => (
                <Accordion key={question.id} title={question.title}>
                  {question.content}
                </Accordion>
              ))}
            </div>
          </div>
          <h2>Problem Statement 1: Accordion Group Component</h2>
          <div className="mt-2"></div>
          <AccordionGroup accordionsItems={interviewCard} />
        </div>
      </div>
    </>
  );
}

export default App;
