var leonus={linkCom:e=>{var t=document.querySelector(".el-textarea__inner");"bf"==e?(t.value="```yml\n",t.value+="- name: \n  link: \n  avatar: \n  descr: \n  siteshot: ",t.value+="\n```",t.setSelectionRange(15,15)):(t.value="标题：\n描述：\n链接：\n图标：\n大图：",t.setSelectionRange(5,5)),t.focus()},owoBig:()=>{if(!document.getElementById("post-comment")||document.body.clientWidth<768)return;let e=1,t="",n=document.createElement("div"),o=document.querySelector("body");n.id="owo-big",o.appendChild(n),new MutationObserver((l=>{for(let i=0;i<l.length;i++){let a=l[i].addedNodes,s="";if(2==a.length&&"OwO-body"==a[1].className)s=a[1];else{if(1!=a.length||"tk-comment"!=a[0].className)continue;s=a[0]}s.onmouseover=l=>{e&&("OwO-body"==s.className&&"IMG"==l.target.tagName||"tk-owo-emotion"==l.target.className)&&(e=0,t=setTimeout((()=>{let e=3*l.path[0].clientHeight,t=3*l.path[0].clientWidth,i=l.x-l.offsetX-(t-l.path[0].clientWidth)/2,a=l.y-l.offsetY;i+t>o.clientWidth&&(i-=i+t-o.clientWidth+10),i<0&&(i=10),n.style.cssText=`display:flex; height:${e}px; width:${t}px; left:${i}px; top:${a}px;`,n.innerHTML=`<img src="${l.target.src}">`}),300))},s.onmouseout=()=>{n.style.display="none",e=1,clearTimeout(t)}}})).observe(document.getElementById("post-comment"),{subtree:!0,childList:!0})}};