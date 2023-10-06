/* Vendored with gratitude from https://github.com/NaturalIntelligence/fast-xml-parser and used under the MIT license */
var pe=Object.create;var I=Object.defineProperty;var Ne=Object.getOwnPropertyDescriptor;var be=Object.getOwnPropertyNames;var Ee=Object.getPrototypeOf,Te=Object.prototype.hasOwnProperty;var b=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),ye=(e,t)=>{for(var s in t)I(e,s,{get:t[s],enumerable:!0})},M=(e,t,s,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of be(t))!Te.call(e,n)&&n!==s&&I(e,n,{get:()=>t[n],enumerable:!(i=Ne(t,n))||i.enumerable});return e};var Ae=(e,t,s)=>(s=e!=null?pe(Ee(e)):{},M(t||!e||!e.__esModule?I(s,"default",{value:e,enumerable:!0}):s,e)),me=e=>M(I({},"__esModule",{value:!0}),e);var O=b(E=>{"use strict";var R=":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",we=R+"\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040",k="["+R+"]["+we+"]*",Pe=new RegExp("^"+k+"$"),Ie=function(e,t){let s=[],i=t.exec(e);for(;i;){let n=[];n.startIndex=t.lastIndex-i[0].length;let r=i.length;for(let f=0;f<r;f++)n.push(i[f]);s.push(n),i=t.exec(e)}return s},Oe=function(e){let t=Pe.exec(e);return!(t===null||typeof t>"u")};E.isExist=function(e){return typeof e<"u"};E.isEmptyObject=function(e){return Object.keys(e).length===0};E.merge=function(e,t,s){if(t){let i=Object.keys(t),n=i.length;for(let r=0;r<n;r++)s==="strict"?e[i[r]]=[t[i[r]]]:e[i[r]]=t[i[r]]}};E.getValue=function(e){return E.isExist(e)?e:""};E.isName=Oe;E.getAllMatches=Ie;E.nameRegexp=k});var V=b(U=>{"use strict";var x=O(),Ce={allowBooleanAttributes:!1,unpairedTags:[]};U.validate=function(e,t){t=Object.assign({},Ce,t);let s=[],i=!1,n=!1;e[0]==="\uFEFF"&&(e=e.substr(1));for(let r=0;r<e.length;r++)if(e[r]==="<"&&e[r+1]==="?"){if(r+=2,r=X(e,r),r.err)return r}else if(e[r]==="<"){let f=r;if(r++,e[r]==="!"){r=G(e,r);continue}else{let u=!1;e[r]==="/"&&(u=!0,r++);let o="";for(;r<e.length&&e[r]!==">"&&e[r]!==" "&&e[r]!=="	"&&e[r]!==`
`&&e[r]!=="\r";r++)o+=e[r];if(o=o.trim(),o[o.length-1]==="/"&&(o=o.substring(0,o.length-1),r--),!Le(o)){let d;return o.trim().length===0?d="Invalid space after '<'.":d="Tag '"+o+"' is an invalid name.",h("InvalidTag",d,p(e,r))}let l=ve(e,r);if(l===!1)return h("InvalidAttr","Attributes for '"+o+"' have open quote.",p(e,r));let a=l.value;if(r=l.index,a[a.length-1]==="/"){let d=r-a.length;a=a.substring(0,a.length-1);let g=Z(a,t);if(g===!0)i=!0;else return h(g.err.code,g.err.msg,p(e,d+g.err.line))}else if(u)if(l.tagClosed){if(a.trim().length>0)return h("InvalidTag","Closing tag '"+o+"' can't have attributes or invalid starting.",p(e,f));{let d=s.pop();if(o!==d.tagName){let g=p(e,d.tagStartPos);return h("InvalidTag","Expected closing tag '"+d.tagName+"' (opened in line "+g.line+", col "+g.col+") instead of closing tag '"+o+"'.",p(e,f))}s.length==0&&(n=!0)}}else return h("InvalidTag","Closing tag '"+o+"' doesn't have proper closing.",p(e,r));else{let d=Z(a,t);if(d!==!0)return h(d.err.code,d.err.msg,p(e,r-a.length+d.err.line));if(n===!0)return h("InvalidXml","Multiple possible root nodes found.",p(e,r));t.unpairedTags.indexOf(o)!==-1||s.push({tagName:o,tagStartPos:f}),i=!0}for(r++;r<e.length;r++)if(e[r]==="<")if(e[r+1]==="!"){r++,r=G(e,r);continue}else if(e[r+1]==="?"){if(r=X(e,++r),r.err)return r}else break;else if(e[r]==="&"){let d=$e(e,r);if(d==-1)return h("InvalidChar","char '&' is not expected.",p(e,r));r=d}else if(n===!0&&!q(e[r]))return h("InvalidXml","Extra text at the end",p(e,r));e[r]==="<"&&r--}}else{if(q(e[r]))continue;return h("InvalidChar","char '"+e[r]+"' is not expected.",p(e,r))}if(i){if(s.length==1)return h("InvalidTag","Unclosed tag '"+s[0].tagName+"'.",p(e,s[0].tagStartPos));if(s.length>0)return h("InvalidXml","Invalid '"+JSON.stringify(s.map(r=>r.tagName),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1})}else return h("InvalidXml","Start tag expected.",1);return!0};function q(e){return e===" "||e==="	"||e===`
`||e==="\r"}function X(e,t){let s=t;for(;t<e.length;t++)if(e[t]=="?"||e[t]==" "){let i=e.substr(s,t-s);if(t>5&&i==="xml")return h("InvalidXml","XML declaration allowed only at the start of the document.",p(e,t));if(e[t]=="?"&&e[t+1]==">"){t++;break}else continue}return t}function G(e,t){if(e.length>t+5&&e[t+1]==="-"&&e[t+2]==="-"){for(t+=3;t<e.length;t++)if(e[t]==="-"&&e[t+1]==="-"&&e[t+2]===">"){t+=2;break}}else if(e.length>t+8&&e[t+1]==="D"&&e[t+2]==="O"&&e[t+3]==="C"&&e[t+4]==="T"&&e[t+5]==="Y"&&e[t+6]==="P"&&e[t+7]==="E"){let s=1;for(t+=8;t<e.length;t++)if(e[t]==="<")s++;else if(e[t]===">"&&(s--,s===0))break}else if(e.length>t+9&&e[t+1]==="["&&e[t+2]==="C"&&e[t+3]==="D"&&e[t+4]==="A"&&e[t+5]==="T"&&e[t+6]==="A"&&e[t+7]==="["){for(t+=8;t<e.length;t++)if(e[t]==="]"&&e[t+1]==="]"&&e[t+2]===">"){t+=2;break}}return t}var xe='"',Ve="'";function ve(e,t){let s="",i="",n=!1;for(;t<e.length;t++){if(e[t]===xe||e[t]===Ve)i===""?i=e[t]:i!==e[t]||(i="");else if(e[t]===">"&&i===""){n=!0;break}s+=e[t]}return i!==""?!1:{value:s,index:t,tagClosed:n}}var Fe=new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`,"g");function Z(e,t){let s=x.getAllMatches(e,Fe),i={};for(let n=0;n<s.length;n++){if(s[n][1].length===0)return h("InvalidAttr","Attribute '"+s[n][2]+"' has no space in starting.",w(s[n]));if(s[n][3]!==void 0&&s[n][4]===void 0)return h("InvalidAttr","Attribute '"+s[n][2]+"' is without value.",w(s[n]));if(s[n][3]===void 0&&!t.allowBooleanAttributes)return h("InvalidAttr","boolean attribute '"+s[n][2]+"' is not allowed.",w(s[n]));let r=s[n][2];if(!_e(r))return h("InvalidAttr","Attribute '"+r+"' is an invalid name.",w(s[n]));if(!i.hasOwnProperty(r))i[r]=1;else return h("InvalidAttr","Attribute '"+r+"' is repeated.",w(s[n]))}return!0}function Se(e,t){let s=/\d/;for(e[t]==="x"&&(t++,s=/[\da-fA-F]/);t<e.length;t++){if(e[t]===";")return t;if(!e[t].match(s))break}return-1}function $e(e,t){if(t++,e[t]===";")return-1;if(e[t]==="#")return t++,Se(e,t);let s=0;for(;t<e.length;t++,s++)if(!(e[t].match(/\w/)&&s<20)){if(e[t]===";")break;return-1}return t}function h(e,t,s){return{err:{code:e,msg:t,line:s.line||s,col:s.col}}}function _e(e){return x.isName(e)}function Le(e){return x.isName(e)}function p(e,t){let s=e.substring(0,t).split(/\r?\n/);return{line:s.length,col:s[s.length-1].length+1}}function w(e){return e.startIndex+e[1].length}});var J=b(v=>{var Y={preserveOrder:!1,attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,removeNSPrefix:!1,allowBooleanAttributes:!1,parseTagValue:!0,parseAttributeValue:!1,trimValues:!0,cdataPropName:!1,numberParseOptions:{hex:!0,leadingZeros:!0,eNotation:!0},tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},stopNodes:[],alwaysCreateTextNode:!1,isArray:()=>!1,commentPropName:!1,unpairedTags:[],processEntities:!0,htmlEntities:!1,ignoreDeclaration:!1,ignorePiTags:!1,transformTagName:!1,transformAttributeName:!1,updateTag:function(e,t,s){return e}},Be=function(e){return Object.assign({},Y,e)};v.buildOptions=Be;v.defaultOptions=Y});var K=b((Bt,W)=>{"use strict";var F=class{constructor(t){this.tagname=t,this.child=[],this[":@"]={}}add(t,s){t==="__proto__"&&(t="#__proto__"),this.child.push({[t]:s})}addChild(t){t.tagname==="__proto__"&&(t.tagname="#__proto__"),t[":@"]&&Object.keys(t[":@"]).length>0?this.child.push({[t.tagname]:t.child,":@":t[":@"]}):this.child.push({[t.tagname]:t.child})}};W.exports=F});var z=b((Mt,Q)=>{var Me=O();function Re(e,t){let s={};if(e[t+3]==="O"&&e[t+4]==="C"&&e[t+5]==="T"&&e[t+6]==="Y"&&e[t+7]==="P"&&e[t+8]==="E"){t=t+9;let i=1,n=!1,r=!1,f="";for(;t<e.length;t++)if(e[t]==="<"&&!r){if(n&&Xe(e,t))t+=7,[entityName,val,t]=ke(e,t+1),val.indexOf("&")===-1&&(s[Ye(entityName)]={regx:RegExp(`&${entityName};`,"g"),val});else if(n&&Ge(e,t))t+=8;else if(n&&Ze(e,t))t+=8;else if(n&&Ue(e,t))t+=9;else if(qe)r=!0;else throw new Error("Invalid DOCTYPE");i++,f=""}else if(e[t]===">"){if(r?e[t-1]==="-"&&e[t-2]==="-"&&(r=!1,i--):i--,i===0)break}else e[t]==="["?n=!0:f+=e[t];if(i!==0)throw new Error("Unclosed DOCTYPE")}else throw new Error("Invalid Tag instead of DOCTYPE");return{entities:s,i:t}}function ke(e,t){let s="";for(;t<e.length&&e[t]!=="'"&&e[t]!=='"';t++)s+=e[t];if(s=s.trim(),s.indexOf(" ")!==-1)throw new Error("External entites are not supported");let i=e[t++],n="";for(;t<e.length&&e[t]!==i;t++)n+=e[t];return[s,n,t]}function qe(e,t){return e[t+1]==="!"&&e[t+2]==="-"&&e[t+3]==="-"}function Xe(e,t){return e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="N"&&e[t+4]==="T"&&e[t+5]==="I"&&e[t+6]==="T"&&e[t+7]==="Y"}function Ge(e,t){return e[t+1]==="!"&&e[t+2]==="E"&&e[t+3]==="L"&&e[t+4]==="E"&&e[t+5]==="M"&&e[t+6]==="E"&&e[t+7]==="N"&&e[t+8]==="T"}function Ze(e,t){return e[t+1]==="!"&&e[t+2]==="A"&&e[t+3]==="T"&&e[t+4]==="T"&&e[t+5]==="L"&&e[t+6]==="I"&&e[t+7]==="S"&&e[t+8]==="T"}function Ue(e,t){return e[t+1]==="!"&&e[t+2]==="N"&&e[t+3]==="O"&&e[t+4]==="T"&&e[t+5]==="A"&&e[t+6]==="T"&&e[t+7]==="I"&&e[t+8]==="O"&&e[t+9]==="N"}function Ye(e){if(Me.isName(e))return e;throw new Error(`Invalid entity name ${e}`)}Q.exports=Re});var j=b((Rt,H)=>{var Je=/^[-+]?0x[a-fA-F0-9]+$/,We=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt);!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);var Ke={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};function Qe(e,t={}){if(t=Object.assign({},Ke,t),!e||typeof e!="string")return e;let s=e.trim();if(t.skipLike!==void 0&&t.skipLike.test(s))return e;if(t.hex&&Je.test(s))return Number.parseInt(s,16);{let i=We.exec(s);if(i){let n=i[1],r=i[2],f=ze(i[3]),u=i[4]||i[6];if(!t.leadingZeros&&r.length>0&&n&&s[2]!==".")return e;if(!t.leadingZeros&&r.length>0&&!n&&s[1]!==".")return e;{let o=Number(s),l=""+o;return l.search(/[eE]/)!==-1||u?t.eNotation?o:e:s.indexOf(".")!==-1?l==="0"&&f===""||l===f||n&&l==="-"+f?o:e:r?f===l||n+f===l?o:e:s===l||s===n+l?o:e}}else return e}}function ze(e){return e&&e.indexOf(".")!==-1&&(e=e.replace(/0+$/,""),e==="."?e="0":e[0]==="."?e="0"+e:e[e.length-1]==="."&&(e=e.substr(0,e.length-1))),e}H.exports=Qe});var ee=b((qt,D)=>{"use strict";var L=O(),P=K(),He=z(),je=j(),kt="<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,L.nameRegexp),S=class{constructor(t){this.options=t,this.currentNode=null,this.tagsNodeStack=[],this.docTypeEntities={},this.lastEntities={apos:{regex:/&(apos|#39|#x27);/g,val:"'"},gt:{regex:/&(gt|#62|#x3E);/g,val:">"},lt:{regex:/&(lt|#60|#x3C);/g,val:"<"},quot:{regex:/&(quot|#34|#x22);/g,val:'"'}},this.ampEntity={regex:/&(amp|#38|#x26);/g,val:"&"},this.htmlEntities={space:{regex:/&(nbsp|#160);/g,val:" "},cent:{regex:/&(cent|#162);/g,val:"\xA2"},pound:{regex:/&(pound|#163);/g,val:"\xA3"},yen:{regex:/&(yen|#165);/g,val:"\xA5"},euro:{regex:/&(euro|#8364);/g,val:"\u20AC"},copyright:{regex:/&(copy|#169);/g,val:"\xA9"},reg:{regex:/&(reg|#174);/g,val:"\xAE"},inr:{regex:/&(inr|#8377);/g,val:"\u20B9"}},this.addExternalEntities=De,this.parseXml=rt,this.parseTextData=et,this.resolveNameSpace=tt,this.buildAttributesMap=nt,this.isItStopNode=ft,this.replaceEntitiesValue=ot,this.readStopNodeData=at,this.saveTextToParentTag=ut,this.addChild=it}};function De(e){let t=Object.keys(e);for(let s=0;s<t.length;s++){let i=t[s];this.lastEntities[i]={regex:new RegExp("&"+i+";","g"),val:e[i]}}}function et(e,t,s,i,n,r,f){if(e!==void 0&&(this.options.trimValues&&!i&&(e=e.trim()),e.length>0)){f||(e=this.replaceEntitiesValue(e));let u=this.options.tagValueProcessor(t,e,s,n,r);return u==null?e:typeof u!=typeof e||u!==e?u:this.options.trimValues?_(e,this.options.parseTagValue,this.options.numberParseOptions):e.trim()===e?_(e,this.options.parseTagValue,this.options.numberParseOptions):e}}function tt(e){if(this.options.removeNSPrefix){let t=e.split(":"),s=e.charAt(0)==="/"?"/":"";if(t[0]==="xmlns")return"";t.length===2&&(e=s+t[1])}return e}var st=new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`,"gm");function nt(e,t,s){if(!this.options.ignoreAttributes&&typeof e=="string"){let i=L.getAllMatches(e,st),n=i.length,r={};for(let f=0;f<n;f++){let u=this.resolveNameSpace(i[f][1]),o=i[f][4],l=this.options.attributeNamePrefix+u;if(u.length)if(this.options.transformAttributeName&&(l=this.options.transformAttributeName(l)),l==="__proto__"&&(l="#__proto__"),o!==void 0){this.options.trimValues&&(o=o.trim()),o=this.replaceEntitiesValue(o);let a=this.options.attributeValueProcessor(u,o,t);a==null?r[l]=o:typeof a!=typeof o||a!==o?r[l]=a:r[l]=_(o,this.options.parseAttributeValue,this.options.numberParseOptions)}else this.options.allowBooleanAttributes&&(r[l]=!0)}if(!Object.keys(r).length)return;if(this.options.attributesGroupName){let f={};return f[this.options.attributesGroupName]=r,f}return r}}var rt=function(e){e=e.replace(/\r\n?/g,`
`);let t=new P("!xml"),s=t,i="",n="";for(let r=0;r<e.length;r++)if(e[r]==="<")if(e[r+1]==="/"){let u=A(e,">",r,"Closing Tag is not closed."),o=e.substring(r+2,u).trim();if(this.options.removeNSPrefix){let d=o.indexOf(":");d!==-1&&(o=o.substr(d+1))}this.options.transformTagName&&(o=this.options.transformTagName(o)),s&&(i=this.saveTextToParentTag(i,s,n));let l=n.substring(n.lastIndexOf(".")+1);if(o&&this.options.unpairedTags.indexOf(o)!==-1)throw new Error(`Unpaired tag can not be used as closing tag: </${o}>`);let a=0;l&&this.options.unpairedTags.indexOf(l)!==-1?(a=n.lastIndexOf(".",n.lastIndexOf(".")-1),this.tagsNodeStack.pop()):a=n.lastIndexOf("."),n=n.substring(0,a),s=this.tagsNodeStack.pop(),i="",r=u}else if(e[r+1]==="?"){let u=$(e,r,!1,"?>");if(!u)throw new Error("Pi Tag is not closed.");if(i=this.saveTextToParentTag(i,s,n),!(this.options.ignoreDeclaration&&u.tagName==="?xml"||this.options.ignorePiTags)){let o=new P(u.tagName);o.add(this.options.textNodeName,""),u.tagName!==u.tagExp&&u.attrExpPresent&&(o[":@"]=this.buildAttributesMap(u.tagExp,n,u.tagName)),this.addChild(s,o,n)}r=u.closeIndex+1}else if(e.substr(r+1,3)==="!--"){let u=A(e,"-->",r+4,"Comment is not closed.");if(this.options.commentPropName){let o=e.substring(r+4,u-2);i=this.saveTextToParentTag(i,s,n),s.add(this.options.commentPropName,[{[this.options.textNodeName]:o}])}r=u}else if(e.substr(r+1,2)==="!D"){let u=He(e,r);this.docTypeEntities=u.entities,r=u.i}else if(e.substr(r+1,2)==="!["){let u=A(e,"]]>",r,"CDATA is not closed.")-2,o=e.substring(r+9,u);if(i=this.saveTextToParentTag(i,s,n),this.options.cdataPropName)s.add(this.options.cdataPropName,[{[this.options.textNodeName]:o}]);else{let l=this.parseTextData(o,s.tagname,n,!0,!1,!0);l==null&&(l=""),s.add(this.options.textNodeName,l)}r=u+2}else{let u=$(e,r,this.options.removeNSPrefix),o=u.tagName,l=u.rawTagName,a=u.tagExp,d=u.attrExpPresent,g=u.closeIndex;this.options.transformTagName&&(o=this.options.transformTagName(o)),s&&i&&s.tagname!=="!xml"&&(i=this.saveTextToParentTag(i,s,n,!1));let N=s;if(N&&this.options.unpairedTags.indexOf(N.tagname)!==-1&&(s=this.tagsNodeStack.pop(),n=n.substring(0,n.lastIndexOf("."))),o!==t.tagname&&(n+=n?"."+o:o),this.isItStopNode(this.options.stopNodes,n,o)){let c="";if(a.length>0&&a.lastIndexOf("/")===a.length-1)r=u.closeIndex;else if(this.options.unpairedTags.indexOf(o)!==-1)r=u.closeIndex;else{let T=this.readStopNodeData(e,l,g+1);if(!T)throw new Error(`Unexpected end of ${l}`);r=T.i,c=T.tagContent}let m=new P(o);o!==a&&d&&(m[":@"]=this.buildAttributesMap(a,n,o)),c&&(c=this.parseTextData(c,o,n,!0,d,!0,!0)),n=n.substr(0,n.lastIndexOf(".")),m.add(this.options.textNodeName,c),this.addChild(s,m,n)}else{if(a.length>0&&a.lastIndexOf("/")===a.length-1){o[o.length-1]==="/"?(o=o.substr(0,o.length-1),n=n.substr(0,n.length-1),a=o):a=a.substr(0,a.length-1),this.options.transformTagName&&(o=this.options.transformTagName(o));let c=new P(o);o!==a&&d&&(c[":@"]=this.buildAttributesMap(a,n,o)),this.addChild(s,c,n),n=n.substr(0,n.lastIndexOf("."))}else{let c=new P(o);this.tagsNodeStack.push(s),o!==a&&d&&(c[":@"]=this.buildAttributesMap(a,n,o)),this.addChild(s,c,n),s=c}i="",r=g}}else i+=e[r];return t.child};function it(e,t,s){let i=this.options.updateTag(t.tagname,s,t[":@"]);i===!1||(typeof i=="string"&&(t.tagname=i),e.addChild(t))}var ot=function(e){if(this.options.processEntities){for(let t in this.docTypeEntities){let s=this.docTypeEntities[t];e=e.replace(s.regx,s.val)}for(let t in this.lastEntities){let s=this.lastEntities[t];e=e.replace(s.regex,s.val)}if(this.options.htmlEntities)for(let t in this.htmlEntities){let s=this.htmlEntities[t];e=e.replace(s.regex,s.val)}e=e.replace(this.ampEntity.regex,this.ampEntity.val)}return e};function ut(e,t,s,i){return e&&(i===void 0&&(i=Object.keys(t.child).length===0),e=this.parseTextData(e,t.tagname,s,!1,t[":@"]?Object.keys(t[":@"]).length!==0:!1,i),e!==void 0&&e!==""&&t.add(this.options.textNodeName,e),e=""),e}function ft(e,t,s){let i="*."+s;for(let n in e){let r=e[n];if(i===r||t===r)return!0}return!1}function lt(e,t,s=">"){let i,n="";for(let r=t;r<e.length;r++){let f=e[r];if(i)f===i&&(i="");else if(f==='"'||f==="'")i=f;else if(f===s[0])if(s[1]){if(e[r+1]===s[1])return{data:n,index:r}}else return{data:n,index:r};else f==="	"&&(f=" ");n+=f}}function A(e,t,s,i){let n=e.indexOf(t,s);if(n===-1)throw new Error(i);return n+t.length-1}function $(e,t,s,i=">"){let n=lt(e,t+1,i);if(!n)return;let r=n.data,f=n.index,u=r.search(/\s/),o=r,l=!0;u!==-1&&(o=r.substr(0,u).replace(/\s\s*$/,""),r=r.substr(u+1));let a=o;if(s){let d=o.indexOf(":");d!==-1&&(o=o.substr(d+1),l=o!==n.data.substr(d+1))}return{tagName:o,tagExp:r,closeIndex:f,attrExpPresent:l,rawTagName:a}}function at(e,t,s){let i=s,n=1;for(;s<e.length;s++)if(e[s]==="<")if(e[s+1]==="/"){let r=A(e,">",s,`${t} is not closed`);if(e.substring(s+2,r).trim()===t&&(n--,n===0))return{tagContent:e.substring(i,s),i:r};s=r}else if(e[s+1]==="?")s=A(e,"?>",s+1,"StopNode is not closed.");else if(e.substr(s+1,3)==="!--")s=A(e,"-->",s+3,"StopNode is not closed.");else if(e.substr(s+1,2)==="![")s=A(e,"]]>",s,"StopNode is not closed.")-2;else{let r=$(e,s,">");r&&((r&&r.tagName)===t&&r.tagExp[r.tagExp.length-1]!=="/"&&n++,s=r.closeIndex)}}function _(e,t,s){if(t&&typeof e=="string"){let i=e.trim();return i==="true"?!0:i==="false"?!1:je(e,s)}else return L.isExist(e)?e:""}D.exports=S});var ne=b(se=>{"use strict";function dt(e,t){return te(e,t)}function te(e,t,s){let i,n={};for(let r=0;r<e.length;r++){let f=e[r],u=ct(f),o="";if(s===void 0?o=u:o=s+"."+u,u===t.textNodeName)i===void 0?i=f[u]:i+=""+f[u];else{if(u===void 0)continue;if(f[u]){let l=te(f[u],t,o),a=gt(l,t);f[":@"]?ht(l,f[":@"],o,t):Object.keys(l).length===1&&l[t.textNodeName]!==void 0&&!t.alwaysCreateTextNode?l=l[t.textNodeName]:Object.keys(l).length===0&&(t.alwaysCreateTextNode?l[t.textNodeName]="":l=""),n[u]!==void 0&&n.hasOwnProperty(u)?(Array.isArray(n[u])||(n[u]=[n[u]]),n[u].push(l)):t.isArray(u,o,a)?n[u]=[l]:n[u]=l}}}return typeof i=="string"?i.length>0&&(n[t.textNodeName]=i):i!==void 0&&(n[t.textNodeName]=i),n}function ct(e){let t=Object.keys(e);for(let s=0;s<t.length;s++){let i=t[s];if(i!==":@")return i}}function ht(e,t,s,i){if(t){let n=Object.keys(t),r=n.length;for(let f=0;f<r;f++){let u=n[f];i.isArray(u,s+"."+u,!0,!0)?e[u]=[t[u]]:e[u]=t[u]}}}function gt(e,t){let{textNodeName:s}=t,i=Object.keys(e).length;return!!(i===0||i===1&&(e[s]||typeof e[s]=="boolean"||e[s]===0))}se.prettify=dt});var ie=b((Gt,re)=>{var{buildOptions:pt}=J(),Nt=ee(),{prettify:bt}=ne(),Et=V(),B=class{constructor(t){this.externalEntities={},this.options=pt(t)}parse(t,s){if(typeof t!="string")if(t.toString)t=t.toString();else throw new Error("XML data is accepted in String or Bytes[] form.");if(s){s===!0&&(s={});let r=Et.validate(t,s);if(r!==!0)throw Error(`${r.err.msg}:${r.err.line}:${r.err.col}`)}let i=new Nt(this.options);i.addExternalEntities(this.externalEntities);let n=i.parseXml(t);return this.options.preserveOrder||n===void 0?n:bt(n,this.options)}addEntity(t,s){if(s.indexOf("&")!==-1)throw new Error("Entity value can't have '&'");if(t.indexOf("&")!==-1||t.indexOf(";")!==-1)throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");if(s==="&")throw new Error("An entity with value '&' is not permitted");this.externalEntities[t]=s}};re.exports=B});var ae=b((Zt,le)=>{var Tt=`
`;function yt(e,t){let s="";return t.format&&t.indentBy.length>0&&(s=Tt),ue(e,t,"",s)}function ue(e,t,s,i){let n="",r=!1;for(let f=0;f<e.length;f++){let u=e[f],o=At(u);if(o===void 0)continue;let l="";if(s.length===0?l=o:l=`${s}.${o}`,o===t.textNodeName){let c=u[o];mt(l,t)||(c=t.tagValueProcessor(o,c),c=fe(c,t)),r&&(n+=i),n+=c,r=!1;continue}else if(o===t.cdataPropName){r&&(n+=i),n+=`<![CDATA[${u[o][0][t.textNodeName]}]]>`,r=!1;continue}else if(o===t.commentPropName){n+=i+`<!--${u[o][0][t.textNodeName]}-->`,r=!0;continue}else if(o[0]==="?"){let c=oe(u[":@"],t),m=o==="?xml"?"":i,T=u[o][0][t.textNodeName];T=T.length!==0?" "+T:"",n+=m+`<${o}${T}${c}?>`,r=!0;continue}let a=i;a!==""&&(a+=t.indentBy);let d=oe(u[":@"],t),g=i+`<${o}${d}`,N=ue(u[o],t,l,a);t.unpairedTags.indexOf(o)!==-1?t.suppressUnpairedNode?n+=g+">":n+=g+"/>":(!N||N.length===0)&&t.suppressEmptyNode?n+=g+"/>":N&&N.endsWith(">")?n+=g+`>${N}${i}</${o}>`:(n+=g+">",N&&i!==""&&(N.includes("/>")||N.includes("</"))?n+=i+t.indentBy+N+i:n+=N,n+=`</${o}>`),r=!0}return n}function At(e){let t=Object.keys(e);for(let s=0;s<t.length;s++){let i=t[s];if(e.hasOwnProperty(i)&&i!==":@")return i}}function oe(e,t){let s="";if(e&&!t.ignoreAttributes)for(let i in e){if(!e.hasOwnProperty(i))continue;let n=t.attributeValueProcessor(i,e[i]);n=fe(n,t),n===!0&&t.suppressBooleanAttributes?s+=` ${i.substr(t.attributeNamePrefix.length)}`:s+=` ${i.substr(t.attributeNamePrefix.length)}="${n}"`}return s}function mt(e,t){e=e.substr(0,e.length-t.textNodeName.length-1);let s=e.substr(e.lastIndexOf(".")+1);for(let i in t.stopNodes)if(t.stopNodes[i]===e||t.stopNodes[i]==="*."+s)return!0;return!1}function fe(e,t){if(e&&e.length>0&&t.processEntities)for(let s=0;s<t.entities.length;s++){let i=t.entities[s];e=e.replace(i.regex,i.val)}return e}le.exports=yt});var ce=b((Ut,de)=>{"use strict";var wt=ae(),Pt={attributeNamePrefix:"@_",attributesGroupName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataPropName:!1,format:!1,indentBy:"  ",suppressEmptyNode:!1,suppressUnpairedNode:!0,suppressBooleanAttributes:!0,tagValueProcessor:function(e,t){return t},attributeValueProcessor:function(e,t){return t},preserveOrder:!1,commentPropName:!1,unpairedTags:[],entities:[{regex:new RegExp("&","g"),val:"&amp;"},{regex:new RegExp(">","g"),val:"&gt;"},{regex:new RegExp("<","g"),val:"&lt;"},{regex:new RegExp("'","g"),val:"&apos;"},{regex:new RegExp('"',"g"),val:"&quot;"}],processEntities:!0,stopNodes:[],oneListGroup:!1};function y(e){this.options=Object.assign({},Pt,e),this.options.ignoreAttributes||this.options.attributesGroupName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=Ct),this.processTextOrObjNode=It,this.options.format?(this.indentate=Ot,this.tagEndChar=`>
`,this.newLine=`
`):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine="")}y.prototype.build=function(e){return this.options.preserveOrder?wt(e,this.options):(Array.isArray(e)&&this.options.arrayNodeName&&this.options.arrayNodeName.length>1&&(e={[this.options.arrayNodeName]:e}),this.j2x(e,0).val)};y.prototype.j2x=function(e,t){let s="",i="";for(let n in e)if(Object.prototype.hasOwnProperty.call(e,n))if(typeof e[n]>"u")this.isAttribute(n)&&(i+="");else if(e[n]===null)this.isAttribute(n)?i+="":n[0]==="?"?i+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+n+"/"+this.tagEndChar;else if(e[n]instanceof Date)i+=this.buildTextValNode(e[n],n,"",t);else if(typeof e[n]!="object"){let r=this.isAttribute(n);if(r)s+=this.buildAttrPairStr(r,""+e[n]);else if(n===this.options.textNodeName){let f=this.options.tagValueProcessor(n,""+e[n]);i+=this.replaceEntitiesValue(f)}else i+=this.buildTextValNode(e[n],n,"",t)}else if(Array.isArray(e[n])){let r=e[n].length,f="";for(let u=0;u<r;u++){let o=e[n][u];typeof o>"u"||(o===null?n[0]==="?"?i+=this.indentate(t)+"<"+n+"?"+this.tagEndChar:i+=this.indentate(t)+"<"+n+"/"+this.tagEndChar:typeof o=="object"?this.options.oneListGroup?f+=this.j2x(o,t+1).val:f+=this.processTextOrObjNode(o,n,t):f+=this.buildTextValNode(o,n,"",t))}this.options.oneListGroup&&(f=this.buildObjectNode(f,n,"",t)),i+=f}else if(this.options.attributesGroupName&&n===this.options.attributesGroupName){let r=Object.keys(e[n]),f=r.length;for(let u=0;u<f;u++)s+=this.buildAttrPairStr(r[u],""+e[n][r[u]])}else i+=this.processTextOrObjNode(e[n],n,t);return{attrStr:s,val:i}};y.prototype.buildAttrPairStr=function(e,t){return t=this.options.attributeValueProcessor(e,""+t),t=this.replaceEntitiesValue(t),this.options.suppressBooleanAttributes&&t==="true"?" "+e:" "+e+'="'+t+'"'};function It(e,t,s){let i=this.j2x(e,s+1);return e[this.options.textNodeName]!==void 0&&Object.keys(e).length===1?this.buildTextValNode(e[this.options.textNodeName],t,i.attrStr,s):this.buildObjectNode(i.val,t,i.attrStr,s)}y.prototype.buildObjectNode=function(e,t,s,i){if(e==="")return t[0]==="?"?this.indentate(i)+"<"+t+s+"?"+this.tagEndChar:this.indentate(i)+"<"+t+s+this.closeTag(t)+this.tagEndChar;{let n="</"+t+this.tagEndChar,r="";return t[0]==="?"&&(r="?",n=""),(s||s==="")&&e.indexOf("<")===-1?this.indentate(i)+"<"+t+s+r+">"+e+n:this.options.commentPropName!==!1&&t===this.options.commentPropName&&r.length===0?this.indentate(i)+`<!--${e}-->`+this.newLine:this.indentate(i)+"<"+t+s+r+this.tagEndChar+e+this.indentate(i)+n}};y.prototype.closeTag=function(e){let t="";return this.options.unpairedTags.indexOf(e)!==-1?this.options.suppressUnpairedNode||(t="/"):this.options.suppressEmptyNode?t="/":t=`></${e}`,t};y.prototype.buildTextValNode=function(e,t,s,i){if(this.options.cdataPropName!==!1&&t===this.options.cdataPropName)return this.indentate(i)+`<![CDATA[${e}]]>`+this.newLine;if(this.options.commentPropName!==!1&&t===this.options.commentPropName)return this.indentate(i)+`<!--${e}-->`+this.newLine;if(t[0]==="?")return this.indentate(i)+"<"+t+s+"?"+this.tagEndChar;{let n=this.options.tagValueProcessor(t,e);return n=this.replaceEntitiesValue(n),n===""?this.indentate(i)+"<"+t+s+this.closeTag(t)+this.tagEndChar:this.indentate(i)+"<"+t+s+">"+n+"</"+t+this.tagEndChar}};y.prototype.replaceEntitiesValue=function(e){if(e&&e.length>0&&this.options.processEntities)for(let t=0;t<this.options.entities.length;t++){let s=this.options.entities[t];e=e.replace(s.regex,s.val)}return e};function Ot(e){return this.options.indentBy.repeat(e)}function Ct(e){return e.startsWith(this.options.attributeNamePrefix)&&e!==this.options.textNodeName?e.substr(this.attrPrefixLen):!1}de.exports=y});var ge=b((Yt,he)=>{"use strict";var xt=V(),Vt=ie(),vt=ce();he.exports={XMLParser:Vt,XMLValidator:xt,XMLBuilder:vt}});var Ft={};ye(Ft,{XMLBuilder:()=>C.XMLBuilder,XMLParser:()=>C.XMLParser});module.exports=me(Ft);var C=Ae(ge(),1);0&&(module.exports={XMLBuilder,XMLParser});
