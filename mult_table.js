   
/* File: mult_table.js
 * GUI Assignment: Creating an Interactive Dynamic Table
 * Nicholas Aswani, UMass Lowell Computer Science, nicholas_aswani@student.uml.edu
 * copyright (c) 2021 by Nicholas. All rights reserved. May be freely copied or excerpted for 
 * educational purposes with credit to the author.
 */

   function validate(form) {
      /*
    var max_row = parseInt(document.getElementById("max_row_value").value);
    var min_row = parseInt(document.getElementById("min_row_value").value);
    var max_col = parseInt(document.getElementById("max_col_value").value);
    var min_col = parseInt(document.getElementById("min_col_value").value);
*/

  /* these variables capture the string variables passed from the form 
  and stores them as number variables */
   var max_row = document.getElementById("max_row_value").valueAsNumber;
   var min_row = document.getElementById("min_row_value").valueAsNumber;
   var max_col = document.getElementById("max_col_value").valueAsNumber;
   var min_col = document.getElementById("min_col_value").valueAsNumber;

   /*these 'if' conditional expressions validate the input variables captured from the form*/
   if(max_row == null || isNaN(max_row) )  {
      alert("A valid number is required");
      return false;
   }

   if(min_row == null || isNaN(min_row)) {
     alert("Please enter a valid number");
     return false;
  }

  if(max_col == null || isNaN(max_col)) {
     alert("Please enter a valid number");
     return false;
  }

  if(min_col == null || isNaN(min_col)) {
     alert("Please enter a valid number");
     return false;
  }
  /* the following code creates the multiplication table and renders it via the html table */
    var table = document.getElementById("mult_table");   //holds the html table 
    var output=" ";  // to append html data
    for(var i = min_row; i<=max_row; i=i+1) {            //loop that creates rows 
        output+="<tr>";                                
     for(var j=min_col; j<=max_col;j=j+1) {         // the columns creation loop 
         if(i==min_row && j==min_col)              //for the first cell(row[0]column[0])
            output+="<th>&times;</th>";        //puts the x symbol in the first corner cell
         else {
         if(i==min_row || j== min_col)         // sets the header data; the first row and first column
            output +="<th>"+i*j+"</th>";
         else
            output +="<td>"+i*j+"</td>"; //sets the data for the rest of the columns and rows
         }
     }
     output+="</tr>";
  }
  //document.getElementById("mult_table").innerHTML = output;
   table.innerHTML=output; //sets the the Html content of the table element
   return false;
}
   
