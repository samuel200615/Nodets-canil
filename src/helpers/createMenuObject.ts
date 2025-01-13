// Defina o tipo 'menuOptions' antes de usá-lo
type menuOptions = '' | 'all' | 'dog' | 'cat' | 'fish'

// Função 'createMenuObject' que usa o tipo 'menuOptions'
export const createMenuObject = (activeMenu: menuOptions) => {
  let returnObject = {
    all: false,
    dog: false,
    cat: false,
    fish: false
  }

  if (activeMenu !== '') {
    returnObject[activeMenu] = true
  }
  return returnObject
}