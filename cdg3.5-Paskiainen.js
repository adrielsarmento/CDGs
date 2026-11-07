*/START_Paskiainen.0

GET_STRING-12   /:/ vai dar "hello, world"
  'hello, world'

SHOW_STRING:

----------------------------------------------
VARIAVEIS
----------------------------------------------

*/START_Paskiainen.1

CREATE_XVARX_: nome_da_variável
  1

IF_[nome da variável -->><| 15] ((
  nome_da_variável PUT 10
  WRITING-PUT:
    nome_da_variável PUT.
))

-------------------------------------------------
somatoria
-------------------------------------------------
*/START_Paskiainen.2

CREATE_XVARX: somaPUSH

somaPUSH PUT 10
WRITING-PUT:
  somaPUSH PUT.
