(this.webpackJsonptweeetter=this.webpackJsonptweeetter||[]).push([[0],{10:function(e,t,a){e.exports={modal:"AddComment_modal__2_AWA",tweet:"AddComment_tweet__1R8pi",body:"AddComment_body__29RbU",header:"AddComment_header__3nN2a"}},18:function(e,t,a){e.exports={spinner:"Spinner_spinner__1Neu5",spinnerHide:"Spinner_spinnerHide__3i5nw",circle:"Spinner_circle__2X_tM",bounce:"Spinner_bounce__2YkZc"}},21:function(e,t,a){e.exports={likes:"Likes_likes__2nliY",amount:"Likes_amount__2i97j",iconContainer:"Likes_iconContainer__2Kvz2"}},26:function(e,t,a){e.exports={comment:"Comment_comment__2SmJa",commentContent:"Comment_commentContent__t-BQh"}},27:function(e,t,a){e.exports={comments:"Comments_comments__2-b4q",iconContainer:"Comments_iconContainer__1ru5g"}},34:function(e,t,a){e.exports={commentsContainer:"CommentsContainer_commentsContainer__2E7Ay"}},35:function(e,t,a){e.exports=a(58)},40:function(e,t,a){},45:function(e,t,a){},58:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(31),s=a.n(r),l=(a(40),a(15)),i=a(8),o=a(6),m=a(14),u=a.n(m),d=Object(n.createContext)(),f=function(){var e=Object(n.useContext)(d).postTweet,t=Object(n.useState)(""),a=Object(o.a)(t,2),r=a[0],s=a[1];return c.a.createElement("form",{onSubmit:function(t){t.preventDefault();var a={id:u()(),user:"Demo-User",pic:"https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",body:r,likes:0,isLiked:!1,comments:[]};s(""),e(a)}},c.a.createElement("textarea",{type:"text",maxLength:"140",placeholder:"What's happening?",value:r,onChange:function(e){s(e.target.value)},required:!0}),c.a.createElement("button",{type:"submit"},"Tweet"))},p=a(18),_=a.n(p),E=function(){return c.a.createElement("div",{className:_.a.spinner},c.a.createElement("div",{className:_.a.circle}),c.a.createElement("div",{className:_.a.circle}),c.a.createElement("div",{className:_.a.circle}))},b=a(9),v=a.n(b),w=function(e){var t=e.data,a=Object(n.useContext)(d).likeTweet,r=t.id,s=t.user,i=t.pic,o=t.likes,m=t.body,u=t.isLiked,f=t.comments;return c.a.createElement(l.b,{to:"/tweeetter/tweet/".concat(r),onClick:function(e){"far fa-heart"!==e.target.className&&"fas fa-heart"!==e.target.className||(e.preventDefault(),a(r))}},c.a.createElement("div",{className:v.a.tweetContainer},c.a.createElement("div",{className:v.a.imgContainer},c.a.createElement("img",{src:i,alt:"profile-pic"})),c.a.createElement("div",{className:v.a.tweetContent},c.a.createElement("h4",{className:v.a.username},s),c.a.createElement("p",null,m),c.a.createElement("div",{className:v.a.stats},c.a.createElement("div",{className:v.a.likes,style:u?{color:"#E0245E"}:null},c.a.createElement("i",{className:u?"fas fa-heart":"far fa-heart"}),c.a.createElement("small",null,o)),c.a.createElement("div",{className:v.a.comments},c.a.createElement("i",{className:"far fa-comment"}),c.a.createElement("small",null,f.length))))))},g=function(){var e=Object(n.useContext)(d).tweets;if(!e)return null;var t=e.map((function(e){return c.a.createElement(w,{key:e.id,data:e})}));return c.a.createElement("div",{className:"tweetsContainer"},t)},h=a(26),k=a.n(h),N=function(e){var t=e.comment,a=t.pic,n=t.text,r=t.user;return c.a.createElement("div",{className:k.a.comment},c.a.createElement("img",{src:a,alt:"user"}),c.a.createElement("div",{className:k.a.commentContent},c.a.createElement("h4",null,r),c.a.createElement("p",null,n)))},y=a(34),C=a.n(y),x=function(e){var t=e.comments;return c.a.createElement("div",{className:C.a.commentsContainer},t.map((function(e){return c.a.createElement(N,{key:u()(),comment:e})})))},T=a(10),j=a.n(T),O=function(e){var t=e.handleClick,a=e.closeModal,r=e.id,s=e.user,l=e.body,i=Object(n.useContext)(d).addComment,m=Object(n.useState)(""),u=Object(o.a)(m,2),f=u[0],p=u[1],_=Object(n.useRef)(null);return Object(n.useEffect)((function(){_.current.focus()}),[]),c.a.createElement("div",{className:"modal-container",onClick:t},c.a.createElement("div",{className:j.a.modal},c.a.createElement("div",{className:j.a.header},c.a.createElement("i",{className:"fas fa-times fa-lg",onClick:t})),c.a.createElement("div",{className:j.a.tweet},c.a.createElement("img",{src:"https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",alt:"user"}),c.a.createElement("div",{className:j.a.body},c.a.createElement("h4",{className:j.a.user},s),c.a.createElement("p",{className:j.a.text},l))),c.a.createElement("div",{className:j.a.form},c.a.createElement("form",{onSubmit:function(e){e.preventDefault(),i(r,{pic:"https://abs.twimg.com/sticky/default_profile_images/default_profile_reasonably_small.png",user:"Demo-User",text:f}),p(""),a()}},c.a.createElement("textarea",{placeholder:"Tweet your reply",value:f,onChange:function(e){p(e.target.value)},ref:_,required:!0}),c.a.createElement("button",{type:"submit"},"Reply")))))},L=a(21),S=a.n(L),P=function(e){var t=e.likes,a=e.isLiked,n=e.handleLike;return c.a.createElement("div",{className:S.a.likes,style:a?{color:"#E0245E"}:null},c.a.createElement("div",{className:S.a.iconContainer},c.a.createElement("i",{className:a?"fas fa-heart fa-lg":"far fa-heart fa-lg",onClick:n})),c.a.createElement("h4",{className:S.a.amount},t))},A=a(27),D=a.n(A),W=function(e){var t=e.handleClick,a=e.comments;return c.a.createElement("div",{className:D.a.comments},c.a.createElement("div",{className:D.a.iconContainer},c.a.createElement("i",{className:"far fa-comment fa-lg",onClick:t})),c.a.createElement("h4",null,a.length))},M=a(7),I=a.n(M),F=function(e){var t=e.match,a=Object(n.useContext)(d),r=a.tweets,s=a.likeTweet,i=Object(n.useState)(null),m=Object(o.a)(i,2),u=m[0],f=m[1],p=Object(n.useState)(!1),_=Object(o.a)(p,2),E=_[0],b=_[1];Object(n.useEffect)((function(){f(r.filter((function(e){return e.id===t.params.id}))[0])}),[r,t.params.id]);var v=function(e){"fas fa-times fa-lg"!==e.target.className&&"modal-container"!==e.target.className&&"far fa-comment fa-lg"!==e.target.className||b(!E)};if(u){var w=u.user,g=u.pic,h=u.body,k=u.likes,N=u.comments,y=u.isLiked,C=u.id;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:I.a.nav},c.a.createElement(l.b,{to:"/tweeetter"},c.a.createElement("div",{className:I.a.iconContainer},c.a.createElement("i",{className:"fas fa-arrow-left fa-lg"}))),c.a.createElement("h1",null,"Tweet")),c.a.createElement("div",{className:I.a.tweetPage},c.a.createElement("div",{className:I.a.user},c.a.createElement("img",{src:g,alt:"profile-pic"}),c.a.createElement("h4",{className:I.a.username},w)),c.a.createElement("div",{className:I.a.post},c.a.createElement("p",{className:I.a.tweetText},h)),c.a.createElement("div",{className:I.a.stats},c.a.createElement(P,{likes:k,isLiked:y,id:C,handleLike:function(e){s(u.id)}}),c.a.createElement(W,{handleClick:v,comments:N})),N.length>0?c.a.createElement(x,{comments:N}):null),E?c.a.createElement(O,{handleClick:v,closeModal:function(){b(!1)},id:C,user:w,body:h}):null)}return null};a(45);var R=function(){var e=Object(n.useContext)(d),t=e.getTweets,a=e.isLoading;return Object(n.useEffect)((function(){t()}),[]),c.a.createElement(l.a,null,c.a.createElement("div",{className:"container"},c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/tweeetter",exact:!0,render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement("h1",null,"Home"),c.a.createElement(f,null),c.a.createElement(g,null),a?c.a.createElement(E,null):null)}}),c.a.createElement(i.a,{path:"/tweeetter/tweet/:id",component:F}))))},q=a(12),U=a.n(q),H=a(22),J=a(19),K=a(5),X=function(e,t){switch(t.type){case"SET_LOADING":return Object(K.a)({},e,{isLoading:!0});case"SET_TWEETS":return Object(K.a)({},e,{tweets:[].concat(Object(J.a)(e.tweets),Object(J.a)(t.payload)),isLoading:!1});case"POST_TWEET":return Object(K.a)({},e,{tweets:[t.payload].concat(Object(J.a)(e.tweets))});case"LIKE_TWEET":return Object(K.a)({},e,{tweets:e.tweets.map((function(e){return e.id===t.payload?e.isLiked?Object(K.a)({},e,{isLiked:!1,likes:e.likes-1}):Object(K.a)({},e,{isLiked:!0,likes:e.likes+1}):e}))});case"ADD_COMMENT":return Object(K.a)({},e,{tweets:e.tweets.map((function(e){return e.id===t.payload.id?Object(K.a)({},e,{comments:[t.payload.comment].concat(Object(J.a)(e.comments))}):e}))});default:return Object(K.a)({},e)}},z=a(47),B=function(e){var t=Object(n.useReducer)(X,{tweets:[],isLoading:!1}),a=Object(o.a)(t,2),r=a[0],s=a[1];Object(n.useEffect)((function(){r.tweets.length>0&&z.set("tweets",r.tweets)}),[r.tweets]);var l=function(){var e=Object(H.a)(U.a.mark((function e(){var t,a,n,c,r,l;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(f(),z.get("tweets")){e.next=33;break}return t=[],a=[],e.prev=4,e.next=7,fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");case 7:return n=e.sent,e.next=10,n.json();case 10:c=e.sent,a=c,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:return e.prev=17,e.next=20,fetch("https://randomuser.me/api/?exc=gender,location,email,login,registered,dob,phone,cell,nat&results=10");case 20:return r=e.sent,e.next=23,r.json();case 23:l=e.sent,t=l.results,e.next=30;break;case 27:e.prev=27,e.t1=e.catch(17),console.log(e.t1);case 30:m(t,a),e.next=34;break;case 33:setTimeout((function(){s({type:"SET_TWEETS",payload:z.get("tweets")})}),1500);case 34:case"end":return e.stop()}}),e,null,[[4,14],[17,27]])})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=Object(H.a)(U.a.mark((function e(){var t,a,n,c,r,s,l,i,o,m;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Number((8*Math.random()).toFixed()),a=[],n=[],c=[],e.prev=4,e.next=7,fetch("https://jsonplaceholder.typicode.com/posts?_limit=".concat(t));case 7:return r=e.sent,e.next=10,r.json();case 10:s=e.sent,a=s,e.next=17;break;case 14:e.prev=14,e.t0=e.catch(4),console.log(e.t0);case 17:return e.prev=17,e.next=20,fetch("https://randomuser.me/api/?exc=gender,location,email,login,registered,dob,phone,cell,nat&results=".concat(t));case 20:return l=e.sent,e.next=23,l.json();case 23:i=e.sent,n=i.results,e.next=30;break;case 27:e.prev=27,e.t1=e.catch(17),console.log(e.t1);case 30:for(o=0;o<t;o++)(m={}).text=a[o].body,m.user="".concat(n[o].name.first," ").concat(n[o].name.last),m.pic=n[o].picture.medium,c.push(m);return e.abrupt("return",c);case 32:case"end":return e.stop()}}),e,null,[[4,14],[17,27]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(H.a)(U.a.mark((function e(t,a){var n,c,r;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=[],c=0;case 2:if(!(c<t.length)){e.next=17;break}return(r={}).id=u()(),r.pic=t[c].picture.medium,r.user="".concat(t[c].name.first," ").concat(t[c].name.last),r.body=a[c].body,r.likes=Number((30*Math.random()).toFixed()),r.isLiked=!1,e.next=12,i();case 12:r.comments=e.sent,n.push(r);case 14:c++,e.next=2;break;case 17:s({type:"SET_TWEETS",payload:n});case 18:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){return s({type:"SET_LOADING"})};return c.a.createElement(d.Provider,{value:{tweets:r.tweets,isLoading:r.isLoading,getTweets:l,postTweet:function(e){s({type:"POST_TWEET",payload:e})},likeTweet:function(e){s({type:"LIKE_TWEET",payload:e})},addComment:function(e,t){s({type:"ADD_COMMENT",payload:{id:e,comment:t}})}}},e.children)};s.a.render(c.a.createElement(B,null,c.a.createElement(R,null)),document.getElementById("root"))},7:function(e,t,a){e.exports={nav:"TweetPage_nav__3LXI0",iconContainer:"TweetPage_iconContainer__3cX5p",tweetPage:"TweetPage_tweetPage__1vtxg",user:"TweetPage_user__WPxWl",tweetText:"TweetPage_tweetText__3Sdyw",stats:"TweetPage_stats__91vFL",comments:"TweetPage_comments__3aUq-",modal:"TweetPage_modal__r9zhb"}},9:function(e,t,a){e.exports={tweetContainer:"Tweet_tweetContainer__1o0T8",imgContainer:"Tweet_imgContainer__3y0oe",title:"Tweet_title__ygZgp",stats:"Tweet_stats__3n9Ay",likes:"Tweet_likes__2Edel",comments:"Tweet_comments__2sE8c"}}},[[35,1,2]]]);
//# sourceMappingURL=main.5c2a3ba7.chunk.js.map