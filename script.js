// Alert Button
document.getElementById('alertMe').onclick = function () {
    alert("Hello world!");
 };
 
 // Hover Button
 const hoverBtn = document.getElementById('hoverButton');
 hoverBtn.onmouseover = function () {
    hoverBtn.style.background = 'lightgreen';
 };
 hoverBtn.onmouseleave = function () {
    hoverBtn.style.background = 'lightcoral';
 };
 
 // Counter Button
 let count = 0;
 const counterParagraph = document.getElementById('counter');
 document.getElementById('buttonCounter').onclick = function () {
    count += 1;
    counterParagraph.innerHTML = 'Count: ' + count;
    if (count % 2 == 0) {
       counterParagraph.style.color = "blue";
    } else {
       counterParagraph.style.color = "orange";
    }
 };
 
 // For Loop Message Generator
 const container = document.getElementById('container');
 for (let i = 1; i <= 10; i++) {
    const para = document.createElement("p");
    para.textContent = "This is loop message number " + i;
    container.appendChild(para);
 }
 