import questions from "../data/questions.json"
const questionData =()=>{
    return (
       <div>{questions.map(e => {
           return (
               <div>
                   <div>{e[0]}</div>
                   <div>{e[1]}</div>
               </div>
           );
       })}</div>
    );








}
export default questionData;