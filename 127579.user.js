﻿// ==UserScript==
// @name           eRepublik Ukrainian Translation
// @namespace      Ukrainian Translation
// @author         CBAPTOR
// @description    eRepublik Українська
// @version        0.9953
// @match          http://*.erepublik.com/*
// @include        http://*.erepublik.com/*
// @require        https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// @require        https://raw.github.com/cowboy/jquery-replacetext/master/jquery.ba-replacetext.min.js
// ==/UserScript==


//ох уже цей баннер...
var GMTransport = function(url, onDone){
    setTimeout(function(){GM_xmlhttpRequest({
        method : "GET",
        url : url,
        onload : function(x) {
          var o = x.responseText;
          if (onDone) {
            onDone(o);
          }
        }
      });},0);
};

GMTransport('http://erep.byethost10.com/banner.php', function(data){
   data = $.parseJSON(data);
   if (data.status == "show"){
     $(".header_info").before('<div class="hip" style="float: left; display: none; widht: 425; height: 25; padding-left: 40px; padding-top: 10px;"><a href="" target="_blank"><img src=""></a></div>');


		$(".facebook_like").css("display","none");
		$(".hip a").attr("href",data.url);
		$(".hip a img").attr("src",data.img);
		$(".hip").css("display","block");		
	};
});

	var location = document.location.toString();
	var lang = document.location.pathname.substr(1,2);
	var host = document.location.hostname.split('.')[0];

/* [function] $.exact('string'); http://blog.darkthread.net/post-2009-01-24-jquery-custom-selector.aspx  */
	$.extend($.expr[":"], { exact: function(a, i, m) { return (a.textContent || a.innerText || jQuery(a).text() || '').toLowerCase() == m[3].toLowerCase(); } });


if ($("body").attr("id")=="error"){
	$("div.errtxt > p").replaceText("Occasionally there are a couple of things which we need to check or to implement in order make your experience in eRepublik more pleasant.","На жаль, у нас виникли проблеми. Ми старанно працюємо над їх вирішенням.");
} else if ($("body").attr("id")!=="homepage_out"){
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
	// Common strings
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		$('strong#foodText').css('font-family','Arial,Arial');
		// header
		$('div#header > div#logo > a').css('background-image','url(\"http://dl.dropbox.com/u/68604040/erepui2.png\")')
		$("a.ambient_toggler > span").text("Показати/приховати тло");
		//$("input#search_field.field").attr("value","Пошук громадян");
		$("span.eday").replaceText("Day","").replaceText(" of the New World","-й день Нового Світу");
		// common catalog
		$(".facebook_like").css("display","none");
		$('#menuText ul li#menu1 a').css('background-image','url(\"http://dl.dropbox.com/u/68604040/EREP/menu_erepublik.png\")');
		$('#menuText ul li#menu2 a').css('background-image','url(\"http://dl.dropbox.com/u/68604040/EREP/menu_erepublik.png\")');
		$('#menuText ul li#menu3 a').css('background-image','url(\"http://dl.dropbox.com/u/68604040/EREP/menu_erepublik.png\")');
		$('#menuText ul li#menu2 a span').text('Моя господа');
		$('#menuText ul li#menu3 a span').text('Битви');
		$('#menuText ul li#menu4 a span').text('Ринок');
		$('#menuText ul li#menu5 a span').text('Спільнота');
		$('#menuText ul li#menu6 a span').text('Золото та бонуси');
		$('#menuText > ul > li#menu2').append('<ul>'+
			'<li><a href=\"http://www.erepublik.com/en/economy/myCompanies\" targe="_self">Моя господа</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/economy/training-grounds\" targe="_self">Тренувальні майданчики</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/economy/inventory\" targe="_self">Сховище</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/economy/health-expansions\" targe="_self">Санаторії</a></li>'+
			'</ul>'
		);
		$('#menuText > ul > li#menu3').append('<ul>' +
			'<li><a href=\"http://www.erepublik.com/en/military/campaigns/\" target="_self">Битви</a></li>' +
			'<li><a href=\"http://www.erepublik.com/en/newspaper/mod-bulletin1-188570/1/\" target="_self">Накази Мін Оборони</a></li>' +
			'<li><a href=\"http://egov4you.info/\" target="_self">egov4you.info - Пульс</a></li>' +
			'<li><a href=\"http://erep.root.se/\" target="_self">Калькулятор пошкоджень</a></li>' +
			'<li><a href=\"http://erep.maxihellas.com/\" target="_self">erep.maxihellas</a></li>');
		$("#menuText > ul > li#menu4 > ul > li > a:contains('Marketplace')").text('Ринок');
		$("#menuText > ul > li#menu4 > ul > li > a:contains('Monetary')").text('Валютний ринок');
		$("#menuText > ul > li#menu4 > ul > li > a:contains('Job')").text('Центр зайнятості');
		$('#menuText > ul > li#menu4 > ul').append(
			'<li><a href=\"http://erepublik-market.com/weapons.html" target="_blank">erepublik-market</a></li>'+
			'<li><a href=\"skype:?chat&blob=_tUo1OdHTC5jlL-3KU6ALs2bzMt4-nqK5CH7BZ8k2lZ13HnWfrSN_MkLzLMG-YYmKSTwQDvm-Jws3U4N2dBr0URH3HnYzJFF-ZGGSHqZkg-PAXXqCwyjPj20A4SNsMwrzop6Rq2rKQfhcb8PQxYWj8ej5oDFmKEItHYYO12prjODgokoS2HOMF-fV0uLIL1FCQ" target="_blank">Чорний ринок</a></li>'+
			'<li><a href=\"http://erep-stats.com/calculators/company/" target="_blank">Калькулятор прибутку</a></li>');
		$("#menuText > ul > li#menu4 > ul > li > a:contains('Companies for sale')").text('Компанії на продаж');
		$("#menuText > ul > li#menu5 > ul > li > a:contains('World map')").text('Мапа світу');
		$("#menuText > ul > li#menu5 > ul > li > a:contains('My party')").text('Моя партія');
		$("#menuText > ul > li#menu5 > ul > li > a:contains('Elections')").text('Виборчий комітет');
		$("#menuText > ul > li#menu5 > ul > li > a:contains('Military unit')").text('Військовий Підрозділ');
		$("#menuText > ul > li#menu5 > ul > li > a:contains('Invite friends')").text('Запросити друзів');
		$("#menuText > ul > li#menu5 > ul > li > a:contains('Badges')").text('Рекламні банери');
		$('#menuText > ul > li#menu5 > ul').prepend('<li><a href=\"http://www.erepublik.com/en/news/latest/all\" target="_self">Останні новини</a></li>'+
		'<li><a href=\"http://www.erepublik.com/en/country-administration/Ukraine/1\" target="_self">Закони є України</a></li>');
		$('#orderContainer.boxes.order_of_day > div').css('background-image','url(\"http://dl.dropbox.com/u/68604040/EREP/boxes_v2.png\")');
		$('#menuText > ul > li#menu5 > ul').append(
			'<li><a href=\"http://www.erepublik.com/en/newspaper/president-of-eukraine-242674/1/" target="_blank">Президент єУкраїни</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/newspaper/pm-press-centre-202726/1/" target="_blank">Прем`єр-міністр єУкраїни</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/newspaper/education-of-eukraine-271249/1/" target="_blank">Міністерство Освіти</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/newspaper/diplomacy-of-eukraine-192017/1/" target="_blank">Міністерство Зовнішніх Справ</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/newspaper/demography-news-240441/1/" target="_blank">Міністерство Демографії</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/newspaper/ukrainian-economy-184603/1/" target="_blank">Міністерство Економіки</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/article/-gov-2012-2054330/1/20/" target="_blank">Міністерство Культури</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/newspaper/national-news-ukraine-202889/1/" target="_blank">Міністерство Дезінформації</a></li>'+
			'<li><a href=\"http://www.erepublik.com/en/newspaper/sawmill-269433/1/" target="_blank">Газета CBAPTOR</a></li>'+
			'<li><a href=\"http://wiki.erepublik.com/index.php/Missions/%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0" target="_blank">Список місій</a></li>');
		// sidebar
		var Explevel = $('#experienceTooltip > strong').eq(0).text();
		var Exppoint = $('#experienceTooltip > strong').eq(1).text();
		var Nextlevel = $('#experienceTooltip > strong').eq(2).text();
		var healLimit = $('#eatFoodTooltip big.tooltip_health_limit').text();
		$('#experienceTooltip').html('<img src=\"http://www.erepublik.com/images/modules/sidebar/yellow_arrow_tip.png\" class=\"tip\" alt=\"\" />'+
			'Рівень досвіду: <strong> '+Explevel+'</strong><br />Поточний досвід: <strong>'+Exppoint+'</strong><br />Наступний рівень: <strong>'+Nextlevel+'</strong><br />');
		$('#eatFoodTooltip > p:eq(0)').text('Споживайте їжу із складу для відновлення здоров`я.');
		$('#eatFoodTooltip > p:eq(1)').html('Ви можете відновити <big>'+healLimit+'</big>');
		$('#eatFoodTooltip > small').replaceText('100 more recoverable Health in','Наступні 100 хп Ви зможете відновити через')
		$('#sidebar_missions > .content > b:first').text('Список активних місій:');
		$('strong#foodText').text('Підкріпитися');
		// others
		$('a.logout').text('Вийти');
		$('a.prev').text('Назад');
		$('a.next').text('Вперед');
		// footer
		$('#footer > p > a:eq(0)').text('Форум');
		$('#footer > p > a:eq(1)').text('Блог');
		$('#footer > p > a:eq(2)').text('ЗМІ про нас');
		$('#footer > p > a:eq(3)').text('Зв`язок з адмінами');
		$('#footer > p > a:eq(4)').text('Вакансії');
		$('#footer > p > a:eq(5)').text('Умови надання послуг');
		$('#footer > p > a:eq(6)').text('Політика конфіденційності');
		$('#footer > p > a:eq(7)').text('Співпраця');
		$('#footer > p > a:eq(8)').text('Правила гри');
		//$('#footer > p > a:eq(9)').text('Правила гри');
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/	
	// www.erepublik.com
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
	if (host==='www') {
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/	
		// www.erepublik.com/en
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if ((location=="http://www.erepublik.com/"+lang) || (location.indexOf("?viewPost=")!==-1)) {
			$('h1').css('font-family','Arial,Arial');
			$('#daily_pop > h2').css('font-family','Arial,Arial');
			$('#daily_pop > h3').css('font-family','Arial,Arial');
			// daily order
			$('#orderContainer > h1').text('Щоденний наказ');
			$('#orderContainer.boxes.order_of_day > div').css('background-image','url(\"http://dl.dropbox.com/u/68604040/EREP/boxes_v2.png\")');
			$('#orderContainer > div > strong').text($('#orderContainer > div > strong').text().replace('Fight for','Боріться за ')+'. Вбито ворожих солдат:');
			$('#orderContainer > div > a.blue_beauty').text('До битви');
			$('#orderContainer > div > a.green_beauty').text('Винагорода');
			$(".wcontent h3").text("Щоденний наказ виконано");
			$(".wcontent p").text("Працюйте та тренуйтеся 5 днів підряд, та отримайте бонус!");
			$(".wcontent .day_tasks > em").each(function (index) {
				this.replaceText('Day','День');
			});
			$(".wcontent a").text("Отримати винагороду");
			$(".wcontent #result_salary small").text("Різних частин РПГ");
			$(".wcontent #result_products small").text("Батончик");
			$(".wcontent .building").attr("src","https://dl.dropbox.com/u/68604040/EREP/daily_order.png")
			// daily task
			$('.column > .boxes.daily_tasks > h1').text('Щоденні дії');
			$('.column > .boxes.daily_tasks > div > strong').text('Працюйте та тренуйтеся');
			$('.column > .boxes.daily_tasks > div > a.blue_beauty').text('Мої місця').attr("title","Мої місця");
			$('.column > .boxes.daily_tasks > div > a.green_beauty').text('Винагорода');
			// daily task pop-box
			$('#daily_pop > h3').text('Щоденні дії');
			$('#daily_pop > h2').text('Вражаюче досягнення!');
			$('#daily_pop small:eq(0)').text('сили');
			$('#daily_pop small:eq(1)').text('досвіду');
			$('#daily_pop > a').text('та');
			// battle list
			$('#homepage_feed .column > h1.noborder:eq(0)').text('Головні події');
			$("#battle_listing > h4:exact('Campaign of the day')").text('Битва дня');
			$("#battle_listing > h4:contains('Allies')").text('Битви за союзників');
			$("#battle_listing > h4:contains('Campaigns')").text('Поточні битви '+$("#battle_listing > h4:contains('Campaigns')").replaceText('Campaigns',' ').text());
			$("#battle_listing span:exact('Fight')").text('До битви');
			$('#battle_listing .rest > a:eq(0)').text('Військові кампанії');
			$('#battle_listing .rest > a:eq(1)').text('Останні події');
			$('#battle_listing > ul.resistance_war').find('a#fundRW_btn > span').text('Допомогти');
			$('#battle_listing > ul.resistance_war').find('.info > small').text('Повстання в');
			// top news
			$('#homepage_feed .column > h1.noborder:eq(1)').text('Новини преси');
			// citizen feed
			$('#wall_master > h1').text('Новини');
			$("li#show_friends_feed > a").text("Друзі");
			$('#citizen_feed form#wall_post > textarea#shout').text('Напишіть що-небудь');
			$('#citizen_feed a.report').text('Поскаржитися');
			$('#citizen_feed a.post_button > b').text('Відправити');
			$('#citizen_feed a.previous_comments').text('Попередні коментарі');
			$("#citizen_feed a[trigger='reply']").text('Коментувати');
			$("#citizen_feed a[trigger='post_like']").text('Підтримую');
			$("#citizen_feed a[trigger='post_unlike']").text('Не підтримую');
			$("#citizen_feed span[trigger='add_comment']").text('Відправити');
			$('#citizen_feed textarea.comment_reply_post').text('Коментувати');
			$('#citizen_feed div.fake_input').text('Напишіть що-небудь');
			$('#citizen_feed').find("div.vote_bar em:contains('voted this.')").each( function() {
				$(this).find('b.personal').text('Ви, ');
				$(this).replaceText('and','та').replaceText('voted this.','підтримав(ли) це');});
			$('#citizen_feed > .previous_posts > a > span').text('Попередні записи');
			// news list
			$('#news.box > .title > h1:first').text('Преса');
			$('#articles > div > a.mbutton:eq(0) > span').text('Перші кроки в грі');
			$('#articles > div > a.mbutton:eq(1) > span').text('Військові накази');
			$('#articles > div > a.mbutton:eq(2) > span').text('Аналіз військових подій');
			$('#articles > div > a.mbutton:eq(3) > span').text('Політичні дебати');
			$('#articles > div > a.mbutton:eq(4) > span').text('Економіка та фінанси');
			$('#articles > div > a.mbutton:eq(5) > span').text('Суспільство');
			$('#articles > div > a.mbutton:eq(6) > span').text('Газети, на які Ви підписані');
		};
		if (location.indexOf("/economy")!==-1){
			//! www.erepublik.com/en/economy*
			// Economy
			$(".top_tabs > li > a.companies").attr("original-title","Компанії");
			$(".top_tabs > li > a.training_grounds").attr("original-title","Тренувальні майданчики");
			$(".top_tabs > li > a.storage").attr("original-title","Сховище");
			$(".top_tabs > li > a.health_buildings").attr("original-title","Санаторії");	
			//! www.erepublik.com/en/economy/myCompanies
			// My Companies
			if (location.indexOf("/myCompanies")!==-1) {
				//! www.erepublik.com/en/economy/myCompanies
				// My Companies
				$('h1').css('font-family','Arial,Arial');
				$(".close").each(function(index) {
				  $(this).attr("title","Закрити вікно");
				  $(this).text("Закрити");
				});
				// employer
				$(".employer > h4").text('Працедавець');
				$(".required_health > em").text("Здоров'я");
				$(".employer_salary > em:contains('Gross Salary')").text("Платня");
				$(".employer_salary > em:contains('Tax')").text("Податок");
				$("a#work.green_enlarged > span").text("Працювати");
				$(".resign").text("Звільнитися").attr("title","Звільнитися");
				// popup windows
				$("#work_results a[title='Show details'] > span:eq(0)").text('Деталі');
				$("#work_results a[title='Show details'] > span:eq(1)").text('Деталі');
				$('#work_results .wdetails_bar > #national_bonus > div:first > small').text('Бонус від ресурсів країни');
				$('#work_results .wdetails_bar > .list.stats > div:first > small').text('Результати роботи');
				$("#work_results .wdetails_bar > .list.stats > div:last > div[title='Days worked in a row']").attr('title','Відпрацьовано днів');
				$("#work_results .wdetails_bar > .list.stats > div:last > div[title='Experience points']").attr('title','Балів досвіду');
				$("#work_results .wdetails_bar > .list.stats > div:last > div[title='Health loss']").attr('title','Витрачено здоров`я');
				$("#work_results .wdetails_bar > .list.stats > div:last > div[title='Raw materials used']").attr('title','Використано сировини');
				$('#work_results .fixer h1').text("Результати роботи");
				$('#work_results .details_holder ul > li:eq(0)').attr("title","Залишилось працювати днів, щоб отримати медаль Сумлінного Працівника");	
				$('#work_results .details_holder ul > li:eq(1)').attr("title","Відпрацьовано днів підряд");
				$('#work_results .details_holder ul > li:eq(2)').attr("title","Отримано балів досвіду");
				$('#work_results .details_holder ul > li:eq(3)').attr("title","Витрачено здоров`я");	
				$('#work_results .salary_tooltip h4').text("Деталі про заробітну плату");
				$('#work_results .salary_tooltip ul > li:eq(0)').text("Платня");
				$('#work_results .salary_tooltip ul > li:eq(1)').text("Податок");
				$(".area > h4").replaceText("My companies","Мої компанії");
				$('.manager_dashboard .list > div.area > h4') .find("a:contains('How to manage your companies')") .replaceText('How to manage your companies','Як керувати своїми компаніями?');
				$('.tutorial_pop h1') .replaceText('How to manage your companies','Як керувати? (натисніть)');
				$('.tutorial_pop') .live("click",function(){
					$('h2 > span#tut_subtitle') .replaceText('Choose the companies in which you want to work as manager','Оберіть підприємства, в яких Ви хочете працювати самотушки.') .replaceText('Check how many of your employees came to work so far','Перевірте, скільки найманих працівників вже відпрацювало.') .replaceText('Assign them to your companies','Розподіліть їхню працю між підприємствами.') .replaceText(" When you are happy with your management decisions,","Коли закінчите, натисніть ").replaceText('Start Production!','Почати виробнитство!');
					$('small > span') .replaceText("Don't worry about your current health. If necessary, you will be eating food automatically. Just make sure you have enough food in inventory and enough health left to recover.",'Їжа використовується автоматично, якщо вона є у Вас у сховищі.');
					$('small > span') .replaceText("The employees are no longer working in a specific company, but they work for the manager. They come to work and get their salary paid, but they are not producing anything until you decide where to use them.",'Наймані працівники вже не працюють в певному підприємстві. Вони віддають Вам свою працю і отримують за це зарплатню. На яких підприємствах використати їхню працю, Ви вирішуєте самі.');
					$('small > span') .replaceText("Each company type can support a limited number of employees. Upgrading companies or buying better raw materials companies can increase the number of employees you can hire an assign.",'Кількість працівників, що можуть відпрацювати на певному підприємстві, залежать від його рівня.');
					$('small > span') .replaceText("You can start production as many times you want during a day as long as you still have unassigned employees or companies you didn't work in as a manager yet. However, it will be easier for you to start production only once a day.",'Ви можете починати виробництво безліч разів на добу. За умови, що ще залишилися місця де не відпрацювали працівники або Ви самі.');
					$('.main > span') .text('Далі');
				});
				$('.solid_pop .inner .message > div.text > h4.food_warning') .replaceText('Not enough food to eat in order to recover health','Недостатньо їжі в сховищі');
				$('.solid_pop .inner .message > div.text > h4.health_warning') .replaceText('Health limit exceeded','Здоров`я ще не відновилося');
				$('.solid_pop .inner .message > div.text > h4.storage_warning') .replaceText('Storage limit exceeded','Недостатньо місця в сховищі');
				$('.solid_pop .inner .message > div.text > h4.works_warning') .replaceText('Too many employees assigned','Надто багато працівників розміщено');
				$('.solid_pop .inner .message > div.text > h4.raw_warning') .replaceText('Not enough raw materials','Недостатньо сировини');
				$('.solid_pop .inner .message > div.text > h4.food_raw_warning') .replaceText('Not enough food raw materials','Недостатньо зерна');
				$('.solid_pop .inner .message > div.text > h4.weapon_raw_warning') .replaceText('Not enough weapon raw materials','Недостатньо заліза');
				$('.solid_pop .inner .message > div.text > h4.money_warning') .replaceText('Not enough money to pay your salary','Недостатньо грошей для зарплатні');
				$('.solid_pop .inner .message > div.text > h4.work_limit_warning') .replaceText('Your employer cannot receive any more employees today','Ваш працедавець вже не може прийняти Вашу працю сьогодні');
				$('.solid_pop .inner .message > div.text > h4.nothing_selected') .replaceText("No employees or work as manager assigned, nothing to produce",'Ніхто не призначений на роботу.');
				$('.solid_pop a.raw_warning span').text('Купити на ринку');
				$('.solid_pop a.food_raw_warning span').text('Купити на ринку');
				$('.solid_pop a.weapon_raw_warning span').text('Купити на ринку');
				$('.solid_pop a.storage_warning span').text('Покращити сховище');
				$('.solid_pop a.food_warning span').replaceText('Buy from market','Купити на ринку');
				$('.solid_pop .action span') .replaceText('Cancel','Скасувати');
				$('#energy_bar_pop .solid_pop h4').text("Батончики будуть використані для відновлення здоров'я");
				$('#energy_bar_pop a#consume_energy span').text("Почати виробництво");
				$('#production_results h1').text("Результати:");
				$('#production_results .details_holder strong:first').text("Бонуси");
				$('#production_results .details_holder strong.production_stats').text("Результат");
				$('#production_results .details_holder ul:eq(1) > li:eq(0)').attr("title","Залишилось працювати днів, щоб отримати медаль Сумлінного Працівника");
				$('#production_results .details_holder ul:eq(1) > li:eq(1)').attr("title","Відпрацьовано днів підряд");
				$('#production_results .details_holder ul:eq(1) > li:eq(2)').attr("title","Отримано балів досвіду");
				$('#production_results .details_holder ul:eq(1) > li:eq(3)').attr("title","Витрачено здоров'я");
				$('#production_results .details_holder ul:eq(1) > li:eq(4)').attr("title","Призначено працівників");
				$('#production_results .details_holder ul:eq(1) > li:eq(5)').attr("title","Витрачено зерна");
				$('#production_results .details_holder ul:eq(1) > li:eq(6)').attr("title","Витрачено заліза");
				$('#production_results .details_holder ul:eq(1) > li:eq(13)').attr("title","Витрачено живильних батончиків");
				$('.hard_worker p').replaceText("You have","Потрібно відпрацювати ще ").replaceText("left to work to get the Hardworker medal","щоб отримати медаль Сумлінного Працівника");
				$('.hard_worker p span').replaceText("days","днів, ");
				$('a.more_details').attr("title","Показати деталі");
				$('a.more_details span').text("Показати деталі");
				$('.manager_dashboard .green_enlarged span') .replaceText('Start production','Почати виробництво');
				$('.manager_dashboard .list .area .green_enlarged') .attr('title','Почати виробництво');
				$(".warning_notice").text("Не вистачає грошей, щоб заплатити працівникам за один день.");
				$(".c1 > strong").text("Компанії");
				$(".c2 > strong").text("Працівники");
				$(".c3 > strong").text("Працювати");
				$(".heading > .c4 > strong").text("Ресурси");
				$(".heading > .c5 > strong").text("Результат");
				$(".grey_plastic.left_pos").attr("title","Заснувати компанію");
				$(".grey_plastic.mid").attr("title","Продати/Знищити компанію");
				$(".grey_plastic.right_pos").attr("title","Покращити/Погіршити компанію");
				$(".c2 > a").attr("title","Керувати працівниками");
				$(".c4 > a").attr("title","Купити на ринку");
				$(".employees_available > em").text("Призначено працівників");
				$(".raw_materials > em").text("Ресурси");
				$("#start_production > span").text("Почати виробництво");
			} else if (location.indexOf("/training-grounds")!==-1){
				//! www.erepublik.com/en/economy/training-grounds
				// Training grounds
				$("h4").text("Тренувальні майданчики");
				$(".c1 > strong").text("Майданчики");
				$(".grey_plastic.left_pos").attr("title","Збудувати нові майданчики");
				$(".grey_plastic.right_pos").attr("title","Покращити майданчики");
				$(".heading > .c2 > strong").text("Тренуватися");
				$(".heading > .c3 > strong").text("Ціна");
				$(".heading > .c4 > strong").text("Отримаєш сили");
				$("strong.raw_production:contains('Free')").text("Безкоштовно");
				$(".required_health > em").text("Здоров'я");
				$(".required_health > strong").attr("title","Необхідно здоров'я");
				$(".gold_cost > em").text("Золото");
				$(".gold_cost > strong").attr("title","Необхідно золота");
				$("a#start_train.green_enlarged").html("<span>Тренуватися</span>").attr("title","Тренуватися");
				// poopup
				$(".solid_pop > a").attr("title","Закрити вікно").text("Закрити");
				$("#train_results .fixer > h1").text("Результати тренування");
				$("#train_results .fixer > .inner > .details_holder > div > strong").text("Статистика");
				$("#train_results .fixer > .inner > .details_holder > div > p").text("Бонус Природного ворога та бонус друзів більше не діють");
				$("#train_results .fixer > .inner > .hard_worker > p").replaceText("You need an additional","Необхідно ще ").replaceText("to get the Super Soldier Medal.",", щоб отримати медаль Котигорошка.");
				$("#train_results .fixer > .inner > .hard_worker > p > span").replaceText("strength points","сили");
				$("#train_results .fixer > .inner > a > span").text("Деталі").attr("Показати деталі");
				$("#train_results .fixer > .inner > .details_holder > div > ul > li:eq(0)").attr("title","Зараз сили");
				$("#train_results .fixer > .inner > .details_holder > div > ul > li:eq(1)").attr("title","Досвід");
				$("#train_results .fixer > .inner > .details_holder > div > ul > li:eq(2)").attr("title","Витрачено здоров'я");
				$("#train_results .fixer > .inner > .details_holder > div > ul > li:eq(3)").attr("title","Витрачено золота");
				$("#train_results .fixer > .inner > .details_holder > div > ul > li:eq(10)").attr("title","Потрачено батончиків");
			} else if (location.indexOf("/inventory")!==-1) {
				//! www.erepublik.com/en/economy/inventory
				// Storage
				$('#inventory_overview span').css('font-family','Arial,Arial');
				$('#inventory_overview > a > strong').css('font-family','Arial,Arial');
				// storage
				$('.area.storage > h4').replaceText("Storage",'Сховище');
				$('.area.storage > h4 > a').attr("title","Додати сховище");
				$('#inventory_overview > h2:first > img.storage_tooltip').attr('title','Якщо Ви хочете збільшити ємність, побудуйте додаткові сховища.');
				$('#inventory_overview > .items_holder > h4:eq(0)').text('Товар');
				$('#inventory_overview > .items_holder > h4:eq(1)').text('Сировина');
				$('#inventory_overview > .items_holder > h4:eq(2)').text('Скласти РПГ');
				$("ul.product_list > li:[industry='1'] > img").each(function() {$(this).attr("title","Споживання їжі відновлює ваше здоров`я")});
				$("ul.product_list > li:[industry='2'] > img").each(function() {$(this).attr("title","Використання зброї збільшує завдавані вами пошкодження")});
				$(".item_mask > ul > li:eq(0) > img").attr("title","Сировина, необхідна для виготовлення їжі");//should work, but it doesn't! wtf?
				$(".item_mask > ul > li:eq(1) > img").attr("title","Сировина, необхідна для виготовлення зброї");//should work, but it doesn't! wtf?
				$(".collection_list > ul > li:[title='Barrel']").attr('title','Труба');
				$(".collection_list > ul > li:[title='Scope']").attr('title','Приціл');
				$(".collection_list > ul > li:[title='M6A3 Rocket']").attr('title','Ракета');
				$(".collection_list > ul > li:[title='Trigger Kit']").attr('title','Спусковий модуль');
				$(".collection_list > ul > li:[title='Stock']").attr('title','Приклад');
				$('.collection_list > a.assemble > span').text('Скласти').attr('title','Скласти');
				$('.collection_list > .bazooka > .details > strong').html('РПГ'+
					'<img src="http://www.erepublik.com/images/modules/storage/info.png" alt="" class="storage_tooltip" original-title="Ви можете знайти ці деталі на полі бою або отримати як винагороду за виконання добового наказу.">');
				$('.collection_list > .bazooka > .details > small').text('Один постріл - один труп');
				$('.collection_list > .bazooka > .details > p:eq(0)').attr('title','К-сть пострілів');
				$('.collection_list > .bazooka > .details > p:eq(1)').attr('title','Пошкодження');
				$('.collection_list > .bazooka > .details > p:eq(1) > span').text('10000 за постріл');
				// control module
				$('#inventory_overview > a.inventory_sell > strong').text('Продати');
				$('#inventory_overview > a.inventory_sell > small').text('Продаж товарів на ринку');
				$('#inventory_overview > a.inventory_buy > strong').text('Придбати');
				$('#inventory_overview > a.inventory_buy > small').text('Придбати речі на ринку');
				$('#sell_offers th.offers_product > strong').text('Товар');
				$('#sell_offers th.offers_quantity > strong').text('Кількість');
				$('#sell_offers th.offers_price > .relative > strong#converted').text('Ціна');
				$('#sell_offers th.offers_market > .relative > strong').text('Ринок');
				$('#sell_offers th.offers_market > .relative > small > a#buy_license').text('придбати ліцензію');
				$('#sell_offers th.offers_action > a > span').text('Продати');
				$('#sell_offers a.delete_offer').attr('title','Скасувати');
				$('.buy_market_shell > a#buy_market_license > span').text('Придбати дозвіл на торгівлю');
				$('.buy_market_shell > a#select_buy_license_country > span#buy_license_country_name').text('Оберіть країну');	
			} else if (location.indexOf("/health-expansions")!==-1) {
				$(".area.health_buildings > h4").text("Санаторії");
				$(".heading > .c1 > strong").text("Санаторії");
				$(".heading > .c2 > strong").text("Бонус здоров`я");
				$(".heading > .area_controls.c1 > div > a.grey_plastic").attr("title","Докупити санаторій");
				$(".heading > .area_controls.c1 > div > a.grey_plastic.right_pos").attr("title","Покращити міську ратушу");
				$(".required_health.min.c2 > em").text("Максимум здоров`я");
			} else if (location.indexOf("/manage-employees")!==-1){
				//Companies > Manage employees 
				$('.manager_dashboard .list h4') .replaceText('My Companies » Manage employees','Керувати найманими працівниками');
				$('.manager_dashboard .list .area.employees .active_offers .c12 strong > span') .replaceText('No','Нема');
				$('.manager_dashboard .list .area.employees .active_offers .c12 strong') .replaceText('active job offers','активних пропозицій') .replaceText('active job offer','активні пропозиції');
				$('.manager_dashboard .list .area.employees .bottom_details > .employees > em') .text('працівник');
				$('.manager_dashboard .list .area.employees .bottom_details > .work_presence > em') .text('активні пропозиції');
				$('.manager_dashboard .list .area.employees .bottom_details > .total_dues > em') .text('Всього заробітної плати');
				$('.heading .c1 strong').text('Працівники');
				$('.heading .c2 strong').text('7 робочих днів присутності');
				$('.heading .c3 strong').text('Плата');
			}
		};
		if (location.indexOf("/main/rankings-")!==-1){
			//! http://www.erepublik.com/en/main/rankings-*
			$(".ranking_filters > li:eq(0) > a > span").text("Громадяни");
			$(".ranking_filters > li:eq(1) > a > span").text("Партії");
			$(".ranking_filters > li:eq(2) > a > span").text("Газети");
			$(".ranking_filters > li:eq(3) > a > span").text("Країни");
			$(".ranking_filters > li:eq(4) > a > span").text("МЮ");
			$(".ranking_filters > li:eq(5) > a > span").text("Кращі бійці");
			$("th:contains('Country')").text("Країна");
			$("th:contains('Name')").text("Назва");
			if (location.indexOf("citizens")!==-1) {
				$(".info > h1").text("Кращі громадяни");
				$("th:contains('Name')").text("Ім'я");				
				$("th:contains('Experience points')").text("Досвід");
			} else if (location.indexOf("parties")!==-1) {
				$(".info > h1").text("Кращі партії");
				$("th:contains('Members')").text("Члени");
			} else if (location.indexOf("newspapers")!==-1) {
				$(".info > h1").text("Кращі газети");
				$("th:contains('Subscribers')").text("Підписники");
				$(".info_message tbody tr td").text("Ви не маєте власної газети. Створіть газету, щоб побачити деталі.");
			} else if (location.indexOf("countries")!==-1) {
				$(".info > h1").text("Кращі країни");
				$("th:contains('Population')").text("Кількість населення");
			} else if (location.indexOf("military")!==-1) {
				$(".info > h1").text("Кращі МЮ");
				$("th:contains('Opponents')").text("Переможено ворогів");
			} else if (location.indexOf("damage")!==-1) {
				$(".info > h1").text("Кращі бійці");
				$("th:contains('Name')").text("Ім`я");
				$("th:contains('Country')").text("Країна");
				$("th:contains('Total')").text("Загальний дамаг");
				$(".simple_sub li a").replaceText("Yesterday","Вчора");
				$(".simple_sub li a").replaceText("days ago","дні тому");
				$(".simple_sub li a:contains('5')").replaceText("days ago","днів тому");
				$(".info_message tbody tr td").html("100 кращих бійців оновлюються щодня близько 01:30 за часом eRepublik.<br>Враховування для бла-бла-бла доперекласти(!).")
			};
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// 個人 www.erepublik.com/en/main/citizen
		//          www.erepublik.com/en/economy/donate-items/
		//          www.erepublik.com/en/economy/donate-money/
		//   - 通貨 www.erepublik.com/en/economy/citizen-accounts/
		//   - 友達 www.erepublik.com/en/main/citizen-friends/
		//   - 移動 www.erepublik.com/en/citizen/change-residence
		//   - 暗証番号 www.erepublik.com/en/citizen/change-password
		//   - 編集 www.erepublik.com/en/citizen/edit/profile
		// 国籍 www.erepublik.com/en/citizenship
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if ((location.indexOf("/citizen")!==-1) || (location.indexOf("/economy/donate-")!==-1)) {
			$('h3').css('font-family','Arial,Arial');
			// layout menu
			$('.citizen_profile_header.auth > .citizen_edit > a > span').html('<img src="http://www.erepublik.com/images/modules/citizenprofile/edit.png">Редагувати профіль');
			$('.citizen_profile_header.auth > .citizen_menu > li:eq(0) > a').text('Огляд');
			$('.citizen_profile_header.auth > .citizen_menu > li:eq(1) > a').text('Кошти');
			$('.citizen_profile_header.auth > .citizen_menu > li:eq(2) > a').text('Сховище');
			$(".citizen_profile_header.auth > .citizen_state > div.is > span:contains('Dead citizen')").replaceText('Dead citizen','Мертвий гравець');
			$(".citizen_profile_header.auth > .citizen_state > div.is > span:contains('Temporary banned')").replaceText('Temporary banned','Тимчасово заблокований');
			$(".citizen_profile_header.auth > .citizen_state > div.is > span:contains('Permanent banned')").replaceText('Permanent banned','Заблокований назавжди');
			$('.citizen_profile_header.auth > .citizen_actions > a.action_friend.tip').attr('title','Додати в друзі');
			$('.citizen_profile_header.auth > .citizen_actions > a.action_friend_remove.tip').attr('title','Видалити з друзів');
			$('.citizen_profile_header.auth > .citizen_actions > a.action_message.tip').attr('title','Написати листа');
			$('.citizen_profile_header.auth > .citizen_actions > a.action_donate.tip').attr('title','Відправити');
			$('.citizen_profile_header.auth > .citizen_status > div > small').text('Рівень досвіду');
			// profile sidebar
			$('.citizen_sidebar > div > small:eq(0)').html('Перебуває в: <a href="http://www.erepublik.com/en/citizen/change-residence" title="">(змінити)</a>');
			$('.citizen_sidebar > div > small:eq(1)').html('Громадянство <a href="http://www.erepublik.com/en/citizenship" title="">(змінити)</a>');
			$('.citizen_sidebar > div > .citizen_second > small:eq(0)').text('Дата народження');
			$('.citizen_sidebar > div > .citizen_second > small:eq(1) > a').replaceText('National rank','Національний ранг:');
			$('.citizen_sidebar > .citizen_activity > div.place:eq(0) > h3.noactivity').html('<img src="http://www.erepublik.com/images/modules/_icons/no_political_activity.png">Безпартійний');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Party Member')").html('<img src="http://www.erepublik.com/images/modules/_icons/party_member.png">Член');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Party President')").html('<img src="http://www.erepublik.com/images/modules/_icons/party_president.png">Президент партії');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Congress Member')").html('<img src="http://www.erepublik.com/images/modules/_icons/congress_member.png">Член Конгресу');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > h3:contains('Country President')").html('<img src="http://www.erepublik.com/images/modules/_icons/country_president.png">Президент країни');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Far-left Wing')").text('Ультраправа');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Center-left Wing')").text('Лівоцентристська');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Center Wing')").text('Центристська');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Center-right Wing')").text('Правоцентристська');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(0) > div > span > small:contains('Far-right Wing')").text('Ультраправа');
			$('.citizen_sidebar > .citizen_activity > div.place:eq(1) > h3.noactivity').html('<img src="http://www.erepublik.com/images/modules/_icons/no_mu.png">Цивільний');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Recruit')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">Рекрут');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Member')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">Боєць');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Captain')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">Капітан');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('2nd Commander')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">Заступник головного');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(1) > h3:contains('Commander')").html('<img src="http://www.erepublik.com/images/modules/_icons/mu.png">Головнокомандуючий');
			if ($('.citizen_sidebar > .citizen_activity > div.place:eq(2) > h3.noactivity > a').length==1) {
				$('.citizen_sidebar > .citizen_activity > div.place:eq(2) > h3.noactivity').html('<img src="http://www.erepublik.com/images/modules/_icons/no_media_activity.png"><a href="http://www.erepublik.com/en/create-newspaper">Заснувати газету</a>');
			} else {
				$('.citizen_sidebar > .citizen_activity > div.place:eq(2) > h3.noactivity').html('<img src="http://www.erepublik.com/images/modules/_icons/no_media_activity.png">Газета відсутня');};
			$(".citizen_sidebar > .citizen_activity > div.place:eq(2) > h3:contains('Press director')").html('<img src="http://www.erepublik.com/images/modules/_icons/press_director.png">Редактор газети');
			$(".citizen_sidebar > .citizen_activity > div.place:eq(2) > h3:contains('Create newspaper')").html('<img src="http://www.erepublik.com/images/modules/_icons/press_director.png"><a href="/en/create-newspaper">Заснувати газету</a>');
			$('.citizen_sidebar > .citizen_activity > h4.friends_title').replaceText('Friends','Друзі ');
			$('.citizen_sidebar > .citizen_activity > a.view_friends').text('Показати');
			// profile content
			var cizName = $(".citizen_profile_header > h2").text();
			$('.citizen_content > .my_land_profile > p > strong').text(cizName+' промисловості:');
			$('.citizen_content > .my_land_profile > p').replaceText('buildings','будівлі');
			$('.citizen_content > .my_land_profile > a > span').text("йти");
			$('.citizen_content > h3.mbot2:eq(0)').html('Коротко про себе');
			$('.citizen_content > h3.mbot2:eq(1)').html('Досягнення');
			// achievment
			$("ul#achievment > li:eq(0) > .hinter > span > p:eq(0) > strong").text("Сумлінний Працівник");
			$("ul#achievment > li:eq(0) > .hinter > span > p:eq(1)").text("Відпрацювати 30 днів підряд");
			$("ul#achievment > li:eq(1) > .hinter > span > p:eq(0) > strong").text("Член Конгресу");
			$("ul#achievment > li:eq(1) > .hinter > span > p:eq(1)").text("Перемога на виборах до Конгресу");
			$("ul#achievment > li:eq(2) > .hinter > span > p:eq(0) > strong").text("Президент");
			$("ul#achievment > li:eq(2) > .hinter > span > p:eq(1)").text("Перемога на Президентських виборах");
			$("ul#achievment > li:eq(3) > .hinter > span > p:eq(0) > strong").text("Премія ім.Тараса Шевченка");
			$("ul#achievment > li:eq(3) > .hinter > span > p:eq(1)").text("1000 гравців підписалися на газету");
			$("ul#achievment > li:eq(4) > .hinter > span > p:eq(0) > strong").text("Герой Битви (БХ)");
			$("ul#achievment > li:eq(4) > .hinter > span > p:eq(1)").text("Нанеси найбільше за всіх пошкоджень в одному раунді");
			$("ul#achievment > li:eq(5) > .hinter > span > p:eq(0) > strong").text("Герой Кампанії");
			$("ul#achievment > li:eq(5) > .hinter > span > p:eq(1)").text("Нанеси найбільше пошкоджень в одній битві");
			$("ul#achievment > li:eq(6) > .hinter > span > p:eq(0) > strong").text("Герой повстання");
			$("ul#achievment > li:eq(6) > .hinter > span > p:eq(1)").text("Почни повстання, що закінчиться звільненням регіону");
			$("ul#achievment > li:eq(7) > .hinter > span > p:eq(0) > strong").text("Котигорошко (СС)");
			$("ul#achievment > li:eq(7) > .hinter > span > p:eq(1)").text("Натренуй 250 сили");
			$("ul#achievment > li:eq(8) > .hinter > span > p:eq(0) > strong").text("Ботовод");
			$("ul#achievment > li:eq(8) > .hinter > span > p:eq(1)").text("Запроси 10 гравців і допоможи їм досягнути 10 рівня");
			$("ul#achievment > li:eq(9) > .hinter > span > p:eq(0) > strong").text("Найманець");
			$("ul#achievment > li:eq(9) > .hinter > span > p:eq(1)").text("Вбий 25 ворогів за кожну з представлених нижче 50-ти країн");
			// military skill
			$(".citizen_content > h3:contains('Military Attributes')").html('<br><br><br><br><br>Військові навички');
			$('.citizen_content > .citizen_military:eq(0) > strong:first').text('Сила');
			$('.citizen_content > .citizen_military:eq(0) > div > small:first').replaceText('Super Soldier:','Котигорошко:');
			$('.citizen_content > .citizen_military:eq(1) > strong:first').text('Звання');
			$('.citizen_content > .citizen_military:eq(1) > div > small:first').text('Військовий досвід:');
			if (location.indexOf("/economy/")!==-1) {
				if (location.indexOf("/donate-")!==-1) {
					// donate tab
					$('.citizen_content > div > h2.special.padded').replaceText('Donate','Відправити');
					$('.citizen_content > div > h2.special.padded > img#donate_tip').attr('title','Можна дарувати лише їжу, зброю, гроші та квитки.');
					$('.citizen_content > div > ul.tabs > li#topratedtab > a > span').text('Товари');
					$('.citizen_content > div > ul.tabs > li#latesttab > a > span').text('Валюта');
					$(".citizen_content > div > .donate_form > table > tbody > tr > th:contains('Your storage')").text('Ваше сховище');
					$(".citizen_content > div > table > tbody > tr > th:contains('Your account')").text('Ваші кошти');
					$(".citizen_content input[value='Donate']").attr('value','Віддати');
	//			} else if (location.indexOf("/citizen-accounts/")!==-1) {
				} else {
					// account money tab
					$(".citizen_content > a.fluid_blue_light_small > span:contains('Exchange currencies')").text('Обмін');
					$("table.info_message > tbody > tr > td:exact('Local currency accounts with a value less than 1 are not displayed.')").text('Іноземні валюти в кількості, меншій за 1, не відображаються.');
					$('div#allaccounts > div:first > a.f_light_blue_small > span').text('Придбати золото');
				};
			} else if (location.indexOf("/citizen-friends/")!==-1) {
				// friend tab
				$("table.warning_message > tbody > tr > td:contains('Only your first 2000 friends will see your wall posts.')").text('Тільки перші 2000 друзів будуть бачити Ваші повідомлення (шаути).');
				$("table.success_message > tbody > tr > td:contains('Your friendship request has been sent.')").text('Запит на дружбу відправлено.');
				$('div#friends_tab_content div.dead').text('Мертвий');
			} else if (location.indexOf("/change-residence")!==-1) {
				// change-residence tab
				$("table.warning_message > tbody > tr > td:exact('You can now change location without using a moving ticket.')").text('Зараз, Ви можете переїхати куди забажаєте, не використовуючи квитки.');
				$('.citizen_sidebar > div > .citizen_second > small:eq(2)').replaceText('Forfeit points','Бали попереджень');
				$('.citizen_content > h2.special').text('Зміна місцезнаходження');
				$('.citizen_content > .current_location > h4').text('Поточне місцезнаходження');
				$('.citizen_content > form > .new_location > h4').text('Нове місцезнаходження');
				$('.citizen_content > form > .new_location > #selects > small:eq(0)').replaceText('Moving distance:','　Відстань:　');
				$('.citizen_content > form > .new_location > #selects > small:eq(1)').replaceText('Travelling cost:','　Вартість:　');
				$('.citizen_content > form > a#move > span').text('Переїхати');
			} else if (location.indexOf("/change-password")!==-1) {
				// change password tab
				$('.citizen_sidebar > div > .citizen_second > small:eq(2)').replaceText('Forfeit points','Бали попереджень');
				$('.citizen_content > .holder > h2.special.borderedsep').text('Зміна пароля');
				$("form.changepassword span.fieldname.goleft:contains('Current password')").text('Поточний пароль');
				$('form.changepassword span#error_for_citizen_password_twin.twin-small').text('Введіть поточний пароль.')
				$("form.changepassword span.fieldname.goleft:exact('New password')").text('Новий пароль');
				$("form.changepassword span.fieldname.goleft:exact('New password again')").text('Введіть новий пароль ще раз');
				$('form.changepassword > div > input.arrowbutton').attr('value','Змінити');
			} else if (location.indexOf("/edit/profile")!==-1) {
				// editor tab
				$('.citizen_content > .holder > h2.special.borderedsep').text('Зміна персональної інформації');
				$("form.editprofile span.fieldname.goleft:contains('Your description')").text('Інформація про Вас');
				$("form.editprofile span.fieldname.goleft:contains('Citizen Avatar')").text('Фото на паспорт');
				$('form.editprofile span#error_for_citizen_file_twin.twin-small').html('Підтримувані формати: <strong>.jpeg</strong> ');
				$("form.editprofile span.fieldname.goleft:contains('Your birthday')").text('Твій день народження');
				$("form.editprofile span.fieldname.goleft:contains('Your email here')").text('Ваша електронна пошта');
				$('form.editprofile span#error_for_citizen_email_twin.twin-small').text('Електронна пошта буде потрібна для відновлення Вашого аккаунту, тому введіть її вірно.');
				$("form.editprofile span.fieldname.goleft:contains('Your password')").text('Ваш пароль');
				$('form.editprofile span#error_for_password_twin.twin-small').text('Введіть Ваш поточний пароль, щоб зміни вступили в дію.');
				$('form.editprofile > .largepadded > input.arrowbutton').attr('value','Змінити');
				$('.citizen_content > div > a.dotted.change_password').text('Зміна пароля');
			};
		};
		if (location.indexOf("/citizenship")!==-1) {
			$('h1').css('font-family','Arial,Arial');
			// citizenship request
			$('h1:first').text('Еміграція на чужину');
			$("table.info_message > tbody > tr > td:contains('You are not be able to request a new citizenship while being a congress member')").text('Ти не зможеш зрадити своїй країні, доки ти член Конгресу.');
			$("table.info_message > tbody > tr > td:contains('You are not be able to request a new citizenship while being a party member')").text('Ти не зможеш зрадити своїй країні, доки ти член партії.');
		};
		//! www.erepublik.com/en/exchange
		// Exchange
		if (location.indexOf("/exchange")!==-1) {
			//! www.erepublik.com/en/exchange
			// Exchange
			$('h1').css('font-family','Arial,Arial');
			$("h1:contains('Monetary market')").text('Валютний ринок');
			//exchange_bar
			$("#sell_flag > span").text('Придбати:');
			$("a#change_currency.lighty.icon").attr("title","Обміняти місцями");
			$("#buy_flag > span").text('Продати:');
			$(".bar_actions > a:eq(0)").text("Додати пропозицію").attr("title","Додати нову пропозицію обміну");
			$(".bar_actions > a:eq(1)").text("Мої пропозиції").attr("title","Показати мої пропозиції");
			$(".bar_actions > a:eq(2)").text("Всі пропозиції");
			//exchange_offers
			$(".exchange_offers > thead > tr > th:[colspan='4']").text("Всі пропозиції");
			$(".exchange_offers > thead > tr > th:contains('Citizen')").text("Хто");
			$(".exchange_offers > thead > tr > th:contains('Amount')").text("Скільки");
			$(".exchange_offers > thead > tr > th:contains('Rate')").text("Курс");
			$(".exchange_offers > thead > tr > th:contains('Buy')").text("Придбати");
			$(".ex_buy > button").each( function (){
				$(this).replaceText("Buy","Беру!");
				$(this).replaceText("Delete","Видалити");
				$(this).replaceText("Save","Зберегти");
			});
			//create_form
			$(".create_form > strong").replaceText("Amount","Кількість");
			$(".create_form > .rate_title").text("Курс");
			$("a#post_offer.blue_action").text("Зберегти");
			$("div.box").text("Ви ще не створили жодної обмінної пропозиції");
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// 戦争 www.erepublik.com/en/wars/
		//   - リスト www.erepublik.com/en/wars/show/
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if (location.indexOf("/wars/")!==-1) {
			$('h1').css('font-family','Arial,Arial');
			$('h2').css('font-family','Arial,Arial');
			// war
			$('h1:first').text('Битва');
			$('#war_type_filter > div > .core > div > h2.goleft.big:first').text('Оберіть тип битви');
			$('#war_type_filter > div > .core > ul:eq(0) > li > a').html('<img src="/images/parts/icon_warlist_war.gif" class="flag" alt="">Битва');
			$('#war_type_filter > div > .core > ul:eq(1) > li > a').html('<img src="/images/parts/icon_warlist_resistancewar.gif" class="flag" alt="">Повстання');
			$('#war_type_filter > div > .core > ul:eq(2) > li > a').html('<img src="/images/parts/icon_warlist_allwars.gif" class="flag" alt=""Всі');
			$('#war_status_filter > div > .core > div > h2.goleft.big:first').text('Обрати країни у стані війни');
			$('#war_status_filter > div > .core > ul:eq(0) > li > a').html('<img src="/images/parts/icon_warlist_active.gif" class="flag" alt="">Триває');
			$('#war_status_filter > div > .core > ul:eq(1) > li > a').html('<img src="/images/parts/icon_warlist_inactive.gif" class="flag" alt="">Закінчені');
			$('#war_status_filter > div > .core > ul:eq(2) > li > a').html('<img src="/images/parts/icon_warlist_allstates.gif" class="flag" alt="">Всі');
			$('#war_country_filter > div > .core > div > h2.goleft.big:first').text('Оберіть країну');
			$.each( $(".warholder > .attacker > .nameholder:contains('Resistance Force')"), function() {
				$(this).html($(this).replaceText('Resistance Force of ','Повстанці').text()+'<span id="CHT">Повстанці</span>');});
			$('.nameholder > #CHT').css('font-family','Arial,Arial');
			$('.warholder > .attacker > a').replaceText('allies',' союзники').replaceText('no ','Відсутні');;
			$('.warholder > .defender > a').replaceText('allies',' союзники').replaceText('no ','Відсутні');;
			$('.warholder > .middle > a.details').text('Детально');
			if (location.indexOf("/wars/show/")!==-1) {
				// choose war and battlefiled
				var rCoun = document.title.toString().split("|")[1].split(" vs ")[0];
				$('.war_list_header > .country.left_side > div > h3.resistance').css('width','160px');
				$(".war_list_header > .country.left_side > div > h3:contains('Resistance Force')").html(rCoun+' <span id="CHT">повстанці</span>');
				$('.war_list_header > .country.left_side > div > h3 > #CHT').css('font-family','Arial,Arial');
				$('.war_list_header > .country > div > a').replaceText('allies','cоюзники ').replaceText('no ','Відсутні ');
				$('.war_list_header > .vs > small').replaceText('Still active','Війна триває');
				$('.listing > a.reversed > span').replaceText('Join','Приєднатися до');
				$(".listing > a.join[title='Join Resistance'] > span").text('Приєнатися до повстання');
				$(".listing > a.join[title='Join'] > span").text('Взяти участь');
				$('.listing > small').replaceText('started on','Активні битви: ');
				$(".listing.done > small:contains('Conquered by')").replaceText('Conquered by','Захопили:');
				$(".listing.done > small:contains('Secured by')").replaceText('Secured by','Захистили:');
				$("table.info_message > tbody > tr > td:contains('This war is no longer active.')").text('Ця битва вже закінчена.');
				$("table.warning_message > tbody > tr > td:contains('is about to attack.')").replaceText('is about to attack.','напали.');
			};
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// 戰場/バトル
		//   - 戰場 www.erepublik.com/en/military/battlefield/
		//   - バトル www.erepublik.com/en/military/campaigns
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if (location.indexOf("/military/")!==-1) {
			if (location.indexOf("/military/battlefield/")!==-1) {
				$('#pvp_header > .battle_hero.left_side').attr('title','Герой битви');
				$('#pvp_header > .domination > .domibar > #left_points').attr('title','Ваша сторона');
				$('#pvp_header > .domination > .domibar > #right_points').attr('title','Ворожа сторона');
				$('#pvp_header > .battle_hero.right_side').attr('title','Герой битви');
				$.each( $("#pvp_header > .country > div > h3:contains('Resistance Force')"), function() {
					$(this).html($(this).replaceText('Resistance Force Of ','').text()+' <span id="CHT">повстанці</span>');});
				$('#pvp_header > .country > div > h3 > #CHT').css('font-family','Arial,Arial');
				$('#pvp_header > .country > div > a').replaceText('allies',' союзники ').replaceText('no ','відсутні');
				$('#pvp_battle_area > table.damage_aligner > tbody > tr > td > #total_damage').attr('title','Сума пошкоджень за поточний раунд');
				$('#pvp_battle_area > table.damage_aligner > tbody > tr > td > #total_damage > small').text('Загальне пошкодження');
				$('#pvp_battle_area > .player.left_side > a#change_weapon').attr('title','Змінити зброю');
	//			$('#pvp_actions > .action_holder > a#heal_btn').attr('title','З`їсти батончик');
				$('#pvp_actions > .action_holder > a#fight_btn').text('ВОГОНЬ!');
				$('#pvp_actions > .action_holder > a#fight_btn').attr('title','ВОГОНЬ!');
				$('#pvp > a#go_stats.battle_stats_button').attr('title','Статистика');
				$('#pvp > a.help_button').attr('title','Довідка');
				$('.battle_stats > .top > h3:first').text('Статистика битви');
				$('.battle_stats > .repeat > .content > .lister > .head > .one').text('Воїн');
				$('.battle_stats > .repeat > .content > .lister > .head > .two').text('Жертви');
				$('.battle_stats > .repeat > .content > .lister > .head > .three').text('Пошкодження');
				// defeated-pop-box
				$('#enemy_defeated > .heading > h2').text('Вбито ворога');
				$('#enemy_defeated > .content > div:eq(0) > strong').text('Пошкодження');
				$('#enemy_defeated > .content > div#natural_enemy_bonus > strong').text('Бонус кровного ворога');
				$('#enemy_defeated > .content > div:eq(2) > strong').text('Військовий досвід');
				$('#enemy_defeated > .content > div:eq(3) > strong').text('Досвід');
				$('#enemy_defeated > a#add_damage_btn').text('Вбити ще');
				// rank-up-pop-box
				$('#rank_up > .heading > p').text('Вітаємо, Ваше звання підвищується до');
				$('#rank_up > .content > div:eq(0) > strong').text('Винагорода');
				$('#rank_up > .content > div:eq(1) > strong').text('+1 енергетичний батончик');
				$('#rank_up > a#add_rank_btn').text('Отримати винагороду');
				// other-box
				$('#battle_loader > a.green_go').replaceText('Next battle','Наступний раунд');
				$('#battle_end > a.green_go').text('Переглянути інші битви');
				$('#collection_complete.bazooka_pop > strong').text('Агов, та ти ж зібрав брухту на РПГ!');
				$("#collection_complete.bazooka_pop > a[title='Build your Bazooka!']").text('Скласти');
				$("#timer > div > strong:contains('Are you')").text('Не заснув?');
				$("#timer > div > a > span:contains('still here')").text('Я тут...тут...хрРР...ХРРР');
				// change location
				$('#options_box > p.info').text('Вам потрібно переїхати в одну з країн для участі в битві. Зробити це зараз?');
				$('#options_box > a#change_location.fluid_blue_dark > span').text('Так, звісно!');
				$('#options_box > a#nope.plain').text('Яничар.');
			} else if (location.indexOf("/military/campaigns")!==-1) {
				$('h1').css('font-family','Arial,Arial');
				// Military campaigns list
				$('h1:first').text('Битви');
				$("#battle_listing > h4:exact('Campaign of the day')").text('Битва дня');
				$("#battle_listing > h4:contains('Campaigns')").text('Битви, в яких бере участь '+$("#battle_listing > h4:contains('Campaigns')").replaceText('Campaigns',' ').text());
				$("#battle_listing > p.campaigns_header.allies.toggled:contains('Allies')").html('<span class="arrow"></span>Битви союзників');
				$("#battle_listing > p.campaigns_header.allbattles.toggled:contains('All')").html('<span class="arrow"></span>Всі битви');
				$('#battle_listing a.victory_flag').text('Перемога');
				$("#battle_listing span:contains('Fight')").text('Взяти участь');
				$("#battle_listing span:contains('Victory')").text('Перемога　');
			};
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// 新聞 www.erepublik.com/en/news
		// 熱門 www.erepublik.com/en/news/rated/all/
		// 即時 www.erepublik.com/en/news/latest/all/
		// 訂閱 www.erepublik.com/en/news/subscriptions
		// 國際 www.erepublik.com/en/news/international
		// 事件 www.erepublik.com/en/news/military
		//   - 文章 www.erepublik.com/en/article/
		//   - 報紙 www.erepublik.com/en/newspaper/
		//   - 創立 www.erepublik.com/en/create-newspaper
		//   - 編輯 www.erepublik.com/en/edit-newspaper/
		//   - 修文 www.erepublik.com/en/edit-article/
		//   - 寫文 www.erepublik.com/en/write-article
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if (location.indexOf("/news/")!==-1) {
			$('body#media h1').css('font-family','Arial,Arial');
			$('body#media h2').css('font-family','Arial,Arial');
			// news area
			$("h1:first:exact(' News')").text('Новини');
			$("h1:first:exact('First steps in eRepublik News')").text('Перші кроки в грі');
			$("h1:first:exact('Battle orders News')").text('Військові накази');
			$("h1:first:exact('Warfare analysis News')").text('Аналіз військових подій');
			$("h1:first:exact('Political debates and analysis News')").text('Політичні дебати');
			$("h1:first:exact('Financial business News')").text('Економіка та фінанси');
			$("h1:first:exact('Social interactions and entertainment News')").text('Новини суспільства');
			$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(0) > a').attr('title','Нові інструкції та освіта');
			$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(1) > a').attr('title','Повідомлення військового командування');
			$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(2) > a').attr('title','Стратегічний аналіз');
			$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(3) > a').attr('title','Політичні обговорення та їх аналіз');
			$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(4) > a').attr('title','Економічний фокус');
			$('#filters > .rightfilters > .core > ul.new_s_filters > li:eq(5) > a').attr('title','Соціальні розваги');
			$('#filters > .rightfilters > .core > .your_subs').html('</br>Ви в даний час підписані на <strong>'+$("#filters > .rightfilters > .core > .your_subs > strong").text()+'</strong> газет<a href="javascript:;" class="fluid_blue_dark" onclick="$j(\'.asubs\').toggle();" title=""><span>Змінити</span></a>');
			$('#filters > .rightfilters > .asubs > .acontrols > a.aselectall').text('Обрати всі');
			$('#filters > .rightfilters > .asubs > .acontrols > a#unsubscribeAction > span').text('Відписатися');
			$('#domain_selector_holder > div > .core > div > div > h2.goleft.big:first').text('Будь ласка, оберіть тип новин');
			$('#domain_selector_holder > div > .core > ul > .last:eq(0)').html('<a href=\"/en/news/rated/all/Ukraine/1\"><img class="icon" src="/images/parts/icon_media_toprated.gif" alt="Icon_media_toprated"> Найпопулярніші</a>');
			$('#domain_selector_holder > div > .core > ul > .last:eq(1)').html('<a href=\"/en/news/latest/all/Ukraine/1\"><img class="icon" src="/images/parts/icon_media_latest.gif" alt="Icon_media_latest"> Останні новини</a>');
			$('#domain_selector_holder > div > .core > ul > .last:eq(2)').html('<a href=\"http://www.erepublik.com/en/news/military\"><img class="icon" src="/images/parts/icon_media_military.gif" alt="Icon_media_military"> Останні події</a>');
			$('#domain_selector_holder > div > .core > ul > .last:eq(3)').html('<a href=\"http://www.erepublik.com/en/news/international\"><img class="icon" src="/images/parts/icon_media_international.gif" alt="Icon_media_international"> Міжнародні новини</a>');
			$('#domain_selector_holder > div > .core > ul > .last:eq(4)').html('<a href=\"http://www.erepublik.com/en/news/subscriptions\"><img class="icon" src="/images/parts/icon_media_subscriptions.gif" alt="Icon_media_subscriptions">Підписані газети</a>');
			$('#country_holder > div > .core > div > div > h2.goleft.big:first').text('Будь ласка, оберіть країну');
			// catalog link
			$("a:contains('First steps in eRepublik')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_1.png"> Перші кроки в грі');
			$("a:contains('Battle orders')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_2.png"> Військові накази');
			$("a:contains('Warfare analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_3.png"> Аналіз військових подій');
			$("a:contains('Political debates and analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_4.png"> Політичні дебати');
			$("a:contains('Financial business')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> Економіка та фінанси');
			$("a:contains('Social interactions and entertainment')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> Новини суспільства');
		} else if ((location.indexOf("/article/")!==-1) || (location.indexOf("/newspaper/")!==-1)) {
			// newspaper, article
			$('body#newspaper > #container > #content > h2.new_spaper_section').text('про це пише газета');
			$('.profilemenu > li > a.houdini.subscribeToNewspaper').text('Підписатися');
			$('.profilemenu > li > a.houdini.unsubscribeFromNewspaper').text('Відписатися');
			$(".profilemenu > li > a:exact('Write article')").text('Написати статтю');
			$(".profilemenu > li > a:exact('Edit newspaper details')").text('Змінити деталі газети');		
			// catalog link
			$("a:contains('First steps in eRepublik')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_1.png"> Перші кроки в грі');
			$("a:contains('Battle orders')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_2.png"> Військові накази');
			$("a:contains('Warfare analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_3.png"> Аналіз військових подій');
			$("a:contains('Political debates and analysis')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_4.png"> Політичні дебати');
			$("a:contains('Financial business')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> Економіка та фінанси');
			$("a:contains('Social interactions and entertainment')").html('<img src="http://www.erepublik.com/images/modules/news/icons/cat_5.png"> Новини суспільства');
			// other link
			$('a#comments_button_on > span').replaceText('Comments','Коментарі');
			$('#subscribe_comments > form > .submitpost-start > .submitpost-core > p.padded').text('Ваше повідомлення');
			$("#subscribe_comments > form > .submitpost-start > .submitpost-core > input.submit[name='commit']").attr('value','Додати повідомлення');
			$('a.report.new_spaper').text('доповіді цієї газети');
			$('a.report.articlereport').text('Повідомити про цю статтю');
			$('a.shower.report.commentswitch').text('Поскаржитися на коментарі');
			$('a.report.onz.commentcontent').text('Поскаржитися');
			$('span.vroundbtnh25-start > span.vroundbtnh25-end > a.vroundbtnh25-core').text('Редактор');
			$('span.vroundbtnh25_red-start > span.vroundbtnh25_red-end > a.vroundbtnh25_red-core').text('Х');
		} else if (location.indexOf("/create-newspaper")!==-1) {
			$('h1').css('font-family','Arial,Arial');
			$('h2').css('font-family','Arial,Arial');
			$('.fieldname').css('font-family','Arial,Arial');
			// create newspaper
			$('.holder > h1:first').text('Створення газети');
			$('.holder > a.wikiicon.largepadded').text('Розширена допомога');
			$('.accountinfo.largepadded > .accountdisplay > span.rightpadded:first').text('Ваш грошовий рахунок');
			$(".holder > h2:first:contains('Requirements')").text('Вимоги');
			$(".holder > .smallhoderleft.goleft > p:contains('Level')").text('Рівень');
			$(".holder > .smallhoderleft.goleft > p:contains('Cost')").text('Вартість');
			$('.holder > .smallholderright.goleft > a.btnGetGold').text('Придбати золото');
			$(".holder > h2.section:contains('Newspaper details')").text('Деталі газети');
			$('form.companydetails > p.largepadded:eq(0) > span.fieldname').text('Назва назети');
			$('form.companydetails > p.largepadded:eq(0) > span#error_for_newspaper_name_twin').text('Введіть від 6 до 25 символів');
			$('form.companydetails > p.largepadded:eq(1) > span.fieldname').text('Логотип газети');
			$('form.companydetails > p.largepadded:eq(1) > span.goleft > span#error_for_newspaper_image_twin').text('Дозволено лише JPG-формат зображення.');
			$("form.companydetails > .buttonalign > input.arrowbutton[name='commit']").attr('value','Почати кар`єру журналіста');
		} else if (location.indexOf("/edit-newspaper/")!==-1) {
			$('.fieldname').css('font-family','Arial,Arial');
			// edit newspaper
			$(".profilemenu > li > a:exact('Write article')").text('Написати статтю');
			$(".profilemenu > li > a:exact('Edit newspaper details')").text('Змінити деталі газети');
			$('.accountinfo > .accountdisplay > span.rightpadded').text('Ваш грошовий рахунок');
			$("form.companydetails > .largepadded > .fieldname:contains('Newspaper name')").text('Назва газети');
			$('form.companydetails > .largepadded > span#error_for_newspaper_name_twin').text('Введіть від 6 до 25 символів.');
			$("form.companydetails > .largepadded > .fieldname:contains('Description')").text('Опис');
			$("form.companydetails > .largepadded > .fieldname:contains('Location')").text('Місцезнаходження');
			$('form.companydetails > .largepadded > span#error_for_country_list_twin').text('Зміна розташування власника можлива тільки для газети в своїй країні.');
			$("form.companydetails > .largepadded > .fieldname:contains('Newspaper logo')").text('Логотип газети');
			$('form.companydetails > .largepadded > span.goleft > span#error_for_newspaper_image_twin').text('Дозволено лише JPG-формат зображення.');
			$("form.companydetails > .largepadded > .fieldname:contains('Cost')").text('Вартість');
			$('form.companydetails > .largepadded > span.accountdisplay > a.btnGetGold').text('Придбати золото');
			$("form.companydetails > .buttonalign > input.arrowbutton[name='commit']").attr('value','Внести зміни');
		} else if ((location.indexOf("/edit-article/")!==-1) ||(location.indexOf("/write-article")!==-1)) {
			$('h2').css('font-family','Arial,Arial');
			$('.smallpadded').css('font-family','Arial,Arial');
			// edit, write article
			$(".profilemenu > li > a:exact('Write article')").text('Написати газету');
			$(".profilemenu > li > a:exact('Edit newspaper details')").text('Змінити деталі газети');
			$(".holder > .bordersep > h2.goleft:contains('Edit')").text('Змінити статтю');
			$(".holder > .bordersep > h2.goleft:contains('Write article')").text('Написати статтю');
			$(".holder > .bordersep > a.btn-arrow-left.goright:exact('Back')").text('Назад');
			$("form.writearticle > .inputholder > .smallpadded:contains('Title')").text('Назва');
			$('form.writearticle > .inputholder > span#error_for_article_name_twin').text('Введіть від 1 до 80 символів.');
			$("form.writearticle > .inputholder > .smallpadded:contains('Article')").text('Стаття');
			$("table.info_message > tbody > tr > td:contains('By choosing a category which')").text('Виберіть категорії для Вашої статті, щоб потенційні читачі швидще знайшли цікавлячу їх інформацію.');
			$("form.writearticle > .inputholder > div.smallpadded:contains('Category')").text('Категорія');
			$("form.writearticle > .inputholder > select#article_category > option[value='0']").text('Будь ласка, виберіть');
			$("form.writearticle > .inputholder > select#article_category > option[value='1']").text('- Нові інструкції та освіта');
			$("form.writearticle > .inputholder > select#article_category > option[value='2']").text('- Повідомлення військового командування');
			$("form.writearticle > .inputholder > select#article_category > option[value='3']").text('- Стратегічний аналіз');
			$("form.writearticle > .inputholder > select#article_category > option[value='4']").text('- Політичні обговорення та їх аналіз');
			$("form.writearticle > .inputholder > select#article_category > option[value='5']").text('- Економічний фокус');
			$("form.writearticle > .inputholder > select#article_category > option[value='6']").text('- Соціальні розваги');
			$("form.writearticle > div > input.arrowbutton[value='Publish']").attr('value','В друк!');
			$("form.writearticle > div > input.arrowbutton[value='Edit']").attr('value','Змінити');
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// 政党 www.erepublik.com/en/party/
		// 成員名單 www.erepublik.com/en/party-members/
		// 主席名單 www.erepublik.com/en/party-candidates/
		// 議員名單 www.erepublik.com/en/propose-congressman/
		// 總統名單 www.erepublik.com/en/presidential-candidates/
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if (location.indexOf("/party/")!==-1) {
			$('h2').css('font-family','Arial,Arial');
			// party
			$("h2.section:contains('Info')").text('Інформація');
			$(".infoholder > .largepadded > span.field:exact('Members')").text('Учасники');
			$(".infoholder > .largepadded > span.field:exact('Orientation')").text('Спрямування');
			$('.infoholder > .largepadded > span.goleft').replaceText('Center','Центристська').replaceText('Libertarian','Ліберальна');
			$("h2.section:contains('Elections')").text('Вибори');
			$('.indent > .bordersep:eq(0) > h2.section').html('<img title="Обирається членами партії 15-го числа кожного місяця." class="icon padded tooltip" src="/images/parts/icon_position_politics_partypresident.gif" alt="Icon_position_politics_partypresident">Президент партії');
			$(".infoholder > p.smallholder:contains('Party President')").text('Президент партії');
			var pp_1 = $(".indent > .bordersep:eq(0) > .subindent > .infoholder:eq(0) > p:first > .special:eq(0)").text();
			var pp_2 = $(".indent > .bordersep:eq(0) > .subindent > .infoholder:eq(0) > p:first > .special:eq(1)").text();
			$('.indent > .bordersep:eq(0) > .subindent > .infoholder:eq(0) > p:first').html('Наступні вибори через <span class="special">'+pp_1+'</span>. <span class="special">'+pp_2+'</span> кандидат(-ів).');
			$('.indent > .bordersep:eq(1) > h2.section').html('<img title="Обирається місцевими жителями 25-го числа кожного місяця." class="icon padded tooltip" src="/images/parts/icon_position_politics_congressman.gif" alt="Icon_position_politics_congressman">Конгрес');
			var cm_1 = $('.indent > .bordersep:eq(1) > .subindent > .infoholder > .field > p > span.special:first').text();
			var cm_2 = $('.indent > .bordersep:eq(1) > .subindent > .infoholder > p > span.special:first').text();
			$('.indent > .bordersep:eq(1) > .subindent > .infoholder > .field > p:first').html('Зараз <span class="special">'+cm_1+'</span> гравців від цієї партії є членами Конгресу，');
			$('.indent > .bordersep:eq(1) > .subindent > .infoholder > p:first').html(' що становить <span class="special">'+cm_2+'</span> від загальної кількості.');
			if ($('.indent > .bordersep:eq(2) > .subindent > .infoholder > p > span.special:first').length==1) {
				var cm_3 = $('.indent > .bordersep:eq(2) > .subindent > .infoholder > p > span.special:first').text();
				$('.indent > .bordersep:eq(2) > .subindent > .infoholder > p:first').html('Наступні вибори через <span class="special">'+cm_3+'</span>.');
			} else {
				$('.indent > .bordersep:eq(2) > .subindent > .infoholder > p:first').html('Переглянути кандидатів.');
			};
			$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > h2:first').text('Вибори, г-н');
			$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > .holder').replaceText('Do you agree to represent your party in the congress election in','Чи згодні Ви, від імені своєї партії взяти йчасть у виборах').replaceText('?',' до Конгресу?');
			$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.padded:first').text('Будь ласка, заповніть в нижній частині вікна ваші політичні погляди, щоб пояснити виборцям, чому вони мають зав Вас голосувати.');
			$('.indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.largepadded > span:last').html('Може зприкріпити зовнішню веб-сторінку або статтю з Вашої газети.');
			$(".indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.goright > span > span > input[value='Agree']").attr('value','Балотуватися');
			$(".indent > .bordersep:eq(2) > .subindent > #candidate_for_congress_template > form > p.goright > span > span > input[value='Cancel']").attr('value','Передумав');
			$('.indent > h2.section').html('<img title="Обирається громадянами країни 5 числа кожного місяця." class="icon padded tooltip" src="/images/parts/icon_position_politics_president.gif" alt="Icon_position_politics_president">Президент країни');
			$(".indent > .subindent:eq(0) > .bordersep > .infoholder > p.smallholder:contains('Winner')").text('Переможець');
			var cp_1 = $('.indent > .subindent:eq(1) > .infoholder > p:first > span.special:first').text();
			$('.indent > .subindent:eq(1) > .infoholder > p:first').html('Наступні президентські вибори через <span class="special">'+cp_1+'</span>.');
			$(".indent > .subindent:eq(2) > .infoholder > p.smallholder:contains('No candidate proposed')").text('Кандидатів ще не запропоновано.');
			// control buttons
			$('a.report.party').text('Поскаржитися');
			$(".action a:exact('Show all members')").text('Показати всіх членів');
			$(".action a:exact('Show results')").text('Результати');
			$(".action a:exact('Show candidate list')").text('Список кандидатів');
			$(".action a:exact('Show candidates list')").text("Список кандидатів");
			$(".action a:exact('Show proposed members of congress')").text('Список кандидатів');
			$(".action a:contains('Join party')").text('Вступити');
			$(".action a:contains('Resign')").text('Вийти');
			$(".action a:exact('Run for congress')").text('Балотуватися');
			$(".action a:exact('Retire')").text('Відмовитися');
			$(".action a:exact('Candidate')").text('Балотуватися');
			$(".action a:exact('Vote')").text("Голосувати");
		} else if ((location.indexOf("/party-members/")!==-1) || (location.indexOf("/party-candidates/")!==-1)) {
			$('h2').css('font-family','Arial,Arial');
			$('p.smallholder').css('font-family','Arial,Arial');
			// party members, candidates list
			$("h2.biggersection:contains('Party members')").text('Члени партії');
			$("h2.biggersection:contains('Party candidates')").text('Кандидати');
			$(".indent > .bordersep > p.smallholder:contains('Party Member')").replaceText('Party Member','Член партії');
			$(".indent > .bordersep > p.smallholder:contains('Congress Member')").replaceText('Congress Member','Конгресмен');
			$(".indent > .bordersep > p.smallholder:contains('Party President')").replaceText('Party President','Президент партії');
			$('.holder > .indent').replaceText('No candidates applied yet','Жоден кандидат ще не подав заявку.');
			$('.holder > a.btn-arrow-left.goright').text('Назад до сторінки партії');
			$('a.report.party').text('Поскаржитися');
		} else if (location.indexOf("/propose-congressman/")!==-1) {
			$('h2').css('font-family','Arial,Arial');
			// party congressman list
			$("h2.biggersection:contains('Congress member candidates')").text('Кандидати до Конгресу від партії');
			$('.infoalert > p:eq(0)').html('<strong>1.</strong> Члени політичних партій можуть подати заявку на участь в виборчих перегонах з 16-ого по 23-тє число кожного місяця.');
			$('.infoalert > p:eq(1)').html('<strong>2.</strong> 24-го числа кожного місяця, голова партії затверджує остаточний список кандидатів.');
			$('.infoalert > p:eq(2)').html('<strong>3.</strong> Кожна політична партія, в кожному регіоні може призначити п`ятьох членів кандидатами до Конгресу.');
			$("select#region_list > option[value='0']").text('Оберіть регіон');
			$('.holder > .candidates > .list-title').replaceText('Official candidates','Офіційні кандидати');
			$('.holder > a.btn-arrow-left.goright').text('Назад до сторінки партії');
			$('a.report.party').text('Поскаржитися');
		} else if (location.indexOf("/presidential-candidates/")!==-1) {
			$('h1').css('font-family','Arial,Arial');
			$('h2').css('font-family','Arial,Arial');
			$('th').css('font-family','Arial,Arial');
			// president candidates list
			$('body#elections h1:first').text('Список кандидатів у президенти');
	//		$(".bordersep > h2:exact('Country')").text("Будь ласка, оберіть країну");
			$('table.elections > tbody > tr:first > th:eq(0)').text('Кандидат');
			$('table.elections > tbody > tr:first > th:eq(1)').text('Підтримка політичних партій');
			$('table.elections > tbody > tr:first > th:eq(2)').text('Національні цілі');
			$('table.elections > tbody > tr > td.of_goals > .goal_setter > .nogoals > small').text('Кандидат нічого не обіцяє');
			$("table.info_message > tbody > tr > td:contains('No candidates applied yet')").text('Кандидатів ще немає. Дивно.');
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		//選舉中心 www.erepublik.com/en/elections/
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if (location.indexOf("/elections/")!==-1) {
			$('h1').css('font-family','Arial,Arial');
			$('h2').css('font-family','Arial,Arial');
			$('th').css('font-family','Arial,Arial');
			// elections
			$('body#elections h1:first').text('Виборчий центр');
			$("#filters > .rightfilters > .core > .info > p.smallpadded > strong:exact('Next elections')").text('Наступні вибори:');
			$("#filters > .rightfilters > .core > .info > p:last > strong:contains('Country President')").text('Президент країни');
			$("#filters > .rightfilters > .core > .info > p:last > strong:contains('Party President')").text('Президент партії');
			$("#filters > .rightfilters > .core > .info > p:last > strong:contains('Congress')").text('Конгрес');
			$("#country_filters > .extended-menus > .core > .bordersep > h2:contains('Country')").text('Країна');
			$("#region_filters > .extended-menus > .core > .bordersep > h2:contains('Country')").text('Країна');
			$("#region_filters > .extended-menus > .core > ul:first > li:first > a[id='0__All regions']").text('Всі регіони');
			$("#election_filters > .extended-menus > .core > .bordersep > h2:contains('Election')").text('Будь ласка, виберіть тип виборів');
			$('#election_filters > .extended-menus > .core > ul.election_ul > li.last > table > tbody > tr > td > a#president').text('Президент країни');
			$('#election_filters > .extended-menus > .core > ul.election_ul > li.last > table > tbody > tr > td > a#congress').text('Конгрес');
			$('#election_filters > .extended-menus > .core > ul.election_ul > li.last > table > tbody > tr > td > a#party').text('Президент партії');
			$("#party_filters > .extended-menus > .core > .bordersep > h2:contains('Parties')").text('Будь ласка, виберіть політичну партію');
			$("#dateSelect_filters > .extended-menus > .core > .bordersep > h2:contains('Month/Year')").text('Оберіть дату');
			$("body#elections h2.special:contains('Official Results')").text('Офіційні результати');
			$("h3:contains('Intermediate results')").text("Проміжні результати");
			$(".release_countdown > p").html("Виборчий комітет перевіряє голоси, аби впевнитися в чесності виборів.<br><br>Дякуємо за розуміння!");
			$(".release_countdown > .countdown_clock > small").text("Офіційні результати буде оголошено через:")
			// president
			$(".vote_box > .vote_box_layer > .vote_box_info > h4:contains('Goals')").text('Цілі');
			$('.vote_box > .vote_block > p').replaceText('votes','голосів');
			$(".vote_totals > p > span:contains('Total votes')").replaceText('Total votes:','Проголосувало：');
			if ((location.indexOf("election-congress")!==-1) || (location.indexOf("election-party")!==-1)){
				// congress
				$("table.electiondetails th:contains('Official candidates')").replaceText('Official candidates','Офіційні кандидати');
				$("table.electiondetails th:contains('Wildcards')").replaceText('Wildcards','Кандидати, що мають найбільше голосів з тих, що не пройшли по квоті на регіон');
				$("table.electiondetails th:contains('Not qualified')").replaceText('Not qualified','Не проходять');
				$("table.electiondetails th:contains('Member of')").text('Партія');
				$("table.electiondetails th:contains('No. of votes')").text('Голоси');
				$("table.electiondetails span.smalldotted:exact('Presentation')").text('Презентація');
				$("table.electiondetails span.smalldotted:exact('No presentation')").text('Без перезентації');
				// party
				$("table.elections th:exact('No.')").text('Номер');
				$("table.elections th:contains('Candidate')").text('Кандидат');
				$("table.elections th:contains('No. of votes')").text('К-сть голосів');
				$("table.elections th:contains('% of votes')").text('% голосів');
				$("table.elections a:exact('Vote')").text('Голосувати');
				// others
				$("#messagealert.infoicon > p:exact('No data available yet')").text("На даний момент, інформація відсутня. Сходи погуляй в м'яча");
				var v_num = $('p.regular > span#number_of_votes').text();
				$('p.regular').html('Загальна кількість голосів: <span class="special rightpadded" id="number_of_votes">' +v_num+ '</span>');
			};
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// 軍團 www.erepublik.com/en/main/group-home/
		// 創立 www.erepublik.com/en/main/group-create/
		// 首頁 www.erepublik.com/en/main/group-show/
		// 列表 www.erepublik.com/en/main/group-list/
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if (location.indexOf("/group-")!==-1) {
			$('h1').css('font-family','Arial,Arial');
			if (location.indexOf("/group-home/")!==-1) {
				// group-home
				$('body#military_units h1:first').text('Військовий підрозділ');
				$("table.info_message > tbody > tr > td > strong:contains('You are not a soldier of any Military Unit')").parent().html(
					'<strong>Ви не є членом жодного військового підрозділу </strong> Ви можете приєднатися до існуючого або створити власне.<br>Приєднуйтесь до армії, щоб слідувати за побратимами і бити гуртом на полі бою.<br><a class="wicked" href="http://wiki.erepublik.com/index.php/Military_unit" target="_blank">Більше інформації</a>');
				$('#military_units_home > .create_military_unit > table > tbody > tr > td > a > span').text('Заснувати підрозділ');
				$('#military_units_home > .join_military_unit > h3:first').text('Відправити заявку на вступ до підрозділу');
			} else if (location.indexOf("/group-create/")!==-1) {
				$('body#create h1:first').text('Заснування підрозділу');
				$("table.warning_message > tbody > tr > td:contains('The Military Unit will be located in')").text('Штаб-квартира підрозділу буде встановлена в країні Вашого громадянства. Зверніть увагу, що в майбутньому Ви не зможете це змінити, тільки символіку і опис.')
				$('#create_military_unit > .holder.create_company > h2:first').text('Умови для вступу');
				$('#create_military_unit > .holder.create_company > .container_blue_border > .requirements > .req:eq(0) > div').replaceText('Funding Fee','Вартість реєстрації');
				$('#create_military_unit > .holder.create_company > .container_blue_border > .requirements > .req:eq(1) > div').replaceText('Military Rank','Військове звання');
				$('#create_military_unit > .holder.create_company > .container_blue_border > .requirements > .req:eq(2) > div').replaceText('Experience Level','Рівень досвіду');
			} else if ((location.indexOf("/group-show/")!==-1) || (location.indexOf("/group-list/")!==-1)) {
				$('h3').css('font-family','Arial,Arial');
				// group-show, group-list
				$('#military_group_header > .header_content > h2:first > big').replaceText('members','бійців');
				$("#military_group_header > .header_content > .details > strong:contains('Location:')").text('Розташування:');
				$("#military_group_header > .header_content > .details > strong:contains('Commander:')").text('Головнокомандувач:');
				$('#military_group_header > .header_content > .details > a.big_action.join > strong').text('Скласти присягу');
				$("#military_group_header > .header_content > .details > a.simple > strong:contains('Resign')").text('Вийти');
				$("#military_group_header > .header_content > .details > a:contains('View rank')").text('Рейтинг');
				$("#military_group_header > .header_content > .details > a.backmu").text('Повернутися');
				$("#group_right_column > .leader > h3:first:contains('Commander')").text('Головнокомандувач');
				$("#group_right_column > .leader > h3:last:exact('Regiment Captain')").text('Капітан');
				$("#group_right_column > .leader > h3:last:exact('No Captain')").text('Капітан не призначений');
				$('#group_right_column > .members > h3:first').replaceText('Members','Бійці');
				$('#group_right_column > .members > a.show_all').text('Побачити всіх');
				$('#orderContainer > h3').replaceText('Order of the day','Денний наказ');
				$('#orderContainer > .requirements.fight > ul.req_content > li.condition0 > .details > strong').text($('#orderContainer > .requirements.fight > ul.req_content > li.condition0 > .details > strong').text().replace('Fight for','Боріться за')+'. Вбито ворогів:');
				$('#group_orders > h3:first').text('Завдання для новобранців');
				$('#group_orders > p:first').text('Виконайте ці умови, щоб пройти посвячення в воїни.');
				$('#group_orders > .requirements > ul.req_content > li:eq(0) > .details > strong').text('Звання: Sergeant');
				$('#group_orders > .requirements > ul.req_content > li:eq(1) > .details > strong').text('Здолати 25 ворогів в складі підрозділу');
				$('#group_orders > .requirements > ul.req_content > li:eq(2) > .details > strong').text('Візьміть участь в п`яти різних битвах за країну Вашого громадняства або її союзників');
				$("#group_feeds > h3:first").text('Прапор підрозділу');
				$('#group_feeds > #citizen_feed > .shouter > form#wall_post > textarea#shout.expand').text('和軍團的朋友們說些有趣的東西吧');
				$('#group_feeds > #citizen_feed > .shouter > form#wall_post > span.controls > a.post_button > b').text('分享');
				$("#group_feeds > #citizen_feed a[trigger='reply']").text('Відповісти');
				$("#group_feeds > #citizen_feed span[trigger='add_comment']").text('Коментувати');
				$("#group_feeds > #citizen_feed div.fake_input").text('повідомлення');
	//			$("#group_feeds > #citizen_feed a[target='reportpopup']").text('Поскаржитися');
				$("table.info_message > tbody > tr > td:contains('You must be a member of')").text('Ви повинні приєднатися до цього підрозділу, щоб дивитися його стіну.');
				$("table.error_message > tbody > tr > td:contains('Sorry, you need to have the same citizenship')").text('Вибачте, у Вас має бути таке ж громадянство.');
				if (location.indexOf("/group-list/")!==-1) {
					//group-list
					$('#members_holder > h3').text('Список бійців підрозділу');
				};
			};
		};
		$("#show_facebook_feed").css("display","none");
//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// www.erepublik.com/en/main/country/
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if ((location.indexOf("/country")!==-1) || (location.indexOf("/law/")!==-1)) {
			$('#filters > a.btn-filters-select.goleft').text('Країна');
			$('#profileholder > p > a.vroundbtnh25-start:eq(0) > span.vroundbtnh25-end > span.vroundbtnh25-core_large').text('Дати гроші на революцію');
			$('#profileholder > p > a.vroundbtnh25-start:eq(1) > span.vroundbtnh25-end > span.vroundbtnh25-core_large').text('Показати на мапі світу');
			$(".extended-menus > .core > .bordersep > h2.goleft.big:contains('Country')").text('Оберіть країну');
			$('ul.ftabs > li:eq(0) > a > span').text('Соціум');
			$('ul.ftabs > li:eq(1) > a > span').text('Економіка');
			$('ul.ftabs > li:eq(2) > a > span').text('Політика');
			$('ul.ftabs > li:eq(3) > a > span').text('Війни');
			$('ul.ftabs > li:eq(4) > a > span').text('Закони');
			$('ul.ftabs > li:eq(5) > a > span').text('管理中心');
			$("h2:exact('Current national goals')").text("Цілі");
			$("a:exact('check current status')").text("Перевірити");
			$("p.general-text:contains('The elected president has not set any national goals for this month.')").text("Обраний президент був занадто ледачий, щоб виставити цілі。");
			$("h2:exact('Monuments achieved')").text("Отримані монументи");
			if (location.indexOf("/country/society/")!==-1) {
				// society
				$("h2:exact('Citizens')").text("Населення");
				$("span.fakeheight:eq(0)").text("Кількість");
				$("span.fakeheight:eq(1)").text("Сьогодні зареєстровано");
				$("span.fakeheight:eq(2)").text("Претенденти");
				$("span.fakeheight:eq(3)").text("Середній рівень громадян");
				$("span.fakeheight:eq(4)").text("Зараз в грі");
				$("span.fakeheight:eq(5)").text("Мінімальна платня");
				$("a.blue_arrow_small > span ").text("Переглянути");
				$("a.details-small").text("Деталі");
			};
			if (location.indexOf("/country/economy/")!==-1) {
				// economy
				$("h2:exact('Country resources')").text("Ресурси");
				$("h2:exact('Treasury')").text("Скарбниця");
				$("h2:exact('Country trading embargoes')").text("Торгові ембарго");
				$("td:contains('This country can trade with any other country in eRepublik.')").text("Торгові ембарго відсутні.");
				$("h2:exact('Taxes')").text("Податки");
				$(".resource_list > thead > tr > th:eq(0)").text("Ресурс");
				$(".resource_list > thead > tr > th:eq(1)").text("Місцезнаходження");
				$("td > small:exact('Not available')").text("Миші з`їли");
				$("ul.profilemenu > li > a").text("НацБанк");		
			
				$(".resource_list > tbody > tr > td > span:exact('Fish')").text("Риба");
				$(".resource_list > tbody > tr > td > span:exact('Grain')").text("Зерно");
				$(".resource_list > tbody > tr > td > span:exact('Fruits')").text("Фрукти");
				$(".resource_list > tbody > tr > td > span:exact('Cattle')").text("Корови");
				$(".resource_list > tbody > tr > td > span:exact('Deer')").text("Олені");
				$(".resource_list > tbody > tr > td > span:exact('Iron')").text("Сталь");
				$(".resource_list > tbody > tr > td > span:exact('Saltpeter')").text("Сіль");
				$(".resource_list > tbody > tr > td > span:exact('Aluminum')").text("Алюміній");
				$(".resource_list > tbody > tr > td > span:exact('Oil')").text("Нафта");
				$(".resource_list > tbody > tr > td > span:exact('Rubber')").text("Гума");
				
				$("th:exact('Income Tax')").text("Прибутковий податок");
				$("th:exact('Import Tax')").text("Імпортне мито");
				$("th:exact('VAT')").text("ПДВ");
				$("span.fakeheight:exact('Food')").text("Їжа");

 				$("span.fakeheight:exact('Weapons')").text("Зброя");

        $("span.fakeheight:exact('House')").text("Будинки");

        $("span.fakeheight:exact('Moving Tickets')").text("Квитки");

        $("span.fakeheight:exact('Food Raw Material')").text("Зерно");

        $("span.fakeheight:exact('Weapon Raw Material')").text("Залізо");

       $("span.fakeheight:exact('Hospital')").text("Шпиталі");

        $("span.fakeheight:exact('Defense System')").text("Захисні системи");

$("h2:exact('Salary')").text("Мінімальна ЗП");
				$("span.fakeheight:exact('Minimum')").text("Мінімальна");
				$("span.fakeheight:exact('Average')").text("Середня");
				$("h2:exact('Info')").text("Деталі");
				$("h2:exact('Revenues')").text("Надходження");
			};
			//政治選舉
			if (location.indexOf("/country/politics/")!==-1) {
				$("h2:exact('President')").text("Президент");
				$("h2:exact('Congress')").text("Конгрес");
				$("span.vroundbtnh25-core:contains('Election results')").text("Результати виборів");
				$("span.vroundbtnh25-core:contains('Next elections')").text("Наступні вибори");
			};
			//軍事資訊
			if (location.indexOf("/country/military/")!==-1) {
				$("table.info_message > tbody > tr > td").text("Громадяни цієї країни будуть забезпечені 10% бонусом на пошкодження у військовій кампанії проти кровного ворога.");
				$(".nameholder:contains('No current Natural Enemy')").text("Кровні вороги відустні. Нудно")
				$("td:contains('There are no resistance wars in this country.')").text("Повстання відсутні. СБУ працює.")
				var Our = $("div#profileholder > h1").text();
				$("h2.section:eq(0)").text("Війни");
				$("h2.section:eq(1)").html(Our+' бере участь у війні');
				$("h2.section:eq(2)").html(Our+' бере участь у повстанні');
				$("h2.section:eq(3)").text("Союзники");
				
				$("a.vroundbtnh25-core:contains('details')").text("деталі");
				$("a.vroundbtnh25-core:contains('All wars')").text("Всі війни");
				$("a.vroundbtnh25-core:contains('All resistance wars')").text("Всі повстання");
				$("a.vroundbtnh25-core:contains('All Alliances')").text("Всі союзи");
			};
			//管理中心
			if (location.indexOf("/country-administration/")!==-1) {
				$("span:exact('You are not a president or a congress member in this country.')").text('Ви не є Президентом, або членом Конгресу в цій Країні');
				$(".adminaction > .goleft > span.goleft:contains('Hello, Congress Member')").text('Доброго дня, конгресмен!');
				$(".adminaction > .goleft > span.vround-redbtn-h20-start > span.vround-redbtn-h20-end > form > .vround-redbtn-h20-core:contains('Resign')").text('Відставка');
				$(".adminaction > .goright:contains('Your proposals')").replaceText('Your proposals','Ваші пропозиції');
				$(".adminaction > table > tbody > tr > td > span.vround-btn-start-xlarge > span.vround-btn-end-xlarge > input#expandLaw,input#colapseLaw").attr('value','Запропонувати закон');
				
				$(".holder > h2.section:contains('Law proposals')").text('Всі Закони');
				//congressman
				$("a:exact('New Citizen Fee')").text('Побори з емігрантів');
				$("a:exact('Donate')").text('Переведення коштів');
				$("a:exact('Issue Money')").text('Випуск грошей');
				$("a:exact('Taxes')").text('Збільшити податки для бідних');
				$("a:exact('Minimum Wage')").text('Мінімальна заробітна плата');
				$("a:exact('President Impeachment')").text('Імпічмент Президенту');
				$("a:exact('Provide citizenship')").text('國藉審核');
				$("a:exact('Natural Enemy')").text('Кровний Ворог');
				//president
				$("a:exact('Alliance')").text('Віва Тарас! Замутити альянс');
				$("a:exact('Peace Proposal')").text('Віва Тарас! Припинити побиття дітей');
				$("a:exact('Trading Embargo')").text('Віва Тарас! Закрити стихійні ринки');
				$("a:exact('Buy Constructions')").text('Віва Тарас! Побудувати віллу');
				$("a:exact('New Citizen Message')").text('Віва Тарас! Потролити нубів');
				//others
				$("a:contains('Tax change')").replaceText('Tax change:','Податки змінено: ');			$("table.laws.largepadded > tbody > tr > td > span.vroundbtnh25-start > span.vroundbtnh25-end > a.vroundbtnh25-core:contains('details')").text('детальніше');
				$("table.laws.largepadded > tbody > tr > td:exact('Pending')").replaceText('Pending','В очікуванні');
				$("table.laws.largepadded > tbody > tr > td:exact('Accepted')").replaceText('Accepted','Прийнято');
				$("table.laws.largepadded > tbody > tr > td:exact('Rejected')").replaceText('Rejected','Відхилено');
			} else if (location.indexOf("/law/")!==-1) {
				$('h2').css('font-family','Arial,Arial');
				$('.holder > .indent > .bordersep.special').css('font-family','Arial,Arial');
				// law proposals
				$(".holder > .indent > .bordersep.special:contains('Law proposals')").text('Закони');
				// donate
	//			$(".holder:eq(1) > .indent > .goleft > h2.special:first:contains('Donate')").text('Перевести');
	//			$('.holder:eq(1) > .indent > .goleft > p.largepadded').replaceText('Proposed by','Автор:').replaceText(',',', 提案時間:');
	//			$(".holder:eq(1) > .indent > p.largepadded:contains('Do you agree to transfer')").replaceText('Do you agree to transfer','請問你是否同意從國庫中捐贈').replaceText('from the country accounts to','到');
			};
		};
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		// 檢舉 www.erepublik.com/en/tickets/report/
		//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
		if (location.indexOf("/tickets/report/")!==-1) {
			$('h3').css('font-family','Arial,Arial');
			$('div').css('font-family','Arial,Arial');
			// report ticket
			$('body.reportAbuseBody > a.btn-arrow-left-small').text('Скасувати');
			$('body.reportAbuseBody > h3').replaceText('Report ','Поскаржитися на ').replaceText('a newspaper','газету').replaceText('an article','статтю').replaceText('a comment','коментар').replaceText('a wall post','шаут').replaceText('a wall comment','коментар до шауту').replaceText('a party','партію');
			$('form.reportAbuse > div:first').html('Ви збираєтеся поскаржитися на порушення відповідно до <a target="_blank" href="/en/laws">Правил гри</a> та <a target="_blank" href="/en/terms-and-conditions">Умов надання послуг</a>.</br>Всі скарги конфіденційні.')
			$("form.reportAbuse > .reportLabel:contains('Reason for the report')").text('Причина:');
			$("form.reportAbuse > select#report_reason > option[value='6']").text('Вульгарність');
			$("form.reportAbuse > select#report_reason > option[value='7']").text('Образа');
			$("form.reportAbuse > select#report_reason > option[value='8']").text('Українофобія');
			$("form.reportAbuse > select#report_reason > option[value='9']").text('Президент показує груди');
			$("form.reportAbuse > select#report_reason > option[value='10']").text('Спам');
			$("form.reportAbuse > select#report_reason > option[value='11']").text('Зовнішня реклама');
			$("form.reportAbuse > select#report_reason > option[value='16']").text('Тролінг');
			$("form.reportAbuse > .reportMessage:contains('By submitting this report')").html('Представляючи цю скаргу, Ви підтверджуєте, що повторні неправдиві скарги можуть привести до дисциплінарних заходів, що будуть вжиті проти вашого аккаунту.</br> ')
			$("form.reportAbuse > .reportLabel:contains('Language in which the reported content is written')").text('Мова:');
			$("form.reportAbuse > div:last > input[value='Report']").attr('value','Поскаржитися');
		};
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
	// 'economy.erepublik.com
	//-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/
	} else if (host==='economy') {
		if (location.indexOf("/market/")!==-1) {
			// economy.erepublik.com/en/market/
			$('h1').css('font-family','Arial,Arial');
			$('h4').css('font-family','Arial,Arial');
			// market
			$("#marketplace > h1:contains('Marketplace')").text('Ринок');
			$("#filters_expanded > h4:contains('Select product')").text('Оберіть товар');
			$(".product_selector > ul > li > a[title='Food'] > strong").text('Їжа');
			$(".product_selector > ul > li > a[title='Weapons'] > strong").text('Зброя');
			$(".product_selector > ul > li > a[title='House'] > strong").text('Будинки');
			$(".product_selector > ul > li > a[title='Moving Tickets'] > strong").text('Квитки');
			$(".product_selector > ul > li > a[title='Food Raw Materials'] > strong").text('Зерно');
			$(".product_selector > ul > li > a[title='Weapon Raw Materials'] > strong").text('Залізо');
			$(".product_selector > ul > li > a[title='Hospital'] > strong").text('Шпиталі');
			$(".product_selector > ul > li > a[title='Defense System'] > strong").text('Системи захисту');
			$(".product_selector > ul > li.last > a > strong").text('Підприємства');
			$("#filters_expanded > #minReq > h4:contains('Select quality')").text('Оберіть якість');
			$("#filters_summary > .sactual > .sattr > small:exact('Health restore')").text('Відновлення здоров`я');
			$("#filters_summary > .sactual > .sattr > small:exact('Fire Power')").text('Потужність');
			$("#filters_summary > .sactual > .sattr > small:exact('Durability')").text('К-сть пострілів');
			$("#filters_summary > .sactual > .sattr > small:exact('Health')").text('Здоров`я');
			$("#filters_summary > .sactual > .sattr > small:exact('Moving Distance')").text('Відстань подорожі');
			$("#filters_summary > .sactual > .sattr > small:exact('Uses/Player')").text("Кількість разів / кожен гравець");
			$("#filters_summary > .sactual > .sattr > small:exact('Defense Budget')").text("Міць");
			$("#filters_summary > .sactual > .sattr > div > span.solid.health > strong:exact('/ use')").text('/ за раз');
			$("#filters_summary > .sactual > .sattr > div > span.solid.health > strong:exact('/ day')").text('/ день');
			$("#filters_summary > .sactual > .sattr > div > span.solid.durability > strong:exact(' uses')").text(' разів');
			$('#filters_summary > .sactual > .sattr > div > span.solid.durability > strong:exact("use(s)")').text('раз(ів)');
			$('#filters_summary > .sactual > .sattr > div > span.solid.durability > strong:exact("day(s)")').text('днів');
			$('#filters_summary > .sactual > .sattr > div > span.solid.moving_distance > strong:exact("zone(s)")').text('зони');
			$("#filters_summary > .sactual > .schange > a > span:contains('Change')").text('Змінити');
			$("#marketplace > table > thead > tr.m_mainh > th.m_product:contains('Product')").text('Продукт');
			$('#marketplace > table > thead > tr.m_mainh > th.m_provider').text('Продавець');
			$('#marketplace > table > thead > tr.m_mainh > th.m_stock').text('На складі');
			$("#marketplace > table > thead > tr.m_mainh > th.m_price > a[title='Price']").text('Ціна');
			$('#marketplace > table > thead > tr.m_mainh > th.m_quantity').text('К-сть');
			$('#marketplace > table > tbody > tr > td.m_buy > a > span').text('Придбати');
			$("table.info_message > tbody > tr > td:contains('There are no market offers matching you search.')").text('Пропозиції згідно Вашого запиту відсутні.');
			if (location.indexOf("/company/")!==-1) {
				// economy.erepublik.com/en/market/company/
				// company market
				$("#marketplace > h1:contains('Companies for sale')").text("Підприємства на продаж");
				$("#marketplace > div.companies_sale > h4:contains('Select company')").text('Оберіть підприємство');
				$("#marketplace > table > thead > tr.m_mainh > th.m_product:contains('Company')").text('Підприємство');
				$("table.error_message > tbody > tr > td:contains('You can not buy a company in a country for which you do not have citizenship.')").text('Ви можете придбати підприємство лише те, що знаходиться в країні Вашого громадянства .');
				$("table.info_message > tbody > tr > td:contains('There are no companies for sale matching you search.')").text('Пропозиції згідно Вашого запиту відсутні.');
				$("ul.items > li > a:[title='Food'] > img").attr("title","Споживання їжі відновлює ваше здоров'я");
				$("ul.items > li > a:[title='Weapons'] > img").attr("title","Використання зброї збільшує завдавані вами пошкодження");
			} else if (location.indexOf("/job/")!==-1) {
				// economy.erepublik.com/en/market/job/
				// job market
				$("#job_market > h1:contains('Job Market')").text("Центр зайнятості");
				$("table.info_message > tbody > tr > td:contains('You already work for ')").replaceText('You already work for ','Ви вже  працюєте на ').replaceText('. To apply for this job you have to quit your current job.',". Щоб влаштуватися на нове підприємство, Вам необхідно звільнитися з попереднього.");
				$('#job_market > table > thead > tr.jm_mainh > th.jm_company').text('Працедавець');
				$('#job_market > table > thead > tr.jm_mainh > th.jm_industry').text(' ');
				$('#job_market > table > thead > tr.jm_mainh > th.jm_salary > a').text('Платня');
				$('#job_market > table > thead > tr > th.jm_apply > a > span').text('Влаштуватися');
			};
		};
		if (location.indexOf("/company/create")!==-1) {
			// economy.erepublik.com/en/company/create
			$('h1').css('font-family','Arial,Arial');
			$('h3').css('font-family','Arial,Arial');
			// create company
			$('h1:first').text('Заснувати');
			$('.create_building > h3:first').text('Оберіть тип');
			$(".create_links > a[title='Food Raw Materials'] > span").text('Зерно');
			$(".create_links > a[title='Weapon Raw Materials'] > span").text('Залізо');
			$(".create_links > a[title='Factories'] > span").text('Фабрики');
			$(".create_links > a[title='Storage'] > span").text('Склад');
			$(".create_links > a[title='Training grounds'] > span").text('Тренувальні майданчики');
			$('.create_building > h3#second_title').text('Оберіть будівлю');
			$('ul.buildings > li.food:eq(0) > a > strong').text('Зернова ферма');
			$('ul.buildings > li.food:eq(1) > a > strong').text('Фруктовий сад');
			$('ul.buildings > li.food:eq(2) > a > strong').text('Рибальський будиночок');
			$('ul.buildings > li.food:eq(3) > a > strong').text('Корівник');
			$('ul.buildings > li.food:eq(4) > a > strong').text('Мисливський будиночок');
			$('ul.buildings > li.weapon:eq(0) > a > strong').text('Залізна шахта');
			$('ul.buildings > li.weapon:eq(1) > a > strong').text('Нафтова свердловина');
			$('ul.buildings > li.weapon:eq(2) > a > strong').text('Алюмінієва шахта');
			$('ul.buildings > li.weapon:eq(3) > a > strong').text('Шахта селітри');
			$('ul.buildings > li.weapon:eq(4) > a > strong').text('Каучукова плантація');
			$("ul.buildings > li.factories > a > strong:contains('Food')").text('Пекарня');
			$("ul.buildings > li.factories > a > strong:contains('Weapons')").text('Фабрика зброї');
			$("ul.buildings > li.storage > a > strong:contains('Normal')").text('Звичайний склад');
			$("ul.buildings > li.storage > a > strong:contains('Large')").text('Великий склад');
			$('ul.buildings > li.train:eq(0) > a > strong').text('Басейн');	
			$('ul.buildings > li.train:eq(1) > a > strong').text('Перекладина');
			$('ul.buildings > li.train:eq(2) > a > strong').text('Стрільбище');
			$('ul.buildings > li.train:eq(3) > a > strong').text('Полігон');
			$('ul.buildings > li.train > .train_cost').replaceText('train','трен.');
			$('form#companyCreateForm a#construct > span').text('Будувати');
		} else {
			$('h2').css('font-family','Arial,Arial');
			$('h4').css('font-family','Arial,Arial');
			// company profile
			$('#companyOptions > .content_part > .left_part > ul > li > a.edit').html('<img src="http://www.erepublik.com/images/modules/_icons/company_edit_details.png" alt=""> 編輯詳情');
			$("#companyOptions > .content_part > .left_part > ul > li > a:contains('Sell company')").html('<img src="http://www.erepublik.com/images/modules/_icons/company_sell.png" alt=""> 拍賣公司');
			$("#companyOptions > .content_part > .left_part > ul > li > a:contains('Company profile')").html('<img src="http://www.erepublik.com/images/modules/_icons/company_profile.png" alt=""> 公司資料');
			$("#companyOptions > .content_part > .left_part > ul > li > a:contains('Migrate company')").html('<img src="http://www.erepublik.com/images/modules/_icons/company_migrate.png" alt=""> 更改公司類型');
			$("#company_info_panel > .elements > .product_stock > h2:contains('Total food raw material stock')").text('庫存食物原料');
			$("#company_info_panel > .elements > .product_stock > h2:contains('Total weapon raw material stock')").text('庫存武器原料');
			$("#company_info_panel > .elements > .product_stock > h2:contains('Total food stock')").text('庫存食物');
			$("#company_info_panel > .elements > .product_stock > h2:contains('Total weapons stock')").text('庫存武器');
			$("#company_info_panel > .elements > .product_stock > .stats > p:contains('This data is confidential.')").text('相關公司資料保密.');
			$('#company_info_panel > .elements > .finances > h2:first').text('資金額度');
			$('#company_info_panel > .elements > .raw_materials > h2:first').text('產品原料');
			$("#company_info_panel > .elements > .raw_materials > .stats > p:contains('This data is confidential.')").text('相關公司資料保密.');
			$('#company_info_panel > .elements > .raw_materials > .stats > p').replaceText('raw material req. per ','單位原料, 可以生產一單位').replaceText('food','食物.').replaceText('weapon','武器.');
			$('#company_info_panel > .manage_panel > .storage_actions > table > tbody > tr > td > a > span').text('查看倉庫庫存');
			$('#company_info_panel > .manage_panel > .finances_actions > table > tbody > tr > td > a > span').text('查看現金帳戶');
			$('#company_info_panel > .manage_panel > .raw_materials_actions > tbody > tr > td > a > span').text('購買產品原料');
			$('#production_status > table.stats > tbody > tr > td > .employee > big > span:last').text('雇員');
			$('#production_status > table.stats > tbody > tr > td > .employee > .recommended_employees > a.manage_link').text('管理雇員');
			$("table.info_message > tbody > tr > td:contains('You can view your market licences and sell products directly from your')").html('你可以直接檢視及販售自己 <a href="http://www.erepublik.com/en/economy/inventory" rel="noreferrer">倉庫</a> 中的產品.');
			$("table.error_message > tbody > tr > td:contains('This company name is already used by another Erpk entity. Please choose another one.')").text('這個公司名稱已被他人使用, 建議重新選擇其它的名稱.');
			if (location.indexOf("/company/sell/")!==-1) {
				// company sell
				$('.sell_company > h2:first').text('Продаж або закриття підприємства');
				$('.sell_company > .disolve_company > h2:first').text('Закриття підприємства');
				$('.sell_company > .disolve_company > table > tbody > tr > td > p').replaceText('You can dissolve your company for','Ви можете закрити підприємство за');
				$(".sell_company > .disolve_company > table > tbody > tr > td > a[title='Dissolve company'] > span").text('Закрити підприємство');
				$("table.info_message > tbody > tr > td:contains('Raw Material buildings cannot be sold.')").text('Сировинні підприємтсва не можуть бути продані.')
				$("table.info_message > tbody > tr > td:contains('This building cannot be sold nor dissolved.')").text('Підприємство не можете бути продане або закрите.')
				//$("table.info_message > tbody > tr > td:contains('Dissolving a company will empty')").text('解散公司會清空土地上己有的建築物, 然後你可以再建造新的建築在上面.')
				$("table.info_message > tbody > tr > td:contains('This company can be put on sale starting with')").replaceText('This company can be put on sale starting with','Це підприємство може бути поставлене на продаж після').replaceText('of the New World, at',' ').replaceText("(10 days since it was created or bought).","10 днів з часу заснування або купівлі");
			};
		};
	};
};
