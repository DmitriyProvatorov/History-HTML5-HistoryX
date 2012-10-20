var historyX={
	Url:false,
	loc:window.location,
	interval:false,
	firstStart:true,
	start:function(className,loadAjax,pathname)
	 {
	  if(this.firstStart)
	   {
		this.callBackAjax=loadAjax;
	    if(history.pushState)
	     {
		  onpopstate = function(event) { historyX.changeUrl(event.state);}
		  this.reloadPage();
		  this.changeOfReferences(className,loadAjax);
          this.firstStart=false; 
		 }
	    else
	     {
		  this.reloadPage(pathname);
		  this.changeOfReferences(className,loadAjax,pathname);
          this.firstStart=false; 
		  this.changeUrl(loadAjax);
	      this.checkURL(loadAjax);
		 }
	   }
      else this.changeOfReferences(className,loadAjax,pathname);
	 },
	checkURL: function(callBackAjax)
	 {
	  if(!history.pushState)
	   {
		if(this.loc.hash) callBackAjax.call(null,this.loc.href.replace('#',""));
	   }
	 },
	reloadPage: function()
	 {
	  if(!history.pushState)
	   {
		if(this.loc.pathname && this.loc.pathname.length!=1   )
		 {
		  if(typeof arguments[0]!='undefined')
		   {
			 var strokaUrl=(this.loc.hostname+this.loc.pathname).replace("http://","").replace("www.","")
			 var stroka=this.loc.href.replace("http://","").replace("www.","");
			 var testmas=arguments[0].split(",");
             for (var i=0,n=testmas.length;i<n;i++)
              {
			   var regUri= new RegExp("^"+testmas[i]+"\/?$");
			   if(regUri.test(strokaUrl)) break;// здесь проверить сбрасывается ли?
               var reg= new RegExp("^"+testmas[i]);
			   if(reg.test(stroka))
                {  
				 stroka=stroka.replace(reg,"").substring(1);
				 stroka =testmas[i]+"/#"+ stroka;
				 document.location="http://"+stroka;
	             break;
                }
             }
		   }
		 else 
		  {
		    document.location="http://"+this.loc.hostname+"#"+this.loc.pathname.substring(1);
		  }
		 }
	    }
	   else history.replaceState(null, null, this.loc.hash.replace('#',""))
	  },
	changeOfReferences: function(className,loadAjax,pathname) 
	 {
	  className= new RegExp('\\b'+className+'\\b');//className= new RegExp(className);
      var collection=document.getElementsByTagName('a');
	  for(var i=collection.length;i--;)
	   {
		if(className.test(collection[i].className) && !collection[i].getAttribute("data-ajax"))
		 {
		  if(!history.pushState)
		   {
			if(typeof arguments[2]!='undefined')
			 {
			  var stroka=collection[i].href.replace("http://","").replace("www.","");
			  var testmas=arguments[2].split(",");
			  for (var j=0,n=testmas.length;j<n;j++)
               {
				var reg= new RegExp("^"+testmas[j].replace("http://","").replace("www.","").replace(/\/$/,""));
              	if(reg.test(stroka) && (this.loc.hostname+this.loc.pathname)==(testmas[j].replace("http://","").replace("www.","").replace(/\/$/,"")+"/"));
                 {
				  stroka=stroka.replace(reg,"").substring(1);
				  stroka ="#"+ stroka;
	              collection[i].setAttribute("name",stroka)
			      collection[i].href=stroka;
				  collection[i].setAttribute("data-ajax","1");
				  break;
	             }
               }
			  }
			 else
			  {
			   var url=window.location.hostname.replace('www.',"").replace('http://',"");
			   collection[i].setAttribute("name",collection[i].href.replace('www.',"").replace('http://',"").replace(url,"").substring(1))
			   collection[i].href="#"+collection[i].href.replace(url,"").replace('www.',"").replace('http://',"").substring(1);
			   collection[i].setAttribute("data-ajax","1"); 
			  }
			} else {collection[i].setAttribute("data-ajax","1");}
		 }
	   }
	  if(this.firstStart)
	   { 
	    if(document.attachEvent) document.attachEvent('onclick',this.clickFunc,false);
        else document.addEventListener('click',this.clickFunc,false);
	   }
	  },
    changeUrl:function(loadAjax)
	 {
      if(!history.pushState)
	   {
		historyX.Url=location.href;
		historyX.interval=setInterval(function(){
		  if(location.href!=historyX.Url)
		   {
			historyX.callBackAjax.call(null,historyX.loc.href.replace('#',""));
			historyX.Url=location.href;
		   }
		},100);
	   }
	   else	historyX.callBackAjax.call(null,this.loc.href);	
	 },
   clickFunc:function(event)
	{ 
	 var button=false;
	 clearInterval(historyX.interval);
	 event = event||window.event;
	 historyX.Url=location.href;
	 var target=event.target||event.srcElement;
	 if (event.which == null) button= (event.button < 2);
	 else button= (event.which < 2);
	 if(button){ 
     	if(!target.getAttribute('data-ajax'))
		 {
	  		if(target.parentNode.getAttribute('data-ajax')) target=target.parentNode;
      		else if(target.parentNode.parentNode.getAttribute('data-ajax')) target=target.parentNode.parentNode;
	 	 }
    	if( target.getAttribute('data-ajax'))
	 	 { 
      		 if (event.preventDefault) event.preventDefault();
       		else event.returnValue=false; 
	    	if(!history.pushState)
			 {
		 		 location.hash=target.name;
		 		 historyX.callBackAjax.call(null,window.location.href.replace('#',""));
		 	 }
	    	else history.pushState(null, null, target.href);
	    	historyX.changeUrl();
	     }
	  }
    } 
};
