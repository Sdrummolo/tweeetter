(this.webpackJsonptweeetter=this.webpackJsonptweeetter||[]).push([[0],{10:function(e,t,a){e.exports={modal:"AddComment_modal__2_AWA",tweet:"AddComment_tweet__1R8pi",body:"AddComment_body__29RbU",header:"AddComment_header__3nN2a"}},18:function(e,t,a){e.exports={spinner:"Spinner_spinner__1Neu5",spinnerHide:"Spinner_spinnerHide__3i5nw",circle:"Spinner_circle__2X_tM",bounce:"Spinner_bounce__2YkZc"}},21:function(e,t,a){e.exports={likes:"Likes_likes__2nliY",amount:"Likes_amount__2i97j",iconContainer:"Likes_iconContainer__2Kvz2"}},26:function(e,t,a){e.exports={comment:"Comment_comment__2SmJa",commentContent:"Comment_commentContent__t-BQh"}},27:function(e,t,a){e.exports={comments:"Comments_comments__2-b4q",iconContainer:"Comments_iconContainer__1ru5g"}},34:function(e,t,a){e.exports={commentsContainer:"CommentsContainer_commentsContainer__2E7Ay"}},35:function(e,t,a){e.exports=a(57)},40:function(e,t,a){},57:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),s=a.n(r),l=(a(40),a(15)),i=a(9),m=a(4),o=a(14),u=a.n(o),d=Object(n.createContext)(),f=function(){var e=Object(n.useContext)(d),t=e.postTweet,a=e.isLoading,r=Object(n.useState)(""),s=Object(m.a)(r,2),l=s[0],i=s[1],o=Object(n.useState)(!0),f=Object(m.a)(o,2),p=f[0],E=f[1];Object(n.useEffect)((function(){""===l.trim()||a?E(!0):E(!1)}),[l,a]);return c.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={id:u()(),user:"Demo-User",pic:"https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",body:l,likes:0,isLiked:!1,comments:[],date:Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",hour:"numeric",minute:"numeric"}).format(new Date)};i(""),t(a)}},c.a.createElement("textarea",{type:"text",maxLength:"140",placeholder:"What's happening?",value:l,onChange:function(e){i(e.target.value)},required:!0}),c.a.createElement("button",{type:"submit",disabled:p},"Tweet"))},p=a(18),E=a.n(p),_=function(){return c.a.createElement("div",{className:E.a.spinner},c.a.createElement("div",{className:E.a.circle}),c.a.createElement("div",{className:E.a.circle}),c.a.createElement("div",{className:E.a.circle}))},b=a(7),h=a.n(b),v=function(e){var t=e.data,a=Object(n.useContext)(d).likeTweet,r=t.id,s=t.user,i=t.pic,m=t.likes,o=t.body,u=t.isLiked,f=t.comments,p=t.date;return c.a.createElement(l.b,{to:"/tweet/".concat(r),onClick:function(e){"far fa-heart"!==e.target.className&&"fas fa-heart"!==e.target.className||(e.preventDefault(),a(r))}},c.a.createElement("div",{className:h.a.container},c.a.createElement("div",{className:h.a.imgContainer},c.a.createElement("img",{src:i,alt:"profile-pic"})),c.a.createElement("div",{className:h.a.content},c.a.createElement("div",{className:h.a.header},c.a.createElement("h4",{className:h.a.username},s),c.a.createElement("small",null,p)),c.a.createElement("p",null,o),c.a.createElement("div",{className:h.a.stats},c.a.createElement("div",{className:h.a.likes,style:u?{color:"#E0245E"}:null},c.a.createElement("i",{className:u?"fas fa-heart":"far fa-heart"}),c.a.createElement("small",null,m)),c.a.createElement("div",{className:h.a.comments},c.a.createElement("i",{className:"far fa-comment"}),c.a.createElement("small",null,f.length))))))},g=function(){var e=Object(n.useContext)(d).tweets;return e?c.a.createElement("div",{className:"tweetsContainer"},e.map((function(e){return c.a.createElement(v,{key:e.id,data:e})}))):null},w=a(26),k=a.n(w),y=function(e){var t=e.comment,a=t.pic,n=t.text,r=t.user;return c.a.createElement("div",{className:k.a.comment},c.a.createElement("img",{src:a,alt:"user"}),c.a.createElement("div",{className:k.a.commentContent},c.a.createElement("h4",null,r),c.a.createElement("p",null,n)))},N=a(34),T=a.n(N),x=function(e){var t=e.comments;return c.a.createElement("div",{className:T.a.commentsContainer},t.map((function(e){return c.a.createElement(y,{key:u()(),comment:e})})))},j=a(10),C=a.n(j),O=function(e){var t=e.handleClick,a=e.closeModal,r=e.id,s=e.user,l=e.body,i=Object(n.useContext)(d).addComment,o=Object(n.useState)(""),u=Object(m.a)(o,2),f=u[0],p=u[1],E=Object(n.useState)(!0),_=Object(m.a)(E,2),b=_[0],h=_[1],v=Object(n.useRef)(null);Object(n.useEffect)((function(){""!==f.trim()?h(!1):h(!0)}),[f]);return Object(n.useEffect)((function(){v.current.focus()}),[]),c.a.createElement("div",{className:"modal-container",onClick:t},c.a.createElement("div",{className:C.a.modal},c.a.createElement("div",{className:C.a.header},c.a.createElement("i",{className:"fas fa-times fa-lg",onClick:t})),c.a.createElement("div",{className:C.a.tweet},c.a.createElement("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",alt:"user"}),c.a.createElement("div",{className:C.a.body},c.a.createElement("h4",{className:C.a.user},s),c.a.createElement("p",{className:C.a.text},l))),c.a.createElement("div",{className:C.a.form},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(r,{pic:"https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",user:"Demo-User",text:f}),p(""),a()}},c.a.createElement("textarea",{placeholder:"Tweet your reply",value:f,onChange:function(e){p(e.target.value)},ref:v,required:!0}),c.a.createElement("button",{type:"submit",disabled:b},"Reply")))))},L=a(21),S=a.n(L),D=function(e){var t=e.likes,a=e.isLiked,n=e.handleLike;return c.a.createElement("div",{className:S.a.likes,style:a?{color:"#E0245E"}:null},c.a.createElement("div",{className:S.a.iconContainer},c.a.createElement("i",{className:a?"fas fa-heart fa-lg":"far fa-heart fa-lg",onClick:n})),c.a.createElement("h4",{className:S.a.amount},t))},P=a(27),A=a.n(P),M=function(e){var t=e.handleClick,a=e.comments;return c.a.createElement("div",{className:A.a.comments},c.a.createElement("div",{className:A.a.iconContainer},c.a.createElement("i",{className:"far fa-comment fa-lg",onClick:t})),c.a.createElement("h4",null,a.length))},W=a(8),I=a.n(W),F=function(e){var t=e.match,a=Object(n.useContext)(d),r=a.tweets,s=a.likeTweet,i=Object(n.useState)(null),o=Object(m.a)(i,2),u=o[0],f=o[1],p=Object(n.useState)(!1),E=Object(m.a)(p,2),_=E[0],b=E[1];Object(n.useEffect)((function(){f(r.filter((function(e){return e.id===t.params.id}))[0])}),[r,t.params.id]);var h=function(e){"fas fa-times fa-lg"!==e.target.className&&"modal-container"!==e.target.className&&"far fa-comment fa-lg"!==e.target.className||b(!_)};if(u){var v=u.user,g=u.pic,w=u.body,k=u.likes,y=u.comments,N=u.isLiked,T=u.id,j=u.date;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:I.a.nav},c.a.createElement(l.b,{to:"/"},c.a.createElement("div",{className:I.a.iconContainer},c.a.createElement("i",{className:"fas fa-arrow-left fa-lg"}))),c.a.createElement("h1",null,"Tweet")),c.a.createElement("div",{className:I.a.container},c.a.createElement("div",{className:I.a.header},c.a.createElement("img",{src:g,alt:"profile-pic"}),c.a.createElement("h4",{className:I.a.username},v),c.a.createElement("small",null,j)),c.a.createElement("div",{className:I.a.post},c.a.createElement("p",{className:I.a.tweetText},w)),c.a.createElement("div",{className:I.a.stats},c.a.createElement(D,{likes:k,isLiked:N,id:T,handleLike:function(e){s(u.id)}}),c.a.createElement(M,{handleClick:h,comments:y})),y.length>0?c.a.createElement(x,{comments:y}):null),_?c.a.createElement(O,{handleClick:h,closeModal:function(){b(!1)},id:T,user:v,body:w}):null)}return null},U=function(){return c.a.createElement("div",null,c.a.createElement("h1",null,"404"),c.a.createElement("h3",null,"Page not found"))};var R=function(){var e=Object(n.useContext)(d),t=e.getTweets,a=e.isLoading;return Object(n.useEffect)((function(){t()}),[]),c.a.createElement(l.a,{basename:"/tweeetter"},c.a.createElement("div",{className:"container"},c.a.createElement(i.c,null,c.a.createElement(i.a,{exact:!0,path:"/",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Home"),c.a.createElement(f,null),c.a.createElement(g,null),a?c.a.createElement(_,null):null)}}),c.a.createElement(i.a,{exact:!0,path:"/tweet/:id",component:F}),c.a.createElement(i.a,{path:"/tweeetter",component:U}))))},q=a(12),H=a.n(q),J=a(22),K=a(19),X=a(6),Z=function(e,t){switch(t.type){case"SET_LOADING":return Object(X.a)({},e,{isLoading:!0});case"SET_TWEETS":return Object(X.a)({},e,{tweets:[].concat(Object(K.a)(e.tweets),Object(K.a)(t.payload)),isLoading:!1});case"POST_TWEET":return Object(X.a)({},e,{tweets:[t.payload].concat(Object(K.a)(e.tweets))});case"LIKE_TWEET":return Object(X.a)({},e,{tweets:e.tweets.map((function(e){return e.id===t.payload?e.isLiked?Object(X.a)({},e,{isLiked:!1,likes:e.likes-1}):Object(X.a)({},e,{isLiked:!0,likes:e.likes+1}):e}))});case"ADD_COMMENT":return Object(X.a)({},e,{tweets:e.tweets.map((function(e){return e.id===t.payload.id?Object(X.a)({},e,{comments:[t.payload.comment].concat(Object(K.a)(e.comments))}):e}))});default:return Object(X.a)({},e)}},z=a(46),B=function(e){var t=Object(n.useReducer)(Z,{tweets:[],isLoading:!1}),a=Object(m.a)(t,2),r=a[0],s=a[1];Object(n.useEffect)((function(){r.tweets.length>0&&z.set("tweets",r.tweets)}),[r.tweets]);var l=function(){var e=Object(J.a)(H.a.mark((function e(){var t,a,n,c,r,l;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p(),z.get("tweets")){e.next=33;break}return t=[],a=[],e.prev=4,e.next=7,fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");case 7:return n=e.sent,e.next=10,n.json();case 10:c=e.sent,a=c,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:return e.prev=17,e.next=20,fetch("https://randomuser.me/api/?exc=gender,location,email,login,registered,dob,phone,cell,nat&results=10");case 20:return r=e.sent,e.next=23,r.json();case 23:l=e.sent,t=l.results,e.next=30;break;case 27:e.prev=27,e.t1=e.catch(17),console.log(e.t1);case 30:f(t,a),e.next=34;break;case 33:setTimeout((function(){s({type:"SET_TWEETS",payload:z.get("tweets")})}),1500);case 34:case"end":return e.stop()}}),e,null,[[4,14],[17,27]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(J.a)(H.a.mark((function e(){var t,a,n,c,r,s,l,i,m,o;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Number((8*Math.random()).toFixed()),a=[],n=[],c=[],e.prev=4,e.next=7,fetch("https://jsonplaceholder.typicode.com/posts?_limit=".concat(t));case 7:return r=e.sent,e.next=10,r.json();case 10:s=e.sent,a=s,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:return e.prev=17,e.next=20,fetch("https://randomuser.me/api/?exc=gender,location,email,login,registered,dob,phone,cell,nat&results=".concat(t));case 20:return l=e.sent,e.next=23,l.json();case 23:i=e.sent,n=i.results,e.next=30;break;case 27:e.prev=27,e.t1=e.catch(17),console.log(e.t1);case 30:for(m=0;m<t;m++)(o={}).text=a[m].body,o.user="".concat(n[m].name.first," ").concat(n[m].name.last),o.pic=n[m].picture.medium,c.push(o);return e.abrupt("return",c);case 32:case"end":return e.stop()}}),e,null,[[4,14],[17,27]])})));return function(){return e.apply(this,arguments)}}();function o(e,t){var a=new Date(e.getTime()+Math.random()*(t.getTime()-e.getTime()));return new Intl.DateTimeFormat("en-US",{month:"short",day:"2-digit",hour:"numeric",minute:"numeric"}).format(a)}var f=function(){var e=Object(J.a)(H.a.mark((function e(t,a){var n,c,r,l;return H.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],(c=new Date).setDate(c.getDate()-7),r=0;case 4:if(!(r<t.length)){e.next=20;break}return(l={}).id=u()(),l.pic=t[r].picture.medium,l.user="".concat(t[r].name.first," ").concat(t[r].name.last),l.body=a[r].body,l.likes=Number((30*Math.random()).toFixed()),l.isLiked=!1,e.next=14,i();case 14:l.comments=e.sent,l.date=o(c,new Date),n.push(l);case 17:r++,e.next=4;break;case 20:s({type:"SET_TWEETS",payload:n});case 21:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){return s({type:"SET_LOADING"})};return c.a.createElement(d.Provider,{value:{tweets:r.tweets,isLoading:r.isLoading,getTweets:l,postTweet:function(e){s({type:"POST_TWEET",payload:e})},likeTweet:function(e){s({type:"LIKE_TWEET",payload:e})},addComment:function(e,t){s({type:"ADD_COMMENT",payload:{id:e,comment:t}})},randomDate:o}},e.children)};s.a.render(c.a.createElement(B,null,c.a.createElement(R,null)),document.getElementById("root"))},7:function(e,t,a){e.exports={container:"Tweet_container__1eEZm",header:"Tweet_header__29P9D",imgContainer:"Tweet_imgContainer__3y0oe",title:"Tweet_title__ygZgp",stats:"Tweet_stats__3n9Ay",likes:"Tweet_likes__2Edel",comments:"Tweet_comments__2sE8c"}},8:function(e,t,a){e.exports={nav:"TweetPage_nav__3LXI0",iconContainer:"TweetPage_iconContainer__3cX5p",container:"TweetPage_container__2jMek",header:"TweetPage_header__2ekg1",tweetText:"TweetPage_tweetText__3Sdyw",stats:"TweetPage_stats__91vFL",comments:"TweetPage_comments__3aUq-",modal:"TweetPage_modal__r9zhb"}}},[[35,1,2]]]);
//# sourceMappingURL=main.3dda4517.chunk.js.map