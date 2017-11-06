var destiny = $('span.accueilnewstxt1').has('img[src="https://main.judgehype.com/images/divers/ds2.png"]').nextUntil('span.accueilnewstxt1, br.clear').addBack();
destiny.remove();