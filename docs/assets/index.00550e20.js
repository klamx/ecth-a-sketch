const e=e=>{(e=>{document.querySelector(".container").style.cssText=`display: grid; grid-template-columns: repeat(${e}, calc(90vh / ${e})); grid-template-rows: repeat(${e}, calc(90vh / ${e}));`})(e),(e=>{const t=document.querySelector(".container");for(let r=0;r<e*e;r++){const c=document.createElement("div");c.classList.add("grid-item"),c.setAttribute("id",r),c.style.cssText=`width: calc(90vh / ${e}); height: calc(90vh / ${e});`,t.appendChild(c)}})(e);document.querySelectorAll(".grid-item").forEach((e=>{addEventListener("mouseover",(t=>{t.target.id===e.getAttribute("id")&&e.classList.add("hover")}))}))};e(30);document.querySelector("#clear").addEventListener("click",(()=>{document.querySelectorAll(".grid-item").forEach((e=>e.remove()));let t=0;try{let e=prompt("Type the width of the new grid: ",30);t=e>0&&e<=100?e:16}catch(r){alert("The width of the grid have to be <= 100")}e(t)}));