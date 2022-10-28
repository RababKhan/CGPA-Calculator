document.write("<h1><center>CGPA Caclulator</center></h1>");
document.write("<center>As per IUBAT grading policy</center>");
document.write("</br>");
var name=prompt("Enter your name: ");
document.write("<b>Student Name: </b>"+name+"</br>");
var department=prompt("Enter your department name: ");
document.write("<b>Department: </b>"+department+"</br>");
var subject=prompt("Enter your course name: ");
document.write("<b>Course Name: </b>"+subject+"</br>")
var marks=prompt("Enter your marks: ");
var credit=prompt("Enter the credit value of course: ");
document.write("<b>Credit Hour: </b>"+credit+"</br>")



if (marks>90)
{
    document.write("<b>Grade:</b> A</br>");
    document.write("<b>CGPA: </b> 4.00");
}
if (marks >= 87 && marks <= 90)
{
    document.write("<b>Grade:</b> B+")
    document.write("<b>CGPA: </b> 3.70");
}
if (marks >= 84 && marks <= 86)
{
    document.write("<b>Grade: </b>B</br>");
    document.write("<b>CGPA: </b> 3.40");
}
if (marks >= 81 && marks <= 83)
{
    document.write("<b>Grade: </b>B-</br>");
    document.write("<b>CGPA: </b> 3.10");
}
if (marks >= 77 && marks <= 80)
{
    document.write("<b>Grade: </b>C+</br>");
    document.write("<b>CGPA: </b> 2.80");
}
if (marks >= 73 && marks <= 76)
{
    document.write("<b>Grade: </b>C</br>");
    document.write("<b>CGPA: </b> 2.50");
}
if (marks >= 70 && marks <= 72)
{
    document.write("<b>Grade: </b>C-</br>");
    document.write("<b>CGPA: </b> 2.20");
}
if (marks >= 65 && marks <= 70)
{
    document.write("<b>Grade: </b>D+</br>");
    document.write("<b>CGPA: </b> 1.80</br>");
    document.write("<b>Status:</b> RETAKE");
}
if (marks >= 60 && marks <= 64)
{
    document.write("<b>Grade: </b>D</br>");
    document.write("<b>CGPA: </b> 1.50</br>");
    document.write("<b>Status:</b> RETAKE");
}
if (marks <= 59)
{
    document.write("<b>Grade: </b>F</br>");
    document.write("<b>CGPA: </b> 0.00</br>");
    document.write("<b>Status:</b> FAIL");
}

