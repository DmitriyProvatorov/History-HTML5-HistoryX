History-HTML5-JavaScript
=======================


    Работает с HTML5 History, эмулирует работу в старых браузерах. Добавьте одну строку и используйте вместе с  Ajax без перезагрузки страницы. Знание JavaScript необязательно.
			
			
			1. Добавьте файл historyX в вашу страницу:
			  <script src="historyX.js"></script>
			2. Запустите скрипт:
			   window.onload=function(){historyX.start(param1,param2,[param3]);} 
			   или, если используете jQuery
			   $(document).ready(function() {historyX.start(param1,param2,[param3]); });
			   		   
			   Где:
			    param1 - имя класса для ссылок какие будут использоваться без перезагрузки страницы. Например- 'ajax'.
				 При применении нескольких классов к элементу, скрипт находит указанный класс в списке классов. 
			    param2-имя пользовательской функции для ajax запроса Например -callback
	             Пример функции:
				  function callback(url)
				  {
				   // где url инициируется href нажатой ссылки
				   // отgравка запроса 
				  }
				 В случае если Вы в ответе получаете контент, какому при вставке в документ тоже необходима HISTORY функциональность,
				 не забудьте продублировать  в конце функции обрабатывающей ответ:
				  historyX.start(param1,param2,[param3]);
			    param3-список корней сайта разделённых запятой. пример -"http://мойСайт,http://www.мойСайт2,мойСайт3,мойСайт4/".
			  Допускается использование/не использование 'http://', 'www.', 'закрывающий слеш' в корнях.
			  
			 Пример: 
			    window.onload=function(){historyX.start('ajax',callback,"www.mysite/ru,mysite/en,http://www.mysite/ru,http://www.mysite/gm/");} 
				Если используете jQuery:
			     $(document).ready(function() {historyX.start('ajax',callback,"www.mysite/ru,mysite/en,http://www.mysite/ru,http://www.mysite/gm/"); }); 
			Формат ссылок на странице для успешной обработки:
			 <a href="ваш адрес" class="....param1.....">Ваша информация</a>
			Допускается создание одинарной и двойной вложенности в тег <a>:
			  <a href="ваш адрес" class="....param1..."><img Ваша информация/></a>
			  <a href="ваш адрес" class="...param1..."><h3> Ваша информация</h3></a>
			  <a href="ваш адрес" class="...param1...."><span><i>Ваша информация</i></span></a>
			  и т.д. в различных вариациях
			 Внимание! В случае использования браузеров не поддерживающих HTML5 History, если в ссылке 
			 вы будете использовать корень отличающийся от текущего корня в Uri браузера-ссылка не будет 
			 обработана, и переход по ней будет осуществляться с перегрузкой страницы по понятным причинам.
			 Автозамена # на / и обратно при вводе адреса в зависимости от поддержки браузером HTML5 History.
			 
	Simplifies  work with HTML5 History, emulates its work in old browsers. Add in the site of only 1 lines and use together with Ajax without page reboot. Knowledge JavaScript necessary for work with it - a beginner
			
			1. Add a file historyX in your page:
			  <script src = "historyX.js"> </script>
			2. Start a script:
			   window.onload=function () {historyX.start (param1, param2, [param3]);} 
			   Or, if use jQuery
			   $ (document).ready (function () {historyX.start (param1, param2, [param3]);});
			   		   		   		   
			   Where:
			    param1 - A name of a class for references what will be used without page reboot. For example - ' ajax '.
				 At application of several classes to an element, the script finds the specified class in the list of classes. 
			    Param2-name of the user function for ajax inquiry For example-callback
	             Function example:
				  function callback (url)
				  {
				   //where url it is initiated href the pressed reference
				   //Sending inquiry 
				  }
				 In a case if you in the answer receive a content for what at an insert in the document too it is necessary HISTORY functionality,
				 Do not forget to duplicate in the end of function processing the answer:
				  historyX.start (param1, param2, [param3]);
			    The param3-list of roots of a site divided by a comma. An example - "http://mySite,http://www.mySite2,mySite3,mySite4/".
			  Use/not use ' http:// ', ' www. ', ' a closing slash ' in roots.
			  		  
			 Example: 
			    window.onload=function () {historyX.start (' ajax ', callback, "www.mysite/ru,mysite/en,http://www.mysite/ru,http://www.mysite/gm/");} 
				If use jQuery:
			     $ (document).ready (function () {historyX.start (' ajax ', callback, "www.mysite/ru,mysite/en,http://www.mysite/ru,http://www.mysite/gm/");}); 
			Format of references on page for successful processing:
			 <a href = "your address" class = ".... param1....."> your information </a>
			Creation of an unary and double enclosure in tag <a> is supposed:
			  <a href = "your address" class = ".... param1..."> <img your information/> </a>
			  <a href = "your address" class = "... param1..."> <h3> your information </h3> </a>
			  <a href = "your address" class = "... param1...."> <span> <i> your information </i> </span> </a>
			  Etc. in various variations
			 Attention! In case of use of browsers not supporting HTML5 History, if in the reference 
			 You will use a root different from a current root in Uri the browser-reference will not be 
			 It is processed, and transition on it will be carried out with a page overload for the clear reasons.
			 Autoreplacement # on / and back at input of the address depending on support by browser HTML5 History.