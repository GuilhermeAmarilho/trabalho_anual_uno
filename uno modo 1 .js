//{ inicial
var cartas,jogador,ia1,ia2,ia3,retirada,x,y,z,w=[[]],lixo=[[]],jogada=[],vez=[0,1,2,3],ftcartas,a,rotacao,h=[[]];
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
for	(jogador=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(jogador.indexOf(x)==-1){
		jogador[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
for	(ia1=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(ia1.indexOf(x)==-1){
		ia1[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
for	(ia2=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(ia2.indexOf(x)==-1){
		ia2[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
for	(ia3=[[],[],[],[],[],[],[]],x=Math.floor(Math.random()*cartas.length),y=0;y<7;x=Math.floor(Math.random()*cartas.length)){
	if(ia3.indexOf(x)==-1){
		ia3[y]=cartas[x];
		y++;
		cartas=retirada(x,cartas);
	}
}
for (y=0,x=Math.floor(Math.random()*cartas.length);y!=1;x=Math.floor(Math.random()*cartas.length)){
	if((cartas[x][1]!="qualquer cor")&&(cartas[x][0]!="+2")&&(cartas[x][0]!="reverte")&&(cartas[x][0]!="bloqueio")){
		lixo[0]=cartas[x];
		cartas=retirada(x,cartas);
		y=1;
	}
}
//}


while	((jogador.length>0)&&(ia1.length>0)&&(ia2.length>0)&&(ia3.length>0)){
	alert(vez[0])
	if(vez[0]==0){
		h=jogador;
		a=parseInt(prompt("Suas cartas são: \n"+(ftcartas(jogador))+"\na ultima carta lançada é: \n"+lixo[lixo.length-1]+"\n\nsuas possibilidades de jogada são(escolha sua jogada pelo numero): \n\n"+ftcartas((possibilidade(jogador,lixo)))+"\n-1 - comprar"));
		if	(a!=-1){
			lixo[lixo.length]=((possibilidade(jogador,lixo))[a]);
			jogador=retirada((jogador.indexOf((possibilidade(jogador,lixo))[a])),jogador);
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
				if	(vez[1]==1){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia1[ia1.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==2){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia2[ia2.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==3){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia3[ia3.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="+4"){
				if	(vez[1]==1){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia1[ia1.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==2){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia2[ia2.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==3){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia3[ia3.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="reverte"){vez=vez.reverse()}
		}
		else{
			x=Math.floor(Math.random()*cartas.length);
			jogador[jogador.length]=cartas[x];
			cartas=retirada(x,cartas);
		}
		alert((ftcartas(jogador))+"\n\n"+(ftcartas(h)))
	}
	alert(vez[0])
	vez=rotacao(vez);
	if(vez[0]==1){
		h=ia1
		
		if((possibilidade(ia1,lixo))==[]){x=Math.floor(Math.random()*cartas.length);ia1[ia1.length]=cartas[x];cartas=retirada(x,cartas);alert("O jogador 1 comprou uma carta!")}
		else{
			a=Math.floor(Math.random()*(possibilidade(ia1,lixo)).length);
			lixo[lixo.length]=((possibilidade(ia1,lixo))[a]);
			ia1=retirada((ia1.indexOf((possibilidade(ia1,lixo))[a])),ia1);
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
				if	(vez[1]==0){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;jogador[jogador.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==2){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia2[ia2.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==3){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia3[ia3.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="+4"){
				if	(vez[1]==0){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;jogador[jogador.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==2){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia2[ia2.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==3){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia3[ia3.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="reverte"){vez=vez.reverse()}
			alert("O jogador 1 lançou a carta: "+lixo[lixo.length-1])
		}
		alert((ftcartas(ia1))+"\n\n"(ftcartas(h)));
	}
	alert(vez[0])
	vez=rotacao(vez);
	if(vez[0]==2){
		h=ia2
		if((possibilidade(ia2,lixo))==[]){x=Math.floor(Math.random()*cartas.length);ia2[ia2.length]=cartas[x];cartas=retirada(x,cartas);alert("O jogador 2 comprou uma carta!")}
		else{
			a=Math.floor(Math.random()*(possibilidade(ia2,lixo)).length);
			lixo[lixo.length]=((possibilidade(ia2,lixo))[a]);
			ia2=retirada((ia2.indexOf((possibilidade(ia1,lixo))[a])),ia2);
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
				if	(vez[1]==0){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;jogador[jogador.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==1){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia1[ia1.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==3){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia3[ia3.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="+4"){
				if	(vez[1]==0){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;jogador[jogador.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==1){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia1[ia1.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==3){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia3[ia3.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="reverte"){vez=vez.reverse()}
			alert("O jogador 2 lançou a carta: "+lixo[lixo.length-1])
		}
		alert((ftcartas(ia2))+"\n\n"+(ftcartas(h)))
	}
	alert(vez[0])
	vez=rotacao(vez);
	if(vez[0]==3){
		h=ia3;
		if((possibilidade(ia3,lixo))==[]){x=Math.floor(Math.random()*cartas.length);ia3[ia3.length]=cartas[x];cartas=retirada(x,cartas);alert("O jogador 3 comprou uma carta!")}
		else{
			a=Math.floor(Math.random()*(possibilidade(ia1,lixo)).length);
			lixo[lixo.length]=((possibilidade(ia3,lixo))[a]);
			ia3=retirada((ia3.indexOf((possibilidade(ia3,lixo))[a])),ia3);
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
				if	(vez[1]==0){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;jogador[jogador.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==2){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia2[ia2.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==1){for(x=Math.floor(Math.random()*cartas.length),y=0;y<2;ia1[ia1.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="+4"){
				if	(vez[1]==0){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;jogador[jogador.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==2){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia2[ia2.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				if	(vez[1]==1){for(x=Math.floor(Math.random()*cartas.length),y=0;y<4;ia1[ia1.length-1]=cartas[x],cartas=retirada(x,cartas),y++){};}
				vez=rotacao(vez)
			}
			if((lixo[lixo.length-1][0])=="reverte"){vez=vez.reverse()}
			alert("O jogador 3 lançou a carta: "+lixo[lixo.length-1])
		}
		alert((ftcartas(ia3))+"\n\n"+(ftcartas(h)))
	}
}


