import React from "react";

function Table() {

   const date = new Date();
   const year = date.getFullYear();

   const leapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

   function createTable() {
      let table =[];
      const shortMonth = [2, 4, 6, 9, 11]


      for (let i=1; i<=31; i++) {
         let children = [];
         for (let j=1; j<=12; j++) {
            if (j===2) {
               if (i===30||i===31) {
                  children.push(<td></td>)
               } else if (!leapYear && i===29) {
                  children.push(<td></td>)
               } else {
                  children.push(<td><div class="circle"><p>{i}</p></div></td>)
               }
            } else if (shortMonth.includes(j) && i===31) {
               children.push(<td></td>)
            } else {
               children.push(<td><div class="circle"><p>{i}</p></div></td>)
            }
         }
         table.push(<tr>{children}</tr>)
      }
      return table
   }
   return (
      <table>
         {createTable()}
      </table>

   )

}

export default Table