showNotes();
let addBtn=document.getElementById("addBtn");
addBtn.addEventListener("click",()=>
{
    if(addTxt.value.length==0)
    {
    
        alert("note could not be empty enter something");
}
else
{
    let addTxt=document.getElementById("addTxt");
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    notesobj.push(addTxt.value);
    localStorage.setItem("notes",JSON.stringify(notesobj));
    addTxt.value="";
    showNotes();
}
})
function showNotes()
{
    let html="";
    let notes=localStorage.getItem("notes");
    if(notes==null)
    {
        notesobj=[];
    }
    else
    {
        notesobj=JSON.parse(notes);
    }
    notesobj.forEach((element,index)=> {
        html+=`<div class="noteCard my-2 mx-2 card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">Note ${index + 1}</h5>
            <p class="card-text"> ${element}</p>
            <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
        </div>
    </div>`;
    let notesElm=document.getElementById("notes");
    if(notes.length!=0)
    {
        notesElm.innerHTML=html;
    }
    else
    {
        notesElm.innerHTML="Nothing  to show add some notes";
    }
    });
}
function deleteNote(index)
{
  let notes =localStorage.getItem("notes");
  if(notes==null)
  {
      notesobj==null;
  }
  else
  {
      notesobj=JSON.parse(notes);
  }
  notesobj.splice(index,1);
  localStorage.setItem("notes",JSON.stringify(notesobj));
  showNotes();
}

let search=document.getElementById("searchTxt");
search.addEventListener("input",()=>
{
    let searchValue=search.value.toLowerCase();
    let cardsvalue=document.getElementsByClassName("noteCard");
    Array.from(cardsvalue).forEach((element)=>
    {
        let textvalue=element.getElementsByTagName("p")[0].innerText;
        console.log(textvalue);
        if(textvalue.includes(searchValue))
        {
            element.style.display="block";
        }
        else
        {
            element.style.display="none";
        }
    })

})

// let search = document.getElementById('searchTxt');
// search.addEventListener("input", function(){

//     let inputVal = search.value.toLowerCase();
//     // console.log('Input event fired!', inputVal);
//     let noteCards = document.getElementsByClassName('noteCard');
//     Array.from(noteCards).forEach(function(element){
//         let cardTxt = element.getElementsByTagName("p")[0].innerText;
//         if(cardTxt.includes(inputVal)){
//             element.style.display = "block";
//         }
//         else{
//             element.style.display = "none";
//         }
//         // console.log(cardTxt);
//     })
// })
