// import "./ParagraphPresentation.scss"
import "/src/components/presentation/ParagraphPresentation.scss"

const ParagraphPresentation = ({text}) => {
    return (
        <div className="animated-title">
             <div className={"paragraph-text-container"}>
                 <p id={"paragraph-text"}>{text}</p>
             </div>
         </div>
    );
};

export default ParagraphPresentation;
