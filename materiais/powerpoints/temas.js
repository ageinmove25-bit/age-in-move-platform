// Conteúdo dos PowerPoints temáticos — sessões de grupo de estimulação cognitiva e motora.
// Cada tema segue a mesma estrutura de sessão (≈ 45–60 min), com visual e conteúdos diferentes.
// Ícones: "fa:Nome" (Font Awesome) ou "gi:Nome" (Game Icons), via react-icons.

module.exports = [
  {
    slug: 'santos-populares', titulo: 'Santos Populares', subtitulo: 'Manjericos, sardinhas e arraiais',
    paleta: { escuro: '1E3A8A', primaria: '2563EB', acento: 'F59E0B', claro: 'EFF6FF', suave: 'DBEAFE', texto: '1E293B', destaque: 'DC2626' },
    fontes: { titulo: 'Bookman Old Style', corpo: 'Arial' }, motivo: 'circle', icone: 'gi:GiPartyFlags',
    orientacao: { lugar: 'Que santo se festeja este mês em Lisboa? E no Porto?' },
    aquecimento: [
      { i: 'gi:GiPartyFlags', t: 'Pendurar bandeirinhas', d: 'Braços ao alto, alternados', n: '× 8' },
      { i: 'fa:FaFish', t: 'Virar a sardinha', d: 'Rodar os pulsos', n: '× 10' },
      { i: 'gi:GiHammerDrop', t: 'Martelinho de São João', d: 'Bater nos joelhos', n: '× 12' },
      { i: 'fa:FaWalking', t: 'Marcha popular', d: 'Marchar sentado', n: '30 s' } ],
    quiz: [
      { p: 'Em que dia se celebra o Santo António, em Lisboa?', o: ['1 de junho', '13 de junho', '24 de junho', '29 de junho'], r: 1 },
      { p: 'No São João do Porto, é tradição bater na cabeça com…', o: ['Um martelinho', 'Uma colher de pau', 'Um leque', 'Uma vassoura'], r: 0 } ],
    intruso: { itens: [ { i: 'fa:FaFish', t: 'Sardinha' }, { i: 'gi:GiFlowerPot', t: 'Manjerico' }, { i: 'fa:FaSnowman', t: 'Boneco de neve' }, { i: 'gi:GiBalloons', t: 'Balões' } ], r: 2, porque: 'O boneco de neve é do inverno; os outros fazem parte dos arraiais de junho.' },
    memoria: { itens: [ { i: 'fa:FaFish', t: 'Sardinha' }, { i: 'gi:GiFlowerPot', t: 'Manjerico' }, { i: 'fa:FaBreadSlice', t: 'Broa' }, { i: 'gi:GiHammerDrop', t: 'Martelinho' }, { i: 'gi:GiBalloons', t: 'Balões' }, { i: 'fa:FaMusic', t: 'Música' } ], falta: 3 },
    proverbios: [ { a: 'Pelo São João, a sardinha pinga no', b: 'pão' }, { a: 'Quem canta seus males', b: 'espanta' }, { a: 'Grão a grão enche a galinha o', b: 'papo' } ],
    sequencia: { titulo: 'Assar sardinhas no arraial', passos: ['Acender o carvão no assador', 'Temperar as sardinhas com sal grosso', 'Assar de um lado e virar', 'Servir sobre uma fatia de broa'], ordemMostrada: [2, 0, 3, 1] },
    movimento: { titulo: 'Arraial em movimento', regras: [ { i: 'fa:FaHandPaper', ouvir: 'um SANTO', fazer: 'Levantar os braços' }, { i: 'fa:FaUtensils', ouvir: 'uma COMIDA', fazer: 'Bater palmas' }, { i: 'fa:FaMusic', ouvir: 'MÚSICA', fazer: 'Bater os pés' } ],
      notas: 'Diga, a um ritmo pausado: Santo António, sardinha, concertina, São Pedro, caldo verde, broa, marcha, São João, bifana, fado, arroz doce, Santo António. Repita mais depressa na segunda volta.' },
    calculo: { titulo: 'Contas no arraial', itens: [ { t: 'Sardinha no pão', p: '2,50 €' }, { t: 'Caldo verde', p: '2,00 €' }, { t: 'Manjerico', p: '4,00 €' }, { t: 'Bifana', p: '3,00 €' } ], perguntas: ['Duas sardinhas no pão e um caldo verde: quanto custa?', 'Pagou o manjerico com uma nota de 10 €. Quanto recebe de troco?'], respostas: '7,00 € · 6,00 €' },
    conversa: { p: 'Como eram as festas de junho na sua terra?', pistas: ['Com quem ia ao arraial?', 'Que música se dançava?', 'Já ofereceu um manjerico?'] }
  },
  {
    slug: 'viagem-por-portugal', titulo: 'Viagem por Portugal', subtitulo: 'Do Minho ao Algarve, sem sair da cadeira',
    paleta: { escuro: '134E4A', primaria: '0F766E', acento: 'F97316', claro: 'F0FDFA', suave: 'CCFBF1', texto: '1F2937', destaque: 'C2410C' },
    fontes: { titulo: 'Cambria', corpo: 'Calibri' }, motivo: 'rounded', icone: 'fa:FaMapMarkerAlt',
    orientacao: { lugar: 'Em que cidade estamos? Em que distrito?' },
    aquecimento: [
      { i: 'fa:FaSuitcase', t: 'Levantar a mala', d: 'Braços à frente, devagar', n: '× 8' },
      { i: 'fa:FaTrain', t: 'Comboio a andar', d: 'Rodar os braços como rodas', n: '× 10' },
      { i: 'fa:FaMountain', t: 'Subir a serra', d: 'Joelhos ao peito, alternados', n: '× 10' },
      { i: 'fa:FaWater', t: 'Ondas do mar', d: 'Inclinar o tronco aos lados', n: '× 8' } ],
    quiz: [
      { p: 'Em que cidade fica a Torre dos Clérigos?', o: ['Braga', 'Porto', 'Coimbra', 'Lisboa'], r: 1 },
      { p: 'Qual é a montanha mais alta de Portugal?', o: ['Serra da Estrela', 'Serra do Gerês', 'Montanha do Pico', 'Serra de Sintra'], r: 2 } ],
    intruso: { itens: [ { i: 'fa:FaLandmark', t: 'Braga' }, { i: 'fa:FaUmbrellaBeach', t: 'Faro' }, { i: 'gi:GiCastle', t: 'Madrid' }, { i: 'fa:FaMonument', t: 'Évora' } ], r: 2, porque: 'Madrid é a capital de Espanha; as outras são cidades portuguesas.' },
    memoria: { itens: [ { i: 'fa:FaSuitcase', t: 'Mala' }, { i: 'fa:FaCamera', t: 'Máquina fotográfica' }, { i: 'fa:FaMap', t: 'Mapa' }, { i: 'fa:FaGlasses', t: 'Óculos de sol' }, { i: 'fa:FaTicketAlt', t: 'Bilhete' }, { i: 'fa:FaUmbrella', t: 'Guarda-chuva' } ], falta: 2 },
    proverbios: [ { a: 'Quem tem boca vai a', b: 'Roma' }, { a: 'Devagar se vai ao', b: 'longe' }, { a: 'Cada terra com seu uso, cada roca com seu', b: 'fuso' } ],
    sequencia: { titulo: 'Uma viagem de comboio', passos: ['Comprar o bilhete na estação', 'Esperar o comboio na plataforma', 'Entrar e procurar o lugar', 'Sair na estação de destino'], ordemMostrada: [3, 1, 0, 2] },
    movimento: { titulo: 'Norte, Sul, Mar ou Serra?', regras: [ { i: 'fa:FaHandPaper', ouvir: 'uma cidade do NORTE', fazer: 'Braços para cima' }, { i: 'fa:FaChild', ouvir: 'uma cidade do SUL', fazer: 'Mãos nos joelhos' }, { i: 'fa:FaWater', ouvir: 'uma praia ou o MAR', fazer: 'Fazer ondas com os braços' } ],
      notas: 'Diga: Braga, Faro, Nazaré, Viana do Castelo, Beja, Figueira da Foz, Bragança, Lagos, Ericeira, Guimarães, Évora, Póvoa de Varzim. Aceite respostas discutíveis e aproveite para conversar sobre as terras.' },
    calculo: { titulo: 'A viagem em números', itens: [ { t: 'Bilhete Lisboa–Porto', p: '25 €' }, { t: 'Almoço', p: '12 €' }, { t: 'Postal', p: '1 €' }, { t: 'Lembrança', p: '8 €' } ], perguntas: ['Quanto custam o bilhete de ida e o de volta?', 'Se levar 70 € e pagar ida, volta e almoço, quanto sobra?'], respostas: '50 € · 8 €' },
    conversa: { p: 'Qual foi a viagem mais bonita da sua vida?', pistas: ['Para onde foi e com quem?', 'Como viajou: carro, comboio, camioneta?', 'Que terra gostava de visitar ainda?'] },
    extraSlide: { titulo: 'Doces e terras', pares: [ ['Ovos moles', 'Aveiro'], ['Pastéis de Belém', 'Lisboa'], ['Queijadas', 'Sintra'], ['Pão de ló', 'Ovar'] ] }
  },
  {
    slug: 'cozinha-da-avo', titulo: 'Na Cozinha da Avó', subtitulo: 'Sabores, cheiros e receitas de família',
    paleta: { escuro: '7C2D12', primaria: 'B45309', acento: '65A30D', claro: 'FFFBEB', suave: 'FEF3C7', texto: '292524', destaque: 'B91C1C' },
    fontes: { titulo: 'Century Schoolbook', corpo: 'Calibri' }, motivo: 'rounded', icone: 'gi:GiCookingPot',
    orientacao: { lugar: 'O que costuma almoçar ao domingo?' },
    aquecimento: [
      { i: 'gi:GiBread', t: 'Amassar o pão', d: 'Abrir e fechar as mãos com força', n: '× 10' },
      { i: 'gi:GiSaucepan', t: 'Mexer a panela', d: 'Círculos grandes com o braço', n: '× 8' },
      { i: 'fa:FaShoppingBasket', t: 'Ir ao mercado', d: 'Marchar sentado com o cesto', n: '30 s' },
      { i: 'gi:GiWheat', t: 'Peneirar a farinha', d: 'Abanar as mãos à frente', n: '× 10' } ],
    quiz: [
      { p: 'Qual é o ingrediente principal do caldo verde?', o: ['Couve-galega', 'Abóbora', 'Feijão-verde', 'Nabiça'], r: 0 },
      { p: 'O que se põe por cima do arroz doce?', o: ['Açúcar em pó', 'Canela', 'Chocolate', 'Coco'], r: 1 } ],
    intruso: { itens: [ { i: 'gi:GiPotato', t: 'Batata' }, { i: 'gi:GiCabbage', t: 'Couve' }, { i: 'fa:FaCarrot', t: 'Cenoura' }, { i: 'gi:GiCakeSlice', t: 'Bolo' } ], r: 3, porque: 'O bolo é um doce; os outros são legumes.' },
    memoria: { itens: [ { i: 'fa:FaEgg', t: 'Ovos' }, { i: 'gi:GiOlive', t: 'Azeite' }, { i: 'gi:GiGarlic', t: 'Alho' }, { i: 'fa:FaLemon', t: 'Limão' }, { i: 'fa:FaCheese', t: 'Queijo' }, { i: 'gi:GiBread', t: 'Pão' } ], falta: 4 },
    proverbios: [ { a: 'Panela velha é que faz comida', b: 'boa' }, { a: 'A cavalo dado não se olha o', b: 'dente' }, { a: 'Quem não tem cão caça com', b: 'gato' } ],
    sequencia: { titulo: 'Fazer caldo verde', passos: ['Descascar as batatas e a cebola', 'Cozer e triturar até ficar um creme', 'Juntar a couve cortada fina', 'Servir com chouriço e um fio de azeite'], ordemMostrada: [2, 3, 0, 1] },
    movimento: { titulo: 'Doce ou salgado?', regras: [ { i: 'gi:GiCakeSlice', ouvir: 'algo DOCE', fazer: 'Mãos na barriga' }, { i: 'fa:FaFish', ouvir: 'algo SALGADO', fazer: 'Mãos nos ombros' }, { i: 'fa:FaMugHot', ouvir: 'uma BEBIDA', fazer: 'Levantar os braços' } ],
      notas: 'Diga: pastel de nata, bacalhau, chá, rissol, leite-creme, café, presunto, aletria, sumo de laranja, sardinha, pão de ló, galão.' },
    calculo: { titulo: 'As compras para o almoço', itens: [ { t: 'Bacalhau (1 kg)', p: '12 €' }, { t: 'Batatas (2 kg)', p: '2 €' }, { t: 'Ovos (dúzia)', p: '3 €' }, { t: 'Azeite (1 L)', p: '8 €' } ], perguntas: ['Quanto custa tudo junto?', 'Se precisar de meia dúzia de ovos, quanto paga?'], respostas: '25 € · 1,50 €' },
    conversa: { p: 'Que prato lhe lembra a sua família?', pistas: ['Quem cozinhava lá em casa?', 'Que cheiro lhe traz memórias?', 'Tem uma receita que ainda sabe de cor?'] }
  },
  {
    slug: 'quatro-estacoes', titulo: 'As Quatro Estações', subtitulo: 'O ritmo do ano à nossa volta',
    paleta: { escuro: '14532D', primaria: '16A34A', acento: 'EAB308', claro: 'F7FEE7', suave: 'DCFCE7', texto: '1C1917', destaque: 'EA580C' },
    fontes: { titulo: 'Cambria', corpo: 'Arial' }, motivo: 'circle', icone: 'gi:GiSunflower',
    orientacao: { lugar: 'Em que estação do ano estamos? Como está o tempo hoje?' },
    aquecimento: [
      { i: 'gi:GiFlowers', t: 'Primavera: flor a abrir', d: 'Abrir os braços devagar', n: '× 8' },
      { i: 'fa:FaSun', t: 'Verão: abanar o leque', d: 'Rodar os pulsos', n: '× 10' },
      { i: 'gi:GiFallingLeaf', t: 'Outono: folhas a cair', d: 'Baixar as mãos a ondular', n: '× 8' },
      { i: 'fa:FaSnowflake', t: 'Inverno: aquecer as mãos', d: 'Esfregar as mãos', n: '20 s' } ],
    quiz: [
      { p: 'Em que estação caem as folhas das árvores?', o: ['Primavera', 'Verão', 'Outono', 'Inverno'], r: 2 },
      { p: 'Em que mês começa o verão?', o: ['Maio', 'Junho', 'Julho', 'Agosto'], r: 1 } ],
    intruso: { itens: [ { i: 'fa:FaSnowflake', t: 'Neve' }, { i: 'fa:FaMitten', t: 'Luvas' }, { i: 'fa:FaIceCream', t: 'Gelado' }, { i: 'fa:FaFire', t: 'Lareira' } ], r: 2, porque: 'O gelado é do verão; os outros lembram o inverno.' },
    memoria: { itens: [ { i: 'fa:FaUmbrella', t: 'Guarda-chuva' }, { i: 'fa:FaSun', t: 'Sol' }, { i: 'gi:GiFallingLeaf', t: 'Folha' }, { i: 'gi:GiButterfly', t: 'Borboleta' }, { i: 'gi:GiPumpkin', t: 'Abóbora' }, { i: 'gi:GiBeachBall', t: 'Bola de praia' } ], falta: 3 },
    proverbios: [ { a: 'Em abril, águas', b: 'mil' }, { a: 'Março, marçagão, de manhã inverno, à tarde', b: 'verão' }, { a: 'Água mole em pedra dura tanto bate até que', b: 'fura' } ],
    sequencia: { titulo: 'A vida de uma árvore ao longo do ano', passos: ['Primavera: nascem flores e folhas novas', 'Verão: dá sombra e fruta madura', 'Outono: as folhas ficam castanhas e caem', 'Inverno: os ramos ficam despidos'], ordemMostrada: [2, 0, 3, 1] },
    movimento: { titulo: 'A que estação pertence?', regras: [ { i: 'fa:FaSun', ouvir: 'algo do VERÃO', fazer: 'Braços abertos ao sol' }, { i: 'fa:FaSnowflake', ouvir: 'algo do INVERNO', fazer: 'Abraçar-se com frio' }, { i: 'gi:GiFlowers', ouvir: 'algo da PRIMAVERA ou OUTONO', fazer: 'Bater palmas' } ],
      notas: 'Diga: praia, castanhas assadas, cachecol, andorinhas, melancia, Natal, vindimas, amendoeiras em flor, chinelos, lareira, cerejas, magusto.' },
    calculo: { titulo: 'Contas da estação', itens: [ { t: 'Dúzia de castanhas', p: '2 €' }, { t: 'Melancia', p: '4 €' }, { t: 'Cerejas (1 kg)', p: '6 €' }, { t: 'Gelado', p: '1,50 €' } ], perguntas: ['Três dúzias de castanhas: quanto custam?', 'Um ano tem 12 meses. Quantos meses tem cada estação?'], respostas: '6 € · 3 meses' },
    conversa: { p: 'Qual é a sua estação preferida? Porquê?', pistas: ['O que fazia no verão quando era jovem?', 'Como se aquecia a casa no inverno?', 'Que fruta da época mais aprecia?'] },
    extraSlide: { titulo: 'Cada mês na sua estação', pares: [ ['Abril', 'Primavera'], ['Agosto', 'Verão'], ['Outubro', 'Outono'], ['Janeiro', 'Inverno'] ] }
  },
  {
    slug: 'musica-e-memorias', titulo: 'Música e Memórias', subtitulo: 'Fado, bailaricos e canções de sempre',
    paleta: { escuro: '3B0764', primaria: '7E22CE', acento: 'EAB308', claro: 'FAF5FF', suave: 'F3E8FF', texto: '1E1B2E', destaque: 'BE185D' },
    fontes: { titulo: 'Bookman Old Style', corpo: 'Calibri' }, motivo: 'circle', icone: 'fa:FaMusic',
    orientacao: { lugar: 'Que música ouviu esta semana? Na rádio ou na televisão?' },
    aquecimento: [
      { i: 'fa:FaDrum', t: 'Tocar tambor', d: 'Bater nas pernas alternadamente', n: '× 16' },
      { i: 'fa:FaGuitar', t: 'Tocar guitarra', d: 'Dedilhar no ar', n: '20 s' },
      { i: 'gi:GiAccordion', t: 'Concertina', d: 'Abrir e fechar os braços', n: '× 8' },
      { i: 'fa:FaMicrophone', t: 'Aquecer a voz', d: 'Dizer A-E-I-O-U bem alto', n: '× 3' } ],
    quiz: [
      { p: 'Que instrumento acompanha tradicionalmente o fado?', o: ['Piano', 'Guitarra portuguesa', 'Violino', 'Acordeão'], r: 1 },
      { p: 'Em que ano o fado foi reconhecido Património da Humanidade pela UNESCO?', o: ['1974', '1998', '2011', '2020'], r: 2 } ],
    intruso: { itens: [ { i: 'fa:FaGuitar', t: 'Guitarra' }, { i: 'gi:GiAccordion', t: 'Concertina' }, { i: 'gi:GiSaucepan', t: 'Frigideira' }, { i: 'gi:GiTambourine', t: 'Pandeireta' } ], r: 2, porque: 'A frigideira é um utensílio de cozinha (embora também já tenha servido de instrumento numa desgarrada!).' },
    memoria: { itens: [ { i: 'fa:FaRecordVinyl', t: 'Disco de vinil' }, { i: 'fa:FaMicrophone', t: 'Microfone' }, { i: 'fa:FaHeadphones', t: 'Auscultadores' }, { i: 'gi:GiTrumpet', t: 'Trompete' }, { i: 'gi:GiGrandPiano', t: 'Piano' }, { i: 'fa:FaTv', t: 'Televisão' } ], falta: 1 },
    proverbios: [ { a: 'Quem canta seus males', b: 'espanta' }, { a: 'Quem conta um conto acrescenta um', b: 'ponto' }, { a: 'Mais vale tarde do que', b: 'nunca' } ],
    sequencia: { titulo: 'Uma noite de fado', passos: ['Chegar à casa de fados e sentar', 'Apagam-se as luzes e faz-se silêncio', 'A fadista canta acompanhada à guitarra', 'O público aplaude no final'], ordemMostrada: [1, 3, 0, 2] },
    movimento: { titulo: 'Ritmo com o corpo', regras: [ { i: 'fa:FaHandPaper', ouvir: '1 batida', fazer: 'Uma palma' }, { i: 'fa:FaWalking', ouvir: '2 batidas', fazer: 'Bater os dois pés' }, { i: 'fa:FaHeart', ouvir: '3 batidas', fazer: 'Mãos ao peito' } ],
      notas: 'Bata na mesa 1, 2 ou 3 vezes de forma imprevisível. Depois toque uma música conhecida (vira, marcha, valsa) e o grupo acompanha com palmas no tempo forte. Termine pedindo que reproduzam pequenos ritmos (● ● ●● ●).' },
    calculo: { titulo: 'Canções em números', itens: [ { t: 'Bilhete de concerto', p: '15 €' }, { t: 'Disco', p: '10 €' }, { t: 'Programa', p: '2 €' }, { t: 'Bebida no intervalo', p: '3 €' } ], perguntas: ['Dois bilhetes de concerto e um programa: quanto custa?', 'Uma canção dura 3 minutos. Quantas canções cabem em meia hora?'], respostas: '32 € · 10 canções' },
    conversa: { p: 'Que música lhe faz lembrar a juventude?', pistas: ['Onde se dançava ao fim de semana?', 'Que cantor ou fadista mais admirava?', 'Há uma canção que ainda sabe de cor? Cante um bocadinho!'] }
  },
  {
    slug: 'natal-em-familia', titulo: 'Natal em Família', subtitulo: 'Tradições, sabores e memórias da quadra',
    paleta: { escuro: '14532D', primaria: 'B91C1C', acento: 'D97706', claro: 'FEF2F2', suave: 'FEE2E2', texto: '1F2937', destaque: '15803D' },
    fontes: { titulo: 'Century Schoolbook', corpo: 'Arial' }, motivo: 'rounded', icone: 'fa:FaTree',
    orientacao: { lugar: 'Quantos dias faltam para o Natal?' },
    aquecimento: [
      { i: 'fa:FaStar', t: 'Pôr a estrela', d: 'Esticar os braços bem alto', n: '× 8' },
      { i: 'fa:FaGift', t: 'Embrulhar presentes', d: 'Rodar as mãos uma à volta da outra', n: '20 s' },
      { i: 'fa:FaBell', t: 'Tocar o sino', d: 'Abanar os braços aos lados', n: '× 10' },
      { i: 'fa:FaSnowflake', t: 'Flocos de neve', d: 'Dedos a "chover" de cima para baixo', n: '× 8' } ],
    quiz: [
      { p: 'O que se come tradicionalmente na Consoada?', o: ['Leitão', 'Bacalhau com couves', 'Sardinhas', 'Cozido'], r: 1 },
      { p: 'Em que dia se celebra o Dia de Reis?', o: ['25 de dezembro', '1 de janeiro', '6 de janeiro', '2 de fevereiro'], r: 2 } ],
    intruso: { itens: [ { i: 'fa:FaBirthdayCake', t: 'Bolo-rei' }, { i: 'fa:FaCookieBite', t: 'Filhoses' }, { i: 'fa:FaIceCream', t: 'Gelado' }, { i: 'gi:GiCakeSlice', t: 'Rabanadas' } ], r: 2, porque: 'O gelado não é um doce tradicional de Natal.' },
    memoria: { itens: [ { i: 'fa:FaTree', t: 'Árvore' }, { i: 'fa:FaGift', t: 'Presente' }, { i: 'fa:FaStar', t: 'Estrela' }, { i: 'gi:GiCandleLight', t: 'Vela' }, { i: 'fa:FaBell', t: 'Sino' }, { i: 'fa:FaCandyCane', t: 'Bengala de açúcar' } ], falta: 3 },
    proverbios: [ { a: 'Natal com os teus, Páscoa com quem', b: 'quiseres' }, { a: 'Mais vale um pássaro na mão do que dois a', b: 'voar' }, { a: 'Os amigos são para as', b: 'ocasiões' } ],
    sequencia: { titulo: 'A noite de Consoada', passos: ['Pôr a mesa com a toalha mais bonita', 'Jantar bacalhau com couves em família', 'Comer os doces: filhoses e rabanadas', 'Abrir os presentes (ou esperar pela manhã!)'], ordemMostrada: [3, 0, 2, 1] },
    movimento: { titulo: 'Preparar a festa', regras: [ { i: 'fa:FaGift', ouvir: 'um PRESENTE', fazer: 'Fingir que abre uma caixa' }, { i: 'fa:FaUtensils', ouvir: 'uma COMIDA de Natal', fazer: 'Esfregar a barriga' }, { i: 'fa:FaTree', ouvir: 'uma DECORAÇÃO', fazer: 'Braços em bico (árvore)' } ],
      notas: 'Diga: bolo-rei, presépio, meias quentes, bacalhau, fita dourada, livro, rabanadas, estrela, perfume, azevinho, polvo, bola de vidro.' },
    calculo: { titulo: 'As compras de Natal', itens: [ { t: 'Bolo-rei', p: '9 €' }, { t: 'Bacalhau (1 kg)', p: '14 €' }, { t: 'Pinhões', p: '5 €' }, { t: 'Postal de Boas Festas', p: '1 €' } ], perguntas: ['Um bolo-rei e um quilo de bacalhau: quanto custa?', 'Quer enviar postais a 8 netos. Quanto gasta?'], respostas: '23 € · 8 €' },
    conversa: { p: 'Como era o Natal quando era criança?', pistas: ['Quem se juntava à mesa?', 'Montava-se presépio ou árvore?', 'Qual foi o presente de que mais gostou?'] }
  }
];
