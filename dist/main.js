(()=>{const t=new Knight;t.buildGraph(),((t,e,o)=>{let l="";const n=[[[0,0],""]];for(;n.length>0;){let[e,g]=n.shift();if(g+=`[${e}] `,r=o,e.toString()===r.toString()){let t=g.split(" ");t.pop(),console.log(`You made it in ${t.length} moves! Here's your path:`);for(let e=0;e<t.length;e++)console.log(t[e]);return t}for(let o=0;o<t[e].length;o++){let r=t[e][o];l.includes(r.toString())||(l+=`${r}, `,n.push([r,g]))}}var r})(t.graph,0,[3,4])})();