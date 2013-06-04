/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
* Build: http://modernizr.com/download/#-svg-cssclasses
*/
;window.Modernizr=function(a,b,c){function v(a){j.cssText=a}function w(a,b){return v(prefixes.join(a+";")+(b||""))}function x(a,b){return typeof a===b}function y(a,b){return!!~(""+a).indexOf(b)}function z(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:x(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m={svg:"http://www.w3.org/2000/svg"},n={},o={},p={},q=[],r=q.slice,s,t={}.hasOwnProperty,u;!x(t,"undefined")&&!x(t.call,"undefined")?u=function(a,b){return t.call(a,b)}:u=function(a,b){return b in a&&x(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.svg=function(){return!!b.createElementNS&&!!b.createElementNS(m.svg,"svg").createSVGRect};for(var A in n)u(n,A)&&(s=A.toLowerCase(),e[s]=n[A](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)u(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},v(""),i=k=null,e._version=d,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document);

function  scriptStartup() {
	document.getElementById('social-media-sharing').style.display = "block";
}
window.onload = scriptStartup;


function shareFacebook() {
	var sharer = "https://www.facebook.com/sharer/sharer.php?u=";
	window.open(sharer + location.href, 'sharer', 'width=626,height=436');
	return false;
}

function shareTwitter() {
    var twtTitle = document.title;
    var twtUrl = location.href;
    var maxLength = 140 - (twtUrl.length + 1);
    if (twtTitle.length > maxLength) {
        twtTitle = twtTitle.substr(0, (maxLength - 3)) + '...';
    }
    var twtLink = 'http://twitter.com/home?status=' + encodeURIComponent(twtTitle + ' ' + twtUrl);
    window.open(twtLink,'sharer','width=626,height=436');
    return false;
}

function shareGoogle() {
	var url = 'https://plus.google.com/share?url=' + location.href;
	window.open(url,'sharer','menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');
	return false;
}

function shareLinkedIn() {
	var articleUrl = location.href;
	var articleTitle = encodeURIComponent(document.title);
	var shareUrl = 'http://www.linkedin.com/shareArticle?mini=true&url=' + articleUrl + '&title=' + articleTitle;
	window.open(shareUrl,'sharer','menubar=no,toolbar=no,scrollbars=no,width=520,height=570');
	return false;
}

function shareEmail() {
	var subject = document.title;
	var body = "I'd like to share the following link with you - " + location.href;
	window.location='mailto:?subject=' + subject + '&body=' + body;
	return false;
}