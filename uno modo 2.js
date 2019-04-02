var cartas,deck=[[],[],[],[]],retirada,x,y,z,w=[[]],lixo=[[]],jogada=[],vez=[0,1,2,3],ftcartas,a,rotacao,xx=[1],yy=xx[1];
//{ inicial
alert("Este é um jogo de UNO. Onde o seu objetivo é não ficar com nenhuma carta.\nHá cartas especiais dentro do UNO como:\n-4+: é uma carta incolor que faz o proximo a jogar comprar 4 cartas, e você escolhe a cor da carta.\n-Bloqueio: bloqueia o proximo a jogar.\n-Reverte: muda o sentido do jogo, se estava indo para o jogador 1 irá para o jogador 3.\n-+2:Faz com que o proximo a jogar compre 2 cartas\n-Coringa:é uma carta incolor que pode ser jogada a qualquer hora, e com ela você escolhe a cor que seguirá.")
cartas=[["0","vermelho"],["1","vermelho"],["2","vermelho"],["3","vermelho"],["4","vermelho"],["5","vermelho"],["6","vermelho"],["7","vermelho"],["8","vermelho"],["9","vermelho"],["0","azul"],["1","azul"],["2","azul"],["3","azul"],["4","azul"],["5","azul"],["6","azul"],["7","azul"],["8","azul"],["9","azul"],["0","amarelo"],["1","amarelo"],["2","amarelo"],["3","amarelo"],["4","amarelo"],["5","amarelo"],["6","amarelo"],["7","amarelo"],["8","amarelo"],["9","amarelo"],["0","verde"],["1","verde"],["2","verde"],["3","verde"],["4","verde"],["5","verde"],["6","verde"],["7","verde"],["8","verde"],["9","verde"],["0","vermelho"],["1","vermelho"],["2","vermelho"],["3","vermelho"],["4","vermelho"],["5","vermelho"],["6","vermelho"],["7","vermelho"],["8","vermelho"],["9","vermelho"],["0","azul"],["1","azul"],["2","azul"],["3","azul"],["4","azul"],["5","azul"],["6","azul"],["7","azul"],["8","azul"],["9","azul"],["0","amarelo"],["1","amarelo"],["2","amarelo"],["3","amarelo"],["4","amarelo"],["5","amarelo"],["6","amarelo"],["7","amarelo"],["8","amarelo"],["9","amarelo"],["0","verde"],["1","verde"],["2","verde"],["3","verde"],["4","verde"],["5","verde"],["6","verde"],["7","verde"],["8","verde"],["9","verde"],["+4","qualquer cor"],["+4","qualquer cor"],["+4","qualquer cor"],["+4","qualquer cor"],["coringa","qualquer cor"],["coringa","qualquer cor"],["coringa","qualquer cor"],["coringa","qualquer cor"],["reverte","vermelho"],["reverte","vermelho"],["reverte","verde"],["reverte","verde"],["reverte","amarelo"],["reverte","amarelo"],["reverte","azul"],["reverte","azul"],["bloqueio","vermelho"],["bloqueio","vermelho"],["bloqueio","verde"],["bloqueio","verde"],["bloqueio","amarelo"],["bloqueio","amarelo"],["bloqueio","azul"],["bloqueio","azul"],["+2","vermelho"],["+2","vermelho"],["+2","verde"],["+2","verde"],["+2","amarelo"],["+2","amarelo"],["+2","azul"],["+2","azul"]];
function retirada (x,y){
	while (x<y.length){
		y[x]=y[++x];
	}
	y.pop();
	return y;
}  
function possibilidade (x,w){//x=cartas do jogador,w ultima carta jogada
	for	(jogada=[],z=0,y=0;z<x.length;z++){
		if	((x[z][0]==w[w.length-1][0])||(x[z][1]==w[w.length-1][1])||(x[z][1]=="qualquer cor")){
			jogada[y]=x[z];
			y++;
		}
	}
	return jogada;
}
function ftcartas(x){
	for	(y=0,z="",w=0;y<x.length;y++,w++){
		z+=w+" - "+x[y]+"\n";
	}
	return z;
}
function rotacao(x){
	z=x[0];
	x[0]=x[1];
	x[1]=x[2];
	x[2]=x[3];
	x[3]=z;
	return x;
}
for	(z=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(z.indexOf(x)==-1){
		z[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
deck[0]=z;
for	(z=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(z.indexOf(x)==-1){
		z[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
deck[1]=z
for	(z=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(z.indexOf(x)==-1){
		z[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
deck[2]=z
for	(z=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(z.indexOf(x)==-1){
		z[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
deck[3]=z
for (y=0,x=Math.floor(Math.random()*cartas.length);y!=1;x=Math.floor(Math.random()*cartas.length)){
	if((cartas[x][1]!="qualquer cor")&&(cartas[x][0]!="+2")&&(cartas[x][0]!="reverte")&&(cartas[x][0]!="bloqueio")){
		lixo[0]=cartas[x];
		cartas=retirada(x,cartas);
		y=1;
	}
}
//}
while	((deck[0].length>0)&&(deck[1].length>0)&&(deck[2].length>0)&&(deck[3].length>0)){
	if	(lixo[lixo.length-1]==yy){lixo=lixo.pop}
	if	(vez[0]==0){
		a=parseInt(prompt("Suas cartas são: \n"+(ftcartas(deck[0]))+"\na ultima carta lançada é: \n"+lixo[lixo.length-1]+"\n\nsuas possibilidades de jogada são(escolha sua jogada pelo numero): \n\n"+ftcartas((possibilidade(deck[0],lixo)))+"\n-1 - comprar\n\nO jogador 1 está com "+deck[1].length+" cartas\nO jogador 2 está com "+deck[2].length+" cartas\nO jogador 3 está com "+deck[3].length+" cartas"));
		if	(a!=-1){
			lixo[lixo.length]=((possibilidade(deck[0],lixo))[a]);
			deck[0]=retirada((deck[0].indexOf((possibilidade(deck[0],lixo))[a])),deck[0]);
			if	(lixo[lixo.length-1][1]=="qualquer cor"){
				a=parseInt(prompt("Informe a cor desejada:\n1 - Vermelho\n2 - Verde\n3 - Azul\n4 - Amarelo"));
				switch (a){
					case 1: lixo[lixo.length-1][1]="vermelho";break;
					case 2: lixo[lixo.length-1][1]="verde";break;
					case 3: lixo[lixo.length-1][1]="azul";break;
					case 4: lixo[lixo.length-1][1]="amarelo";break;
				}	
			}
			if((lixo[lixo.length-1][0])=="bloqueio"){vez=rotacao(vez)}
			if((lixo[lixo.length-1][0])=="+2"){
				for	(y=0,x=Math.floor(Math.random()*cartas.length);y<2;deck[vez[1]].push(cartas[x]),cartas=retirada(x,cartas),x=Math.floor(Math.random()*cartas.length),y++);
				vez=rotacao(vez);
			}
			if((lixo[lixo.length-1][0])=="+4"){
				for	(y=0,x=Math.floor(Math.random()*cartas.length);y<4;deck[vez[1]].push(cartas[x]),cartas=retirada(x,cartas),x=Math.floor(Math.random()*cartas.length),y++);
				vez=rotacao(vez);
			}
			if((lixo[lixo.length-1][0])=="reverte"){vez=vez.reverse()} 
		}
		else{
			x=Math.floor(Math.random()*cartas.length);
			deck[0][deck[0].length]=cartas[x];
			cartas=retirada(x,cartas);
		}
	}
	else{
		if((possibilidade(deck[vez[0]],lixo)).length==0){x=Math.floor(Math.random()*cartas.length);deck[vez[0]][deck[vez[0]].length]=cartas[x];cartas=retirada(x,cartas);alert("O jogador"+vez[0]+" comprou uma carta!")}
		else{
			a=Math.floor(Math.random()*(possibilidade(deck[vez[0]],lixo)).length);
			lixo[lixo.length]=((possibilidade(deck[vez[0]],lixo))[a]);
			deck[vez[0]]=retirada((deck[vez[0]].indexOf((possibilidade(deck[vez[0]],lixo))[a])),deck[vez[0]]);
			if	(lixo[lixo.length-1][1]=="qualquer cor"){
				a=Math.floor(Math.random()*4+1)
				switch (a){
					case 1: lixo[lixo.length-1][1]="vermelho";break;
					case 2: lixo[lixo.length-1][1]="verde";break;
					case 3: lixo[lixo.length-1][1]="azul";break;
					case 4: lixo[lixo.length-1][1]="amarelo";break;
				}	
			}
			if((lixo[lixo.length-1][0])=="bloqueio"){vez=rotacao(vez)}
			if((lixo[lixo.length-1][0])=="+2"){
				for	(y=0,x=Math.floor(Math.random()*cartas.length);y<2;deck[vez[1]].push(cartas[x]),cartas=retirada(x,cartas),x=Math.floor(Math.random()*cartas.length),y++);
				vez=rotacao(vez);
			}
			if((lixo[lixo.length-1][0])=="+4"){
				for	(y=0,x=Math.floor(Math.random()*cartas.length);y<4;deck[vez[1]].push(cartas[x]),cartas=retirada(x,cartas),x=Math.floor(Math.random()*cartas.length),y++);
				vez=rotacao(vez);
			}
			if((lixo[lixo.length-1][0])=="reverte"){vez=vez.reverse()}
			alert("O jogador "+vez[0]+" lançou a carta: "+lixo[lixo.length-1]);
		}
	}
	vez=rotacao(vez);
}