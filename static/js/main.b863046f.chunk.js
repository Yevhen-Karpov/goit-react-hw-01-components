(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,t,a){e.exports={profile:"Profile_profile__2FfNs",description:"Profile_description__TY7pI",avatar:"Profile_avatar__1ofO7",name:"Profile_name__uXO7F",tag:"Profile_tag__3aEFe",location:"Profile_location__JIZqK",stats:"Profile_stats__GOu3B",list:"Profile_list__1tzCt",label:"Profile_label__IZ9qj",quantity:"Profile_quantity__v23za"}},,function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e,t,a){e.exports={online:"FriendListItem_online__3432D",offline:"FriendListItem_offline__IYU4S",item:"FriendListItem_item__2Av6C",avatar:"FriendListItem_avatar__3aF_B",name:"FriendListItem_name__1yYgR"}},function(e,t,a){e.exports={item:"StatisticsItem_item__3iT1s",label:"StatisticsItem_label__140ko",percentage:"StatisticsItem_percentage__2TmO7"}},function(e,t,a){e.exports={statistics:"Statistics_statistics__2wov4",title:"Statistics_title__1ysXR",stat__list:"Statistics_stat__list__3z-Oq"}},,,function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22},{"id":"id-2","label":".pdf","percentage":4},{"id":"id-3","label":".mp3","percentage":17},{"id":"id-4","label":".psd","percentage":47},{"id":"id-5","label":".pdf","percentage":10}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,t,a){e.exports={friend__list:"FriendList_friend__list__37ZVG"}},function(e,t,a){e.exports={transaction__history:"Transaction_transaction__history__2G8jH"}},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(2),c=a.n(n),i=a(8),s=a.n(i),r=a(9),l=a(3),d=a(10),o=a(11),b=a(12),p=a.n(b),m=a(4),u=a.n(m),j=a(0);function f(e){var t=e.isOnline,a=e.avatar,n=e.name;return Object(j.jsxs)("li",{className:u.a.item,children:[Object(j.jsx)("span",{className:t?u.a.online:u.a.offline,children:"\u26ab"}),Object(j.jsx)("img",{className:u.a.avatar,src:a,alt:"User avatar",width:"48"}),Object(j.jsx)("p",{className:u.a.name,children:n})]})}var _=function(e){var t=e.friends;return Object(j.jsx)("div",{children:Object(j.jsx)("ul",{className:p.a.friend__list,children:t.map((function(e){return Object(j.jsx)(f,{name:e.name,avatar:e.avatar,isOnline:e.isOnline},e.id)}))})})},O=a(1),h=a.n(O);var y=function(e){return Object(j.jsxs)("div",{className:h.a.profile,children:[Object(j.jsxs)("div",{className:h.a.description,children:[Object(j.jsx)("img",{src:e.avatar,alt:"User avatar",className:h.a.avatar}),Object(j.jsx)("p",{className:h.a.name,children:e.username}),Object(j.jsxs)("p",{className:h.a.tag,children:["@",e.tag]}),Object(j.jsx)("p",{className:h.a.location,children:e.location})]}),Object(j.jsxs)("ul",{className:h.a.stats,children:[Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:h.a.label,children:"Followers"}),Object(j.jsx)("span",{className:h.a.quantity,children:e.stats.followers})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:h.a.label,children:"Views"}),Object(j.jsx)("span",{className:h.a.quantity,children:e.stats.views})]}),Object(j.jsxs)("li",{children:[Object(j.jsx)("span",{className:h.a.label,children:"Likes"}),Object(j.jsx)("span",{className:h.a.quantity,children:e.stats.likes})]})]})]})},x=a(5),v=a.n(x);function g(e){var t=e.label,a=e.percentage;return Object(j.jsx)("div",{children:Object(j.jsxs)("li",{className:v.a.item,children:[Object(j.jsx)("span",{className:v.a.label,children:t}),Object(j.jsxs)("span",{className:v.a.percentage,children:[a,"%"]})]})})}var N=a(6),w=a.n(N);function P(e){var t=e.title,a=e.stats;return Object(j.jsxs)("div",{className:w.a.statistics,children:[t&&Object(j.jsx)("h2",{className:w.a.title,children:t}),Object(j.jsx)("ul",{className:w.a.stat__list,children:a.map((function(e){var t=e.id,a=e.label,n=e.percentage;return Object(j.jsx)(g,{label:a,percentage:n},t)}))})]})}var I=function(e){var t=e.type,a=e.amount,n=e.currency;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t}),Object(j.jsx)("td",{children:a}),Object(j.jsx)("td",{children:n})]})},S=a(13),U=a.n(S);var F=function(e){var t=e.items;return Object(j.jsxs)("table",{className:U.a.transaction__history,children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Type"}),Object(j.jsx)("th",{children:"Amount"}),Object(j.jsx)("th",{children:"Currency"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(I,{type:e.type,amount:e.amount,currency:e.currency},e.id)}))})]})};function L(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(_,{friends:r}),Object(j.jsx)(y,{username:l.username,tag:l.tag,location:l.location,avatar:l.avatar,stats:l.stats,followers:l.stats.followers,views:l.stats.views,likes:l.stats.likes}),Object(j.jsx)(P,{title:"Upload stats",stats:d}),Object(j.jsx)(F,{items:o})]})}a(19);s.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.b863046f.chunk.js.map