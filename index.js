
// const superbowlWin = objArray => {
//     for (const element of objArray) {
//         if (element.result === "W") {
//             return element.year;
//         }
//     }
// }

const superbowlWin = function(objArray) {
   const found = objArray.find((record) => {
    return record.result === "W"

   })
    // if (found) {
    //     return found.year;
    // } else {
    //     return undefined;
    // }
    return found ? found.year : undefined;
}
// console.log(superbowlWin(records))
