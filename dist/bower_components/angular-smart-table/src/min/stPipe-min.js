ng.module("smart-table").directive("stPipe",function(){return{require:"stTable",scope:{stPipe:"="},link:{pre:function(e,t,i,n){ng.isFunction(e.stPipe)&&(n.preventPipeOnWatch(),n.pipe=function(){return e.stPipe(n.tableState(),n)})},post:function(e,t,i,n){n.pipe()}}}});