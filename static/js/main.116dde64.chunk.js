(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(e,a,t){e.exports=t(66)},49:function(e,a,t){},50:function(e,a,t){},51:function(e,a,t){},61:function(e,a,t){},62:function(e,a,t){},63:function(e,a,t){},66:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(39),c=t.n(r),s=(t(49),t(10)),m=t(4),o=(t(50),t(51),t(68)),i=t(26),d=t(34),u=t(42),p=t(35),h=t(40),E=t(25),g=t(24);var N=()=>{const[e,a]=Object(l.useState)(""),[t,r]=Object(l.useState)(""),[c,N]=Object(l.useState)(""),[b,v]=Object(l.useState)(""),[f,y]=Object(l.useState)([]),[w,k]=Object(l.useState)(""),_=Object(m.o)(),j=Object(m.m)();Object(l.useEffect)(()=>{(async()=>{try{const t=(await o.a.get("https://meetanshi.com/blog/wp-json/acf/v3/options")).data.mobile_logo;t&&(a(t.url),r(t.alt||"Mobile Logo"),N(t.width),v(t.height))}catch(e){console.error("Error fetching the mobile logo:",e)}})(),(async()=>{try{const a=(await o.a.get("https://meetanshi.com/blog/wp-json/wp/v2/categories")).data.filter(e=>1!==e.id);y(a)}catch(e){console.error("Error fetching categories:",e)}})()},[]);const S="/"===j.pathname;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{className:"header-main"},n.a.createElement(i.a,{expand:"lg"},n.a.createElement(d.a,null,n.a.createElement(i.a.Brand,{href:"/",className:"d-inline-block",title:"Meetanshi Logo"},n.a.createElement("img",{src:e,alt:t,width:c,height:b,loading:"lazy"})),n.a.createElement(i.a.Toggle,{"aria-controls":"navbarScroll"}),n.a.createElement(i.a.Collapse,{id:"navbarScroll"},n.a.createElement(u.a,{className:"me-auto ms-auto my-2 my-lg-0 navbar-nav-scroll"}),n.a.createElement(p.a,{className:"d-flex",onSubmit:e=>{e.preventDefault(),w&&_(`/search?query=${w}`)}},n.a.createElement(p.a.Control,{type:"search",placeholder:"Search",className:"me-2","aria-label":"Search",value:w,onChange:e=>k(e.target.value)}),n.a.createElement(h.a,{variant:"outline-success",type:"submit"},n.a.createElement(E.a,{icon:g.c}))))))),S&&n.a.createElement("section",{className:"hero-section"},n.a.createElement(d.a,null,n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"hero-section-wrapper text-center"},n.a.createElement("h1",{className:"home-hero-title"},"Get Better at E-commerce & Marketing"),n.a.createElement("h5",{className:"home-hero-subtitle"},"Find expert articles on Magento, Shopify, and Digital Marketing topics")))),n.a.createElement("ul",{className:"hero-category-list"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"/",className:"/"===j.pathname?"active":""},"All")),f.map(e=>n.a.createElement("li",{key:e.id},n.a.createElement(s.b,{to:`/category/${e.slug}`},e.name)))))))},b=t(41),v=t.n(b);var f=()=>{const[e,a]=Object(l.useState)([]),[t,r]=Object(l.useState)([]),[c,i]=Object(l.useState)(!0),[d,u]=Object(l.useState)(1),[p,h]=Object(l.useState)(1),E=Object(m.o)(),g=Object(m.m)();Object(l.useEffect)(()=>{(async()=>{try{const t=await o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/posts?_embed&per_page=10&page=${d}`);a(t.data),v.a.set("posts",JSON.stringify(t.data),{expires:1,path:"/"});const l=t.headers["x-wp-total"];h(Math.ceil(l/10))}catch(e){console.error("Error fetching posts:",e)}finally{i(!1)}})(),(async()=>{try{const a=await o.a.get("https://meetanshi.com/blog/wp-json/wp/v2/posts?_embed&sticky=true");r(a.data)}catch(e){console.error("Error fetching sticky posts:",e)}})()},[d]);const N=e=>{const a=e._embedded&&e._embedded.author&&e._embedded.author[0];if(a){const e=a.avatar_urls?a.avatar_urls[96]:"https://via.placeholder.com/50";return n.a.createElement(s.b,{to:`/author/${a.slug}`,className:"author-link"},n.a.createElement("img",{src:e,alt:a.name,style:{width:"30px",height:"30px",borderRadius:"50%",marginRight:"10px"}}),a.name)}return"Unknown Author"},b=e=>{u(e),E(`${g.pathname}?page=${e}`)};return n.a.createElement("div",null,c?n.a.createElement("p",null,"Loading..."):n.a.createElement(n.a.Fragment,null,t.length>0&&n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"sticky-post-home"},t.map(e=>n.a.createElement("div",{key:e.id,className:"sticky-post-item text-center"},n.a.createElement("p",{className:"author-name-date"},n.a.createElement("span",null,N(e))," ",n.a.createElement("span",null,new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))),n.a.createElement(s.b,{className:"sticky-post-title-link",to:`/post/${e.slug}`},n.a.createElement("h2",{className:"sticky-post-title",dangerouslySetInnerHTML:{__html:e.title.rendered}})),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}))))))),n.a.createElement("div",{className:"row mt-5 regular-post-main"},e.map(e=>n.a.createElement("div",{className:"col-md-6 text-left regular-post-col mb-5",key:e.id},n.a.createElement("div",{className:"regular-post-wrapper"},n.a.createElement(s.b,{className:"post-title-link",to:`/post/${e.slug}`},n.a.createElement("h3",{className:"post-title",dangerouslySetInnerHTML:{__html:e.title.rendered}})," "),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}),n.a.createElement("p",{className:"author-name-date"},n.a.createElement("span",null,N(e))," ",n.a.createElement("span",null,new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))))))),p>1&&n.a.createElement("nav",{"aria-label":"Page navigation",className:"pagination-main mt-3"},n.a.createElement("ul",{className:"pagination justify-content-center"},(()=>{const e=[];d>1&&e.push(n.a.createElement("li",{className:"page-item",key:"prev"},n.a.createElement("button",{className:"page-link",onClick:()=>b(d-1)},"Previous"))),p>0&&e.push(n.a.createElement("li",{className:`page-item ${1===d?"active":""}`,key:1},n.a.createElement("button",{className:"page-link",onClick:()=>b(1)},"1"))),d>3&&e.push(n.a.createElement("li",{className:"page-item disabled",key:"ellipsis1"},n.a.createElement("span",{className:"page-link"},"...")));for(let a=Math.max(2,d-1);a<=Math.min(p-1,d+1);a++)e.push(n.a.createElement("li",{className:`page-item ${d===a?"active":""}`,key:a},n.a.createElement("button",{className:"page-link",onClick:()=>b(a)},a)));return d<p-1-1&&e.push(n.a.createElement("li",{className:"page-item disabled",key:"ellipsis2"},n.a.createElement("span",{className:"page-link"},"..."))),p>1&&e.push(n.a.createElement("li",{className:`page-item ${d===p?"active":""}`,key:p},n.a.createElement("button",{className:"page-link",onClick:()=>b(p)},p))),d<p&&e.push(n.a.createElement("li",{className:"page-item",key:"next"},n.a.createElement("button",{className:"page-link",onClick:()=>b(d+1)},"Next"))),e})()))))};t(61);var y=()=>{const{slug:e}=Object(m.q)(),[a,t]=Object(l.useState)(null),[r,c]=Object(l.useState)(null),[i,d]=Object(l.useState)(""),[u,p]=Object(l.useState)([]),[h,N]=Object(l.useState)(!0),[b,v]=Object(l.useState)([]),[f,y]=Object(l.useState)(""),[w,k]=Object(l.useState)(""),[_,j]=Object(l.useState)(""),[S,O]=Object(l.useState)(""),[x,$]=Object(l.useState)(""),[L,C]=Object(l.useState)(!1),M=Object(l.useRef)(null);Object(l.useEffect)(()=>{o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/posts?slug=${e}&_embed`).then(e=>{const a=e.data[0];if(t(a),console.log(a),a&&a.author)return o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/users/${a.author}`);throw new Error("No author found for this post")}).then(e=>{console.log("Full Author Response:",e),e&&e.data?c(e.data):console.error("No data found in author response")}).catch(e=>{console.error("Error fetching post or author:",e),e.response&&(console.error("Error Response:",e.response.data),console.error("Status:",e.response.status))})},[e]),Object(l.useEffect)(()=>{a&&(async()=>{try{const t=(await o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/comments?post=${a.id}`)).data.sort((e,a)=>new Date(a.date)-new Date(e.date));p(t)}catch(e){console.error("Error fetching comments:",e)}finally{N(!1)}})()},[a]),Object(l.useEffect)(()=>{a&&a.selected_sidebar&&o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/sidebar/${a.selected_sidebar}`).then(e=>{d(e.data),console.log("Error fetching comments:",e.data)}).catch(e=>{console.error("Error fetching sidebar:",e)})},[a]),Object(l.useEffect)(()=>{if(a){const e=M.current;if(e){const a=Array.from(e.querySelectorAll("h1, h2, h3, h4, h5, h6")).map(e=>{const a=e.innerText.replace(/\s+/g,"-").toLowerCase();return e.id=a,{id:a,text:e.innerText,level:parseInt(e.tagName.replace("H",""),10)}});v(a)}}},[a]);const T=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return e.filter(e=>e.parent===a).map(a=>n.a.createElement("div",{key:a.id,className:`comment-item ${0!==a.parent?"nested-comment":""}`},n.a.createElement("div",{className:"comment-avatar"},n.a.createElement("div",{className:"comment-avatar-img"},n.a.createElement("span",null,a.author_name.charAt(0)))),n.a.createElement("div",{className:"comment-body"},n.a.createElement("h5",null,a.author_name),n.a.createElement("p",{className:"comment-date"},"on ",(e=>new Date(e).toLocaleDateString(void 0,{year:"numeric",month:"long",day:"numeric"}))(a.date)),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.content.rendered}}),n.a.createElement("button",{className:"reply-button"},"Reply"),T(e,a.id)," ")))};if(!a)return n.a.createElement("div",null,"Loading...");return n.a.createElement("div",{className:"post-detail-container"},n.a.createElement("div",{className:"post-content"},n.a.createElement("div",{className:"container-lg container-fluid-md"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"cat-hero-section"},n.a.createElement("div",{className:"home-hero-wrapper text-center"},n.a.createElement("ul",{className:"breadcrumbs"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"/"},"Blog")),n.a.createElement("li",null,n.a.createElement("span",{className:"home-heading",dangerouslySetInnerHTML:{__html:a.title.rendered.replace(/&amp;/g,"&")}}))),n.a.createElement("h1",{className:"home-heading",dangerouslySetInnerHTML:{__html:a.title.rendered.replace(/&amp;/g,"&")}}),a&&n.a.createElement("p",{className:"reading-time"},(e=>{const a=e?e.split(/\s+/).filter(e=>e).length:0;return`${Math.ceil(a/200)} min`})(a.content.rendered)," read"),r&&n.a.createElement("p",null,"By ",r.name)))))),n.a.createElement("div",{className:"container mt-3"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-9"},n.a.createElement("div",{className:"blog-content-wrapper",ref:M,dangerouslySetInnerHTML:{__html:a.content.rendered}}),n.a.createElement("div",{className:"comments-section"},n.a.createElement("h3",null,"Discussion"),h?n.a.createElement("p",null,"Loading comments..."):u.length>0?n.a.createElement("div",{className:"comments-list"},T(u)):n.a.createElement("p",null,"No comments yet.")),n.a.createElement("div",{className:"leave-reply-form"},n.a.createElement("h3",null,"Leave a Reply"),x&&n.a.createElement("p",{className:"success-message"},x),S&&n.a.createElement("p",{className:"error-message"},S),n.a.createElement("form",{onSubmit:e=>{e.preventDefault();const t={post:a.id,author_name:w,author_email:_,content:f};o.a.post("https://meetanshi.com/blog/wp-json/wp/v2/comments",t).then(e=>{p([e.data,...u]),y(""),k(""),j(""),$("Your comment has been submitted!"),O("")}).catch(e=>{O("Failed to submit comment."),$("")})}},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("label",{htmlFor:"comment"},"Comment"),n.a.createElement("textarea",{id:"comment",value:f,onChange:e=>y(e.target.value),required:!0})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"author-name"},"Name"),n.a.createElement("input",{id:"author-name",type:"text",value:w,onChange:e=>k(e.target.value),required:!0})),n.a.createElement("div",{className:"col-md-6"},n.a.createElement("label",{htmlFor:"author-email"},"Email"),n.a.createElement("input",{id:"author-email",type:"email",value:_,onChange:e=>j(e.target.value),required:!0})),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("button",{type:"submit",className:"submit-comment-btn"},"Post Comment")))))),n.a.createElement("div",{className:"col-md-3"},n.a.createElement("div",{className:"toc"},n.a.createElement("button",{className:"toc-toggle",onClick:()=>{C(!L)}},L?n.a.createElement(n.a.Fragment,null,"Table of Content ",n.a.createElement(E.a,{icon:g.b})):n.a.createElement(n.a.Fragment,null,"Table of Content ",n.a.createElement(E.a,{icon:g.a}))),L&&n.a.createElement("ul",{className:"toc-content"},b.map(e=>n.a.createElement("li",{key:e.id,className:`toc-level-${e.level}`},n.a.createElement("button",{onClick:()=>(e=>{const a=document.getElementById(e);a&&window.scrollTo({top:a.offsetTop-80,behavior:"smooth"})})(e.id)},e.text))))),n.a.createElement("div",{className:"author-info text-center"},r&&n.a.createElement(n.a.Fragment,null,r.avatar_urls&&r.avatar_urls[96]?n.a.createElement("img",{src:r.avatar_urls[96],alt:`${r.name}'s avatar`,width:"96",height:"96"}):n.a.createElement("p",null,"No avatar available."),n.a.createElement("h4",null,r.name),r.description?n.a.createElement(n.a.Fragment,null,n.a.createElement("p",null,r.description.split(" ").slice(0,30).join(" "),"..."," ",n.a.createElement("a",{href:`/author/${r.slug}`},"Read more"))):n.a.createElement("p",null,"No description available."))),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:i}}))))))};t(62);var w=()=>{const{slug:e}=Object(m.q)(),[a,t]=Object(l.useState)({}),[r,c]=Object(l.useState)([]),[i,d]=Object(l.useState)(!0),[u,p]=Object(l.useState)(1),[h,E]=Object(l.useState)(1),[g,N]=Object(l.useState)([]),b=Object(m.o)(),v=Object(m.m)();Object(l.useEffect)(()=>{(async()=>{try{const l=await o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/categories?slug=${e}`);if(l.data.length>0){const e=l.data[0];t(e)}else console.error("Category not found")}catch(a){console.error("Error fetching category:",a)}})(),(async()=>{try{const t=await o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/posts?categories=${a.id}&_embed&per_page=10&page=${u}`);c(t.data);const l=t.headers["x-wp-total"];E(Math.ceil(l/10))}catch(e){console.error("Error fetching posts for category:",e)}finally{d(!1)}})(),(async()=>{try{const a=(await o.a.get("https://meetanshi.com/blog/wp-json/wp/v2/categories")).data.filter(e=>1!==e.id);N(a)}catch(e){console.error("Error fetching categories:",e)}})()},[e,a.id,u]),Object(l.useEffect)(()=>{const e=new URLSearchParams(v.search),a=parseInt(e.get("page"))||1;p(a)},[v.search]);const f=e=>{p(e),b(`?page=${e}`)};return n.a.createElement("div",null,n.a.createElement("div",{className:"container-lg container-fluid-md"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"cat-hero-section"},n.a.createElement("div",{className:"home-hero-wrapper text-center"},n.a.createElement("h1",{className:"home-heading"},a.name),n.a.createElement("p",null,a.description)))))),n.a.createElement("div",{className:"category-list-filter mb-4"},n.a.createElement("ul",{className:"category-list"},n.a.createElement("li",null,n.a.createElement(s.b,{to:"/",className:"category-link"}," ","All")),g.map(a=>n.a.createElement("li",{key:a.id,className:`category-item ${a.slug===e?"active":""}`},n.a.createElement("button",{onClick:()=>(e=>{p(1),b(`/category/${e}`)})(a.slug),className:"category-link"},a.name))))),i?n.a.createElement("p",null,"Loading..."):r.length>0?n.a.createElement("div",{className:"row mt-5 regular-post-main"},r.map(e=>n.a.createElement("div",{className:"col-md-6 text-left regular-post-col mb-5",key:e.id},n.a.createElement("div",{className:"regular-post-wrapper"},n.a.createElement(s.b,{className:"post-title-link",to:`/post/${e.slug}`},n.a.createElement("h3",{className:"post-title",dangerouslySetInnerHTML:{__html:e.title.rendered}})),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}),n.a.createElement("p",{className:"author-name-date"},n.a.createElement("span",null,(e=>{const a=e._embedded&&e._embedded.author&&e._embedded.author[0];if(a){const e=a.avatar_urls?a.avatar_urls[96]:"https://via.placeholder.com/50";return n.a.createElement(s.b,{to:`/author/${a.slug}`,className:"author-link"},n.a.createElement("img",{src:e,alt:a.name,style:{width:"30px",height:"30px",borderRadius:"50%",marginRight:"10px"}}),a.name)}return"Unknown Author"})(e)),n.a.createElement("span",null,new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"}))))))):n.a.createElement("p",null,"No posts found."),h>1&&n.a.createElement("nav",{"aria-label":"Page navigation",className:"pagination-main mt-3"},n.a.createElement("ul",{className:"pagination justify-content-center"},(()=>{const e=[];u>1&&e.push(n.a.createElement("li",{className:"page-item",key:"prev"},n.a.createElement("button",{className:"page-link",onClick:()=>f(u-1)},"Previous"))),h>0&&e.push(n.a.createElement("li",{className:`page-item ${1===u?"active":""}`,key:1},n.a.createElement("button",{className:"page-link",onClick:()=>f(1)},"1"))),u>3&&e.push(n.a.createElement("li",{className:"page-item disabled",key:"ellipsis1"},n.a.createElement("span",{className:"page-link"},"...")));for(let a=Math.max(2,u-1);a<=Math.min(h-1,u+1);a++)e.push(n.a.createElement("li",{className:`page-item ${u===a?"active":""}`,key:a},n.a.createElement("button",{className:"page-link",onClick:()=>f(a)},a)));return u<h-1-1&&e.push(n.a.createElement("li",{className:"page-item disabled",key:"ellipsis2"},n.a.createElement("span",{className:"page-link"},"..."))),h>1&&e.push(n.a.createElement("li",{className:`page-item ${u===h?"active":""}`,key:h},n.a.createElement("button",{className:"page-link",onClick:()=>f(h)},h))),u<h&&e.push(n.a.createElement("li",{className:"page-item",key:"next"},n.a.createElement("button",{className:"page-link",onClick:()=>f(u+1)},"Next"))),e})())))};var k=()=>{const[e,a]=Object(l.useState)([]),[t,r]=Object(l.useState)(!0),[c,i]=Object(l.useState)(1),[d,u]=Object(l.useState)(1),p=Object(m.m)(),h=Object(m.o)(),E=new URLSearchParams(p.search).get("query");Object(l.useEffect)(()=>{(async()=>{try{if(E){const e=await o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/posts?search=${E}&_embed&per_page=6&page=${c}`);a(e.data);const t=e.headers["x-wp-total"];u(Math.ceil(t/6))}}catch(e){console.error("Error fetching search results:",e)}finally{r(!1)}})()},[E,c]);const g=e=>{i(e),h(`${p.pathname}?query=${E}&page=${e}`)};return n.a.createElement("div",{className:"search-results"},n.a.createElement("div",{className:"container-lg container-fluid-md"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("div",{className:"cat-hero-section"},n.a.createElement("div",{className:"home-hero-wrapper text-center"},n.a.createElement("h2",{className:"home-heading"},'Search Results for: "',E,'"')))))),n.a.createElement("div",{className:"container"},t?n.a.createElement("p",{className:"text-center"},"Loading..."):n.a.createElement("div",{className:"row mt-5 regular-post-main"},e.length>0?e.map(e=>n.a.createElement("div",{className:"col-md-6 text-left regular-post-col mb-5",key:e.id},n.a.createElement("div",{className:"regular-post-wrapper"},n.a.createElement(s.b,{className:"post-title-link",to:`/post/${e.slug}`},n.a.createElement("h3",{className:"post-title",dangerouslySetInnerHTML:{__html:e.title.rendered}})),n.a.createElement("p",{dangerouslySetInnerHTML:{__html:e.excerpt.rendered}}),n.a.createElement("p",{className:"author-name-date"},n.a.createElement("span",null,(e=>{const a=e._embedded&&e._embedded.author&&e._embedded.author[0];if(a){const e=a.avatar_urls?a.avatar_urls[96]:"https://via.placeholder.com/50";return n.a.createElement(s.b,{to:`/author/${a.slug}`,className:"author-link"},n.a.createElement("img",{src:e,alt:a.name,style:{width:"30px",height:"30px",borderRadius:"50%",marginRight:"10px"}}),a.name)}return"Unknown Author"})(e)),n.a.createElement("span",null,new Date(e.date).toLocaleDateString("en-US",{year:"numeric",month:"short",day:"numeric"})))))):n.a.createElement("p",{className:"text-center"},'No results found for "',E,'".')),d>1&&n.a.createElement("nav",{"aria-label":"Page navigation"},n.a.createElement("ul",{className:"pagination justify-content-center"},(()=>{const e=[];return c>1&&e.push(n.a.createElement("li",{className:"page-item",key:"prev"},n.a.createElement("button",{className:"page-link",onClick:()=>g(c-1)},"Previous"))),1!==c&&e.push(n.a.createElement("li",{key:1,className:`page-item ${1===c?"active":""}`},n.a.createElement("button",{className:"page-link",onClick:()=>g(1)},"1"))),c>3&&e.push(n.a.createElement("li",{key:"ellipsis-prev",className:"page-item disabled"},n.a.createElement("span",{className:"page-link"},"..."))),c>2&&e.push(n.a.createElement("li",{key:c-1,className:"page-item"},n.a.createElement("button",{className:"page-link",onClick:()=>g(c-1)},c-1))),e.push(n.a.createElement("li",{key:c,className:"page-item active"},n.a.createElement("span",{className:"page-link"},c))),c<d-1&&e.push(n.a.createElement("li",{key:c+1,className:"page-item"},n.a.createElement("button",{className:"page-link",onClick:()=>g(c+1)},c+1))),c<d-2&&e.push(n.a.createElement("li",{key:"ellipsis-next",className:"page-item disabled"},n.a.createElement("span",{className:"page-link"},"..."))),c!==d&&e.push(n.a.createElement("li",{key:d,className:`page-item ${c===d?"active":""}`},n.a.createElement("button",{className:"page-link",onClick:()=>g(d)},d))),c<d&&e.push(n.a.createElement("li",{className:"page-item",key:"next"},n.a.createElement("button",{className:"page-link",onClick:()=>g(c+1)},"Next"))),e})()))))};t(63);var _=()=>{const[e,a]=Object(l.useState)({footer_logo:null,address_india:"",address_usa:"",phone:"",social_ratings:[],net_zero_website:null,social_icons:[],copyright:"",footer_links:[]}),[t,r]=Object(l.useState)([]),[c,s]=Object(l.useState)([]);Object(l.useEffect)(()=>{(async()=>{try{const t=await o.a.get("https://meetanshi.com/blog/wp-json/custom/v1/footer-data");a(t.data)}catch(e){console.error("Error fetching footer data:",e)}})()},[]),Object(l.useEffect)(()=>{(async()=>{try{const a=await o.a.get("https://meetanshi.com/blog/wp-json/footer-menus/v1/get-menus");r(a.data.quick_links),s(a.data.service_menu)}catch(e){console.error("Error fetching footer menus:",e)}})()},[]);const m=e=>e.map(e=>n.a.createElement("li",{key:e.id},n.a.createElement("a",{href:e.url},e.title)));return n.a.createElement("footer",{className:"site-footer"},n.a.createElement("div",{className:"container mb-5"},n.a.createElement("div",{className:"row justify-content-between"},n.a.createElement("div",{className:"col-auto"},e.footer_logo&&n.a.createElement("div",{className:"footer-logo"},n.a.createElement("a",{href:"/"},n.a.createElement("img",{src:e.footer_logo.url,alt:e.footer_logo.alt,width:e.footer_logo.width,height:e.footer_logo.height}))),e.address_india&&n.a.createElement("div",{className:"footer-address"},n.a.createElement("div",{className:"d-flex align-items-start"},n.a.createElement("img",{className:"address-icon",src:"/images/location-icon.svg",alt:"Location Icon",height:"25",width:"24"}),n.a.createElement("div",null,n.a.createElement("p",{className:"footer-address-title"},"Bhavnagar",n.a.createElement("sup",null,"HQ")),n.a.createElement("p",{className:"footer-address-text"},e.address_india)))),e.address_usa&&n.a.createElement("div",{className:"footer-address"},n.a.createElement("div",{className:"d-flex align-items-start"},n.a.createElement("img",{className:"address-icon",src:"/images/location-icon.svg",alt:"Location Icon",height:"25",width:"24"}),n.a.createElement("div",null,n.a.createElement("p",{className:"footer-address-title"},"USA Representative Office"),n.a.createElement("p",{className:"footer-address-text"},e.address_usa)))),e.phone&&n.a.createElement("div",{className:"footer-phone"},n.a.createElement("div",{className:"d-flex align-items-start"},n.a.createElement("img",{className:"address-icon",src:"/images/phone-icon.svg",alt:"Phone Icon",height:"25",width:"24"}),n.a.createElement("div",null,n.a.createElement("a",{className:"footer-phone",href:`tel:${e.phone}`},e.phone))))),n.a.createElement("div",{className:"col-auto"},n.a.createElement("div",{className:"footer-col-wrapper"},n.a.createElement("p",{className:"footer-menu-title"},"Quick Links"),n.a.createElement("ul",{className:"footer-menu"},m(t)))),n.a.createElement("div",{className:"col-auto"},n.a.createElement("div",{className:"footer-col-wrapper"},n.a.createElement("p",{className:"footer-menu-title"},"Customer Service"),n.a.createElement("ul",{className:"footer-menu"},m(c)))),n.a.createElement("div",{className:"col-auto"},n.a.createElement("div",{className:"footer-col-wrapper"},n.a.createElement("p",{className:"footer-menu-title"},"Client's Love"),e.social_ratings&&e.social_ratings.length>0&&n.a.createElement("ul",{className:"footer-social-rating"},e.social_ratings.map((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{target:"_blank",href:e.url,rel:"noopener noreferrer"},n.a.createElement("picture",null,n.a.createElement("img",{src:e.image.url,alt:e.image.alt,width:e.image.width,height:e.image.height})))))),n.a.createElement("div",{className:"social-media"},n.a.createElement("ul",null,e.social_icons.map((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url,title:e.name},n.a.createElement("i",{className:e.icon})," "))))),e.net_zero_website&&n.a.createElement("div",{className:"net-zero-website"},n.a.createElement("a",{href:e.net_zero_website.url,target:"_blank",rel:"noopener noreferrer"},n.a.createElement("img",{src:e.net_zero_website.image.url,alt:e.net_zero_website.image.alt,height:e.net_zero_website.image.height,width:e.net_zero_website.image.width,loading:"lazy"}))))))),n.a.createElement("div",{className:"footer-copy"},n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"row align-items-center"},n.a.createElement("div",{className:"col-md-6"},e.copyright&&n.a.createElement("div",{className:"footer-copy-text"},n.a.createElement("p",null,"Copyright \xa9 2017-2024 by Meetanshi Technologies LLP. All Rights Reserved."))),n.a.createElement("div",{className:"col-md-6 text-end"},e.footer_links&&e.footer_links.length>0&&n.a.createElement("ul",{className:"footer-copy-links"},e.footer_links.map((e,a)=>n.a.createElement("li",{key:a},n.a.createElement("a",{href:e.link.url,target:e.link.target},e.link.title)))))))))};var j=()=>{const{slug:e}=Object(m.q)(),[a,t]=Object(l.useState)(null),[r,c]=Object(l.useState)([]),[s,i]=Object(l.useState)(!0),[d,u]=Object(l.useState)("");Object(l.useEffect)(()=>{(async()=>{i(!0),u("");try{const l=await o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/users?slug=${e}`);if(l.data.length>0){const e=l.data[0];t(e);const a=await o.a.get(`https://meetanshi.com/blog/wp-json/wp/v2/posts?author=${e.id}&_embed`);console.log("Posts Response:",a),Array.isArray(a.data)?c(a.data):(console.error("Posts response is not an array:",a.data),c([]))}else u("Author not found.")}catch(a){console.error("Error fetching author details or posts:",a),u("Failed to load author details.")}finally{i(!1)}})()},[e]);const p=e=>e._embedded&&e._embedded["wp:featuredmedia"]?e._embedded["wp:featuredmedia"][0].source_url:"https://via.placeholder.com/300";return s?n.a.createElement("p",null,"Loading..."):d?n.a.createElement("p",null,d):a?n.a.createElement("div",{className:"author-detail"},n.a.createElement("h2",null,a.name),n.a.createElement("img",{src:(null===a||void 0===a?void 0:a.avatar_urls)?a.avatar_urls[96]:"https://via.placeholder.com/150",alt:a.name,className:"single-author-image img-fluid"}),n.a.createElement("div",{dangerouslySetInnerHTML:{__html:a.description||"No description available."}}),n.a.createElement("h3",null,"Posts by ",a.name,":"),Array.isArray(r)&&r.length>0?n.a.createElement("div",{className:"row"},r.map(e=>n.a.createElement("div",{className:"col-md-4",key:e.id},n.a.createElement("img",{src:p(e),alt:e.title.rendered,className:"post-image img-fluid mb-2"}),n.a.createElement("a",{href:`/post/${e.slug}`},n.a.createElement("h5",null,e.title.rendered)),n.a.createElement("p",null,(e=>e._embedded&&e._embedded["wp:term"]?e._embedded["wp:term"][0].map(e=>e.name).join(", "):"Uncategorized")(e))))):n.a.createElement("p",null,"No posts found by ",a.name,".")):n.a.createElement("p",null,"No author found.")};t(64);var S=function(){return n.a.createElement(s.a,null,n.a.createElement("div",{className:"App"},n.a.createElement(N,null),n.a.createElement("div",{className:"container"},n.a.createElement(m.c,null,n.a.createElement(m.a,{path:"/",element:n.a.createElement(f,null)}),n.a.createElement(m.a,{path:"/category/:slug",element:n.a.createElement(w,null)}),n.a.createElement(m.a,{path:"/post/:slug",element:n.a.createElement(y,null)}),n.a.createElement(m.a,{path:"/search",element:n.a.createElement(k,null)}),n.a.createElement(m.a,{path:"/author/:slug",element:n.a.createElement(j,null)}),n.a.createElement(m.a,{path:"*",element:n.a.createElement("div",null,"404 Not Found")})," ")),n.a.createElement(_,null)))};var O=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,69)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};t(65);c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null))),O()}},[[43,1,2]]]);
//# sourceMappingURL=main.116dde64.chunk.js.map