PennController.ResetPrefix(null); 
PennController.DebugOff();

Sequence ("welcome","tela1","tela2", "treino", "tela3" , randomize("experimento"),SendResults(), "final");

newTrial("welcome",
    defaultText
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Bem-vindx!</p>")
    ,
    newText("<p>Neste experimento, voc&ecirc; vai ler uma frase, ela deve ser lida rapidamente e com aten&ccedil&atildeo. Depois  voc&ecirc deve escolher a melhor op&ccedil;&atildeo de imagem para ela.</p>")
    ,
    
    newText("<p>Por favor, escreva seu NOME COMPLETO na caixa abaixo.</p>")
    ,
    newTextInput("Nome")
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Por favor, escreva seu E-MAIL na caixa abaixo.</p>")

 ,
    newTextInput("Email")
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Escreva sua IDADE na caixa abaixo.</p>")
    .css("font-size","1.2em")
    .print()
    ,
    newTextInput("Idade")
    .css("font-size","1.2em")
    .print()
    ,
    newText("<p>Por favor, escreva seu CURSO na caixa abaixo.</p>")
    ,
     newTextInput("Curso")
    .css("font-size","1.2em")
    .print()
    ,
     newText("<p>Por favor, escreva seu DRE na caixa abaixo.</p>")
     ,
      newTextInput("DRE")
    .css("font-size","1.2em")
    .print()
     ,
    newText("<p>Agora selecione sua ESCOLARIDADE na caixa abaixo e aperte &quot;Start&quot; para come&ccedil;ar!</p>")
    .css("font-size","1.2em")
    .print()
    ,
    newDropDown("Escolaridade", "Selecione sua escolaridade")
        .add("M&eacute;dio completo", "Superior em curso", "Superior completo", "P&oacute;s-gradua&ccedil;&atilde;o")
        .css("font-size","1.2em")
        .print()
        .log()
    ,
    
    newButton("Start")
    .css("font-size","1.2em")
        .print()
        .wait()
    ,
    newVar("ID")
        .global()
        .set( getTextInput("Nome") )
    ,
    newVar("EMAIL")
        .global()
        .set( getTextInput("Email") )
    ,
    newVar("AGE")
        .global()
        .set( getTextInput("Idade") )
        ,
    newVar("CURSO")
        .global()
        .set( getTextInput("Curso") )
    ,
    newVar("DRE")
        .global()
        .set( getTextInput("DRE") )
       ) 
    .log( "ID" , getVar("ID") )
    .log( "EMAIL" , getVar("EMAIL") )
    .log( "AGE" , getVar("AGE") )
    .log( "CURSO" , getVar("CURSO") )
    .log( "DRE" , getVar("DRE") )
    
newTrial("tela1",
defaultText
    .css("font-size","1.2em")
    .print()
    
,
newText("Termo de Consentimento Livre e Esclarecido </p>"),
newText("Esta pesquisa est&aacute sendo desenvolvida pela aluna do curso de mestrado em Lingu&iacutestica da UFRJ Graziele Soares, sob a orienta&ccedil&atildeo do professor Marcus Maia.</p> A finalidade deste trabalho &eacute contribuir com a ci&ecircncia.</p> Solicitamos sua autoriza&ccedil&atildeo para utilizar seus dados em eventos da &aacuterea e publica&ccedil&otildees posteriores.</p> Basta voc&ecirc escrever EU CONCORDO na caixa de texto abaixo. "),
newTextInput("tcle")
.css("font-size","1.2em")
    .print()
    .log()
,
 newButton("Start")
    .css("font-size","1.2em")
        .print()
        .wait()
        )

newTrial("tela2",
defaultText
    .css("font-size","1.2em")
    .print()
    .log
    ,
     newText("<p>Vamos realizar um pequeno treino para voc&ecirc; se familiarizar com o experimento.</p>")
        ,
        newText("<p>INSTRU&Ccedil;&Otilde;ES:</p>")
        ,
        newText("<p> Leia a frase com aten&ccedil;&atilde;o e depois clique no bot&atilde;o &quot;Pr&oacute;ximo&quot; para ver a frase seguinte <strong>A</strong> e <strong>B</strong>.</p>")
        ,
        newText("<p>Leia a frase com  aten&ccedil;&atilde;e clique no bot&atilde;o &quot;Pr&oacute;ximo&quot;  </p>")
        ,
        newText("<p>Aperte &quot;Iniciar&quot; para come&ccedil;ar</p>")
        ,
         newButton("Iniciar")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            )
Template("treino.csv",
 
 variable => newTrial("treino",

 newText("Frase1", variable.Frase1)
 .css("font-size","2.5em")
 .print()
 ,
 newButton("Pr&oacute;ximo")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
            ,
    getText("frase1")
    .remove()
    ,
    
  newText("frase", variable. Frase2)
 .css("font-size","2.5em")
 .print()
 ,
 newButton("Pr&oacute;ximo")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
            ,
    getText("frase2")
    .remove()
    ,
      newText("pergunta", variable.pergunta)
        //newKey("ABCD")
        newSelector()
            .add( getOption("A") , getOption("B") , getOption("C") , getOption("D")  )
            .keys(          "Z"    ,          "M" ,       "C" , "       B"  )
            .log()
            .wait()
            )

    .log("Group", variable.Group)
    .log("Item", variable.Item)
    )
    newTrial("tela3",
    defaultText
    .css("font-size","1.2em")
    .print()
    ,
       newText("<p>Agora que voc&ecirc j&aacute; praticou, vamos iniciar o experimento. </p>")
        ,
        newText("<p>Clique em &quot;Iniciar&quot; quando estiver pronto para come&ccedil;ar.</p>")
        ,
        newButton("Iniciar")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            )
    Template("experimento.csv",
    variable => newTrial("experimento"
    ,
           newText("Frase", variable.Frase1)
 .css("font-size","2.5em")
 .print()
 ,
 
 newButton("Pr&oacute;ximo")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
            ,
    getText("Frase1")
    .remove()
                         
    newText("Frase", variable.Frase2)
 .css("font-size","2.5em")
 .print()
 ,
 newButton("Pr&oacute;ximo")
            .css("font-size","1.2em")
            .print()
            .center()
            .log()
            .wait()
            .remove()
            ,
    getText("Frase2")
    .remove()
    ,
  newText("pergunta", variable.pergunta)
        //newKey("ABCD")
        newSelector()
            .add( getOption("A") , getOption("B") , getOption("C") , getOption("D")  )
            .keys(          "Z"    ,          "M" , "C" , "B"  )
            .log()
            .wait()
            )

    .log("Group", variable.Group)
    .log("Item", variable.Item)
    )
      newText("A",variable.AlternativaA)
     .css("font-size","2.5em")
     .print()
        ,
        newText("B",variable.AlternativaB)
       .css("font-size","2.5em")
       .print()
            ,
     newText("C",variable.AlternativaC)
       .css("font-size","2.5em")
       .print()
,
          newText("D",variable.AlternativaD)
       .css("font-size","2.5em")
       .print()

    .log("Group", variable.Group)
    .log("Item", variable.Item)
    )
        
 newTrial("final"
 ,
    newText ("<p> Obrigada pela participa&ccedil;&atilde;o!</p>")
    .css("font-size","1.2em")
        .print()
        .wait()
        )
        .setOption("countsForProgressBar",false);
        

