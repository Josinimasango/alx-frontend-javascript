export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
   // Modifying the outer task variable	  
   const  task = true;
   // Modifying the outer task2 variable	  
   const  task2 = false;
  }

  return [task, task2];
}
