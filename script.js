
const createLi = (emoji)=>{
    const emojiDiv = document.createElement("div");
    emojiDiv.classList.add("emoji");
    emojiDiv.innerText=emoji.emoji;

    const aliasesDiv =document.createElement("div");
    aliasesDiv.classList.add("aliases");
    aliasesDiv.innerText=emoji.aliases.join(", ");

    const descriptionDiv=document.createElement("div");
    descriptionDiv.classList.add("description");
    descriptionDiv.innerText=emoji.description;

    const emojiLi=document.createElement("li");
    emojiLi.append(emojiDiv,aliasesDiv,descriptionDiv);
    return emojiLi;

}

const emojiUl=document.getElementById("emoijUl");

const resultUl=(emojiArray)=>{
    emojiUl.innerHTML="";
    console.log(emojiUl);
    emojiArray.forEach((emoji)=>{
    const li=createLi(emoji);
    emojiUl.append(li);
    });
}
resultUl(emojiList);

const emojiSearch=document.getElementById("emojiSearchBox");
emojiSearch.addEventListener("keyup",(event)=>{
const searchInput=event.target.value.toLowerCase();
const emojiFilter=emojiList.filter((emoji)=>
    emoji.description.toLowerCase().includes(searchInput)|| emoji.aliases.toString().toLowerCase().includes(searchInput)
);
resultUl(emojiFilter);
});