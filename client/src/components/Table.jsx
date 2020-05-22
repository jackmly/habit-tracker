import React from "react";
import SingleButton from "./SingleButton";

function Table() {

   const date = new Date();
   const year = date.getFullYear();

   const leapYear = (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);

   function createTable() {
      let table =[];
      const shortMonth = [2, 4, 6, 9, 11]
      const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
      let tableHeader = [];
      for (let i=0; i<12; i++){
         tableHeader.push(<td className="tableHeader">{months[i]}</td>)
      }
      table.push(<tr>{tableHeader}</tr>)


      for (let i=1; i<=31; i++) {
         let tableBody = [];
         for (let j=1; j<=12; j++) {
            if (j===2) {
               if (i===30||i===31) {
                  tableBody.push(<td></td>)
               } else if (!leapYear && i===29) {
                  tableBody.push(<td></td>)
               } else {
                  tableBody.push(<td><SingleButton date={i} month={j} /></td>)
               }
            } else if (shortMonth.includes(j) && i===31) {
               tableBody.push(<td></td>)
            } else {
               tableBody.push(<td><SingleButton date={i} month={j} year={year} /></td>)
            }
         }
         table.push(<tr>{tableBody}</tr>)
      }
      return table
   }
   return (
      <div className = "container">
      <table>
         <tbody>
         {createTable()}
         </tbody>
      </table>
      </div>

   )

}

export default Table