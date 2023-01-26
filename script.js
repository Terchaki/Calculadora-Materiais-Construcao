//Funcao Calculo de Tijolao

function resultadoTijolao() {
	
	var MedidaLinear = document.getElementById('MtLinearTijolo').value
	    MedidaLinear = MedidaLinear.replace(",", ".")

	var MedidaAltura = document.getElementById('MtAlturaTijolo').value
	    MedidaAltura = MedidaAltura.replace(",", ".")

	var total = Math.round((MedidaLinear * MedidaAltura) * 23)

	document.getElementById("ResultadoTijolo").innerHTML = ("A quantidade necessária em M² de Tijolos Furados é: " + total)
	document.getElementById("Conclusao").innerHTML = ("Significa que você vai precisar de "+ total + " tijolos para fazer sua construção.")

}

//Funcao Calculo de Blocos e Canaletas

function resultadoCanaleta_Bloco() {
	
	var MedidaLinear = document.getElementById('MtLinearCanaleta_Bloco').value
	    MedidaLinear = MedidaLinear.replace(",", ".")

	var MedidaAltura = document.getElementById('MtAlturaCanaleta_Bloco').value
	    MedidaAltura = MedidaAltura.replace(",", ".")

	var total = Math.round((MedidaLinear * MedidaAltura) * 12.5)

	//document.write(total)

	

	document.getElementById("ResultadoCanaleta_Bloco").innerHTML = ("A quantidade necessária de Blocos ou Canaletas é : " + total)
	document.getElementById("ConclusaoCanaleta_Bloco").innerHTML = ("Significa que você vai precisar de "+ total + " Blocos ou Canaletas para fazer sua construção.")

}

//Funcao Calculo de rendimento da Argamassa

function RendimentoArgamassa() {
	
	var MetQuad = document.getElementById('MtQuad_Argamassa').value
	    MetQuad = MetQuad.replace(",", ".")

	var total = Math.round(MetQuad * 4.5 / 20)


	document.getElementById("ResultadoArgamassa").innerHTML = ("A quantidade necessária de pacotes de Argamasss é : " + total)
	document.getElementById("ConclusaoArgamassa").innerHTML = ("Significa que você vai precisar de "+ total + " pacotes de Argamassa para assentar o piso.")

}

//Funcao Calculo de Brita para esparramar no chão

function RendimentoBrita() {
	
	var MetLarg = document.getElementById('MtLarg_Brita').value
	    MetLarg = MetLarg.replace(",", ".")

	var MetComp = document.getElementById('MtComp_Brita').value
	    MetComp = MetComp.replace(",", ".")


	var ExpBrita = document.getElementById('Expessura_Brita').value
	    ExpBrita = ExpBrita.replace(",", ".")

	var total = Math.round((MetLarg * MetComp) * ExpBrita / 100)


	document.getElementById("ResultadoBrita").innerHTML = ("A quantidade necessária em metros cúbicos de Brita é : " + total)
	document.getElementById("ConclusaoBrita").innerHTML = ("Significa que você vai precisar de "+ total + " metros cúbicos de brita para esparramar no chão.")

}