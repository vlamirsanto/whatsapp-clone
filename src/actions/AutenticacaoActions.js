// Action para modificar o email
export const modificaEmail = ( email ) => {
  return {
    type: 'MODIFICA_EMAIL',
    payload: email
  }
}

// Action para modificar a senha
export const modificaSenha = ( senha ) => {
  return {
    type: 'MODIFICA_SENHA',
    payload: senha
  } 
}

// Action para modificar o nome
export const modificaNome = ( nome ) => {
  return {
    type: 'MODIFICA_NOME',
    payload: nome
  }
}