(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{1005:(e,t,r)=>{"use strict";r.d(t,{A:()=>s}),r(6540);var a=r(9724),n=r(4848);let s=function(e){var t=e.children,r=e.heading,s=e.usePadding;return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"flex-1 ".concat(void 0===s||s?"px-10 pt-5":""),children:[r&&(0,n.jsx)(a.A,{children:r}),t]})})}},1524:(e,t,r)=>{"use strict";r.d(t,{A:()=>s}),r(6540);var a=r(6677),n=r(4848);let s=function(e){var t=e.heading,r=e.children,s=e.showBorder,i=e.showShadow,c=e.showPadding;return(0,n.jsxs)("div",{className:"rounded-lg ".concat(void 0===c||c?"p-10":""," bg-white ").concat(void 0===s||s?"border-solid border-slate-200 border":""," ").concat(void 0===i||i?"shadow":""," mb-6"),children:[t&&(0,n.jsx)(a.A,{children:t}),r]})}},9724:(e,t,r)=>{"use strict";r.d(t,{A:()=>n}),r(6540);var a=r(4848);let n=function(e){var t=e.children;return arguments.length>1&&void 0!==arguments[1]&&arguments[1],(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)("h1",{className:"inline-block text-3xl font-extrabold text-slate-800 tracking-tight",children:t})})}},6677:(e,t,r)=>{"use strict";r.d(t,{A:()=>n}),r(6540);var a=r(4848);let n=function(e){var t=e.children;return(0,a.jsx)("div",{className:"mb-5",children:(0,a.jsx)("h2",{className:"inline-block text-lg font-medium ",children:t})})}},5048:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var a=r(8242),n=function(){for(var e=Math.floor(5*Math.random())+5,t=[],r=0;r<e;r++)t.push({product_id:Math.floor(20*Math.random())+1});return t},s=function(e,t){var r=new Date(e),a=new Date(t);return new Date(r.getTime()+Math.random()*(a.getTime()-r.getTime())).toISOString().split("T")[0]},i=1,c=function(e,t){for(var r=[],a=0;a<t;a++)r.push({id:i++,person_id:e,order_date:s("2022-01-01","2023-12-31"),status:["Shipped","Processing","Delivered","Cancelled"][Math.floor(4*Math.random())],total:"$".concat((500*Math.random()+100).toFixed(2)),products:n()});return r};let o=function(e){for(var t=[],r=1;r<=20;r++){var n=c(r,Math.floor(3*Math.random())+2);t.push.apply(t,(0,a.A)(n))}return t}(0)},8419:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d});var a=r(6540),n=r(1005),s=r(5048);r(1106);var i=r(4848),c=r(1524),o=r(6715);let d=function(){var e=(0,o.useRouter)(),t=(0,a.useState)([]),r=t[0],d=t[1];(0,a.useEffect)(function(){d(s.A)},[]);var l=function(t){e.push("/ExamplePages/orders/".concat(t))};return(0,i.jsx)(n.A,{heading:"Orders",children:(0,i.jsx)(c.A,{showPadding:!1,children:(0,i.jsx)("div",{className:"overflow-x-auto",children:(0,i.jsxs)("table",{className:"min-w-full table-auto divide-y divide-gray-200",children:[(0,i.jsx)("thead",{className:"bg-gray-50",children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{scope:"col",className:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Id"}),(0,i.jsx)("th",{scope:"col",className:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Customer Name"}),(0,i.jsx)("th",{scope:"col",className:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Order Date"}),(0,i.jsx)("th",{scope:"col",className:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Status"}),(0,i.jsx)("th",{scope:"col",className:"px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider",children:"Total"})]})}),(0,i.jsx)("tbody",{className:"bg-white divide-y divide-gray-200",children:r.map(function(e){return(0,i.jsxs)("tr",{onClick:function(){return l(e.id)},className:"cursor-pointer hover:bg-gray-100",children:[(0,i.jsx)("td",{className:"px-2 py-4 whitespace-nowrap text-sm text-gray-500",children:e.id}),(0,i.jsx)("td",{className:"px-2 py-4 whitespace-nowrap text-sm text-gray-500",children:e.customer_name}),(0,i.jsx)("td",{className:"px-2 py-4 whitespace-nowrap text-sm text-gray-500",children:e.order_date}),(0,i.jsx)("td",{className:"px-2 py-4 whitespace-nowrap text-sm text-gray-500",children:e.status}),(0,i.jsx)("td",{className:"px-2 py-4 whitespace-nowrap text-sm text-gray-500",children:e.total})]},e.id)})})]})})})})}},3198:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/ExamplePages/orders",function(){return r(8419)}])},2778:(e,t,r)=>{"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=Array(t);r<t;r++)a[r]=e[r];return a}r.d(t,{A:()=>a})},8242:(e,t,r)=>{"use strict";r.d(t,{A:()=>s});var a=r(2778),n=r(8739);function s(e){return function(e){if(Array.isArray(e))return(0,a.A)(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,n.A)(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},8739:(e,t,r)=>{"use strict";r.d(t,{A:()=>n});var a=r(2778);function n(e,t){if(e){if("string"==typeof e)return(0,a.A)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if("Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return(0,a.A)(e,t)}}}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(3198)),_N_E=e.O()}]);